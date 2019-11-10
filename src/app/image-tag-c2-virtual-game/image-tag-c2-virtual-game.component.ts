import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';

@Component({selector: 'app-image-tag-c2-virtual-game', templateUrl: './image-tag-c2-virtual-game.component.html', styleUrls: ['./image-tag-c2-virtual-game.component.scss']})
export class ImageTagC2VirtualGameComponent implements OnInit {

    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagCount : any;
    imgSrc : any;
    virtualSrc : any;
    imgeShuffleArray : Array < any >;
    virturlImgeShuffleArray : Array < any >;
    arrayIndex : any;
    virtualArrayIndex : any;
    httpClient : any;
    opacity : any = 0.1;
    @ViewChild('modal', null)modal : ModalDirective;

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

    public onItemAdded(e) {
        if (this.items.length == 10) {
            this
                .modal
                .show()
        }
        if (this.items.length >= 10) {
            this.opacity = 1;
        } else {
            this.opacity = parseFloat("0." + this.items.length)
        }
    }

    setImage() {
        this.imgSrc = "./assets/pictures/" + this.imgeShuffleArray[this.arrayIndex] + ".jpg";
        this.arrayIndex++;
        this.opacity = 0.1;
        this.getTag();
    }

    setVirtualImage() {
        this.virtualSrc = "./assets/virtual_items/" + this.virturlImgeShuffleArray[this.virtualArrayIndex] + ".png";
        this.virtualArrayIndex++;
    }

    getTag() {
        this
            .httpClient
            .post('http://localhost:8081/get-tags', {
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
        this.tagCount += this.items.length;
        if (this.arrayIndex < this.imgeShuffleArray.length) {
          this
              .httpClient
              .post('http://localhost:8081/add-tags', {
                  user_id: sessionStorage.getItem('user_id'),
                  picture_id: "vi-" + this.arrayIndex,
                  tags: JSON.stringify(this.items)
              })
              .subscribe((data) => {});
            console.log('onSubmit:: ', this.tagCount);
            this.items = '';
            this.setImage();
            this.setVirtualImage();
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
                        .navigateByUrl('/motivation-data');
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
