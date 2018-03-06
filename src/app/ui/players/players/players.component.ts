import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'foosball-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public players;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPlayers().subscribe((players:any) => {
        this.players = players.players;
    })
  }

}
