import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { VoyellesPipe } from './pipes/custom.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { ColorDirective } from './directives/color.directive';
import { MovieDetailComponent } from './pages/list/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    VoyellesPipe,
    MovieComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
