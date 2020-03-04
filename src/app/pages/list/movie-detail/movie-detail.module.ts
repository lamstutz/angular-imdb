import { MovieDetailComponent } from './movie-detail.component';
import { NgModule } from '@angular/core';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    ComponentsModule
  ],
  providers: [],
})
export class MovieDetailModule { }
