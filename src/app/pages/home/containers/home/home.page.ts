import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as fromHomeAction from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
import * as fromBookmarksSelectors from '../../../bookmarks/state/bookmarks.selectors';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { CityTypeaheadItem } from 'src/app/shared/models/city-typeahead-item.model';

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy{

  cityWeather$: Observable<CityWeather>;
  cityWeather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;
  text: string;

  searchControl: FormControl;
  searchControlWithAutoComplete: FormControl;

  bookmarksList$: Observable<Bookmark[]>;
  isCurrentFavorite$: Observable<boolean>;

  private componentDestoyed$ = new Subject();

  constructor(private store: Store) { }

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);
    this.searchControlWithAutoComplete = new FormControl(undefined);

    this.searchControlWithAutoComplete.valueChanges
      .pipe(takeUntil(this.componentDestoyed$))
      .subscribe((value: CityTypeaheadItem) => {
        if(value) {
          this.store.dispatch(fromHomeAction.loadCurrentWeatherById({id: value.geonameid.toString()}));
        }
      });

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    this.cityWeather$
        .pipe(takeUntil(this.componentDestoyed$))
        .subscribe(value => this.cityWeather = value);
    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

    this.bookmarksList$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));

    this.isCurrentFavorite$ = combineLatest([this.cityWeather$, this.bookmarksList$])
      .pipe(
        map(([current, bookmarksList]) => {
          if(!!current) {
            return bookmarksList.some(bookmark => bookmark.id === current.city.id);
          }

          return false;
        }),
      );
  }

  ngOnDestroy() {
    this.componentDestoyed$.next();
    this.componentDestoyed$.unsubscribe();
    this.store.dispatch(fromHomeAction.clearHomeState());
  }

  doSearch(){
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeAction.loadCurrentWeather({ query }));
  }

  onToggleBookmark(){
    const bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;
    this.store.dispatch(fromHomeAction.toggleBookmark({entity: bookmark}));
  }

}
