import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../core/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'foosball-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.scss']
})
export class GameProgressComponent implements OnInit {

  constructor(public gameService: GameService,
              private router: Router
              ) { }

  ngOnInit() {
  }


  public save() {
    // TODO: Here we could integrate with server
    this.gameService.finish();
    this.router.navigate(['/']);
  }

}
