import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './shared/state/app.reducer';
import { CustomRouterSerializer } from './shared/state/router/router.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesTypeaheadComponent } from './shared/components/cities-typeahead/cities-typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BookmarksModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}