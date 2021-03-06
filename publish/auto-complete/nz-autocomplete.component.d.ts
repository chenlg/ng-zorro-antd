import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzNoAnimationDirective } from '../core/no-animation/nz-no-animation.directive';
import { NzDropDownPosition } from '../core/types/drop-down-position';
import { NzAutocompleteOptionComponent, NzOptionSelectionChange } from './nz-autocomplete-option.component';
export interface AutocompleteDataSourceItem {
    value: string;
    label: string;
}
export declare type AutocompleteDataSource = AutocompleteDataSourceItem[] | string[] | number[];
export declare class NzAutocompleteComponent implements AfterViewInit, OnDestroy {
    private changeDetectorRef;
    private ngZone;
    noAnimation?: NzNoAnimationDirective;
    nzWidth: number;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzDefaultActiveFirstOption: boolean;
    nzBackfill: boolean;
    nzDataSource: AutocompleteDataSource;
    readonly selectionChange: EventEmitter<NzAutocompleteOptionComponent>;
    showPanel: boolean;
    isOpen: boolean;
    activeItem: NzAutocompleteOptionComponent;
    dropDownPosition: NzDropDownPosition;
    /**
     * Options accessor, its source may be content or dataSource
     */
    readonly options: QueryList<NzAutocompleteOptionComponent>;
    /** Provided by content */
    fromContentOptions: QueryList<NzAutocompleteOptionComponent>;
    /** Provided by dataSource */
    fromDataSourceOptions: QueryList<NzAutocompleteOptionComponent>;
    /** cdk-overlay */
    template: TemplateRef<{}>;
    panel: ElementRef;
    content: ElementRef;
    private activeItemIndex;
    private selectionChangeSubscription;
    private dataSourceChangeSubscription;
    /** Options changes listener */
    readonly optionSelectionChanges: Observable<NzOptionSelectionChange>;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, noAnimation?: NzNoAnimationDirective);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setVisibility(): void;
    setActiveItem(index: number): void;
    setNextItemActive(): void;
    setPreviousItemActive(): void;
    getOptionIndex(option: NzAutocompleteOptionComponent): number | undefined;
    private optionsInit;
    /**
     * Clear the status of options
     */
    private clearSelectedOptions;
    private subscribeOptionChanges;
}
