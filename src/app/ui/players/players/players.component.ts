import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/api.service";
import {Player} from "../../../core/interfaces/player.interface";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'foosball-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public players: Observable<Player[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.players = this.apiService.getPlayers();
  }

}
