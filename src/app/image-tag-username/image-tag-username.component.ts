import {Component, OnInit, HostListener} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {nationalities} from '../nationality';

@Component({selector: 'app-image-tag-username', templateUrl: './image-tag-username.component.html', styleUrls: ['./image-tag-username.component.scss']})
export class ImageTagUsernameComponent implements OnInit {

    contactForm : FormGroup;
    optionsSelect : Array < any >;
    nationalities : Array < any >;
    gameCofig : any;
    disabledSubmitButton : boolean = false;
    http : any;

    constructor(private fb : FormBuilder, private router : Router, http : HttpClient) {
        this.http = http;
        this.nationalities = nationalities;
        this.contactForm = fb.group({
            'Username': ['', Validators.required]
        });
    }

    ngOnInit() {
       
    }

    onSubmit() {
        if (!this.contactForm.valid) {
            alert("Please fill the required fields.");
            return;
        }
        this
            .router
            .navigateByUrl('/activity-flow-survey');        
    }
}
