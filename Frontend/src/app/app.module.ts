import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertsComponent} from './alerts/alerts.component';
import { ImageViewComponent } from './image-view/image-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
