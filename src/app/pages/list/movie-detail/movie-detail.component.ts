import { MovieService } from './../../../services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.movieService.getById(
      this.route.snapshot.paramMap.get('movieId')
    ).then((movie) => {
      this.movie = movie;
    }).catch(err => console.error(err));
  }

  ngOnInit(): void {
  }

}
