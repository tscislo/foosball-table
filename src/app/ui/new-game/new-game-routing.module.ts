import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewGameComponent} from "./new-game/new-game.component";

const routes: Routes = [
    {
        path: '',
        component: NewGameComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewGameRoutingModule { }
