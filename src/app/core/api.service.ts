import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseURL = './assets';

  public getPlayers = () => this.http.get(`${this.baseURL}/players.json`);


}
