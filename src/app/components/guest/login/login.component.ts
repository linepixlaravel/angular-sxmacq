import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/guest/login.service';
import { TokenService } from 'src/app/services/guest/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/guest/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form = {
        email: null,
        password: null,
    }

    public error: null;
    constructor(
        private loginService: LoginService,
        private tokenService: TokenService,
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        this.loginService.signIn(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handelError(error),
        );
    }

    handelError(error) {
        this.error = error.error.error
    }

    handleResponse(data) {
        this.tokenService.handle(data.access_token);
        this.authService.changeAuthStatus(true);
        this.router.navigateByUrl('/home');
    }

}
