import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'foosball-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  public player;

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService
              ) { }

  async ngOnInit() {
    const playerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.player = await this.apiService.getPlayer(playerId).toPromise();
  }

}
