import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'players',
        loadChildren: './ui/players/players.module#PlayersModule'
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
