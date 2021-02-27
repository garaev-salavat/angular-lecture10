import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component11Component } from './component11/component11.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
        {
          path: 'comp11', component: Component11Component
        }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class Mod1RoutingModule { }
