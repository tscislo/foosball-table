import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule
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
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule
    ],
    declarations: exportableComponents,
    exports: [
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        ...exportableComponents
    ]
})
export class ShareModule {
}
