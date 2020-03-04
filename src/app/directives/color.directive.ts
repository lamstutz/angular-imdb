import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';
import { MovieComponent } from '../components/movie/movie.component';

@Directive({
  selector: 'div'
})
export class ColorDirective implements OnInit {

  @Input('appColor') public defaultColor: string;

  constructor(
    private el: ElementRef<HTMLElement>
  ) { }

  // ngOnChanges(param) {
  //   console.log(param);
  // }

  ngOnInit() {
    if (this.defaultColor) {
      this.setColorOnElement(this.defaultColor);
    }
  }

  @HostListener('click', ["$event"]) onClick(event: Event) {
    // event.stopPropagation();
    this.setColorOnElement(this.getRandomColor());
  }

  setColorOnElement(color: string) {
    this.el.nativeElement.style.color = color;
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
