import { Component, OnInit,HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { nationalities } from '../nationality';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.scss']
})
export class PersonaldataComponent implements OnInit {

  contactForm: FormGroup;
  optionsSelect: Array<any>;
  nationalities:Array<any>;
  disabledSubmitButton: boolean = false;

  constructor(private fb: FormBuilder,private router: Router) {

    this.nationalities = nationalities;
    this.contactForm = fb.group({
      'Name': ['', Validators.required],
      'Age': ['', Validators.required],
      'Occupation': ['', Validators.required],
      'Education': ['', Validators.required],
      'Nationality': ['', Validators.required],
      'Gender': ['', Validators.required],
      'playVideoGame': ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.contactForm);
    
    if (!this.contactForm.valid) {
      alert("Please fill the required fields.");
      return;
    }
    if(this.contactForm.value.Age < 18 || this.contactForm.value.Age > 100){
      alert("AGE should be between 18 to 100");
      return;
    }
    if (this.contactForm.valid) {      
      this.router.navigateByUrl('/questions-one');
    }
  }
}
