import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { VoyellesPipe } from './pipes/custom.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { ColorDirective } from './directives/color.directive';
import { MovieDetailComponent } from './pages/list/movie-detail/movie-detail.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    VoyellesPipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
