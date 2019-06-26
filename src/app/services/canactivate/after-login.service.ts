import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../guest/token.service';

@Injectable({
    providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.tokenService.loggedIn()) {
            return this.tokenService.loggedIn();
        }
        else {
            this.router.navigateByUrl('/sign-in')
        }
    }
    constructor(
        private tokenService: TokenService,
        private router: Router,
    ) { }

}
