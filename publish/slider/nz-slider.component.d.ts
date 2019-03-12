import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Marks, SliderHandler, SliderShowTooltip, SliderValue } from './nz-slider-definitions';
export declare class NzSliderComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    private cdr;
    slider: ElementRef;
    nzDisabled: boolean;
    nzDots: boolean;
    nzIncluded: boolean;
    nzRange: boolean;
    nzVertical: boolean;
    nzMarks: Marks;
    nzMax: number;
    nzMin: number;
    nzStep: number;
    nzTooltipVisible: SliderShowTooltip;
    nzTipFormatter: (value: number) => string;
    /** @deprecated 8.0.0, This API is redundant for Angular. */
    nzDefaultValue: SliderValue;
    readonly nzOnAfterChange: EventEmitter<SliderValue>;
    value: SliderValue;
    sliderDOM: HTMLDivElement;
    cacheSliderStart: number;
    cacheSliderLength: number;
    activeValueIndex: number;
    track: {
        offset: any;
        length: any;
    };
    handles: SliderHandler[];
    marksArray: Marks[];
    bounds: {
        lower: any;
        upper: any;
    };
    isDragging: boolean;
    private dragStart$;
    private dragMove$;
    private dragEnd$;
    private dragStart_;
    private dragMove_;
    private dragEnd_;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(val: SliderValue): void;
    onValueChange(_value: SliderValue): void;
    onTouched(): void;
    registerOnChange(fn: (value: SliderValue) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    private setValue;
    private getValue;
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    private getValueToOffset;
    /**
     * Find the closest value to be activated (only for range = true).
     */
    private setActiveValueIndex;
    private setActiveValue;
    /**
     * Update track and handles' position and length.
     */
    private updateTrackAndHandles;
    private onDragStart;
    private onDragMove;
    private onDragEnd;
    /**
     * Create user interactions handles.
     */
    private createDraggingObservables;
    private subscribeDrag;
    private unsubscribeDrag;
    private toggleDragMoving;
    private toggleDragDisabled;
    private findClosestValue;
    private valueToOffset;
    private getSliderStartPosition;
    private getSliderLength;
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    private cacheSliderProperty;
    private formatValue;
    /**
     * Check if value is valid and throw error if value-type/range not match.
     */
    private assertValueValid;
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     */
    private assertValueTypeMatch;
    private valuesEqual;
    /**
     * Show one handle's tooltip and hide others'.
     */
    private showHandleTooltip;
    private hideAllHandleTooltip;
    private generateHandles;
    private generateMarkItems;
}
