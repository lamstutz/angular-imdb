import { Movie } from './../../models/movie.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies = [
    new Movie(
      'tt0000001',
      'spider-man'
    ),
    new Movie(
      'tt0000002',
      'spider-man 2'
    ),
    new Movie(
      'tt0000003',
      'spider-man 3'
    ),
    new Movie(
      'tt0000004',
      'spider-man 1 remake'
    ),
    new Movie(
      'tt0000005',
      'spider-man 1 reremake'
    ),
  ];
  constructor() { }

  getById(id: string): Promise<Movie> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movies.find(movie => movie.id === id));
      }, 3000);
    })
  }

  getAll(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movies);
      }, 3000);
    })
  }
}
