import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';
import {AppSetting} from '../AppSetting';

@Component({selector: 'app-image-tag-c2-virtual-game', templateUrl: './image-tag-c2-virtual-game.component.html', styleUrls: ['./image-tag-c2-virtual-game.component.scss']})
export class ImageTagC2VirtualGameComponent implements OnInit {

    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagCount : any;
    tagPercentage : any;
    imgSrc : any;
    virtualSrc : any;
    virtualSrc1 : any;
    virtualSrc2 : any;
    virtualSrc3 : any;
    modalvirtualSrc : any;
    imgeShuffleArray : Array < any >;
    virturlImgeShuffleArray : Array < any >;
    arrayIndex : any;
    virtualArrayIndex : any;
    httpClient : any;
    opacity : any = 0.1;
    virtualItemShowCount : any = 0;
    @ViewChild('modal', null)modal : ModalDirective;

    msgVirtual1 : any = "This is a common item.";
    msgVirtual2 : any = "Congrats! You’ve earned a common item.";

    imgShow1 : boolean = false;
    imgShow2 : boolean = false;
    imgShow3 : boolean = false;

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
        this.virtualArrayIndex = 0;
        this.imgeShuffleArray = this.shuffle();
        this.virturlImgeShuffleArray = this.shuffle();
        this.setImage();
        this.setVirtualImage();
        this.getTag();
    }

    public onItemRemoved(e) {
        this.tagCount -= 1;
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
        if (this.tagCount <= this.THRESHOLD_1) {
            this.tagPercentage = Math.trunc(((this.tagCount / this.THRESHOLD_1) * 100)) + "%"
        } else if (this.tagCount - this.THRESHOLD_1 <= this.THRESHOLD_2 - this.THRESHOLD_1) {
            this.tagPercentage = Math.trunc(((this.tagCount - this.THRESHOLD_1) / (this.THRESHOLD_2 - this.THRESHOLD_1) * 100)) + "%"
        } else if (this.tagCount - this.THRESHOLD_2 <= (this.THRESHOLD_3 - this.THRESHOLD_2)) {
            this.tagPercentage = Math.trunc((((this.tagCount - this.THRESHOLD_2) / (this.THRESHOLD_3 - this.THRESHOLD_2)) * 100)) + "%"
        }

        if (this.tagCount == this.THRESHOLD_1) {
            this.msgVirtual1 = "This is a very rare item."
            this.msgVirtual2 = "Congrats! You’ve earned a common item."
            this.virtualSrc = this.virtualSrc2;
            this.modalvirtualSrc = this.virtualSrc1;
            this.imgShow1 = true;
            this.opacity = 0.09;
            this
                .modal
                .show()
            this.tagPercentage = 0;
        } else if (this.tagCount == this.THRESHOLD_2) {
            this.msgVirtual1 = "This is a legendary item."
            this.msgVirtual2 = "Congrats! You’ve earned a very rare item."
            this.virtualSrc = this.virtualSrc3;
            this.modalvirtualSrc = this.virtualSrc2;
            this.imgShow2 = true;
            this.opacity = 0.09;
            this
                .modal
                .show()
            this.tagPercentage = 0;
        } else if (this.tagCount == this.THRESHOLD_3) {
            this.msgVirtual2 = "Congrats! You’ve earned a legendary item."
            this.virtualSrc = this.virtualSrc3;
            this.modalvirtualSrc = this.virtualSrc3;
            this.imgShow3 = true;
            this.opacity = 1;
            this
                .modal
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

        // if (this.virtualItemShowCount == 0) {   this.virtualArrayIndex++;
        // this.opacity = parseFloat("0.1") } this.virtualItemShowCount++; if
        // (this.virtualItemShowCount == 10) {     this         .modal         .show()
        // this.virtualItemShowCount = 0; }else if (this.virtualItemShowCount >= 10) {
        //   this.opacity = 1; } else {     this.opacity = parseFloat("0." +
        // this.virtualItemShowCount) }
    }

    setImage() {
        this.imgSrc = "./assets/pictures/" + this.imgeShuffleArray[this.arrayIndex] + ".jpg";
        this.arrayIndex++;
        this.getTag();
    }

    setVirtualImage() {
        this.virtualSrc1 = "./assets/virtual_items/1.png";
        this.virtualSrc2 = "./assets/virtual_items/2.png";
        this.virtualSrc3 = "./assets/virtual_items/3.png";
        this.virtualSrc = this.virtualSrc1;
    }

    getTag() {
        this
            .httpClient
            .post('http://localhost:8088/get-tags', {
                user_id: sessionStorage.getItem('user_id'),
                picture_id: "vi-" + this.arrayIndex
            })
            .subscribe((data) => {
                console.log("Image Tags: ", data)
                if (data) {
                    this.items = JSON.parse(data.tags)
                }
            });
    }

    onSubmit() {
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            this
                .httpClient
                .post('http://localhost:8088/add-tags', {
                    user_id: sessionStorage.getItem('user_id'),
                    picture_id: "vi-" + this.arrayIndex,
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
