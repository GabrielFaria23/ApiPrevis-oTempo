import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from './containers/details/details.page';
import { RouterModule } from '@angular/router';
import { DetailsGuard } from './services/details.guard';



@NgModule({
  declarations: [DetailsPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DetailsPage, canActivate: [DetailsGuard]},
    ]),
  ],
  providers: [
    DetailsGuard,
  ]
})
export class DetailsModule { }
