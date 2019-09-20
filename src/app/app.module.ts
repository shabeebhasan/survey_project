import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionsOneComponent } from './questions-one/questions-one.component';
import { ApiService } from './api.service';
import { ImageQuestionsComponent } from './image-questions/image-questions.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MotivationQuestionsComponent } from './motivation-questions/motivation-questions.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'questions-one', component: QuestionsOneComponent },
  { path: 'personal-data', component: PersonaldataComponent },
  { path: 'image-data', component: ImageQuestionsComponent },
  { path: 'motivation-data', component: ImageQuestionsComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PersonaldataComponent,
    QuestionsOneComponent,
    ImageQuestionsComponent,
    MotivationQuestionsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MDBBootstrapModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
