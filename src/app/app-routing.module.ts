import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path: "", redirectTo: "/index-pages-principal", pathMatch: "full"},
  {path: "index-pages-principal", component: IndexPageComponent},
  {path: "login-pages", component: LoginPageComponent},
  {path: "register-pages", component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
