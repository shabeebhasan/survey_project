import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-motivation-questions',
  templateUrl: './motivation-questions.component.html',
  styleUrls: ['./motivation-questions.component.scss']
})
export class MotivationQuestionsComponent implements OnInit {

  getMotivationQuestion : any;

    constructor(private apiService : ApiService, private http : HttpClient,private router: Router) {
        this.getMotivationQuestion = apiService.getMotivationQuestion;
    }

    ngOnInit() {
        StylesManager.applyTheme("bootstrap");
        setTimeout(() => {
            let router = this.router;
            this
                .getMotivationQuestion()
                .subscribe((data) => {
                    console.log('QuestionsOneComponent:: ', data);
                    let surveyJSON = {
                      title: "Player type questionnaire - Survey 1",
                      pages:[]
                    };
                    data.forEach(function(value, key) {
                      let obj = {
                        name:key,
                        questions: [
                          {
                            type: "radiogroup",
                            choices: [
                                "Strong agree", "agree", "More or less agree", "undecided",
                                "More or less disagree", "Disagree", "Strongly Disagree"
                            ],
                            isRequired: true,
                            name: 'id_'+ value.id,
                            question:value,
                            title: value.text
                          }
                        ]
                      };
                      surveyJSON.pages.push(obj);
                      if(key == data.length - 1){
                        var survey = new Model(surveyJSON);
                        SurveyNG.render("surveyElement", {model: survey});
                        survey.onComplete.add((survey)=>{
                          var resultAsString = JSON.stringify(survey.data);
                          console.log(resultAsString);
                        });
                      }
                    });
                });
        }, 111);
    }

}
