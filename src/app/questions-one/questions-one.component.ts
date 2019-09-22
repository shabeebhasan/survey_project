import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({selector: 'app-questions-one', templateUrl: './questions-one.component.html', styleUrls: ['./questions-one.component.scss'], providers: [ApiService]})

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
                        title: "Player type questionnaire - Survey 1",
                        showCompletedPage:false,
                        pages: [
                            {
                                name: 'start',
                                questions: [
                                    {
                                        type: "html",
                                        name: "info",
                                        html: "<h3>Now you will fill out a 24-question survey</h3>"
                                    }
                                ]
                            }, {
                                questions: [
                                    {
                                        rows: [],
                                        type: "matrix",
                                        name: "questions_one",
                                        title: "Player type questionnaire - Survey 1",
                                        isAllRowRequired: true,
                                        columns: [
                                            {
                                                value: 1,
                                                text: "Strongly Disagree"
                                            }, {
                                                value: 2,
                                                text: "Disagree"
                                            }, {
                                                value: 3,
                                                text: "More or less disagree"
                                            }, {
                                                value: 4,
                                                text: "undecided"
                                            }, {
                                                value: 5,
                                                text: "More or less agree"
                                            }, {
                                                value: 6,
                                                text: "agree"
                                            }, {
                                                value: 7,
                                                text: "Strong agree"
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                questions: [
                                    {
                                        type: "html",
                                        name: "complete",
                                        html: "<h3>Now you will start tagging 15 images. You are allowed to add as many tag as " +
                                            "you want. For each tag added, you gain 1 point.</h3>"
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
                                            router.navigateByUrl('/image-data');
                                        });
                                });
                        }
                    });
                });
        }, 111);
    }

}
