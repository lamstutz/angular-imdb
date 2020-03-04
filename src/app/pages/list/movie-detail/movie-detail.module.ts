import { MovieDetailComponent } from './movie-detail.component';
import { NgModule } from '@angular/core';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule
  ],
  providers: [],
})
export class MovieDetailModule { }
