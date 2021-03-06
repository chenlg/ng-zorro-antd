import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzNoAnimationDirective } from '../core/no-animation/nz-no-animation.directive';
import { NzToolTipComponent } from './nz-tooltip.component';
export declare class NzTooltipDirective implements AfterViewInit, OnChanges, OnInit, OnDestroy {
    elementRef: ElementRef;
    hostView: ViewContainerRef;
    resolver: ComponentFactoryResolver;
    renderer: Renderer2;
    tooltip: NzToolTipComponent;
    noAnimation?: NzNoAnimationDirective;
    isTooltipOpen: boolean;
    isDynamicTooltip: boolean;
    delayTimer: number;
    visible: boolean;
    factory: ComponentFactory<NzToolTipComponent>;
    /** Names of properties that should be proxy to child component. */
    protected needProxyProperties: string[];
    protected subs_: Subscription;
    readonly nzVisibleChange: EventEmitter<boolean>;
    nzTitle: string | TemplateRef<void>;
    setTitle: string | TemplateRef<void>;
    nzContent: string | TemplateRef<void>;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzTrigger: string;
    nzVisible: boolean;
    nzPlacement: string;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzToolTipComponent, noAnimation?: NzNoAnimationDirective);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected updateCompValue(key: string, value: any): void;
    private show;
    private hide;
    private delayEnterLeave;
    /**
     * Set inputs of child components when this component's inputs change.
     * @param changes
     */
    private updateProxies;
}
