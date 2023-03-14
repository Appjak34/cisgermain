import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {NavHomeComponent} from "./widgets/nav-home/nav-home.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SwiperModule} from "swiper/angular";
import {OfertaComponent} from "./widgets/oferta/oferta.component";
import {NgxParallaxScrollModule} from "ngx-parallax-scroll";


@NgModule({
  declarations: [
    HomeComponent,
    NavHomeComponent,
    OfertaComponent,
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ButtonModule,
        RippleModule,
        SwiperModule,
        NgxParallaxScrollModule,
    ],
  exports:[
    OfertaComponent
  ]
})
export class HomeModule { }
