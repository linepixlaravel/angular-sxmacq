import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-response-password-reset',
    templateUrl: './response-password-reset.component.html',
    styleUrls: ['./response-password-reset.component.css']
})
export class ResponsePasswordResetComponent implements OnInit {

    public form = {
        email: null,
        password: null,
        password_confirmation: null,
        token: null,
    }
    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.form);
    }

}
