import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../core/api.service";
import {Player} from "../../../core/interfaces/player.interface";

@Component({
    selector: 'foosball-new-game',
    templateUrl: './new-game.component.html',
    styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

    public players: Player[];

    private isGameValid = () =>
        this.players.filter((player) => player.team === 'team_A').length === 2 &&
        this.players.filter((player) => player.team === 'team_B').length === 2;


    constructor(private apiService: ApiService) {
    }

    async ngOnInit() {
        this.players = await this.apiService.getPlayers().toPromise();
    }

}
