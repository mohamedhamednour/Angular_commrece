import { NgModule ,NO_ERRORS_SCHEMA , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from '../card/card.module'
import { CommonModule } from '@angular/common';
import {PrudactsModule} from '../prudacts/prudacts.module'
import {GetcardsComponent} from '../card/getcards/getcards.component'
import { RouterModule } from '@angular/router';
import { CategorysrondomComponent } from './components/categorysrondom/categorysrondom.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicePageComponent } from './components/service-page/service-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategorysrondomComponent,
    AboutComponent,
    HomeComponent,
    ServicePageComponent,


  ],
  imports: [
    HttpClientModule,
    PrudactsModule,
    CommonModule,
    CardModule,
    RouterModule,CarouselModule



  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CategorysrondomComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class SharedModule { }
