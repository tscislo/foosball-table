import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewGameGuard} from "./core/newGame.guard";

const routes: Routes = [
    {
        path: 'players',
        loadChildren: './ui/players/players.module#PlayersModule'
    },
    {
        path: 'player-details',
        loadChildren: './ui/player-details/player-details.module#PlayerDetailsModule'
    },
    {
        path: 'new-game',
        loadChildren: './ui/new-game/new-game.module#NewGameModule'
    },
    {
        path: 'game-progress',
        loadChildren: './ui/game-progress/game-progress.module#GameProgressModule',
        canActivate: [NewGameGuard]
    },
    {
        path: '**',
        redirectTo: 'players'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
