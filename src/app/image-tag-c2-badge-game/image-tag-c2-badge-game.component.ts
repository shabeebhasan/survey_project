import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';
import {AppSetting} from '../AppSetting';

@Component({selector: 'app-image-tag-c2-badge-game', templateUrl: './image-tag-c2-badge-game.component.html', styleUrls: ['./image-tag-c2-badge-game.component.scss']})
export class ImageTagC2BadgeGameComponent implements OnInit {

    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    bronzeShow : boolean = false;
    goldShow : boolean = false;
    silverShow : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagPercentage : any;
    tagCount : any;
    tagRewardCount : any;
    imgSrc : any;
    imgeShuffleArray : Array < any >;
    arrayIndex : any;
    httpClient : any;
    bronzeBagdeImg : any = "./assets/badges/FrameLvl2@4x.png";
    silverBagdeImg : any = "./assets/badges/FrameLvl4@4x.png";
    goldenBagdeImg : any = "./assets/badges/FrameLvl5@4x.png";

    LockedBagdeImg : any = "./assets/badges/locked.png";
    full : any = "./assets/badges/full.png";

    THRESHOLD_1 : any = AppSetting.THRESHOLD_1;
    THRESHOLD_2 : any = AppSetting.THRESHOLD_2;
    THRESHOLD_3 : any = AppSetting.THRESHOLD_3;

    @ViewChild('silverBagde', null)silverBagde : ModalDirective;
    @ViewChild('goldenBagde', null)goldenBagde : ModalDirective;
    @ViewChild('bronzeBagde', null)bronzeBagde : ModalDirective;

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
            .post('http://localhost:8088/get-tags', {
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
        this.getTag();
    }

    public onItemRemoved(e) {
        this.tagCount -= 1;
        this.tagRewardCount--;
        if (this.tagCount <= this.THRESHOLD_1) {
            this.tagPercentage = Math.trunc(((this.tagCount / this.THRESHOLD_1) * 100)) + "%"
        } else if (this.tagCount - this.THRESHOLD_1 <= this.THRESHOLD_2 - this.THRESHOLD_1) {
            this.tagPercentage = Math.trunc(((this.tagCount - this.THRESHOLD_1) / (this.THRESHOLD_2 - this.THRESHOLD_1) * 100)) + "%"
        } else if (this.tagCount - this.THRESHOLD_2 <= (this.THRESHOLD_3 - this.THRESHOLD_2)) {
            this.tagPercentage = Math.trunc((((this.tagCount - this.THRESHOLD_2) / (this.THRESHOLD_3 - this.THRESHOLD_2)) * 100)) + "%"
        }
    }

    public onItemAdded(e) {
        this.tagCount += 1;
        this.tagRewardCount += 1;
        if (this.tagCount <= this.THRESHOLD_1) {
            this.tagPercentage = Math.trunc(((this.tagCount / this.THRESHOLD_1) * 100)) + "%"
        } else if (this.tagCount - this.THRESHOLD_1 <= this.THRESHOLD_2 - this.THRESHOLD_1) {
            this.tagPercentage = Math.trunc(((this.tagCount - this.THRESHOLD_1) / (this.THRESHOLD_2 - this.THRESHOLD_1) * 100)) + "%"
        } else if (this.tagCount - this.THRESHOLD_2 <= (this.THRESHOLD_3 - this.THRESHOLD_2)) {
            this.tagPercentage = Math.trunc((((this.tagCount - this.THRESHOLD_2) / (this.THRESHOLD_3 - this.THRESHOLD_2)) * 100)) + "%"
        }

        if (this.tagRewardCount == AppSetting.THRESHOLD_1) {
            this.openbronzeBagdeDialog();
            this.bronzeShow = true;
            this.tagPercentage = 0;
        }
        if (this.tagRewardCount == AppSetting.THRESHOLD_2) {
            this.openSilverDialog();
            this.silverShow = true;
            this.tagPercentage = 0;
        }
        if (this.tagRewardCount == AppSetting.THRESHOLD_3) {
            this.opengoldenDialog();
            this.goldShow = true;
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

    openbronzeBagdeDialog() {
        this
            .bronzeBagde
            .show();
    }

    onSubmit() {

        this
            .httpClient
            .post('http://localhost:8088/add-tags', {
                user_id: sessionStorage.getItem('user_id') + '-' + localStorage.getItem('playtime'),
                picture_id: "bg-" + (this.imgeShuffleArray[this.arrayIndex]),
                tags: JSON.stringify(this.items)
            })
            .subscribe((data) => {});
        this.arrayIndex++;
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            console.log('onSubmit:: ', this.tagCount);
            this.items = '';
            this.setImage();
        } else {
            this
                .httpClient
                .post('http://localhost:8088/survey-picture', {
                    user_id: sessionStorage.getItem('user_id') + '-' + localStorage.getItem('playtime'),
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
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13'
        ];
        if (localStorage.getItem('playtime') == '3') {
            a = [
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13'
            ];
        } else if (localStorage.getItem('playtime') == '2') {
            a = [
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23'
            ];
        } else if (localStorage.getItem('playtime') == '1') {
            a = [
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '30',
                '31',
                '32'
            ];
        }
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}
