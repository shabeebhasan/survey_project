import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-image-tag-conditions',
  templateUrl: './image-tag-conditions.component.html',
  styleUrls: ['./image-tag-conditions.component.scss']
})
export class ImageTagConditionsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSubmit2() {
    this
    .router
    .navigateByUrl('/image-c2-username'); 
  }

  onSubmit() {
    this
    .router
    .navigateByUrl('/image-data'); 
  }

}
