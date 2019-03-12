import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CascaderOption } from './types';
export declare class NzCascaderOptionComponent {
    private sanitizer;
    private cdr;
    option: CascaderOption;
    activated: boolean;
    highlightText: string;
    nzLabelProperty: string;
    constructor(sanitizer: DomSanitizer, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    getOptionLabel(): string;
    renderHighlightString(str: string): string;
    markForCheck(): void;
}
