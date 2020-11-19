import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from './containers/details/details.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DetailsPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DetailsPage}
    ])
  ]
})
export class DetailsModule { }
