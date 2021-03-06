import { OnChanges, SimpleChanges } from '@angular/core';
import { DisplayedStep, ExtendedMark } from './nz-slider-definitions';
export declare class NzSliderStepComponent implements OnChanges {
    nzLowerBound: number;
    nzUpperBound: number;
    nzMarksArray: ExtendedMark[];
    nzVertical: boolean;
    nzIncluded: boolean;
    steps: DisplayedStep[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, step: DisplayedStep): number;
    private buildSteps;
    private togglePointActive;
}
