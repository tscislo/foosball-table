import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule} from "@angular/material";
import { HeaderComponent } from './header/header.component';

const exportableComponents = [
    HeaderComponent
]

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule
    ],
    declarations: exportableComponents,
    exports: [
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        ...exportableComponents
    ]
})
export class ShareModule {
}
