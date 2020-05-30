import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DisplaybookComponent } from './Component/displaybook/displaybook.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { BooksearchpipePipe } from './Pipe/booksearchpipe.pipe';
import { CartComponent } from './Component/cart/cart.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { OrdergreetingComponent } from './Component/ordergreeting/ordergreeting.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './Component/auth/login/login.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { LoaderComponent } from './Component/loader/loader.component';
import { RegisterComponent } from './Component/auth/register/register.component';
import { ForgetPasswordComponent } from './Component/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/auth/reset-password/reset-password.component';
import { BooksComponent } from './Component/seller/books/books.component';
import { AddbookComponent } from './Component/seller/books/addbook/addbook.component';
import { ViewbookComponent } from './Component/seller/books/viewbook/viewbook.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    DisplaybookComponent,
    BooksearchpipePipe,
    CartComponent,
    OrdergreetingComponent,
    LoginComponent,
    PagenotfoundComponent,
    LoaderComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
  ],
  imports: [
    MatBadgeModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],

})
export class AppModule { }
