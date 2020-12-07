import {AfterViewInit, Component, ViewChild} from '@angular/core';

declare let canvas: any;
declare let earthCanvas: any;
declare let Clock: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
    @ViewChild('fireworkcontainer', {static: false}) container;
    @ViewChild('earthcontainer', {static: false}) earthContainer;
    @ViewChild('clockcontainer', {static: false}) clockContainer;
    @ViewChild('clockcontainer1', {static: false}) clockContainer1;
    @ViewChild('heartcontainer', {static: false}) heartContainer;
    slideOpts = {
        autoHeight: true,
        spaceBetween: 10,
        preloadImages: true
    };
    scrollPos = 0;

    constructor() {

    }

    ngAfterViewInit() {
        this.container.nativeElement.appendChild(canvas);
        this.earthContainer.nativeElement.appendChild(earthCanvas);
        const deadline = new Date('12-11-2019 12:00:00 pm');
        const c = new Clock(deadline, () => {
            alert('countdown complete');
        });
        this.clockContainer.nativeElement.appendChild(c.el);
        const deadline1 = new Date('12-8-2019 9:00:00 am');
        const c1 = new Clock(deadline1, () => {
            alert('countdown complete');
        });
        if (this.clockContainer1) {
            this.clockContainer1.nativeElement.appendChild(c1.el);
        }
    }

    spawnHeart(e) {
        if (e.target.localName !== 'canvas') {
            const heart = document.createElement('img');
            const ring = document.createElement('div');
            heart.src = 'assets/img/heart.png';
            heart.className = 'animHeart';
            ring.className = 'heartRing';
            ring.style.top = (e.pageY + this.scrollPos) + 'px';
            ring.style.left = e.pageX + 'px';
            heart.style.top = (e.pageY + this.scrollPos) + 'px';
            heart.style.left = e.pageX + 'px';
            this.heartContainer.el.appendChild(ring);
            this.heartContainer.el.appendChild(heart);
        }
        console.log(e);
        console.log(this.heartContainer);
    }

    onScroll(e) {
        this.scrollPos = e.detail.scrollTop;
    }
}
