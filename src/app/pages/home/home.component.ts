import {Component, Input, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {SwiperComponent} from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, {Navigation} from "swiper";
// install Swiper modules
SwiperCore.use([Navigation]);

import {animate, style, transition, trigger} from "@angular/animations";
import {IParallaxScrollConfig, NgxParallaxScrollModule} from 'ngx-parallax-scroll';
import {jarallax} from "jarallax";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1}))
      ]),
      transition('* => void', [
        animate('300ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class HomeComponent {

  @Input() slides: any[] = [];
  currentSlide = 0;
  navOpen = false;

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.1,
    parallaxSmoothness: -1,

    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 0
  };
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  constructor() {
  }

  open() {
    this.navOpen = !this.navOpen;
  }

  ngOnInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.8,
      imgPosition: "50%20%"
    });
  }


}
