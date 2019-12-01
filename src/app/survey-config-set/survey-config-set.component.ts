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
    game_play_time : boolean = false;
    play_continue : boolean = false;
    time_text : any = '';

    no_game : boolean = false;
    leader_board : boolean = false;
    badge_challange : boolean = false;
    unlockable : boolean = false;
    virtural : boolean = false;

    constructor(private fb : FormBuilder, private router : Router, http : HttpClient) {
        this.http = http;
        this.nationalities = nationalities;
        this.contactForm = fb.group({
            'no_game': [false],
            'leader_board': [false],
            'badge_challange': [false],
            'unlockable': [false],
            'virtural': [false]
        });
    }

    ngOnInit() {
        if (localStorage.getItem('playtime')) {
            this.play_continue = true;
            if (localStorage.getItem('playtime') == '3') {
                this.time_text = "1st"
            } else if (localStorage.getItem('playtime') == '2') {
                this.time_text = "2nd"
            } else if (localStorage.getItem('playtime') == '1') {
                this.time_text = "3rd"
            }
        }
    }

    showStart() {
        this.start = true;
        StylesManager.applyTheme("bootstrap");
        setTimeout(() => {
            let surveyJSON = {
                showCompletedPage: false,
                showQuestionNumbers: 'off',
                pages: [
                    {
                        questions: [
                            {
                                type: "html",
                                name: "complete",
                                html: "<h3>Now you will start tagging 10 images. You are allowed to add as many tag as " +
                                    "you want. Type anything you think of when seeing the images. Press enter to su" +
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
                    if (this.contactForm.value.no_game) {
                        this
                            .router
                            .navigateByUrl('/image-data');
                    }
                    if (!this.contactForm.value.no_game) {
                        console.log(this.contactForm.value)
                        if (this.contactForm.value.badge_challange && !this.contactForm.value.leader_board && !this.contactForm.value.unlockable && !this.contactForm.value.virtural) {
                            this
                                .router
                                .navigateByUrl('/image-c2-batch');
                            return;
                        }
                        if (!this.contactForm.value.badge_challange && this.contactForm.value.leader_board && !this.contactForm.value.unlockable && !this.contactForm.value.virtural) {
                            this
                                .router
                                .navigateByUrl('/image-c2-tag');
                            return;
                        }
                        if (!this.contactForm.value.badge_challange && !this.contactForm.value.leader_board && this.contactForm.value.unlockable && !this.contactForm.value.virtural) {
                            this
                                .router
                                .navigateByUrl('/image-c2-virtual');
                            return;
                        }
                        if (!this.contactForm.value.badge_challange && !this.contactForm.value.leader_board && !this.contactForm.value.unlockable && this.contactForm.value.virtural) {
                            this
                                .router
                                .navigateByUrl('/image-c2-monster');
                            return;
                        }

                        this
                            .router
                            .navigateByUrl('/multi-tag-game');

                        // this     .router     .navigateByUrl('/image-c2-tag');
                    }
                    // if (this.contactForm.value.game_setting === '3') {     this         .router
                    // .navigateByUrl('/image-c2-batch'); } if (this.contactForm.value.game_setting
                    // === '4') {     this         .router .navigateByUrl('/image-c2-virtual'); } if
                    // (this.contactForm.value.game_setting === '5') {     this         .router
                    // .navigateByUrl('/image-c2-monster'); }
                });
        }, 111);
    }

    continue() {
        console.log(this.game_play_time);
        this.setting = true;
        this.message = false;

        if (!localStorage.getItem('playtime') && this.game_play_time) {
            localStorage.setItem('playtime', '3');
        }
    }

    changeData(e){
      console.log(e.target.checked)
      if(e.target.checked){
        this.no_game = false;
      }
    }

    changeBaselineData(e){
      console.log('changeBaselineData:',e.target.checked)
      if(e.target.checked){
        this.badge_challange = false;
        this.leader_board = false;
        this.unlockable = false;
        this.virtural = false;
      }
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.contactForm.valid) {
            alert("Please fill the required fields.");
            return;
        }

        localStorage.setItem('game_setting', this.contactForm.value.game_setting);

        if (this.contactForm.value.no_game) {
            this.setting = false;
            this.message = false;
            this.start = true;
            this.showStart();
            console.log(this.contactForm.value)
        }
        if (!this.contactForm.value.no_game) {
            console.log(this.contactForm.value)
            if (this.contactForm.value.badge_challange === '' && this.contactForm.value.leader_board === '' && this.contactForm.value.unlockable === '' && this.contactForm.value.virtural === '') {
                // this     .router     .navigateByUrl('/image-c2-tag');
                alert("Select at least a single game option.");
                return;
            }
            if (this.contactForm.value.badge_challange === false && this.contactForm.value.leader_board === false && this.contactForm.value.unlockable === false && this.contactForm.value.virtural === false) {
                // this     .router     .navigateByUrl('/image-c2-tag');
                alert("Select at least a single game option.");
                return;
            }
            if (this.contactForm.value.badge_challange && this.contactForm.value.leader_board && this.contactForm.value.unlockable && this.contactForm.value.virtural) {
                // this     .router     .navigateByUrl('/image-c2-tag');
                alert("Only 3 items can be selected.");
                return;
            }

            localStorage.setItem('badge_challange', this.contactForm.value.badge_challange);
            localStorage.setItem('leader_board', this.contactForm.value.leader_board);
            localStorage.setItem('unlockable', this.contactForm.value.unlockable);
            localStorage.setItem('virtural', this.contactForm.value.virtural);
            this.setting = false;
            this.message = false;
            this.start = true;
            this.showStart();
            return false;
        }
    }
}