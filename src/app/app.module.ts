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
import { SatisfactionQustionsComponent } from './satisfaction-qustions/satisfaction-qustions.component';
import { ImageTagC2Component } from './image-tag-c2/image-tag-c2.component';
import { ImageTagC2BadgeGameComponent } from './image-tag-c2-badge-game/image-tag-c2-badge-game.component';
import { ImageTagC2VirtualGameComponent } from './image-tag-c2-virtual-game/image-tag-c2-virtual-game.component';
import { ImageTagC2MonsterGameComponent } from './image-tag-c2-monster-game/image-tag-c2-monster-game.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'questions-one', component: QuestionsOneComponent },
  { path: 'personal-data', component: PersonaldataComponent },
  { path: 'image-data', component: ImageQuestionsComponent },
  { path: 'motivation-data', component: MotivationQuestionsComponent },
  { path: 'satisfaction-data', component: SatisfactionQustionsComponent },
  { path: 'image-c2-tag', component: ImageTagC2Component },
  { path: 'image-c2-batch', component: ImageTagC2BadgeGameComponent },
  { path: 'image-c2-virtual', component: ImageTagC2VirtualGameComponent },
  { path: 'image-c2-monster', component: ImageTagC2MonsterGameComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsOneComponent,
    ImageQuestionsComponent,
    MotivationQuestionsComponent,
    SatisfactionQustionsComponent,
    PersonaldataComponent,
    ImageTagC2Component,
    ImageTagC2BadgeGameComponent,
    ImageTagC2VirtualGameComponent,
    ImageTagC2MonsterGameComponent,
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
