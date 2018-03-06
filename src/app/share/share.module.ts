import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule,
    MatSelectModule
} from "@angular/material";
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
        MatSelectModule,
        MatFormFieldModule
    ],
    declarations: exportableComponents,
    exports: [
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        ...exportableComponents
    ]
})
export class ShareModule {
}
