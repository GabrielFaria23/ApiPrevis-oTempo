import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/containers/home/home.module';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CurrentWeatherComponent } from './pages/home/components/current-weather/current-weather.component';
import { DetailedWeatherComponent } from './shared/components/detailed-weather/detailed-weather.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    BookmarksModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
