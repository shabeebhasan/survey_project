import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

var surveyJSON = {
    title: "Player type questionnaire - Survey 1",
    pages: [
        {
            name: "page1",
            questions: [
                {
                    type: "radiogroup",
                    choices: [
                        "Yes", "No"
                    ],
                    isRequired: true,
                    name: "frameworkUsing",
                    title: "Do you use any front-end framework like Bootstrap?"
                }, {
                    type: "checkbox",
                    choices: [
                        "Bootstrap", "Foundation"
                    ],
                    hasOther: true,
                    isRequired: true,
                    name: "framework",
                    title: "What front-end framework do you use?",
                    visibleIf: "{frameworkUsing} = 'Yes'"
                }
            ]
        }, {
            name: "page2",
            questions: [
                {
                    type: "radiogroup",
                    choices: [
                        "Yes", "No"
                    ],
                    isRequired: true,
                    name: "mvvmUsing",
                    title: "Do you use any MVVM framework?"
                }, {
                    type: "checkbox",
                    choices: [
                        "AngularJS", "KnockoutJS", "React"
                    ],
                    hasOther: true,
                    isRequired: true,
                    name: "mvvm",
                    title: "What MVVM framework do you use?",
                    visibleIf: "{mvvmUsing} = 'Yes'"
                }
            ]
        }, {
            name: "page3",
            questions: [
                {
                    type: "comment",
                    name: "about",
                    title: "Please tell us about your main requirements for Survey library"
                }
            ]
        }
    ]
};

@Component({selector: 'app-questions-one', templateUrl: './questions-one.component.html', styleUrls: ['./questions-one.component.scss'], providers: [ApiService]})

export class QuestionsOneComponent implements OnInit {

    getQuestionsOne : any;

    constructor(private apiService : ApiService, private http : HttpClient,private router: Router) {
        this.getQuestionsOne = apiService.getQuestionsOne;
    }

    ngOnInit() {
        StylesManager.applyTheme("bootstrap");
        setTimeout(() => {
            let router = this.router;
            this
                .getQuestionsOne()
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
                            name: value.type + value.id,
                            question:value,
                            title: value.question_eng
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
                          router.navigateByUrl('/image-data');
                        });
                      }
                    });
                });
        }, 111);
    }

}
