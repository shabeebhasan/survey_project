import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({selector: 'app-questions-one',encapsulation: ViewEncapsulation.None, templateUrl: './questions-one.component.html', styleUrls: ['./questions-one.component.scss'], providers: [ApiService]})

export class QuestionsOneComponent implements OnInit {

    getQuestionsOne : any;
    httpClient : any;

    constructor(private apiService : ApiService, private http : HttpClient, private router : Router) {
        this.getQuestionsOne = apiService.getQuestionsOne;
        this.httpClient = http;
    }

    ngOnInit() {
        StylesManager.applyTheme("bootstrap");
        setTimeout(() => {
            let router = this.router;
            let httpClient = this.httpClient;
            this
                .getQuestionsOne()
                .subscribe((data) => {
                    console.log('QuestionsOneComponent:: ', data);
                    let surveyJSON = {
                        showCompletedPage:false,
                        pages: [
                            {
                                name: 'start',
                                questions: [
                                    {
                                        type: "html",
                                        name: "info",
                                        html: "<h3>Now you will fill out a 24-question survey to learn more about your player type.</h3>"
                                    }
                                ]
                            }, {
                                questions: [
                                    {
                                        rows: [],
                                        type: "matrix",
                                        name: "questions_one",
                                        title: "To what extent do the following statements apply to you?",
                                        isAllRowRequired: true,
                                        columns: [
                                            {
                                                value: 1,
                                                text: "Strongly disagree"
                                            }, {
                                                value: 2,
                                                text: "Disagree"
                                            }, {
                                                value: 3,
                                                text: "Somewhat disagree"
                                            }, {
                                                value: 4,
                                                text: "Neither agree nor disagree"
                                            }, {
                                                value: 5,
                                                text: "Somewhat agree"
                                            }, {
                                                value: 6,
                                                text: "Agree"
                                            }, {
                                                value: 7,
                                                text: "Strongly agree"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        completeText: "Next",
                        showPrevButton: false,
                        startSurveyText: 'Start',
                        firstPageIsStarted: true
                    };
                    data.forEach(function (value, key) {
                        let obj = {
                            value: value.type + '_' + value.id,
                            text: value.question_eng
                        };
                        surveyJSON
                            .pages[1]
                            .questions['0']
                            .rows
                            .push(obj);

                        if (key == data.length - 1) {
                            var survey = new Model(surveyJSON);
                            SurveyNG.render("surveyElement", {model: survey});
                            survey
                                .onComplete
                                .add((survey) => {
                                    var resultAsString = JSON.stringify(survey.data.questions_one);
                                    console.log(resultAsString);
                                    httpClient
                                        .post('http://localhost:8081/survey-one', {
                                            user_id: sessionStorage.getItem('user_id'),
                                            survey_data: resultAsString
                                        })
                                        .subscribe((data) => {
                                            router.navigateByUrl('/survey-config');
                                        });
                                });
                        }
                    });
                });
        }, 111);
    }

}
