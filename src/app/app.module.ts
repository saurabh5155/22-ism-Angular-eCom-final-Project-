import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/session/signup/signup.component';
import { LoginComponent } from './component/session/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {KeyFilterModule} from 'primeng/keyfilter';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';
import { HeaderAdminComponent } from './component/admin/temp/header-admin/header-admin.component';
import { SidebarAdminComponent } from './component/admin/temp/sidebar-admin/sidebar-admin.component';
import { HomeAdminComponent } from './component/admin/temp/home-admin/home-admin.component';
import { HeaderUserComponent } from './component/User/temp/header-user/header-user.component';

import { SidebarUserComponent } from './component/User/temp/sidebar-user/sidebar-user.component';
import { HomeUserComponent } from './component/User/temp/home-user/home-user.component';
import { LogoutComponent } from './component/session/logout/logout.component';
import { OnlyEmailVerifyComponent } from './component/session/only-email-verify/only-email-verify.component';
import { OTPVerifyComponent } from './component/session/otpverify/otpverify.component';
import { ListUserComponent } from './component/admin/listuser/list-user/list-user.component';
import { ProfileAdminComponent } from './component/admin/listuser/profile-admin/profile-admin.component';
import { AddCategoryComponent } from './component/admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './component/admin/category/list-category/list-category.component';
import { UpdateCategoryComponent } from './component/admin/category/update-category/update-category.component';
import { AddsubCategoryComponent } from './component/admin/subCategory/addsub-category/addsub-category.component';
import { ListSubcategoryComponent } from './component/admin/subCategory/list-subcategory/list-subcategory.component';
import { UpdateSubcategoryComponent } from './component/admin/subCategory/update-subcategory/update-subcategory.component';
import { HeaderVendorComponent } from './component/vendor/temp/header-vendor/header-vendor.component';
import { SidebarVendorComponent } from './component/vendor/temp/sidebar-vendor/sidebar-vendor.component';
import { HomeVendorComponent } from './component/vendor/temp/home-vendor/home-vendor.component';
import { SignupVendorComponent } from './component/session/signup-vendor/signup-vendor.component';
import { AddProductsComponent } from './component/vendor/add-products/add-products.component';
import { ListProductComponent } from './component/User/products/list-product/list-product.component';
import { CartComponent } from './component/User/cart/cart/cart.component';
import { AddAddressComponent } from './component/User/add-address/add-address.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    HomeAdminComponent,
    HeaderUserComponent,
    SidebarUserComponent,
    HomeUserComponent,
    LogoutComponent,
    OnlyEmailVerifyComponent,
    OTPVerifyComponent,
    ListUserComponent,
    ProfileAdminComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    AddsubCategoryComponent,
    ListSubcategoryComponent,
    UpdateSubcategoryComponent,
    HeaderVendorComponent,
    SidebarVendorComponent,
    HomeVendorComponent,
    SignupVendorComponent,
    AddProductsComponent,
    ListProductComponent,
    CartComponent,
    AddAddressComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AccordionModule,
    PanelModule,
    ButtonModule,
    AutoCompleteModule,
    KeyFilterModule,
    PasswordModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
