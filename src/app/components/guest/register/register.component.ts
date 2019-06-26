import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/guest/login.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/guest/token.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public form = {
        name: null,
        dob: null,
        sex: null,
        mobile: null,
        email: null,
        password: null,
        password_confirmation: null,
    }

    public error: any;
    constructor(
        private loginService: LoginService,
        private tokenService: TokenService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        this.loginService.signUp(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.tokenService.handle(data.access_token);
        this.router.navigateByUrl('/home');
    }

    handleError(error) {
        this.error = error.error.errors
    }

}
