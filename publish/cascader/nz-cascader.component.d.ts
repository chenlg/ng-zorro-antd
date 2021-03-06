import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzNoAnimationDirective } from '../core/no-animation/nz-no-animation.directive';
import { NgClassType } from '../core/types/ng-class';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { CascaderOption, CascaderSearchOption, NzCascaderExpandTrigger, NzCascaderSize, NzCascaderTriggerType, NzShowSearchOptions } from './types';
export declare class NzCascaderComponent implements OnDestroy, ControlValueAccessor {
    private elementRef;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    input: ElementRef;
    menu: ElementRef;
    overlay: CdkConnectedOverlay;
    cascaderItems: QueryList<NzCascaderOptionComponent>;
    nzShowInput: boolean;
    nzShowArrow: boolean;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzChangeOnSelect: boolean;
    nzDisabled: boolean;
    nzColumnClassName: string;
    nzExpandTrigger: NzCascaderExpandTrigger;
    nzValueProperty: string;
    nzLabelRender: TemplateRef<void>;
    nzLabelProperty: string;
    nzNotFoundContent: string | TemplateRef<void>;
    nzSize: NzCascaderSize;
    nzShowSearch: boolean | NzShowSearchOptions;
    nzPlaceHolder: string;
    nzMenuClassName: string;
    nzMenuStyle: {
        [key: string]: string;
    };
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzTriggerAction: NzCascaderTriggerType | NzCascaderTriggerType[];
    nzChangeOn: (option: CascaderOption, level: number) => boolean;
    nzLoadData: (node: CascaderOption, index?: number) => PromiseLike<any>;
    nzOptions: CascaderOption[];
    readonly nzSelectionChange: EventEmitter<CascaderOption[]>;
    readonly nzSelect: EventEmitter<{
        option: CascaderOption;
        index: number;
    }>;
    readonly nzClear: EventEmitter<void>;
    readonly nzVisibleChange: EventEmitter<boolean>;
    readonly nzChange: EventEmitter<{}>;
    el: HTMLElement;
    dropDownPosition: string;
    menuVisible: boolean;
    isLoading: boolean;
    labelRenderText: string;
    labelRenderContext: {};
    columns: CascaderOption[][];
    onChange: Function;
    onTouched: Function;
    positions: ConnectionPositionPair[];
    dropdownWidthStyle: string;
    isSearching: boolean;
    isFocused: boolean;
    private isOpening;
    private defaultValue;
    private value;
    private selectedOptions;
    private activatedOptions;
    private columnsSnapshot;
    private activatedOptionsSnapshot;
    private delayMenuTimer;
    private delaySelectTimer;
    inputValue: string;
    private _inputValue;
    readonly menuCls: NgClassType;
    readonly menuColumnCls: NgClassType;
    delaySetMenuVisible(visible: boolean, delay: number, setOpening?: boolean): void;
    setMenuVisible(visible: boolean): void;
    private clearDelayMenuTimer;
    private loadRootOptions;
    private isLoaded;
    private findOption;
    private activateOnInit;
    private initOptions;
    private setOptionActivated;
    private loadChildrenAsync;
    private setOptionSelected;
    private setColumnData;
    clearSelection(event?: Event): void;
    getSubmitValue(): any[];
    private onValueChange;
    afterWriteValue(): void;
    focus(): void;
    blur(): void;
    handleInputBlur(): void;
    handleInputFocus(): void;
    onKeyDown(event: KeyboardEvent): void;
    onTriggerClick(): void;
    onTriggerMouseEnter(): void;
    onTriggerMouseLeave(event: MouseEvent): void;
    private isActionTrigger;
    onOptionClick(option: CascaderOption, columnIndex: number, event: Event): void;
    private onEnter;
    private moveUpOrDown;
    private moveLeft;
    private moveRight;
    onOptionMouseEnter(option: CascaderOption, columnIndex: number, event: Event): void;
    onOptionMouseLeave(option: CascaderOption, columnIndex: number, event: Event): void;
    private clearDelaySelectTimer;
    private delaySelectOption;
    private toggleSearchMode;
    private prepareSearchValue;
    setSearchOptionActivated(result: CascaderSearchOption, event: Event): void;
    private readonly hasInput;
    private readonly hasValue;
    readonly showPlaceholder: boolean;
    readonly clearIconVisible: boolean;
    readonly isLabelRenderTemplate: boolean;
    getOptionLabel(option: CascaderOption): any;
    getOptionValue(option: CascaderOption): any;
    isOptionActivated(option: CascaderOption, index: number): boolean;
    private buildDisplayLabel;
    setDisabledState(isDisabled: boolean): void;
    closeMenu(): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    ngOnDestroy(): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    writeValue(value: any): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the browser boundary.
     */
    private reposition;
    private checkChildren;
}
