import { NgZone } from '@angular/core';
export declare class NzWaveRenderer {
    private triggerElement;
    private ngZone;
    private insertExtraNode;
    private waveTransitionDuration;
    private styleForPseudo;
    private extraNode;
    private lastTime;
    readonly waveAttributeName: string;
    constructor(triggerElement: HTMLElement, ngZone: NgZone, insertExtraNode: boolean);
    onClick: (event: MouseEvent) => void;
    bindTriggerEvent(): void;
    removeTriggerEvent(): void;
    removeStyleAndExtraNode(): void;
    destroy(): void;
    private fadeOutWave;
    private isValidColor;
    private isNotGrey;
    private getWaveColor;
    private runTimeoutOutsideZone;
}
