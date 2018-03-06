import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerDetailsComponent} from "./player-details/player-details.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '1'
    },
    {
        path: ':id',
        component: PlayerDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerDetailsRoutingModule { }
