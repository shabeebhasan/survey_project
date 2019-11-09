import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getQuestionsOne(){
    return this.http.get('http://localhost:8081/questions-one');
  }

  public getActivitySurvey(){
    return this.http.get('http://localhost:8081/activity-flow');
  }

  public getMotivationQuestion(){
    return this.http.get('http://localhost:8081/motivations-survey');
  }

  public postUserData(data){
    return this.http.post('http://localhost:8081/motivations-survey',data);
  }

}
