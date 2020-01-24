import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ApiServiceService } from './api-service.service';
import { ApiComponentComponent } from './api-component/api-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiServiceService,
    AppComponent
  ],
  bootstrap: [
    AppComponent,
    ApiComponentComponent
  ]
})
export class AppModule { }
