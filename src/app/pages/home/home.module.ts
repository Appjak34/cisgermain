import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {NavHomeComponent} from "./widgets/nav-home/nav-home.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SwiperModule} from "swiper/angular";
import {OfertaComponent} from "./widgets/oferta/oferta.component";
import {NgxParallaxScrollModule} from "ngx-parallax-scroll";
import {AccordionModule} from "./accordion/accordion.module";
import {GalleryModule} from "ng-gallery";
import { OfertaContaComponent } from './widgets/oferta-conta/oferta-conta.component';
import { OfertaEduComponent } from './widgets/oferta-edu/oferta-edu.component';
import { OfertaPosComponent } from './widgets/oferta-pos/oferta-pos.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavHomeComponent,
    OfertaComponent,
    OfertaContaComponent,
    OfertaEduComponent,
    OfertaPosComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    RippleModule,
    SwiperModule,
    NgxParallaxScrollModule,
    AccordionModule,
    GalleryModule
  ],
  exports: [
    OfertaComponent
  ]
})
export class HomeModule {
}
