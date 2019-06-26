import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/guest/login/login.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { RequestPasswordResetComponent } from './components/guest/password/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from './components/guest/password/response-password-reset/response-password-reset.component';
import { HomeComponent } from './components/user/home/home.component';
import { AfterLoginService } from './services/canactivate/after-login.service';
import { BeforeLoginService } from './services/canactivate/before-login.service';

const routes: Routes = [

    // Guest
    { path: 'sign-in', component: LoginComponent, canActivate: [BeforeLoginService] },
    { path: 'sign-up', component: RegisterComponent, canActivate: [BeforeLoginService] },
    { path: 'request-passwrd-reset', component: RequestPasswordResetComponent, canActivate: [BeforeLoginService] },
    { path: 'response-passwrd-reset', component: ResponsePasswordResetComponent, canActivate: [BeforeLoginService] },

    // User 
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AfterLoginService] }
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
