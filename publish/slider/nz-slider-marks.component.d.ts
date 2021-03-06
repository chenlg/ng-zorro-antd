import { OnChanges, SimpleChanges } from '@angular/core';
import { DisplayedMark, ExtendedMark } from './nz-slider-definitions';
export declare class NzSliderMarksComponent implements OnChanges {
    nzLowerBound: number;
    nzUpperBound: number;
    nzMarksArray: ExtendedMark[];
    nzMin: number;
    nzMax: number;
    nzVertical: boolean;
    nzIncluded: boolean;
    marks: DisplayedMark[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, mark: DisplayedMark): number;
    private buildMarks;
    private buildStyles;
    private togglePointActive;
}
