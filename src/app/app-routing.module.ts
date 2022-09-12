import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './component/admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './component/admin/category/list-category/list-category.component';
import { UpdateCategoryComponent } from './component/admin/category/update-category/update-category.component';
import { ListUserComponent } from './component/admin/listuser/list-user/list-user.component';
import { ProfileAdminComponent } from './component/admin/listuser/profile-admin/profile-admin.component';
import { AddsubCategoryComponent } from './component/admin/subCategory/addsub-category/addsub-category.component';
import { ListSubcategoryComponent } from './component/admin/subCategory/list-subcategory/list-subcategory.component';
import { UpdateSubcategoryComponent } from './component/admin/subCategory/update-subcategory/update-subcategory.component';
import { HomeAdminComponent } from './component/admin/temp/home-admin/home-admin.component';
import { LoginComponent } from './component/session/login/login.component';
import { LogoutComponent } from './component/session/logout/logout.component';
import { OnlyEmailVerifyComponent } from './component/session/only-email-verify/only-email-verify.component';
import { OTPVerifyComponent } from './component/session/otpverify/otpverify.component';
import { SignupVendorComponent } from './component/session/signup-vendor/signup-vendor.component';
import { SignupComponent } from './component/session/signup/signup.component';
import { AddAddressComponent } from './component/User/add-address/add-address.component';
import { CartComponent } from './component/User/cart/cart/cart.component';
import { ListProductComponent } from './component/User/products/list-product/list-product.component';
import { HomeUserComponent } from './component/User/temp/home-user/home-user.component';
import { AddProductsComponent } from './component/vendor/add-products/add-products.component';
import { HomeVendorComponent } from './component/vendor/temp/home-vendor/home-vendor.component';

const routes: Routes = [
  { component: SignupComponent, path: "signup" },
  { component: LoginComponent, path: "login" },
  { component: LoginComponent, path: "" },
  { component: SignupVendorComponent, path: "signupVendor" },
  { component: LogoutComponent, path: "logout" },
  { component: OnlyEmailVerifyComponent, path: "onlyEmailVerify" },
  { component: OTPVerifyComponent, path: "otpVerify" },
  {
    component: HomeAdminComponent, path: "homeAdmin", children: [
      { component: ListUserComponent, path: "listUser" },
      { component: ProfileAdminComponent, path: "profileAdmin" },
      { component: AddCategoryComponent, path: "addCategory" },
      { component: ListCategoryComponent, path: "listCategory" },
      { component: UpdateCategoryComponent, path: "updateCategory/:categoryId" },
      { component: AddsubCategoryComponent, path: "addSubCategory" },
      { component: ListSubcategoryComponent, path: "listSubCategory" },
      { component: UpdateSubcategoryComponent, path: "updateSubCategory/:subCategoryId" }
    ]
  },
  {
    component: HomeUserComponent, path: "homeUser", children: [
      {component:ListProductComponent,path:"listProduct"},
      {component:CartComponent,path:"cart"},
      {component:AddAddressComponent,path:"addAddress"}
    ]
  },
  {
    component:HomeVendorComponent,path:"homeVendor",children:[
      {component:AddProductsComponent,path:"addProduct"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
