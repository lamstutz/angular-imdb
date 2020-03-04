import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';


@NgModule({
    declarations: [
        MovieComponent
    ],
    exports: [
        MovieComponent
    ]
})
export class ComponentsModule { }
