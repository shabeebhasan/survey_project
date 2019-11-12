import {Component, OnInit, HostListener} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {nationalities} from '../nationality';
import {ApiService} from '../api.service';

@Component({selector: 'app-survey-config-set', templateUrl: './survey-config-set.component.html', styleUrls: ['./survey-config-set.component.scss']})
export class SurveyConfigSetComponent implements OnInit {

    contactForm : FormGroup;
    optionsSelect : Array < any >;
    nationalities : Array < any >;
    disabledSubmitButton : boolean = false;
    http : any;
    setting: boolean = false;
    message: boolean = true;

    constructor(private fb : FormBuilder, private router : Router, http : HttpClient) {
        this.http = http;
        this.nationalities = nationalities;
        this.contactForm = fb.group({
            'game_setting': ['', Validators.required]
        });
    }

    ngOnInit() {}

    continue(){
      this.setting = true;
      this.message = false;
    }

    onSubmit() {
        if (!this.contactForm.valid) {
            alert("Please fill the required fields.");
            return;
        }

        localStorage.setItem('game_setting', this.contactForm.value.game_setting);
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
    }
}
