import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- 이 부분 추가
import { HttpClientModule } from '@angular/common/http'; // 이 부분을 추가해주세요

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { SuccessComponent } from './success/success.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
