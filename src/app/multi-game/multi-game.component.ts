import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';
import {AppSetting} from '../AppSetting';

@Component({selector: 'app-multi-game', templateUrl: './multi-game.component.html', styleUrls: ['./multi-game.component.scss']})
export class MultiGameComponent implements OnInit {

    //monster
    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagCount : any;
    imgSrc : any;
    monsterSrc : any = "./assets/monster/idle.gif";
    imgeShuffleArray : Array < any >;
    arrayIndex : any;
    httpClient : any;
    tagPercentage : any;
    monsterMsg : any;
    feedShowCount : any = 0;
    @ViewChild('modal', null)modal : ModalDirective;

    THRESHOLD_1 : any = AppSetting.THRESHOLD_1;
    THRESHOLD_2 : any = AppSetting.THRESHOLD_2;
    THRESHOLD_3 : any = AppSetting.THRESHOLD_3;

    //virtual
    virtualSrc : any;
    virtualSrc1 : any;
    virtualSrc2 : any;
    virtualSrc3 : any;
    modalvirtualSrc : any;
    virturlImgeShuffleArray : Array < any >;
    virtualArrayIndex : any;
    opacity : any = 0.1;
    virtualItemShowCount : any = 0;
    @ViewChild('modal', null)virtualModal : ModalDirective;

    imgShow1 : boolean = false;
    imgShow2 : boolean = false;
    imgShow3 : boolean = false;

    constructor(private fb : FormBuilder, private router : Router, private http : HttpClient) {

        this.httpClient = http;
        this.imageForm = fb.group({});
    }

    ngOnInit() {
        this.items = '';
        this.tagCount = 0;
        this.arrayIndex = 0;
        this.imgeShuffleArray = this.shuffle();
        this.monsterSrc = "./assets/monster/idle.gif"
        this.setImage();
        this.getTag();

        //virtual
        this.setVirtualImage();
    }

    getTag() {
        this
            .httpClient
            .post('http://localhost:8088/get-tags', {
                user_id: sessionStorage.getItem('user_id'),
                picture_id: "mul-" + this.arrayIndex
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
        this.feedShowCount++;
        this.tagCount += 1;
        if (this.tagCount <= this.THRESHOLD_3) {
            this.tagPercentage = Math.trunc(((this.tagCount / this.THRESHOLD_3) * 100)) + "%"
        }
        if (this.feedShowCount == AppSetting.THRESHOLD_1) {
            this.monsterSrc = "./assets/monster/chewing.gif"
            this.monsterMsg = "the monster is sad."
            this
                .modal
                .show();
        }

        if (this.feedShowCount == AppSetting.THRESHOLD_2) {
            this.monsterSrc = "./assets/monster/hovering.gif"
            this.monsterMsg = "the monster is neutral."
            this
                .modal
                .show();
        }

        if (this.feedShowCount == AppSetting.THRESHOLD_3) {
            this.monsterSrc = "./assets/monster/dragging.gif"
            this.monsterMsg = "the monster is happy."
            this
                .modal
                .show();
        }
        // if (this.feedShowCount == 10) {     this.monsterSrc =
        // "./assets/monster/chewing.gif"     this         .modal         .show();
        // this.feedShowCount = 0; } virtual
        if (this.tagCount == this.THRESHOLD_1) {
            this.virtualSrc = this.virtualSrc2;
            this.modalvirtualSrc = this.virtualSrc1;
            this.imgShow1 = true;
            this.opacity = 0.09;
            this
                .virtualModal
                .show()
        } else if (this.tagCount == this.THRESHOLD_2) {
            this.virtualSrc = this.virtualSrc3;
            this.modalvirtualSrc = this.virtualSrc2;
            this.imgShow2 = true;
            this.opacity = 0.09;
            this
                .virtualModal
                .show()
        } else if (this.tagCount == this.THRESHOLD_3) {
            this.virtualSrc = this.virtualSrc3;
            this.modalvirtualSrc = this.virtualSrc3;
            this.imgShow3 = true;
            this.opacity = 1;
            this
                .virtualModal
                .show()
        }

        if (this.tagCount < this.THRESHOLD_1) {
            this.opacity = this.tagCount / this.THRESHOLD_1
            console.log(this.opacity)
        }

        if (this.tagCount < this.THRESHOLD_2 && this.tagCount > this.THRESHOLD_1) {
            this.opacity = (this.tagCount - this.THRESHOLD_1) / (this.THRESHOLD_2 - this.THRESHOLD_1)
            console.log(this.opacity)
        }

        if (this.tagCount < this.THRESHOLD_3 && this.tagCount > this.THRESHOLD_2) {
            this.opacity = (this.tagCount - this.THRESHOLD_2) / (this.THRESHOLD_3 - this.THRESHOLD_2)
            console.log(this.opacity)
        }
    }

    setVirtualImage() {
        this.virtualSrc1 = "./assets/virtual_items/1.png";
        this.virtualSrc2 = "./assets/virtual_items/2.png";
        this.virtualSrc3 = "./assets/virtual_items/3.png";
        this.virtualSrc = this.virtualSrc1;
    }

    onSubmit() {
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            this
                .httpClient
                .post('http://localhost:8088/add-tags', {
                    user_id: sessionStorage.getItem('user_id'),
                    picture_id: "mul-" + this.arrayIndex,
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
