import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { SlidenavComponent } from '../components/slidenav/slidenav.component';

import { BrowserModule } from '@angular/platform-browser';
import { Home2Component } from '../components/home2/home2.component';

@NgModule({
  declarations: [HomeComponent,
                Home2Component],
  imports: [SharedModule,
            HomeRoutingModule
          ],
})
export class HomeModule {}
