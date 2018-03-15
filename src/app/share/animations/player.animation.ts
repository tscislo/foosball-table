import {
    trigger,
    style,
    animate,
    transition, state
} from '@angular/animations';

export const playerAnimation = trigger(
    'playerAnimation', [
        state('team_A', style({
            'background-color': '#ff9ca1'
        })),
        state('team_B', style({
            'background-color': '#ffe363'
        })),
        state('', style({
            'background-color': '#ffffff'
        })),
        transition('* <=> *', animate('500ms'))
    ]
)