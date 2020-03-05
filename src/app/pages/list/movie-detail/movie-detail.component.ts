import { Subscription, Observable } from 'rxjs';
import { MovieService } from './../../../services/movie/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  movie$: Observable<Movie>;
  //movieSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.movie$ = this.movieService.getById(
      this.route.snapshot.paramMap.get('movieId')
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // if (this.movieSub) {
    //   this.movieSub.unsubscribe();
    // }
  }

}
