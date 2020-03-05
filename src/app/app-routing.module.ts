import { CustomMovieComponent } from './pages/custom-movie/custom-movie.component';
import { MovieDetailComponent } from './pages/list/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { MovieIdGuard } from './guards/movie-id.guard';


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'custom',
    component: CustomMovieComponent
  },
  {
    path: 'list/:movieId',
    canActivate: [MovieIdGuard],
    loadChildren: () => import('./pages/list/movie-detail/movie-detail.module').then((m) => m.MovieDetailModule)
  },
  {
    path: '**',
    redirectTo: 'list'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
