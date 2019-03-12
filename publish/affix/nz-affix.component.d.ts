import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
export declare class NzAffixComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private doc;
    nzTarget: string | Element | Window;
    nzOffsetTop: number;
    nzOffsetBottom: number;
    readonly nzChange: EventEmitter<boolean>;
    constructor(_el: ElementRef, scrollSrv: NzScrollService, doc: any);
    private timeout;
    private readonly events;
    private fixedEl;
    private affixStyle;
    private placeholderStyle;
    private placeholderNode;
    private _target;
    private _offsetTop;
    private _offsetBottom;
    ngOnInit(): void;
    ngOnDestroy(): void;
    getOffset(element: Element, target: Element | Window | null): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    private setTargetEventListeners;
    private clearEventListeners;
    private getTargetRect;
    private genStyle;
    private setAffixStyle;
    private setPlaceholderStyle;
    private syncPlaceholderStyle;
    updatePosition(e: Event): void;
}
