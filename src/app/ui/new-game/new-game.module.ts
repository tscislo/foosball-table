import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewGameRoutingModule} from './new-game-routing.module';
import {NewGameComponent} from './new-game/new-game.component';
import {ShareModule} from "../../share/share.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonModule,
        NewGameRoutingModule,
        ShareModule
    ],
    declarations: [NewGameComponent]
})
export class NewGameModule {
}
