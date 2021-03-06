import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzNoAnimationDirective } from '../core/no-animation/nz-no-animation.directive';
import { NzSizeLDSType } from '../core/types/size';
import { NzFormatEmitEvent } from '../tree/interface';
import { NzTreeNode, NzTreeNodeOptions } from '../tree/nz-tree-node';
import { NzTreeComponent } from '../tree/nz-tree.component';
import { NzTreeSelectService } from './nz-tree-select.service';
export declare class NzTreeSelectComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
    private renderer;
    private cdr;
    private nzTreeService;
    private elementRef;
    noAnimation?: NzNoAnimationDirective;
    nzAllowClear: boolean;
    nzShowExpand: boolean;
    nzDropdownMatchSelectWidth: boolean;
    nzCheckable: boolean;
    nzShowSearch: boolean;
    nzDisabled: boolean;
    nzShowLine: boolean;
    nzAsyncData: boolean;
    nzMultiple: boolean;
    nzDefaultExpandAll: boolean;
    nzNotFoundContent: string;
    nzNodes: Array<NzTreeNode | NzTreeNodeOptions>;
    nzOpen: boolean;
    nzSize: NzSizeLDSType;
    nzPlaceHolder: string;
    nzDropdownStyle: {
        [key: string]: string;
    };
    nzDefaultExpandedKeys: string[];
    nzDisplayWith: (node: NzTreeNode) => string;
    nzMaxTagCount: number;
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: NzTreeNode[];
    }>;
    readonly nzOpenChange: EventEmitter<boolean>;
    readonly nzCleared: EventEmitter<void>;
    readonly nzRemoved: EventEmitter<NzTreeNode>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzTreeClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzTreeCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    inputElement: ElementRef;
    treeRef: NzTreeComponent;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    triggerWidth: number;
    isComposing: boolean;
    isDestroy: boolean;
    isNotFound: boolean;
    inputValue: string;
    dropDownPosition: 'top' | 'center' | 'bottom';
    selectionChangeSubscription: Subscription;
    selectedNodes: NzTreeNode[];
    value: string[];
    onChange: (value: string[] | string) => void;
    onTouched: () => void;
    readonly placeHolderDisplay: string;
    readonly searchDisplay: string;
    readonly isMultiple: boolean;
    readonly selectedValueDisplay: {
        [key: string]: string;
    };
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef, nzTreeService: NzTreeSelectService, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: string[] | string): void;
    registerOnChange(fn: (_: string[] | string) => void): void;
    registerOnTouched(fn: () => void): void;
    trigger(): void;
    openDropdown(): void;
    closeDropDown(): void;
    onKeyDownInput(e: KeyboardEvent): void;
    onExpandedKeysChange(value: NzFormatEmitEvent): void;
    setInputValue(value: string): void;
    removeSelected(node: NzTreeNode, emit?: boolean, event?: MouseEvent): void;
    focusOnInput(): void;
    subscribeSelectionChange(): Subscription;
    updateSelectedNodes(init?: boolean): void;
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateInputWidth(): void;
    onClearSelection($event: MouseEvent): void;
    setSearchValues($event: NzFormatEmitEvent): void;
    updateCdkConnectedOverlayStatus(): void;
    trackValue(_index: number, option: NzTreeNode): string;
}
