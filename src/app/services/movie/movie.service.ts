import { Observable } from 'rxjs';
import { Movie } from './../../models/movie.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<Movie> {

    return this.http.get('http://www.omdbapi.com', {
      params: {
        apikey: '172d5c07',
        i: id
      }
    }).pipe(map((movieDb: any) => {
      return new Movie(movieDb.imdbID, movieDb.Title)
    }))
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.movies.find(movie => movie.id === id));
    //   }, 3000);
    // })
  }


  getMoviesByTitle(title: string): Observable<Movie[]> {
    return this.http.get('http://www.omdbapi.com', {
      params: {
        apikey: '172d5c07',
        s: title
      }
    }).pipe(
      map((searchResult: any) => {
        if (searchResult.Search) {
          return searchResult.Search.map(movieResult => {
            return new Movie(movieResult.imdbID, movieResult.Title)
          })
        } else {
          return [];
        }
      })
    )
  }

  // getAll(): Promise<Movie[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.movies);
  //     }, 3000);
  //   })
  // }
}
