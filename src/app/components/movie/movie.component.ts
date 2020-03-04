import { Movie } from './../../models/movie.class';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input('myMovie') public movie: Movie;

  @Output('favorite') public onFavorite = new EventEmitter<boolean>()

  constructor() {
    // console.log('movie in constructor : ', this.movie);
  }

  ngOnInit(): void {
    // console.log('movie in ngOnInit : ', this.movie);
  }

  onFavoriteButtonClick() {
    this.onFavorite.emit(true);
  }
  onNotFavoriteButtonClick() {
    this.onFavorite.emit(false);
  }

}
