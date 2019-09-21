import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

var json = {
    completedHtml: "<h3>Thank you for your participation.</h3>",
    questions: [
        {
            type: "matrix",
            name: "Satisfaction",
            title: "Indicate the extent you have felt this way while doing image tagging.",
            isAllRowRequired: true,
            columns: [
                {
                    value: 1,
                    text: "Very Sligthly or not at all"
                }, {
                    value: 2,
                    text: "a little"
                }, {
                    value: 3,
                    text: "Moderately"
                }, {
                    value: 4,
                    text: "Quite a bit"
                }, {
                    value: 5,
                    text: "Extremely"
                }
            ],
            rows: [
                {
                    value: "Instrested",
                    text: "Instrested"
                }, {
                    value: "Distressed",
                    text: "Distressed"
                }, {
                    value: "Excited",
                    text: "Excited"
                }, {
                    value: "Upset",
                    text: "Upset"
                }, {
                    value: "Strong",
                    text: "Strong"
                }, {
                    value: "Guilty",
                    text: "Guilty"
                }, {
                    value: "Scared",
                    text: "Scared"
                }, {
                    value: "Hostile",
                    text: "Hostile"
                }, {
                    value: "Enthusiastic",
                    text: "Enthusiastic"
                }, {
                    value: "Proud",
                    text: "Proud"
                }, {
                    value: "Irritable",
                    text: "Irritable"
                }, {
                    value: "Alert",
                    text: "Alert"
                }, {
                    value: "Ashamed",
                    text: "Ashamed"
                }, {
                    value: "Inspired",
                    text: "Inspired"
                }, {
                    value: "Nervous",
                    text: "Nervous"
                }, {
                    value: "Determined",
                    text: "Determined"
                }, {
                    value: "Attentive",
                    text: "Attentive"
                }, {
                    value: "Jittery",
                    text: "Jittery"
                }, {
                    value: "Active",
                    text: "Active"
                }, {
                    value: "Afraid",
                    text: "Afraid"
                }
            ]
        }
    ]
};

@Component({selector: 'app-satisfaction-qustions', templateUrl: './satisfaction-qustions.component.html', styleUrls: ['./satisfaction-qustions.component.scss']})

export class SatisfactionQustionsComponent implements OnInit {

    httpClient : any;

    constructor(private apiService : ApiService, private http : HttpClient, private router : Router) {
        this.httpClient = http;
    }

    ngOnInit() {
        StylesManager.applyTheme("bootstrap");
        var survey = new Model(json);
        SurveyNG.render("surveyElement", {model: survey});
        survey
            .onComplete
            .add((survey) => {
                var resultAsString = JSON.stringify(survey.data.Satisfaction);
                console.log(resultAsString);
                this
                    .httpClient
                    .post('http://localhost:8081/survey-three-data', {
                        user_id: sessionStorage.getItem('user_id'),
                        survey_data: resultAsString
                    })
                    .subscribe((data) => {
                        setTimeout(() => {
                            sessionStorage.removeItem('user_id');
                            this
                                .router
                                .navigateByUrl('/welcome');
                        }, 3000);
                    });
            });
    }

}
