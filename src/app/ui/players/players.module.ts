import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayersRoutingModule} from './players-routing.module';
import {PlayersComponent} from './players/players.component';
import {ShareModule} from "../../share/share.module";

@NgModule({
    imports: [
        CommonModule,
        PlayersRoutingModule,
        ShareModule
    ],
    declarations: [PlayersComponent]
})
export class PlayersModule {
}
