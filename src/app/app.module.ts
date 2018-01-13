import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { productDataService } from './product.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { ChairComponent } from './chair/chair.component';
import { BedComponent } from './bed/bed.component';
import { CupboardComponent } from './cupboard/cupboard.component';
import { MatressComponent } from './matress/matress.component';
import { PillowComponent } from './pillow/pillow.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';

const appRoutes: Routes=[
  { path: '' , component: TableComponent },
  { path: 'Bed' , component: BedComponent },
  { path: 'Pillow' , component: PillowComponent },
  { path: 'Chair' , component: ChairComponent },
  { path: 'Cupboard' , component: CupboardComponent },
  { path: 'Matress' , component: MatressComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ChairComponent,
    BedComponent,
    CupboardComponent,
    MatressComponent,
    PillowComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [productDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
