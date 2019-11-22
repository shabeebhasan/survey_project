import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({selector: 'app-activity-flow-survey', templateUrl: './activity-flow-survey.component.html', styleUrls: ['./activity-flow-survey.component.scss']})
export class ActivityFlowSurveyComponent implements OnInit {

    getActivitySurvey : any;
    httpClient : any;

    constructor(private apiService : ApiService, private http : HttpClient, private router : Router) {
        this.getActivitySurvey = apiService.getActivitySurvey;
        this.httpClient = http;
    }

    ngOnInit() {
        StylesManager.applyTheme("bootstrap");
        setTimeout(() => {
            let router = this.router;
            let httpClient = this.httpClient;
            this
                .getActivitySurvey()
                .subscribe((data) => {
                    console.log('QuestionsOneComponent:: ', data);
                    let surveyJSON = {
                        showCompletedPage: false,
                        pages: [
                            {
                                name: 'start',
                                questions: [
                                    {
                                        type: "html",
                                        name: "info",
                                        html: "<h3>Thank you for tagging the image. Please click on the button to proceed to the" +
                                        " next page and fill out 3 questionnaires about your overall performance and satisfaction o" +
                                        "f the experiment.</h3>"
                                    }
                                ]
                            }, {
                                questions: [
                                    {
                                        rows: [],
                                        type: "matrix",
                                        name: "questions_one",
                                        title: "Think back to when you were tagging the images and please rate your level of agreement with the following statements.",
                                        isAllRowRequired: true,
                                        columns: [
                                            {
                                                value: 1,
                                                text: "strongly disagree"
                                            }, {
                                                value: 2,
                                                text: "disagree"
                                            }, {
                                                value: 3,
                                                text: "neither agree nor disagree"
                                            }, {
                                                value: 4,
                                                text: "agree"
                                            }, {
                                                value: 5,
                                                text: "strongly agree"
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
                                    var resultAsString = JSON.stringify(survey.data.questions_one);
                                    console.log(resultAsString);
                                    httpClient.post('http://localhost:8081/activity-flow-add', {
                                        user_id: sessionStorage.getItem('user_id'),
                                        survey_data: resultAsString
                                    }).subscribe((data) => {
                                        router.navigateByUrl('/motivation-data');
                                    });
                                });
                        }
                    });
                });
        }, 111);
    }

}
