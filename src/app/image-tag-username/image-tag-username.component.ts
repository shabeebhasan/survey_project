import {Component, OnInit, HostListener} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {nationalities} from '../nationality';

@Component({selector: 'app-image-tag-username', templateUrl: './image-tag-username.component.html', styleUrls: ['./image-tag-username.component.scss']})
export class ImageTagUsernameComponent implements OnInit {

    contactForm : FormGroup;
    optionsSelect : Array < any >;
    nationalities : Array < any >;
    gameCofig : any;
    disabledSubmitButton : boolean = false;
    http : any;

    constructor(private fb : FormBuilder, private router : Router, http : HttpClient) {
        this.http = http;
        this.nationalities = nationalities;
        this.contactForm = fb.group({
            'Username': ['', Validators.required]
        });
    }

    ngOnInit() {
        this
            .http
            .get('assets/game_config.json') //, options)
            .subscribe(res => {
                console.log(res)
                this.gameCofig = res
            });
    }

    onSubmit() {
        if (!this.contactForm.valid) {
            alert("Please fill the required fields.");
            return;
        }
        if (this.gameCofig.game_mode_activated_by_code === this.gameCofig.code_fake_leader) {
            this
                .router
                .navigateByUrl('/image-c2-tag');
        }
        if (this.gameCofig.game_mode_activated_by_code === this.gameCofig.code_badge_game) {
            this
                .router
                .navigateByUrl('/image-c2-batch');
        }
        if (this.gameCofig.game_mode_activated_by_code === this.gameCofig.code_virtural_game) {
            this
                .router
                .navigateByUrl('/image-c2-virtual');
        }
        if (this.gameCofig.game_mode_activated_by_code === this.gameCofig.code_monster_game) {
            this
                .router
                .navigateByUrl('/image-c2-monster');
        }
    }
}
