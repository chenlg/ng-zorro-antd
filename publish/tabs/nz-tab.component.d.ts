import { ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class NzTabComponent implements OnChanges, OnDestroy {
    elementRef: ElementRef;
    private renderer;
    position: number;
    origin: number;
    isActive: boolean;
    readonly stateChanges: Subject<void>;
    content: TemplateRef<void>;
    template: TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzForceRender: boolean;
    nzDisabled: boolean;
    readonly nzClick: EventEmitter<void>;
    readonly nzSelect: EventEmitter<void>;
    readonly nzDeselect: EventEmitter<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
