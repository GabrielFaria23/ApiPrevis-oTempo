import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
  ]
})
export class HomeModule { }
