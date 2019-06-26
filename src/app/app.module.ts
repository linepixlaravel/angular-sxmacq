import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


import { AppComponent } from './components/core/app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/guest/navbar/navbar.component';
import { LoginComponent } from './components/guest/login/login.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { RequestPasswordResetComponent } from './components/guest/password/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from './components/guest/password/response-password-reset/response-password-reset.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/user/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        RequestPasswordResetComponent,
        ResponsePasswordResetComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        NgbPaginationModule,
        NgbAlertModule,
        AppRoutingModule,
        SnotifyModule,
        FormsModule,
        HttpClientModule,
        AngularFontAwesomeModule,
    ],
    providers: [
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
        SnotifyService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
