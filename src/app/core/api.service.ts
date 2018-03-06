import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import {Observable} from "rxjs/Observable";
import {Player} from "./interfaces/player.interface";

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    private baseURL = './assets';

    public getPlayers = ():Observable<Player[]> => this.http.get(`${this.baseURL}/players.json`).map((players: any) => players.players);

    public getPlayer = (id):Observable<Player> => this.http.get(`${this.baseURL}/players.json`)
        .map((players: any) => players.players)
        .map((players) => players.find((player) => player.id.toString() === id));


}
