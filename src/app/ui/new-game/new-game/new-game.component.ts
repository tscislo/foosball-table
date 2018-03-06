import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../core/api.service";
import {Player} from "../../../core/interfaces/player.interface";
import {GameService} from "../../../core/game.service";
import {Router} from "@angular/router";

@Component({
    selector: 'foosball-new-game',
    templateUrl: './new-game.component.html',
    styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

    public players: Player[];

    public isGameValid = () =>
        this.getTeam('team_A').length === 2 &&
        this.getTeam('team_B').length === 2;


    private getTeam = (teamName) => this.players.filter((player) => player.team === teamName)

    constructor(private apiService: ApiService,
                private gameService: GameService,
                private router: Router
                ) {
    }

    async ngOnInit() {
        this.players = await this.apiService.getPlayers().toPromise();
    }

    public start() {
        this.gameService.teamA = this.getTeam('team_A');
        this.gameService.teamB = this.getTeam('team_B');
        this.router.navigate(['/game-progress']);
    }

}
