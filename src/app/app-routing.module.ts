import { ForgetPasswordComponent } from './Component/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/auth/reset-password/reset-password.component';
import { RegisterComponent } from './Component/auth/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { DisplaybookComponent } from './Component/displaybook/displaybook.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrdergreetingComponent } from './Component/ordergreeting/ordergreeting.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { LoginComponent } from './Component/auth/login/login.component';
import {BooksComponent} from './Component/seller/books/books.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Displaybook',
    pathMatch: 'full'
  },
  {path: '', component: DisplaybookComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'Displaybook', component: DisplaybookComponent},
  {path: 'cart', component: CartComponent},
  {path: 'greeting', component: OrdergreetingComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'seller/books', component: BooksComponent},


  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
