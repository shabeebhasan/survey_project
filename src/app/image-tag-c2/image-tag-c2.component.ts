import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({selector: 'app-image-tag-c2', templateUrl: './image-tag-c2.component.html', styleUrls: ['./image-tag-c2.component.scss']})
export class ImageTagC2Component implements OnInit {

    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagCount : any;
    imgSrc : any;
    imgeShuffleArray : Array < any >;
    arrayIndex : any;
    httpClient : any;
    start : boolean = false;

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

    getTag() {
        this
            .httpClient
            .post('http://localhost:8081/get-tags', {
                user_id: sessionStorage.getItem('user_id'),
                picture_id: "c2-" + this.arrayIndex
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

    startTagging() {
        this.start = true;
    }

    onSubmit() {
        this.tagCount += this.items.length;
        this.chartDatasets = [
            {
                data: [
                    100, 50, 30, 10, this.tagCount
                ],
                label: 'TOP USERS'
            }
        ];
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            this
                .httpClient
                .post('http://localhost:8081/add-tags', {
                    user_id: sessionStorage.getItem('user_id'),
                    picture_id: "c2-" + this.arrayIndex,
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
                        .navigateByUrl('/image-c2-username');
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

    public chartType : string = 'bar';

    public chartDatasets : Array < any > = [
        {
            data: [
                100, 50, 30, 10
            ],
            label: 'TOP USERS'
        }
    ];

    public chartLabels : Array < any > = ['verdandi', 'neo23', 'legolas', 'snork85', 'you'];

    public chartColors : Array < any > = [
        {
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }
    ];

    public chartOptions : any = {
        responsive: true
    };
    public chartClicked(e : any) : void {}
    public chartHovered(e : any) : void {}

}
