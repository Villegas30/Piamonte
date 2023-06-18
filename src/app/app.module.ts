import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavbarNavigationComponent } from './components/navbar-navigation/navbar-navigation.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { SectionFourComponent } from './components/section-four/section-four.component';
import { FooterEndpageComponent } from './components/footer-endpage/footer-endpage.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarNavigationComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    FooterEndpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
