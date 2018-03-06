import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayerDetailsRoutingModule} from './player-details-routing.module';
import {PlayerDetailsComponent} from './player-details/player-details.component';
import {ShareModule} from "../../share/share.module";

@NgModule({
    imports: [
        CommonModule,
        PlayerDetailsRoutingModule,
        ShareModule
    ],
    declarations: [PlayerDetailsComponent]
})
export class PlayerDetailsModule {
}
