import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { DateHelperService } from '../i18n/date-helper.service';
import { CandyDate } from './lib/candy-date';
export declare class NzPickerComponent implements OnInit, AfterViewInit {
    private dateHelper;
    private changeDetector;
    noAnimation: boolean;
    isRange: boolean;
    open: boolean;
    disabled: boolean;
    placeholder: string | string[];
    allowClear: boolean;
    autoFocus: boolean;
    className: string;
    format: string;
    size: 'large' | 'small';
    style: object;
    value: CandyDate | CandyDate[];
    readonly valueChange: EventEmitter<CandyDate | CandyDate[]>;
    readonly openChange: EventEmitter<boolean>;
    origin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    pickerInput: ElementRef;
    prefixCls: string;
    animationOpenState: boolean;
    overlayOpen: boolean;
    overlayOffsetY: number;
    overlayOffsetX: number;
    overlayPositions: ConnectionPositionPair[];
    dropdownAnimation: 'top' | 'bottom';
    currentPositionX: 'start' | 'end';
    currentPositionY: 'top' | 'bottom';
    readonly realOpenState: boolean;
    constructor(dateHelper: DateHelperService, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    showOverlay(): void;
    hideOverlay(): void;
    onClickInputBox(): void;
    onClickBackdrop(): void;
    onOverlayDetach(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    onClickClear(event: MouseEvent): void;
    getReadableValue(partType?: RangePartType): string;
    getPartTypeIndex(partType: RangePartType): number;
    getPlaceholder(partType?: RangePartType): string;
    isEmptyValue(value: CandyDate[] | CandyDate): boolean;
    isOpenHandledByUser(): boolean;
    animationStart(): void;
    animationDone(): void;
}
export declare type RangePartType = 'left' | 'right';
