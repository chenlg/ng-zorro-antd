import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzModalConfig } from './nz-modal-config';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalRef } from './nz-modal-ref.class';
import { ModalButtonOptions, ModalOptions, ModalType, OnClickCallback } from './nz-modal.type';
export declare const MODAL_ANIMATE_DURATION = 200;
export declare class NzModalComponent<T = any, R = any> extends NzModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, ModalOptions<T> {
    private overlay;
    private i18n;
    private cfr;
    private elementRef;
    private viewContainer;
    private modalControl;
    private focusTrapFactory;
    private cdr;
    private config;
    private document;
    nzVisible: boolean;
    nzClosable: boolean;
    nzMask: boolean;
    nzMaskClosable: boolean;
    nzOkLoading: boolean;
    nzOkDisabled: boolean;
    nzCancelDisabled: boolean;
    nzCancelLoading: boolean;
    nzKeyboard: boolean;
    nzNoAnimation: boolean;
    nzContent: string | TemplateRef<{}> | Type<T>;
    nzComponentParams: T;
    nzFooter: string | TemplateRef<{}> | Array<ModalButtonOptions<T>>;
    nzGetContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    nzZIndex: number;
    nzWidth: number | string;
    nzWrapClassName: string;
    nzClassName: string;
    nzStyle: object;
    nzTitle: string | TemplateRef<{}>;
    nzMaskStyle: object;
    nzBodyStyle: object;
    nzOkText: string;
    nzCancelText: string;
    nzOkType: string;
    nzIconType: string;
    nzModalType: ModalType;
    readonly nzOnOk: EventEmitter<T> | OnClickCallback<T>;
    readonly nzOnCancel: EventEmitter<T> | OnClickCallback<T>;
    readonly nzAfterOpen: EventEmitter<void>;
    readonly nzAfterClose: EventEmitter<R>;
    readonly nzVisibleChange: EventEmitter<boolean>;
    modalContainer: ElementRef;
    bodyContainer: ViewContainerRef;
    autoFocusButtonOk: ElementRef;
    readonly afterOpen: Observable<void>;
    readonly afterClose: Observable<R>;
    readonly cancelText: string;
    readonly okText: string;
    readonly hidden: boolean;
    locale: {
        okText?: string;
        cancelText?: string;
    };
    maskAnimationClassMap: object;
    modalAnimationClassMap: object;
    transformOrigin: string;
    private contentComponentRef;
    private animationState;
    private container;
    private unsubscribe$;
    private previouslyFocusedElement;
    private focusTrap;
    private scrollStrategy;
    constructor(overlay: Overlay, i18n: NzI18nService, cfr: ComponentFactoryResolver, elementRef: ElementRef, viewContainer: ViewContainerRef, modalControl: NzModalControlService, focusTrapFactory: FocusTrapFactory, cdr: ChangeDetectorRef, config: NzModalConfig, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    keydownListener(event: KeyboardEvent): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getInstance(): NzModalComponent;
    getContentComponentRef(): ComponentRef<T>;
    getContentComponent(): T;
    getElement(): HTMLElement;
    onClickMask($event: MouseEvent): void;
    isModalType(type: ModalType): boolean;
    onClickCloseBtn(): void;
    onClickOkCancel(type: 'ok' | 'cancel'): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    isComponent(value: {}): boolean;
    isModalButtons(value: {}): boolean;
    private handleVisibleStateChange;
    getButtonCallableProp(options: ModalButtonOptions<T>, prop: string): {};
    onButtonClick(button: ModalButtonOptions<T>): void;
    private changeVisibleFromInside;
    private changeAnimationState;
    private animateTo;
    private formatModalButtons;
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    private createDynamicComponent;
    private updateTransformOrigin;
    private mergeDefaultConfig;
    private savePreviouslyFocusedElement;
    private trapFocus;
    private restoreFocus;
}
