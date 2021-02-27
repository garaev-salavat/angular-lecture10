import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod3Module } from './mod3/mod3.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [BrowserModule, AppRoutingModule, Mod3Module],
  providers: [],
  bootstrap: [AppComponent],
  exports: [Page404Component],
})
export class AppModule {}
