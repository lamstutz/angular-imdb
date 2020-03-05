import { MovieService } from './../../services/movie/movie.service';
import { Movie } from './../../models/movie.class';
import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    test = 1;
    test1 = 'plop';
    // movies: Movie[] = []
    // moviesSub: Subscription;
    movies$: Observable<Movie[]> = this.movieService.getMoviesByTitle('louis');

    constructor(
        private movieService: MovieService
    ) {
        // this.movieService.getAll().then((movies) => {
        //     this.movies = movies;
        // }).catch((err) => {
        //     console.error(err);
        // });
        // console.log('0 constructor');
        // this.moviesSub = this.movieService.getMoviesByTitle('louis').subscribe(movies => {
        //     this.movies = movies;
        // },
        //     err => console.error(err)
        // )
    }

    onFavorite(isFavorite, movieId) {
        if (isFavorite) {
            console.log(`movie ${movieId} is favorite`);
        } else {
            console.log(`movie ${movieId} is NOT favorite`);

        }
    }

    ngOnChanges() {
        // console.log('1 ngOnChanges')
    }
    ngOnInit() {
        // console.log('2 ngOnInit')
    }
    ngDoCheck() {
        // console.log('3 ngDoCheck')
    }
    ngAfterContentInit() {
        // console.log('4 ngAfterContentInit')
    }
    ngAfterContentChecked() {
        // console.log('5 ngAfterContentChecked')
    }
    ngAfterViewInit() {
        // console.log('6 ngAfterViewInit')
    }
    ngAfterViewChecked() {
        // console.log('7 ngAfterViewChecked')
    }
    ngOnDestroy() {
        // console.log('8 ngOnDestroy')
        // if (this.moviesSub) {
        //     this.moviesSub.unsubscribe();
        // }
    }


}
