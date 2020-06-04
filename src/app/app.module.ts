import { HeaderComponent } from './Component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
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
<<<<<<< HEAD
import { LoginComponent } from './Component/auth/login/login.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { LoaderComponent } from './Component/loader/loader.component';
import { RegisterComponent } from './Component/auth/register/register.component';
import { ForgetPasswordComponent } from './Component/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/auth/reset-password/reset-password.component';
import { BooksComponent } from './Component/seller/books/books.component';
import { AddbookComponent } from './Component/seller/books/addbook/addbook.component';
import { ViewbookComponent } from './Component/seller/books/viewbook/viewbook.component';
=======
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ForgetPasswordComponent } from './Component/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/auth/reset-password/reset-password.component';
import { AdminComponent } from './Component/admin/admin/admin.component';
import { SpineerComponent } from './Component/spineer/spineer.component';
import { LoginComponentComponent } from './Component/auth/login-component/login-component.component';
import { RegistrationComponent } from './Component/auth/registration/registration.component';
import { SellerComponent } from './Component/seller/seller/seller.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { SidenavbarComponent } from './Component/sidenavbar/sidenavbar.component';

import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';
import { AddbookComponent } from './Component/addbook/addbook.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateBookComponent } from './Component/update-book/update-book.component';
import {NgxPaginationModule} from 'ngx-pagination';
>>>>>>> 2e70d90243b629f93d4ac4f28108b2ed09d55e4c


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DisplaybookComponent,
    BooksearchpipePipe,
    CartComponent,
    OrdergreetingComponent,
    PagenotfoundComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
<<<<<<< HEAD
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
=======
    AdminComponent,
    SpineerComponent,
    LoginComponentComponent,
    RegistrationComponent,
    SellerComponent,
    FooterComponent,
    DashboardComponent,
    SidenavbarComponent,
    HeaderComponent,
    AddbookComponent,
    UpdateBookComponent
>>>>>>> 2e70d90243b629f93d4ac4f28108b2ed09d55e4c
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
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],

})
export class AppModule { }
