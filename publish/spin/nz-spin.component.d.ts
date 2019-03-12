import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSizeLDSType } from '../core/types/size';
export declare class NzSpinComponent implements OnChanges, OnDestroy, OnInit {
    private cdr;
    nzIndicator: TemplateRef<void>;
    nzSize: NzSizeLDSType;
    nzTip: string;
    nzDelay: number;
    nzSimple: boolean;
    nzSpinning: boolean;
    private spinning$;
    private loading$;
    private loading_;
    loading: boolean;
    subscribeLoading(): void;
    unsubscribeLoading(): void;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
