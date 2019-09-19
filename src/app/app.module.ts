import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PersonaldataComponent } from './personaldata/personaldata.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'personal-data', component: PersonaldataComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonaldataComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MDBBootstrapModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
