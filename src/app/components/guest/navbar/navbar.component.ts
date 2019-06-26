import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/guest/auth.service';
import { TokenService } from 'src/app/services/guest/token.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public isCollapsed = true;
    public loggedIn: boolean;
    constructor(
        private authService: AuthService,
        private tokenService: TokenService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.authStatus.subscribe(value => this.loggedIn = value);
    }

    logout(event: MouseEvent) {
        event.preventDefault();
        this.authService.changeAuthStatus(false);
        this.tokenService.remove();
        this.router.navigateByUrl('/sign-in');
    }
}
