import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { Mod11Component } from './mod11.component';
import { Mod1RoutingModule } from './mod1-routing.module';
import { Component11Component } from './component11/component11.component';



@NgModule({
  declarations: [Mod1Component, Mod11Component, Component11Component],
  imports: [
    CommonModule,
    Mod1RoutingModule
  ],
  exports: [Mod1Component, Mod11Component, Component11Component]
})
export class Mod1Module { }
