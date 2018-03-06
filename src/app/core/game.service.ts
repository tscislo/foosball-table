import {Injectable} from '@angular/core';
import {Player} from "./interfaces/player.interface";

@Injectable()
export class GameService {

    public teamA: Player[];
    public teamB: Player[];

    public isInProgress = () => this.teamA && this.teamB && this.teamA.length && this.teamB.length;

    public finish = () => {
        this.teamA = [];
        this.teamB = [];
    }

    constructor() {
    }

}
