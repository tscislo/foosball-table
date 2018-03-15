import {
    trigger,
    style,
    animate,
    transition
} from '@angular/animations';

export const entryAnimation = trigger(
    'enterAnimation', [
        transition(':enter', [
            style({opacity: 0}),
            animate(500, style({opacity: 1}))
        ]),
        transition(':leave', [
            animate(500, style({opacity: 0}))
        ])
    ]
)