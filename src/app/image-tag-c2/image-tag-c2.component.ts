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

    //
    startTime:any =  Date.now()
    endTime:any;
    
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

    public onItemRemoved(e) {
        this.tagCount -= 1;
        this.chartDatasets = [
          {
              data: [
                  100, 50, 30, 10, this.tagCount
              ],
              label: ''
          }
      ];
    }

    getTag() {
        this
            .httpClient
            .post('http://localhost:8088/get-tags', {
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
        this.getTag();
    }

    startTagging() {
        this.start = true;
    }

    public onItemAdded(e) {
        this.tagCount += 1;
        this.chartDatasets = [
            {
                data: [
                    100, 50, 30, 10, this.tagCount
                ],
                label: ''
            }
        ];
    }

    onSubmit() {
      this.endTime = Date.now()

        this
            .httpClient
            .post('http://localhost:8088/add-tags', {
                user_id: sessionStorage.getItem('user_id') + '-' + localStorage.getItem('playtime'),
                picture_id: "c2-" + (this.imgeShuffleArray[this.arrayIndex]),
                tags: JSON.stringify(this.items),
                time_start: this.startTime,
                time_end: this.endTime
            })
            .subscribe((data) => {});
        this.arrayIndex++;
        if (this.arrayIndex < this.imgeShuffleArray.length) {
            console.log('onSubmit:: ', this.tagCount);
            this.items = '';
            this.setImage();
            this.startTime = Date.now()
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
                        .navigateByUrl('/image-c2-username');
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

    public chartType : string = 'bar';

    public chartDatasets : Array < any > = [
        {
            data: [
                100, 50, 30, 10
            ],
            label: ''
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
