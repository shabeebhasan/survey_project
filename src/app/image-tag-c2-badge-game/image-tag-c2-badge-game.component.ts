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
    tagCount : any;
    tagRewardCount : any;
    imgSrc : any;
    imgeShuffleArray : Array < any >;
    arrayIndex : any;
    httpClient : any;
    bronzeBagdeImg : any = "./assets/badges/FrameLvl2@4x.png";
    silverBagdeImg : any = "./assets/badges/FrameLvl4@4x.png";
    goldenBagdeImg : any = "./assets/badges/FrameLvl7@4x.png";

    
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
        this.tagCount += 1;
        this.tagRewardCount += 1;
        if (this.tagRewardCount == AppSetting.THRESHOLD_1) {
            this.openbronzeBagdeDialog();
            this.bronzeShow = true;
        }
        if (this.tagRewardCount == AppSetting.THRESHOLD_2) {
          this.openSilverDialog();
          this.silverShow = true;
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
