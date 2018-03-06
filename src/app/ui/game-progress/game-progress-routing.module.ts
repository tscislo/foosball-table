import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameProgressComponent} from "./game-progress/game-progress.component";

const routes: Routes = [
    {
        path: '',
        component: GameProgressComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameProgressRoutingModule { }
