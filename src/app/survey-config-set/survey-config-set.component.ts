import {Component, OnInit, HostListener} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {nationalities} from '../nationality';
import {ApiService} from '../api.service';
import {Model, SurveyNG, StylesManager} from 'survey-angular';

@Component({selector: 'app-survey-config-set', templateUrl: './survey-config-set.component.html', styleUrls: ['./survey-config-set.component.scss']})
export class SurveyConfigSetComponent implements OnInit {

    contactForm : FormGroup;
    optionsSelect : Array < any >;
    nationalities : Array < any >;
    disabledSubmitButton : boolean = false;
    http : any;
    setting : boolean = false;
    message : boolean = true;
    start : boolean = false;

    constructor(private fb : FormBuilder, private router : Router, http : HttpClient) {
        this.http = http;
        this.nationalities = nationalities;
        this.contactForm = fb.group({
            'game_setting': ['', Validators.required]
        });
    }

    ngOnInit() {}

    showStart() {
        this.start = true;
        StylesManager.applyTheme("bootstrap");
        setTimeout(() => {
            let surveyJSON = {
                showCompletedPage: false,
                pages: [
                    {
                        questions: [
                            {
                                type: "html",
                                name: "complete",
                                html: "<h3>Now you will start tagging 10 images. You are allowed to add as many tag as " +
                                    "you want. Type anything you think of when seeing the pictures. Press enter to su" +
                                    "ccessfully add the tag.</h3>"
                            }
                        ]
                    }
                ],
                completeText: "Next",
                showPrevButton: false,
                startSurveyText: 'Start',
                firstPageIsStarted: false
            };
            var survey = new Model(surveyJSON);
            SurveyNG.render("surveyElement", {model: survey});
            survey
                .onComplete
                .add((survey) => {
                    console.log(this.contactForm.value.game_setting)
                    if (this.contactForm.value.game_setting === '1') {
                        this
                            .router
                            .navigateByUrl('/image-data');
                    }
                    if (this.contactForm.value.game_setting === '2') {
                        this
                            .router
                            .navigateByUrl('/image-c2-tag');
                    }
                    if (this.contactForm.value.game_setting === '3') {
                        this
                            .router
                            .navigateByUrl('/image-c2-batch');
                    }
                    if (this.contactForm.value.game_setting === '4') {
                        this
                            .router
                            .navigateByUrl('/image-c2-virtual');
                    }
                    if (this.contactForm.value.game_setting === '5') {
                        this
                            .router
                            .navigateByUrl('/image-c2-monster');
                    }
                });
        }, 111);
    }

    continue() {
        this.setting = true;
        this.message = false;
    }

    onSubmit() {
        if (!this.contactForm.valid) {
            alert("Please fill the required fields.");
            return;
        }

        localStorage.setItem('game_setting', this.contactForm.value.game_setting);
        this.setting = false;
        this.message = false;
        this.start = true;
        this.showStart();

    }
}
