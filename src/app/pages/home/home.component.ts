import {Component, Input, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {SwiperComponent} from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, {Navigation, Swiper, Autoplay} from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
import {animate, style, transition, trigger} from "@angular/animations";
import {IParallaxScrollConfig, NgxParallaxScrollModule} from 'ngx-parallax-scroll';
import {jarallax} from "jarallax";
import {GalleryItem, ImageItem} from "ng-gallery";
// @ts-ignore
import  AOS from "aos";

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
  collapsing = true;

  images: GalleryItem[] = [];

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.1,
    parallaxSmoothness: -1,

    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 0
  };

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
    this.open();
  }

  constructor() {
  }

  open() {
    this.navOpen = !this.navOpen;
  }

  ngOnInit() {
    AOS.init();

    this.images = [
      new ImageItem({src: 'assets/galeria/1.jpeg', thumb: 'assets/galeria/1.jpeg'}),
      new ImageItem({src: 'assets/galeria/2.jpeg', thumb: 'assets/galeria/2.jpeg'}),
      new ImageItem({src: 'assets/galeria/3.jpeg', thumb: 'assets/galeria/3.jpeg'}),
      new ImageItem({src: 'assets/galeria/4.jpeg', thumb: 'assets/galeria/4.jpeg'}),
      new ImageItem({src: 'assets/galeria/5.jpeg', thumb: 'assets/galeria/5.jpeg'}),
      new ImageItem({src: 'assets/galeria/6.jpeg', thumb: 'assets/galeria/6.jpeg'}),
      new ImageItem({src: 'assets/galeria/7.jpeg', thumb: 'assets/galeria/7.jpeg'}),
      new ImageItem({src: 'assets/galeria/8.jpeg', thumb: 'assets/galeria/8.jpeg'}),
      new ImageItem({src: 'assets/galeria/9.jpeg', thumb: 'assets/galeria/9.jpeg'}),
      new ImageItem({src: 'assets/galeria/10_img.jpg', thumb: 'assets/galeria/10_img.jpg'}),
      new ImageItem({src: 'assets/galeria/11_img.jpg', thumb: 'assets/galeria/11_img.jpg'}),
      new ImageItem({src: 'assets/galeria/12.jpeg', thumb: 'assets/galeria/12.jpeg'}),
      new ImageItem({src: 'assets/galeria/13_img.jpg', thumb: 'assets/galeria/13_img.jpg'}),
      new ImageItem({src: 'assets/galeria/14.jpeg', thumb: 'assets/galeria/14.jpeg'}),
      new ImageItem({src: 'assets/galeria/15.jpeg', thumb: 'assets/galeria/15.jpeg'}),
      new ImageItem({src: 'assets/galeria/16.jpeg', thumb: 'assets/galeria/16.jpeg'}),
      new ImageItem({src: 'assets/galeria/17.jpeg', thumb: 'assets/galeria/17.jpeg'}),
      new ImageItem({src: 'assets/galeria/18.jpeg', thumb: 'assets/galeria/18.jpeg'}),
      new ImageItem({src: 'assets/galeria/19.jpeg', thumb: 'assets/galeria/19.jpeg'}),
      new ImageItem({src: 'assets/galeria/20.jpeg', thumb: 'assets/galeria/20.jpeg'}),
      new ImageItem({src: 'assets/galeria/21.jpeg', thumb: 'assets/galeria/21.jpeg'}),
      new ImageItem({src: 'assets/galeria/22.jpeg', thumb: 'assets/galeria/22.jpeg'}),
      new ImageItem({src: 'assets/galeria/23.jpeg', thumb: 'assets/galeria/23.jpeg'}),
      new ImageItem({src: 'assets/galeria/24.jpeg', thumb: 'assets/galeria/24.jpeg'}),


    ];
  }


}
