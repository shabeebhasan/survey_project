import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';

@Component({selector: 'app-image-tag-c2-badge-game', templateUrl: './image-tag-c2-badge-game.component.html', styleUrls: ['./image-tag-c2-badge-game.component.scss']})
export class ImageTagC2BadgeGameComponent implements OnInit {

    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagCount : any;
    tagRewardCount : any;
    imgSrc : any;
    imgeShuffleArray : Array < any >;
    arrayIndex : any;
    httpClient : any;
    silverBagdeImg : any = "./assets/badges/FrameLvl4@4x.png";
    goldenBagdeImg : any = "./assets/badges/FrameLvl7@4x.png";

    @ViewChild('silverBagde', null)silverBagde : ModalDirective;
    @ViewChild('goldenBagde', null)goldenBagde : ModalDirective;

    constructor(private fb : FormBuilder, private router : Router, private http : HttpClient) {

        this.httpClient = http;
        this.imageForm = fb.group({});
    }

    ngOnInit() {
        this.items = '';
        this.tagCount = 0;
        this.arrayIndex = 0;
        this.tagRewardCount = 0;
        this.imgeShuffleArray = this.shuffle();
        this.setImage();
        this.getTag();

    }

    getTag() {
        this
            .httpClient
            .post('http://localhost:8081/get-tags', {
                user_id: sessionStorage.getItem('user_id'),
                picture_id: "bg-" + this.arrayIndex
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

    public onItemAdded(e) {
        this.tagRewardCount += 1;
        if (this.tagRewardCount == 10) {
            this.openSilverDialog();
            this.tagRewardCount = 0;
        }
        if (this.items.length == 3) {
            //this.opengoldenDialog();
        }
    }

    openSilverDialog() {
        this
            .silverBagde
            .show();
    }

    opengoldenDialog() {
        this
            .goldenBagde
            .show();
    }

    onSubmit() {
        this.tagCount += this.items.length;
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            this
                .httpClient
                .post('http://localhost:8081/add-tags', {
                    user_id: sessionStorage.getItem('user_id'),
                    picture_id: "bg-" + this.arrayIndex,
                    tags: JSON.stringify(this.items)
                })
                .subscribe((data) => {});
            console.log('onSubmit:: ', this.tagCount);
            this.items = '';
            this.setImage();
        } else {
            this
                .httpClient
                .post('http://localhost:8081/survey-picture', {
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
