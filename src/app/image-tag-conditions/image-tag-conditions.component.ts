import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({selector: 'app-image-tag-conditions', templateUrl: './image-tag-conditions.component.html', styleUrls: ['./image-tag-conditions.component.scss']})
export class ImageTagConditionsComponent implements OnInit {

    gameCofig : any;
    disabledSubmitButton : boolean = false;
    http : any;

    constructor(private router : Router, http : HttpClient) {
        this.http = http;
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

    onSubmit2() {
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

    onSubmit() {
        this
            .router
            .navigateByUrl('/image-data');
    }

}
