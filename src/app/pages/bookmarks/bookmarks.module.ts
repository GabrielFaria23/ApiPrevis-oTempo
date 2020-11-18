import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './bookmarks.page';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [BookmarksPage],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer)
  ]
})
export class BookmarksModule { }
