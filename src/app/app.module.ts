import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { FacebookUIComponent } from './facebook-ui/facebook-ui.component';
import { PopoverBtnComponent } from './popover-btn/popover-btn.component';
import { PopoverPanelComponent } from './popover-panel/popover-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    FacebookUIComponent,
    PopoverBtnComponent,
    PopoverPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
