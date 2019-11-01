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
                        title: "Motivation questionnaire",
                        showCompletedPage:false,
                        pages: [
                            {
                                name: 'start',
                                questions: [
                                    {
                                        type: "html",
                                        name: "info",
                                        html: "<h3>Thank you for playing the game. Please click on the button to proceed to the" +
                                            " next page and fill out the next questionnaire about your overall satisfaction o" +
                                            "f the game.</h3>"
                                    }
                                ]
                            }, {
                                questions: [
                                    {
                                        type: "matrix",
                                        name: "questions_two",
                                        title: "Player type questionnaire - Survey 1",
                                        isAllRowRequired: true,
                                        columns: [
                                            {
                                                value: 1,
                                                text: "Not at all true"
                                            }, {
                                                value: 2,
                                                text: ""
                                            }, {
                                                value: 3,
                                                text: ""
                                            }, {
                                                value: 4,
                                                text: "somewhat true"
                                            }, {
                                                value: 5,
                                                text: ""
                                            }, {
                                                value: 6,
                                                text: ""
                                            }, {
                                                value: 7,
                                                text: "very true"
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
                        firstPageIsStarted: true
                    };
                    data.forEach(function (value, key) {
                        let obj = {
                            value: 'id_' + value.id,
                            text: value.text
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
