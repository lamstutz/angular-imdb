import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-movie',
  templateUrl: './custom-movie.component.html',
  styleUrls: ['./custom-movie.component.scss']
})
export class CustomMovieComponent implements OnInit {



  constructor() { }

  log() {
  }

  send(movie) {
    console.log(movie)
  }

  ngOnInit(): void {

  }

}
