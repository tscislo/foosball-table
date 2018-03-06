import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GameProgressRoutingModule} from './game-progress-routing.module';
import {GameProgressComponent} from './game-progress/game-progress.component';
import {ShareModule} from "../../share/share.module";

@NgModule({
    imports: [
        CommonModule,
        GameProgressRoutingModule,
        ShareModule
    ],
    declarations: [GameProgressComponent]
})
export class GameProgressModule {
}
