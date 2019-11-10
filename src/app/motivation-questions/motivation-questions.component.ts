import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({selector: 'app-motivation-questions', templateUrl: './motivation-questions.component.html', styleUrls: ['./motivation-questions.component.scss']})
export class MotivationQuestionsComponent implements OnInit {

    getMotivationQuestion : any;
    httpClient : any;

    constructor(private apiService : ApiService, private http : HttpClient, private router : Router) {
        this.getMotivationQuestion = apiService.getMotivationQuestion;
        this.httpClient = http;
    }

    ngOnInit() {
        StylesManager.applyTheme("bootstrap");
        setTimeout(() => {
            let router = this.router;
            let httpClient = this.httpClient;
            this
                .getMotivationQuestion()
                .subscribe((data) => {
                    console.log('QuestionsOneComponent:: ', data);

                    let surveyJSON = {
                        showCompletedPage:false,
                        pages: [
                            {
                                questions: [
                                    {
                                        type: "matrix",
                                        name: "questions_two",
                                        title: "Answer all the questions.",
                                        isAllRowRequired: true,
                                        columns: [
                                            {
                                                value: 1,
                                                text: "Not at all true (1)"
                                            }, {
                                                value: 2,
                                                text: ""
                                            }, {
                                                value: 3,
                                                text: ""
                                            }, {
                                                value: 4,
                                                text: "somewhat true (4)"
                                            }, {
                                                value: 5,
                                                text: ""
                                            }, {
                                                value: 6,
                                                text: ""
                                            }, {
                                                value: 7,
                                                text: "very true (7)"
                                            }
                                        ],
                                        rows: []
                                    }
                                ]
                            }
                        ],
                        completeText: "Next",
                        showPrevButton: false,
                        startSurveyText: 'Next',
                    };
                    data.forEach(function (value, key) {
                        let obj = {
                            value: 'id_' + value.id,
                            text: value.text
                        };
                        surveyJSON
                            .pages[0]
                            .questions['0']
                            .rows
                            .push(obj);
                        if (key == data.length - 1) {
                            var survey = new Model(surveyJSON);
                            SurveyNG.render("surveyElement", {model: survey});
                            survey
                                .onComplete
                                .add((survey) => {
                                    var resultAsString = JSON.stringify(survey.data.questions_two);
                                    console.log(resultAsString);
                                    httpClient
                                        .post('http://localhost:8081/survey-two-data', {
                                            user_id: sessionStorage.getItem('user_id'),
                                            survey_data: resultAsString
                                        })
                                        .subscribe((data) => {
                                          router.navigateByUrl('/satisfaction-data');
                                        });
                                });
                        }
                    });
                });
        }, 111);
    }

}
