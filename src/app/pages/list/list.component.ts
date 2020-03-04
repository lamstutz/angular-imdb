import { Movie } from './../../models/movie.class';
import { Component } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    test = 1;
    test1 = 'plop';
    movies: Movie[] = [];

    constructor() {
        // console.log('0 constructor');
        setInterval(() => {
            this.test++;
            this.movies.push(
                new Movie(
                    'tt000000' + this.test.toString(),
                    `movie ${this.test}!`
                )
            )
        }, 2000);
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
    }


}
