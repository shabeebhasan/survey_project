import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-questions',
  templateUrl: './image-questions.component.html',
  styleUrls: ['./image-questions.component.scss']
})
export class ImageQuestionsComponent implements OnInit {

  imageForm: FormGroup;
  disabledSubmitButton: boolean = false;
  optionsSelect: Array<any>;
  items:any;
  tagCount:any;
  imgSrc:any;
  imgeShuffleArray: Array<any>;
  arrayIndex:any;

  constructor(private fb: FormBuilder,private router: Router) {

  this.imageForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  ngOnInit() {
    this.items = '';
    this.tagCount = 0;
    this.arrayIndex = 0;
    this.imgeShuffleArray = this.shuffle();
    this.setImage();
  }

  setImage(){
    this.imgSrc = "./assets/pictures/"+this.imgeShuffleArray[this.arrayIndex]+".jpg";
    this.arrayIndex++;
  }

  onSubmit() {
    if(this.arrayIndex < this.imgeShuffleArray.length){
      this.tagCount += this.items.length;
      console.log('onSubmit:: ',this.tagCount);
      this.items = '';
      this.setImage();
    }else{
      this.router.navigateByUrl('/motivation-data');
    }
  }
  
  shuffle() {
    let a = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
