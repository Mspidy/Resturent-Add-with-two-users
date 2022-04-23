import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';

import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from "primeng/badge";
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpComponent,
    AdminPageComponent,
    CustomerPageComponent
  ],
  imports: [
    BrowserModule,
    BadgeModule,
    ToastModule,
    CheckboxModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    RatingModule,
    RouterModule,
    TableModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
