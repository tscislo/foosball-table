import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {GameService} from "./game.service";

@Injectable()
export class NewGameGuard implements CanActivate {

    constructor(private router: Router,
                private gameService: GameService) {

    }

    canActivate = () => {
        if (!this.gameService.isInProgress()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

}
