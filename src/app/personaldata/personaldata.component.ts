import {Component, OnInit, HostListener} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {nationalities} from '../nationality';
import {ApiService} from '../api.service';

@Component({selector: 'app-personaldata', templateUrl: './personaldata.component.html', styleUrls: ['./personaldata.component.scss']})
export class PersonaldataComponent implements OnInit {

    contactForm : FormGroup;
    optionsSelect : Array < any >;
    nationalities : Array < any >;
    disabledSubmitButton : boolean = false;
    http : any;

    constructor(private fb : FormBuilder, private router : Router, http : HttpClient) {
        this.http = http;
        this.nationalities = nationalities;
        this.contactForm = fb.group({
            'Age': [
                '', Validators.required
            ],
            'Nationality': [
                '', Validators.required
            ],
            'Gender': [
                '', Validators.required
            ],
            'playVideoGame': [
                '', Validators.required
            ],
        });
    }

    ngOnInit() {}

    onSubmit() {
        if (!this.contactForm.valid) {
            alert("Please fill the required fields.");
            return;
        }
        if (this.contactForm.value.Age < 18 || this.contactForm.value.Age > 100) {
            alert("AGE should be between 18 to 100");
            return;
        }
        if (this.contactForm.valid) {
            this
                .http
                .post('http://localhost:8081/user-info', this.contactForm.value)
                .subscribe((data) => {
                    console.log(data);
                    sessionStorage.setItem('user_id',data.message.insertId);
                    this
                        .router
                        .navigateByUrl('/questions-one');
                });
        }
    }
}
