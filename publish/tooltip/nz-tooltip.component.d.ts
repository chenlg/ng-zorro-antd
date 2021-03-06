import { AnimationEvent } from '@angular/animations';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NzNoAnimationDirective } from '../core/no-animation/nz-no-animation.directive';
export declare class NzToolTipComponent implements OnChanges {
    cdr: ChangeDetectorRef;
    noAnimation?: NzNoAnimationDirective;
    _hasBackdrop: boolean;
    _prefix: string;
    _positions: ConnectionPositionPair[];
    _classMap: {};
    _placement: string;
    _trigger: string;
    overlayOrigin: CdkOverlayOrigin;
    visibleSource: BehaviorSubject<boolean>;
    visible$: Observable<boolean>;
    overlay: CdkConnectedOverlay;
    nzTitle: string | TemplateRef<void>;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzVisible: boolean;
    nzTrigger: string;
    nzPlacement: string;
    readonly nzVisibleChange: EventEmitter<boolean>;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnChanges(): void;
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    show(): void;
    hide(): void;
    _afterVisibilityAnimation(e: AnimationEvent): void;
    setClassMap(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    protected isContentEmpty(): boolean;
}
