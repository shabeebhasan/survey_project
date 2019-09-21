import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './welcome.component.html', styleUrls: ['./welcome.component.css']})
export class WelcomeComponent implements OnInit {

    title = 'Welcome to my experiment';

    constructor() {}

    ngOnInit() {
        sessionStorage.removeItem('user_id');
    }

}
