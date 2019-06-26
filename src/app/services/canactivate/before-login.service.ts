import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../guest/token.service';

@Injectable({
    providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.tokenService.loggedIn()) {
            return !this.tokenService.loggedIn();
        }
        else {
            this.router.navigateByUrl('/home')
        }
    }
    constructor(
        private tokenService: TokenService,
        private router: Router,
    ) { }
}
