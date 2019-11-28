# Game Modes in Image Tagging 

./src/assets/game_config.json

{
  "game_mode_activated_by_code": "1",
  "code_fake_leader": "1",
  "code_badge_game": "2",
  "code_virtural_game": "3",
  "code_monster_game": "4"
}

for Fake Leader Game: "game_mode_activated_by_code": "1".

for Badges Game: "game_mode_activated_by_code": "2".

for Virtual Item Game: "game_mode_activated_by_code": "3".

for Monster Game: "game_mode_activated_by_code": "4".

# Image Tag Data Saved in Database (table: picture_tags)

picture_id prfix: 
  Conditions One ==> c1
  
  Condition Two:
  
  - Virturl Items ==> vi
  - Monster ==> mo
  - Badge ==> bg
  - LeaderBoard ==> c2
  
picture_code:
  10 pictures with code 1 to 10.
  
  * picture_id is developed by prefix-picture_code

# REQUIRED 
- PHPMYADMIN
- NODEJS
- NPM
- ANGULAR CLI

npm install

# DATABASE Setup in MYSQL

import the "survey_db.sql" in phpmyadmin after creating a database with name "survey_db"

# SERVER START
node .\server.js

# FRONTEND ANGULAR RUN

ng serve --open

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
