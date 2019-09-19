import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.scss']
})
export class PersonaldataComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  constructor(private fb: FormBuilder) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  ngOnInit() {

  this.optionsSelect = [
    { value: 'Feedback', label: 'Feedback' },
    { value: 'Report a bug', label: 'Report a bug' },
    { value: 'Feature request', label: 'Feature request' },
    { value: 'Other stuff', label: 'Other stuff' },
    ];
  }

  onSubmit() {
    
    alert('Your message has been sent.');
  }
}
