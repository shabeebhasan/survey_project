import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ModalDirective} from 'angular-bootstrap-md';
import {AppSetting} from '../AppSetting';

@Component({selector: 'app-multi-game', templateUrl: './multi-game.component.html', styleUrls: ['./multi-game.component.scss']})
export class MultiGameComponent implements OnInit {

    virtualmonsterGameEnable : boolean = false;
    leaderBoardEnable : boolean = false;
    UnlockableItems : boolean = false;
    BadgeEnable : boolean = false;

    //monster
    imageForm : FormGroup;
    disabledSubmitButton : boolean = false;
    optionsSelect : Array < any >;
    items : any;
    tagCount : any;
    chewing : boolean = false;
    imgSrc : any;
    monsterSrc : any = "./assets/monster/idle.gif";
    imgeShuffleArray : Array < any >;
    arrayIndex : any;
    httpClient : any;
    tagPercentage : any;
    monsterMsg : any = "Your monster is feeling hungry.";
    tagCount : any = 0;
    @ViewChild('modalMonster', null)modalMonster : ModalDirective;

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
    opacity : any = 0.09;
    virtualItemShowCount : any = 0;
    @ViewChild('virtualModal', null)virtualModal : ModalDirective;

    imgShow1 : boolean = false;
    imgShow2 : boolean = false;
    imgShow3 : boolean = false;
    msgVirtual1 : any = "This is a common item.";
    msgVirtual2 : any = "Congrats! You’ve earned a common item.";

    //badge work

    LockedBagdeImg : any = "./assets/badges/locked.png";
    full : any = "./assets/badges/full.png";
    bronzeShow : boolean = false;
    goldShow : boolean = false;
    silverShow : boolean = false;
    bronzeBagdeImg : any = "./assets/badges/FrameLvl2@4x.png";
    silverBagdeImg : any = "./assets/badges/FrameLvl4@4x.png";
    goldenBagdeImg : any = "./assets/badges/FrameLvl7@4x.png";

    @ViewChild('silverBagde', null)silverBagde : ModalDirective;
    @ViewChild('goldenBagde', null)goldenBagde : ModalDirective;
    @ViewChild('bronzeBagde', null)bronzeBagde : ModalDirective;
    //
    startTime : any = Date.now()
    endTime : any;

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

        //virtual
        this.setVirtualImage();

        this.BadgeEnable = (localStorage.getItem('badge_challange') === 'true')
        this.leaderBoardEnable = (localStorage.getItem('leader_board') === 'true')
        this.UnlockableItems = (localStorage.getItem('unlockable') === 'true')
        this.virtualmonsterGameEnable = (localStorage.getItem('virtural') === 'true')
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
        this.chartDatasets = [
            {
                data: [
                    100, 50, 30, 10, this.tagCount
                ],
                label: ''
            }
        ];
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
        if (this.tagCount == AppSetting.THRESHOLD_1) {
            this.monsterSrc = "./assets/monster/Idle.gif"
            this.monsterMsg = "Your monster is feeling idle."
            this.tagPercentage = 0;
        } else if (this.tagCount == AppSetting.THRESHOLD_2) {
            this.monsterSrc = "./assets/monster/Happy.gif"
            this.monsterMsg = "Congrats! Your monster is feeling happy."
            this.tagPercentage = 0;
        } else if (this.tagCount == AppSetting.THRESHOLD_3) {
            this.monsterSrc = "./assets/monster/Epic.gif"
            this.monsterMsg = "Congrats! Your monster is feeling epic."
        } else if (!this.chewing) {
            var currentSrc = this.monsterSrc;
            this.monsterSrc = "./assets/monster/Chewing.gif"
            this.chewing = true;
            setTimeout(() => {
                this.chewing = false;
                this.monsterSrc = currentSrc;
            }, 1000)
        }
        // if (this.tagCount == 10) {     this.monsterSrc =
        // "./assets/monster/chewing.gif"     this         .modal         .show();
        // this.tagCount = 0; } virtual
        if (this.tagCount == this.THRESHOLD_1) {
            this.msgVirtual1 = "This is a very rare item."
            this.msgVirtual2 = "Congrats! You’ve earned a common item."
            this.virtualSrc = this.virtualSrc2;
            this.modalvirtualSrc = this.virtualSrc1;
            this.imgShow1 = true;
            this.opacity = 0.09;
            this.tagPercentage = 0;
        } else if (this.tagCount == this.THRESHOLD_2) {
            this.msgVirtual1 = "This is a legendary item."
            this.msgVirtual2 = "Congrats! You’ve earned a very rare item."
            this.virtualSrc = this.virtualSrc3;
            this.modalvirtualSrc = this.virtualSrc2;
            this.imgShow2 = true;
            this.opacity = 0.09;
            this.tagPercentage = 0;
        } else if (this.tagCount == this.THRESHOLD_3) {
            this.msgVirtual2 = "Congrats! You’ve earned a legendary item."
            this.virtualSrc = this.virtualSrc3;
            this.modalvirtualSrc = this.virtualSrc3;
            this.imgShow3 = true;
            this.opacity = 1;
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

        //leaderBoard
        this.chartDatasets = [
            {
                data: [
                    100, 50, 30, 10, this.tagCount
                ],
                label: ''
            }
        ];

        //badge work
        console.log('this.tagCount:', this.tagCount);
        if (this.tagCount == AppSetting.THRESHOLD_1) {
            this.bronzeShow = true;
            this.openModal();
        }
        if (this.tagCount == AppSetting.THRESHOLD_2) {
            this.silverShow = true;
            this.openModal();
        }
        if (this.tagCount == AppSetting.THRESHOLD_3) {
            this.goldShow = true;
            this.openModal();
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

    openmodalMonsterDialog() {
        this
            .modalMonster
            .show();
    }

    openmodalVirtualDialog() {
        this
            .virtualModal
            .show();
    }

    setVirtualImage() {
        this.virtualSrc1 = "./assets/virtual_items/1.png";
        this.virtualSrc2 = "./assets/virtual_items/2.png";
        this.virtualSrc3 = "./assets/virtual_items/3.png";
        this.virtualSrc = this.virtualSrc1;
    }

    openModal() {
        console.log("openModal")

        if (this.tagCount == AppSetting.THRESHOLD_1) {
            if (this.BadgeEnable) {
                this.openbronzeBagdeDialog();
            }
            if (this.virtualmonsterGameEnable) {
                this.openmodalMonsterDialog();
            }
            if (this.UnlockableItems) {
                this.openmodalVirtualDialog();
            }
        }
        if (this.tagCount == AppSetting.THRESHOLD_2) {
            if (this.BadgeEnable) {
                this.openSilverDialog();
            }
            if (this.virtualmonsterGameEnable) {
                this.openmodalMonsterDialog();
            }
            if (this.UnlockableItems) {
                this.openmodalVirtualDialog();
            }
        }
        if (this.tagCount == AppSetting.THRESHOLD_3) {
            if (this.BadgeEnable) {
                this.opengoldenDialog();
            }
            if (this.virtualmonsterGameEnable) {
                this.openmodalMonsterDialog();
            }
            if (this.UnlockableItems) {
                this.openmodalVirtualDialog();
            }
        }
    }

    onSubmit() {
        this.endTime = Date.now()

        this
            .httpClient
            .post('http://localhost:8088/add-tags', {
                user_id: sessionStorage.getItem('user_id') + '-' + localStorage.getItem('playtime'),
                picture_id: "mul-" + (this.imgeShuffleArray[this.arrayIndex]),
                tags: JSON.stringify(this.items),
                time_start: this.startTime,
                time_end: this.endTime
            })
            .subscribe((data) => {});
        this.arrayIndex++;
        console.log('onSubmit:: ', this.tagCount);
        if (this.arrayIndex < this.imgeShuffleArray.length) {
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
