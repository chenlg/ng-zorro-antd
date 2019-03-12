import { OnChanges, SimpleChanges } from '@angular/core';
export interface NzSliderTrackStyle {
    bottom?: string;
    height?: string;
    left?: string;
    width?: string;
    visibility?: string;
}
export declare class NzSliderTrackComponent implements OnChanges {
    nzOffset: any;
    nzLength: any;
    nzVertical: boolean;
    nzIncluded: boolean;
    style: NzSliderTrackStyle;
    ngOnChanges(changes: SimpleChanges): void;
}
