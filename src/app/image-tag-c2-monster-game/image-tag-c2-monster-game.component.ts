import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';

@Component({selector: 'app-image-tag-c2-monster-game', templateUrl: './image-tag-c2-monster-game.component.html', styleUrls: ['./image-tag-c2-monster-game.component.scss']})
export class ImageTagC2MonsterGameComponent implements OnInit {

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
    @ViewChild('modal', null)modal : ModalDirective;

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
    }

    setImage() {
        this.monsterSrc = "./assets/monster/idle.gif"
        this.imgSrc = "./assets/pictures/" + this.imgeShuffleArray[this.arrayIndex] + ".jpg";
        this.arrayIndex++;
    }

    public onItemAdded(e) {
        if (this.items.length == 10) {
            this.monsterSrc = "./assets/monster/chewing.gif"
            this
                .modal
                .show();
        }
    }

    onSubmit() {
        if (this.items.length == 0) {
            alert("No empty tags (each image should have at least one tag)");
            return;
        }
        this.tagCount += this.items.length;
        if (this.arrayIndex < this.imgeShuffleArray.length) {
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
