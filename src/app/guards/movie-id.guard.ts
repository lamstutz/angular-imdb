import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieIdGuard implements CanActivate {

  constructor(
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ID_REGEX = /^tt\d{7}$/;
    if (ID_REGEX.test(next.paramMap.get('movieId'))) {
      return true;
    } else {
      return this.router.parseUrl('/list/errors/404?count=3&price=590');
    }
  }
}
