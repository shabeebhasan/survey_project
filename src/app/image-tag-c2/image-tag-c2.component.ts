import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-image-tag-c2',
  templateUrl: './image-tag-c2.component.html',
  styleUrls: ['./image-tag-c2.component.scss']
})
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
      this.imgSrc = "./assets/pictures/" + this.imgeShuffleArray[this.arrayIndex] + ".jpg";
      this.arrayIndex++;
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

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [10000, 6000, 3100, 3000, 1000], label: 'TOP USERS' }
  ];

  public chartLabels: Array<any> = ['verdandi', 'neo23', 'Sie', 'legolas', 'snork85'];

  public chartColors: Array<any> = [
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
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
