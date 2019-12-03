import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';
import {AppSetting} from '../AppSetting';

@Component({selector: 'app-image-tag-c2-monster-game', templateUrl: './image-tag-c2-monster-game.component.html', styleUrls: ['./image-tag-c2-monster-game.component.scss']})
export class ImageTagC2MonsterGameComponent implements OnInit {

    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    chewing : boolean = false;
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

    constructor(private fb : FormBuilder, private router : Router, private http : HttpClient) {

        this.httpClient = http;
        this.imageForm = fb.group({});
    }

    ngOnInit() {
        this.items = '';
        this.tagCount = 0;
        this.arrayIndex = 0;
        this.imgeShuffleArray = this.shuffle();
        this.monsterSrc = "./assets/monster/Hungry.gif"
        this.setImage();
        this.getTag();
    }

    getTag() {
        this
            .httpClient
            .post('http://localhost:8088/get-tags', {
                user_id: sessionStorage.getItem('user_id'),
                picture_id: "mo-" + this.arrayIndex
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
        if(this.tagCount <= this.THRESHOLD_1){
          this.tagPercentage =  Math.trunc(((this.tagCount / this.THRESHOLD_1 ) * 100)) + "%"
        }else if(this.tagCount <= this.THRESHOLD_2){
          this.tagPercentage =  Math.trunc(((this.tagCount / this.THRESHOLD_2 ) * 100)) + "%"
        }else if(this.tagCount <= this.THRESHOLD_3){
          this.tagPercentage =  Math.trunc(((this.tagCount / this.THRESHOLD_3 ) * 100)) + "%"
        }

        if(this.feedShowCount == AppSetting.THRESHOLD_1){
          this.monsterSrc = "./assets/monster/Idle.gif"
          this.monsterMsg = "Your monster is feeling idle."
          this.modal.show();
        }else if(this.feedShowCount == AppSetting.THRESHOLD_2){
          this.monsterSrc = "./assets/monster/Happy.gif"
          this.monsterMsg = "Congrats! Your monster is feeling happy."
          this.modal.show();
        }else if(this.feedShowCount == AppSetting.THRESHOLD_3){
          this.monsterSrc = "./assets/monster/Epic.gif"
          this.monsterMsg = "Congrats! Your monster is feeling epic."
          this.modal.show();
        }else if(!this.chewing){
          var currentSrc = this.monsterSrc;
          this.monsterSrc = "./assets/monster/Chewing.gif"
          this.chewing = true;
          setTimeout(()=>{
            this.chewing = false;
            this.monsterSrc = currentSrc;
          },1000)
        }
        // if (this.feedShowCount == 10) {
        //     this.monsterSrc = "./assets/monster/chewing.gif"
        //     this
        //         .modal
        //         .show();
        //     this.feedShowCount = 0;
        // }
    }

    onSubmit() {
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            this
                .httpClient
                .post('http://localhost:8088/add-tags', {
                    user_id: sessionStorage.getItem('user_id'),
                    picture_id: "mo-" + this.arrayIndex,
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
