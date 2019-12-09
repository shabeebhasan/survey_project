import {Component, OnInit} from '@angular/core';
import {Model, SurveyNG, StylesManager} from 'survey-angular';
import {ApiService} from '../api.service';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

var json = {
    completedHtml: "<h3>This is the end of the experiment. Thank you for your paticipation.</h3>",
    showQuestionNumbers  :'off',
    questions: [
        {
            type: "matrix",
            name: "Satisfaction",
            title: "This scale consists of a number of words that describe different feelings and emotions. Read each item and then mark the appropriate answer in the space next to that word. Indicate to what extent you have felt this way while tagging the images.",
            isAllRowRequired: true,
            columns: [
                {
                    value: 1,
                    text: "very sligthly or not at all"
                }, {
                    value: 2,
                    text: "a little"
                }, {
                    value: 3,
                    text: "moderately"
                }, {
                    value: 4,
                    text: "quite a bit"
                }, {
                    value: 5,
                    text: "extremely"
                }
            ],
            rows: [
                {
                    value: "Interested",
                    text: "Interested"
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
        SurveyNG.render("sat_surveyElement", {model: survey});
        survey
            .onComplete
            .add((survey) => {
                var resultAsString = JSON.stringify(survey.data.Satisfaction);
                console.log(resultAsString);
                this
                    .httpClient
                    .post('http://localhost:8088/survey-three-data', {
                        user_id: sessionStorage.getItem('user_id'),
                        survey_data: resultAsString
                    })
                    .subscribe((data) => {
                        setTimeout(() => {
                            sessionStorage.removeItem('user_id');
                            if(localStorage.getItem('playtime') == '3'){
                              localStorage.setItem('playtime','2');
                              this
                                  .router
                                  .navigateByUrl('/survey-config');
                                  return;
                            }else if(localStorage.getItem('playtime') == '2'){
                              localStorage.setItem('playtime','1');
                              this
                                  .router
                                  .navigateByUrl('/survey-config');
                                  return;
                            }else if(localStorage.getItem('playtime') == '1'){
                              localStorage.removeItem('playtime');
                            }
                            this
                                .router
                                .navigateByUrl('/welcome');
                        }, 3000);
                    });
            });
    }

}
