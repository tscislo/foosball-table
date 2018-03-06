import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import {GameService} from "./game.service";
import {NewGameGuard} from "./newGame.guard";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        ApiService,
        GameService,
        NewGameGuard
    ]
})
export class CoreModule {
}
