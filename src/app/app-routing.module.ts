import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { SellerComponent } from './Component/seller/seller/seller.component';
import { AdminComponent } from './Component/admin/admin/admin.component';
import { RegistrationComponent } from './Component/auth/registration/registration.component';
import { LoginComponentComponent } from './Component/auth/login-component/login-component.component';
import { ForgetPasswordComponent } from './Component/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/auth/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { DisplaybookComponent } from './Component/displaybook/displaybook.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrdergreetingComponent } from './Component/ordergreeting/ordergreeting.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import {BooksComponent} from './Component/seller/books/books.component';
import { HeaderComponent } from './Component/header/header.component';





const routes: Routes = [
  {
    path: '', redirectTo: 'books',
    pathMatch: 'full'
  },
  
  {path: 'books', component: DashboardComponent},
  {path: 'Displaybook', component: DisplaybookComponent},
  {path: 'cart', component: CartComponent},
  {path: 'greeting', component: OrdergreetingComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},

  {path: 'login', component: LoginComponentComponent},
  // {path: 'register', component: RegisterComponent},
  {path: 'seller/books', component: BooksComponent},


  {path: 'login', component: LoginComponentComponent},
  {path: 'seller', component: SellerComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegistrationComponent},

  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
