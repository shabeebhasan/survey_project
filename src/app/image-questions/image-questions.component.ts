import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({selector: 'app-image-questions', templateUrl: './image-questions.component.html', styleUrls: ['./image-questions.component.scss']})
export class ImageQuestionsComponent implements OnInit {

    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagCount : any;
    imgSrc : any;
    imgeShuffleArray : Array < any >;
    arrayIndex : any;
    httpClient : any;

    constructor(private fb : FormBuilder, private router : Router, private http : HttpClient) {

        this.httpClient = http;
        this.imageForm = fb.group({});
    }

    ngOnInit() {
        this.items = '';
        this.tagCount = 0;
        this.arrayIndex = 0;
        this.imgeShuffleArray = this.shuffle();
        this.setImage();
        this.getTag();
    }

    public onItemAdded(e) {
      this.tagCount += 1;
    }

    getTag() {
        this
            .httpClient
            .post('http://localhost:8088/get-tags', {
                user_id: sessionStorage.getItem('user_id'),
                picture_id: "c1-" + this.arrayIndex
            })
            .subscribe((data) => {
                console.log("Image Tags: ", data)
                if (data) {
                    this.items = JSON.parse(data.tags)
                }
            });
    }

    setImage() {
        this.imgSrc = "./assets/pictures/" + this.imgeShuffleArray[this.arrayIndex] + ".jpg";
        this.arrayIndex++;
        this.getTag();
    }

    onSubmit() {
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            this
                .httpClient
                .post('http://localhost:8088/add-tags', {
                    user_id: sessionStorage.getItem('user_id'),
                    picture_id: "c1-" + this.arrayIndex,
                    tags: JSON.stringify(this.items)
                })
                .subscribe((data) => {});
            console.log('onSubmit:: ', this.tagCount);
            this.items = '';
            this.setImage();
        } else {
            this
                .httpClient
                .post('http://localhost:8088/survey-picture', {
                    user_id: sessionStorage.getItem('user_id'),
                    points: this.tagCount
                })
                .subscribe((data) => {
                    this
                        .router
                        .navigateByUrl('/activity-flow-survey');
                });
        }
    }

    shuffle() {
        let a = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10'
        ];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}
