/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InputBoolean, InputNumber } from '../core/util/convert';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
export class NzCarouselComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(elementRef, renderer, cdr, ngZone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.nzTransitionSpeed = 500; // Not exposed.
        this.nzEffect = 'scrollx';
        this.nzEnableSwipe = true;
        this.nzDots = true;
        this.nzVertical = false;
        this.nzAutoPlay = false;
        this.nzAutoPlaySpeed = 3000; // Should be nzAutoPlayDuration, but changing this is breaking.
        // Should be nzAutoPlayDuration, but changing this is breaking.
        this.nzAfterChange = new EventEmitter();
        this.nzBeforeChange = new EventEmitter();
        this.activeIndex = 0;
        this.transform = 'translate3d(0px, 0px, 0px)';
        this.el = this.elementRef.nativeElement;
        this.subs_ = new Subscription();
        renderer.addClass(elementRef.nativeElement, 'ant-carousel');
    }
    /**
     * @return {?}
     */
    get nextIndex() {
        return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
    }
    /**
     * @return {?}
     */
    get prevIndex() {
        return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.first.isActive = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Re-render when content changes.
        this.subs_.add(this.slideContents.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.renderContent();
        })));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.subs_.add(fromEvent(window, 'resize').pipe(debounceTime(50)).subscribe((/**
             * @return {?}
             */
            () => {
                this.renderContent();
                this.setTransition();
            })));
        }));
        // When used in modals (drawers maybe too), it should render itself asynchronously.
        // Refer to https://github.com/NG-ZORRO/ng-zorro-antd/issues/2387
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.renderContent();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzAutoPlay || changes.nzAutoPlaySpeed) {
            this.setUpNextScroll();
        }
        if (changes.nzEffect) {
            this.updateMode();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs_.unsubscribe();
        this.clearTimeout();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setContentActive(index) {
        if (this.slideContents && this.slideContents.length) {
            this.nzBeforeChange.emit({ from: this.slideContents.toArray().findIndex((/**
                 * @param {?} slide
                 * @return {?}
                 */
                slide => slide.isActive)), to: index });
            this.activeIndex = index;
            this.setTransition();
            this.slideContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            (slide, i) => slide.isActive = index === i));
            this.setUpNextScroll();
            this.cdr.markForCheck();
            // Should trigger the following when animation is done. The transition takes 0.5 seconds according to the CSS.
            setTimeout((/**
             * @return {?}
             */
            () => this.nzAfterChange.emit(index)), this.nzTransitionSpeed);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setTransition() {
        this.transform = this.nzEffect === 'fade'
            ? 'translate3d(0px, 0px, 0px)'
            : this.nzVertical
                // `Scrollx` mode.
                ? `translate3d(0px, ${-this.activeIndex * this.el.offsetHeight}px, 0px)`
                : `translate3d(${-this.activeIndex * this.el.offsetWidth}px, 0px, 0px)`;
        if (this.slickTrack) {
            this.renderer.setStyle(this.slickTrack.nativeElement, 'transform', this.transform);
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.setContentActive(this.nextIndex);
    }
    /**
     * @return {?}
     */
    pre() {
        this.setContentActive(this.prevIndex);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    goTo(index) {
        if (index >= 0 && index <= this.slideContents.length - 1) {
            this.setContentActive(index);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === LEFT_ARROW) { // Left
            this.pre();
            e.preventDefault();
        }
        else if (e.keyCode === RIGHT_ARROW) { // Right
            this.next();
            e.preventDefault();
        }
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = 'swipeleft') {
        if (!this.nzEnableSwipe) {
            return;
        }
        if (action === 'swipeleft') {
            this.next();
        }
        if (action === 'swiperight') {
            this.pre();
        }
    }
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} e
     * @return {?}
     */
    swipeInProgress(e) {
        if (this.nzEffect === 'scrollx') {
            /** @type {?} */
            const final = e.isFinal;
            /** @type {?} */
            const scrollWidth = final ? 0 : e.deltaX * 1.2;
            /** @type {?} */
            const totalWidth = this.el.offsetWidth;
            if (this.nzVertical) {
                /** @type {?} */
                const totalHeight = this.el.offsetHeight;
                /** @type {?} */
                const scrollPercent = scrollWidth / totalWidth;
                /** @type {?} */
                const scrollHeight = scrollPercent * totalHeight;
                this.transform = `translate3d(0px, ${-this.activeIndex * totalHeight + scrollHeight}px, 0px)`;
            }
            else {
                this.transform = `translate3d(${-this.activeIndex * totalWidth + scrollWidth}px, 0px, 0px)`;
            }
            if (this.slickTrack) {
                this.renderer.setStyle(this.slickTrack.nativeElement, 'transform', this.transform);
            }
        }
        if (e.isFinal) {
            this.setUpNextScroll();
        }
        else {
            this.clearTimeout();
        }
    }
    /**
     * @return {?}
     */
    clearTimeout() {
        if (this.transitionAction) {
            clearTimeout(this.transitionAction);
            this.transitionAction = null;
        }
    }
    /**
     * Make a carousel scroll to `this.nextIndex` after `this.nzAutoPlaySpeed` milliseconds.
     * @private
     * @return {?}
     */
    setUpNextScroll() {
        this.clearTimeout();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0) {
            this.transitionAction = setTimeout((/**
             * @return {?}
             */
            () => {
                this.setContentActive(this.nextIndex);
            }), this.nzAutoPlaySpeed);
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateMode() {
        if (this.slideContents && this.slideContents.length) {
            this.renderContent();
            this.setContentActive(0);
        }
    }
    /**
     * @private
     * @return {?}
     */
    renderContent() {
        /** @type {?} */
        const slickTrackElement = this.slickTrack.nativeElement;
        /** @type {?} */
        const slickListElement = this.slickList.nativeElement;
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.forEach((/**
             * @param {?} content
             * @param {?} i
             * @return {?}
             */
            (content, i) => {
                content.width = this.el.offsetWidth;
                if (this.nzEffect === 'fade') {
                    content.fadeMode = true;
                    if (this.nzVertical) {
                        content.top = -i * this.el.offsetHeight;
                    }
                    else {
                        content.left = -i * content.width;
                    }
                }
                else {
                    content.fadeMode = false;
                    content.left = null;
                    content.top = null;
                }
            }));
            if (this.nzVertical) {
                this.renderer.removeStyle(slickTrackElement, 'width');
                this.renderer.removeStyle(slickListElement, 'width');
                this.renderer.setStyle(slickListElement, 'height', `${this.slideContents.first.el.offsetHeight}px`);
                this.renderer.setStyle(slickTrackElement, 'height', `${this.slideContents.length * this.el.offsetHeight}px`);
            }
            else {
                this.renderer.removeStyle(slickTrackElement, 'height');
                this.renderer.removeStyle(slickListElement, 'height');
                this.renderer.removeStyle(slickTrackElement, 'width'); // This is necessary to prevent carousel items to overflow.
                this.renderer.setStyle(slickTrackElement, 'width', `${this.slideContents.length * this.el.offsetWidth}px`);
            }
            this.setUpNextScroll();
            this.cdr.markForCheck();
        }
    }
}
NzCarouselComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-carousel',
                preserveWhitespaces: false,
                template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\n  <div\n    class=\"slick-list\"\n    #slickList\n    tabindex=\"-1\"\n    (keydown)=\"onKeyDown($event)\"\n    (swipeleft)=\"swipe('swipeleft')\"\n    (swiperight)=\"swipe('swiperight')\"\n    (pan)=\"swipeInProgress($event);\">\n    <div class=\"slick-track\" #slickTrack>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ul class=\"slick-dots\" *ngIf=\"nzDots\">\n    <li *ngFor=\"let content of slideContents; let i = index\" [class.slick-active]=\"content.isActive\" (click)=\"goTo(i)\">\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-template #renderDotTemplate let-index>\n  <button>{{index + 1}}</button>\n</ng-template>\n",
                host: {
                    '[class.ant-carousel-vertical]': 'nzVertical'
                },
                styles: [`
      nz-carousel {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .slick-dots {
        display: block;
      }

      .slick-track {
        opacity: 1;
        transition: all 0.5s ease;
      }

      .slick-slide {
        transition: opacity 500ms ease;
      }
    `]
            }] }
];
/** @nocollapse */
NzCarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NzCarouselComponent.propDecorators = {
    slideContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
    slickList: [{ type: ViewChild, args: ['slickList',] }],
    slickTrack: [{ type: ViewChild, args: ['slickTrack',] }],
    nzTransitionSpeed: [{ type: Input }],
    nzDotRender: [{ type: Input }],
    nzEffect: [{ type: Input }],
    nzEnableSwipe: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzAutoPlay: [{ type: Input }],
    nzAutoPlaySpeed: [{ type: Input }],
    nzAfterChange: [{ type: Output }],
    nzBeforeChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzDots", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzCarouselComponent.prototype, "nzVertical", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
if (false) {
    /** @type {?} */
    NzCarouselComponent.prototype.slideContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzTransitionSpeed;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEffect;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDots;
    /** @type {?} */
    NzCarouselComponent.prototype.nzVertical;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.transform;
    /** @type {?} */
    NzCarouselComponent.prototype.transitionAction;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.subs_;
    /** @type {?} */
    NzCarouselComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhcm91c2VsL256LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUF3QzdFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFnQzlCLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSxHQUFzQixFQUFVLE1BQWM7UUFBM0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzQnJILHNCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDLGVBQWU7UUFFeEMsYUFBUSxHQUFzQixTQUFTLENBQUM7UUFDeEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFVLEdBQVks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SUFYL0MsNENBQWtHOztJQUNsRyx3Q0FBOEM7O0lBQzlDLHlDQUFnRDs7SUFFaEQsZ0RBQWlDOztJQUNqQywwQ0FBeUQ7O0lBQ3pELHVDQUFpRDs7SUFDakQsNENBQThDOztJQUM5QyxxQ0FBZ0Q7O0lBQ2hELHlDQUFxRDs7SUFDckQseUNBQTRDOztJQUM1Qyw4Q0FBK0M7O0lBRS9DLDRDQUE0RTs7SUFDNUUsNkNBQW1HOztJQUVuRywwQ0FBZ0I7O0lBQ2hCLHdDQUF5Qzs7SUFDekMsK0NBQXlCOzs7OztJQUV6QixpQ0FBMkM7Ozs7O0lBQzNDLG9DQUFtQzs7SUFVdkIseUNBQTZCOzs7OztJQUFFLHVDQUEyQjs7Ozs7SUFBRSxrQ0FBOEI7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTEVGVF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE56Q2Fyb3VzZWxFZmZlY3RzID0gJ2ZhZGUnIHwgJ3Njcm9sbHgnO1xuXG5leHBvcnQgdHlwZSBTd2lwZURpcmVjdGlvbiA9ICdzd2lwZWxlZnQnIHwgJ3N3aXBlcmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY2Fyb3VzZWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWxdJzogJ256VmVydGljYWwnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICAgIGBcbiAgICAgIG56LWNhcm91c2VsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLWRvdHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXRyYWNrIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXNsaWRlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAQ29udGVudENoaWxkcmVuKE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBzbGlkZUNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnKSBzbGlja0xpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWNrVHJhY2snKSBzbGlja1RyYWNrOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG56VHJhbnNpdGlvblNwZWVkID0gNTAwOyAvLyBOb3QgZXhwb3NlZC5cbiAgQElucHV0KCkgbnpEb3RSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XG4gIEBJbnB1dCgpIG56RWZmZWN0OiBOekNhcm91c2VsRWZmZWN0cyA9ICdzY3JvbGx4JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RW5hYmxlU3dpcGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEb3RzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b1BsYXkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpBdXRvUGxheVNwZWVkID0gMzAwMDsgLy8gU2hvdWxkIGJlIG56QXV0b1BsYXlEdXJhdGlvbiwgYnV0IGNoYW5naW5nIHRoaXMgaXMgYnJlYWtpbmcuXG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCZWZvcmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhY3RpdmVJbmRleCA9IDA7XG4gIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSc7XG4gIHRyYW5zaXRpb25BY3Rpb246IG51bWJlcjtcblxuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgZ2V0IG5leHRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluZGV4IDwgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEgPyAodGhpcy5hY3RpdmVJbmRleCArIDEpIDogMDtcbiAgfVxuXG4gIGdldCBwcmV2SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleCA+IDAgPyAodGhpcy5hY3RpdmVJbmRleCAtIDEpIDogKHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJvdXNlbCcpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZpcnN0LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gUmUtcmVuZGVyIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgIHRoaXMuc3Vic18uYWRkKHRoaXMuc2xpZGVDb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnN1YnNfLmFkZChmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShkZWJvdW5jZVRpbWUoNTApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHVzZWQgaW4gbW9kYWxzIChkcmF3ZXJzIG1heWJlIHRvbyksIGl0IHNob3VsZCByZW5kZXIgaXRzZWxmIGFzeW5jaHJvbm91c2x5LlxuICAgIC8vIFJlZmVyIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yMzg3XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9QbGF5IHx8IGNoYW5nZXMubnpBdXRvUGxheVNwZWVkKSB7XG4gICAgICB0aGlzLnNldFVwTmV4dFNjcm9sbCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekVmZmVjdCkge1xuICAgICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzXy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cblxuICBzZXRDb250ZW50QWN0aXZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubnpCZWZvcmVDaGFuZ2UuZW1pdCh7IGZyb206IHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KCkuZmluZEluZGV4KHNsaWRlID0+IHNsaWRlLmlzQWN0aXZlKSwgdG86IGluZGV4IH0pO1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHNsaWRlLmlzQWN0aXZlID0gaW5kZXggPT09IGkpO1xuICAgICAgdGhpcy5zZXRVcE5leHRTY3JvbGwoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgLy8gU2hvdWxkIHRyaWdnZXIgdGhlIGZvbGxvd2luZyB3aGVuIGFuaW1hdGlvbiBpcyBkb25lLiBUaGUgdHJhbnNpdGlvbiB0YWtlcyAwLjUgc2Vjb25kcyBhY2NvcmRpbmcgdG8gdGhlIENTUy5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uekFmdGVyQ2hhbmdlLmVtaXQoaW5kZXgpLCB0aGlzLm56VHJhbnNpdGlvblNwZWVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFRyYW5zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLm56RWZmZWN0ID09PSAnZmFkZSdcbiAgICAgID8gJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJ1xuICAgICAgOiB0aGlzLm56VmVydGljYWxcbiAgICAgICAgLy8gYFNjcm9sbHhgIG1vZGUuXG4gICAgICAgID8gYHRyYW5zbGF0ZTNkKDBweCwgJHstdGhpcy5hY3RpdmVJbmRleCAqIHRoaXMuZWwub2Zmc2V0SGVpZ2h0fXB4LCAwcHgpYFxuICAgICAgICA6IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdGhpcy5lbC5vZmZzZXRXaWR0aH1weCwgMHB4LCAwcHgpYDtcbiAgICBpZiAodGhpcy5zbGlja1RyYWNrKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm0pO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDb250ZW50QWN0aXZlKHRoaXMubmV4dEluZGV4KTtcbiAgfVxuXG4gIHByZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbnRlbnRBY3RpdmUodGhpcy5wcmV2SW5kZXgpO1xuICB9XG5cbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2V0Q29udGVudEFjdGl2ZShpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7IC8vIExlZnRcbiAgICAgIHRoaXMucHJlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7IC8vIFJpZ2h0XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN3aXBlRGlyZWN0aW9uID0gJ3N3aXBlbGVmdCcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpFbmFibGVTd2lwZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSAnc3dpcGVsZWZ0Jykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24gPT09ICdzd2lwZXJpZ2h0Jykge1xuICAgICAgdGhpcy5wcmUoKTtcbiAgICB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHN3aXBlSW5Qcm9ncmVzcyhlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IGUuaXNGaW5hbDtcbiAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gZmluYWwgPyAwIDogZS5kZWx0YVggKiAxLjI7XG4gICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsUGVyY2VudCA9IHNjcm9sbFdpZHRoIC8gdG90YWxXaWR0aDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsUGVyY2VudCAqIHRvdGFsSGVpZ2h0O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7LXRoaXMuYWN0aXZlSW5kZXggKiB0b3RhbEhlaWdodCArIHNjcm9sbEhlaWdodH1weCwgMHB4KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdG90YWxXaWR0aCArIHNjcm9sbFdpZHRofXB4LCAwcHgsIDBweClgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2xpY2tUcmFjaykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLnNldFVwTmV4dFNjcm9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyVGltZW91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uQWN0aW9uKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uQWN0aW9uKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkFjdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjYXJvdXNlbCBzY3JvbGwgdG8gYHRoaXMubmV4dEluZGV4YCBhZnRlciBgdGhpcy5uekF1dG9QbGF5U3BlZWRgIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIHByaXZhdGUgc2V0VXBOZXh0U2Nyb2xsKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gICAgaWYgKHRoaXMubnpBdXRvUGxheSAmJiB0aGlzLm56QXV0b1BsYXlTcGVlZCA+IDApIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkFjdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldENvbnRlbnRBY3RpdmUodGhpcy5uZXh0SW5kZXgpO1xuICAgICAgfSwgdGhpcy5uekF1dG9QbGF5U3BlZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTW9kZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgICAgdGhpcy5zZXRDb250ZW50QWN0aXZlKDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBzbGlja1RyYWNrRWxlbWVudCA9IHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNsaWNrTGlzdEVsZW1lbnQgPSB0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQsIGkpID0+IHtcbiAgICAgICAgY29udGVudC53aWR0aCA9IHRoaXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh0aGlzLm56RWZmZWN0ID09PSAnZmFkZScpIHtcbiAgICAgICAgICBjb250ZW50LmZhZGVNb2RlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICAgICAgICBjb250ZW50LnRvcCA9IC1pICogdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQubGVmdCA9IC1pICogY29udGVudC53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudC5mYWRlTW9kZSA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRlbnQubGVmdCA9IG51bGw7XG4gICAgICAgICAgY29udGVudC50b3AgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoc2xpY2tMaXN0RWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2xpY2tMaXN0RWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5maXJzdC5lbC5vZmZzZXRIZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsLm9mZnNldEhlaWdodH1weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHNsaWNrTGlzdEVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ3dpZHRoJyk7IC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgY2Fyb3VzZWwgaXRlbXMgdG8gb3ZlcmZsb3cuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2xpY2tUcmFja0VsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsLm9mZnNldFdpZHRofXB4YCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFVwTmV4dFNjcm9sbCgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=