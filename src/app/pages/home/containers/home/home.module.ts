import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { ComponentsModule } from 'src/app/shared/components/components.module';
import { homeReducer } from '../../state/home.reducer';
import { HomeEffects } from '../../state/home.effects';
import { CurrentWeatherComponent } from '../../components/current-weather/current-weather.component';
import { DetailedWeatherComponent } from 'src/app/shared/components/detailed-weather/detailed-weather.component';

@NgModule({
  declarations: [HomePage, CurrentWeatherComponent, DetailedWeatherComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ]
})
export class HomeModule { }
