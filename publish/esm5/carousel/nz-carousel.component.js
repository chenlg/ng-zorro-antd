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
var NzCarouselComponent = /** @class */ (function () {
    function NzCarouselComponent(elementRef, renderer, cdr, ngZone) {
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
    Object.defineProperty(NzCarouselComponent.prototype, "nextIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "prevIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.first.isActive = true;
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Re-render when content changes.
        this.subs_.add(this.slideContents.changes.subscribe((/**
         * @return {?}
         */
        function () {
            _this.renderContent();
        })));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.subs_.add(fromEvent(window, 'resize').pipe(debounceTime(50)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.renderContent();
                _this.setTransition();
            })));
        }));
        // When used in modals (drawers maybe too), it should render itself asynchronously.
        // Refer to https://github.com/NG-ZORRO/ng-zorro-antd/issues/2387
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.renderContent();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzAutoPlay || changes.nzAutoPlaySpeed) {
            this.setUpNextScroll();
        }
        if (changes.nzEffect) {
            this.updateMode();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subs_.unsubscribe();
        this.clearTimeout();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.setContentActive = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (this.slideContents && this.slideContents.length) {
            this.nzBeforeChange.emit({ from: this.slideContents.toArray().findIndex((/**
                 * @param {?} slide
                 * @return {?}
                 */
                function (slide) { return slide.isActive; })), to: index });
            this.activeIndex = index;
            this.setTransition();
            this.slideContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            function (slide, i) { return slide.isActive = index === i; }));
            this.setUpNextScroll();
            this.cdr.markForCheck();
            // Should trigger the following when animation is done. The transition takes 0.5 seconds according to the CSS.
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.nzAfterChange.emit(index); }), this.nzTransitionSpeed);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.setTransition = /**
     * @private
     * @return {?}
     */
    function () {
        this.transform = this.nzEffect === 'fade'
            ? 'translate3d(0px, 0px, 0px)'
            : this.nzVertical
                // `Scrollx` mode.
                ? "translate3d(0px, " + -this.activeIndex * this.el.offsetHeight + "px, 0px)"
                : "translate3d(" + -this.activeIndex * this.el.offsetWidth + "px, 0px, 0px)";
        if (this.slickTrack) {
            this.renderer.setStyle(this.slickTrack.nativeElement, 'transform', this.transform);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.setContentActive(this.nextIndex);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.pre = /**
     * @return {?}
     */
    function () {
        this.setContentActive(this.prevIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.goTo = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index >= 0 && index <= this.slideContents.length - 1) {
            this.setContentActive(index);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === LEFT_ARROW) { // Left
            this.pre();
            e.preventDefault();
        }
        else if (e.keyCode === RIGHT_ARROW) { // Right
            this.next();
            e.preventDefault();
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    NzCarouselComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = 'swipeleft'; }
        if (!this.nzEnableSwipe) {
            return;
        }
        if (action === 'swipeleft') {
            this.next();
        }
        if (action === 'swiperight') {
            this.pre();
        }
    };
    /* tslint:disable-next-line:no-any */
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.swipeInProgress = /* tslint:disable-next-line:no-any */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzEffect === 'scrollx') {
            /** @type {?} */
            var final = e.isFinal;
            /** @type {?} */
            var scrollWidth = final ? 0 : e.deltaX * 1.2;
            /** @type {?} */
            var totalWidth = this.el.offsetWidth;
            if (this.nzVertical) {
                /** @type {?} */
                var totalHeight = this.el.offsetHeight;
                /** @type {?} */
                var scrollPercent = scrollWidth / totalWidth;
                /** @type {?} */
                var scrollHeight = scrollPercent * totalHeight;
                this.transform = "translate3d(0px, " + (-this.activeIndex * totalHeight + scrollHeight) + "px, 0px)";
            }
            else {
                this.transform = "translate3d(" + (-this.activeIndex * totalWidth + scrollWidth) + "px, 0px, 0px)";
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
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.clearTimeout = /**
     * @return {?}
     */
    function () {
        if (this.transitionAction) {
            clearTimeout(this.transitionAction);
            this.transitionAction = null;
        }
    };
    /**
     * Make a carousel scroll to `this.nextIndex` after `this.nzAutoPlaySpeed` milliseconds.
     */
    /**
     * Make a carousel scroll to `this.nextIndex` after `this.nzAutoPlaySpeed` milliseconds.
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.setUpNextScroll = /**
     * Make a carousel scroll to `this.nextIndex` after `this.nzAutoPlaySpeed` milliseconds.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearTimeout();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0) {
            this.transitionAction = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setContentActive(_this.nextIndex);
            }), this.nzAutoPlaySpeed);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.updateMode = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.renderContent();
            this.setContentActive(0);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.renderContent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var slickTrackElement = this.slickTrack.nativeElement;
        /** @type {?} */
        var slickListElement = this.slickList.nativeElement;
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.forEach((/**
             * @param {?} content
             * @param {?} i
             * @return {?}
             */
            function (content, i) {
                content.width = _this.el.offsetWidth;
                if (_this.nzEffect === 'fade') {
                    content.fadeMode = true;
                    if (_this.nzVertical) {
                        content.top = -i * _this.el.offsetHeight;
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
                this.renderer.setStyle(slickListElement, 'height', this.slideContents.first.el.offsetHeight + "px");
                this.renderer.setStyle(slickTrackElement, 'height', this.slideContents.length * this.el.offsetHeight + "px");
            }
            else {
                this.renderer.removeStyle(slickTrackElement, 'height');
                this.renderer.removeStyle(slickListElement, 'height');
                this.renderer.removeStyle(slickTrackElement, 'width'); // This is necessary to prevent carousel items to overflow.
                this.renderer.setStyle(slickTrackElement, 'width', this.slideContents.length * this.el.offsetWidth + "px");
            }
            this.setUpNextScroll();
            this.cdr.markForCheck();
        }
    };
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
                    styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n        transition: all 0.5s ease;\n      }\n\n      .slick-slide {\n        transition: opacity 500ms ease;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
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
    return NzCarouselComponent;
}());
export { NzCarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhcm91c2VsL256LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNN0U7SUFrRUUsNkJBQW1CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSxHQUFzQixFQUFVLE1BQWM7UUFBM0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUEzQnJILHNCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDLGVBQWU7UUFFeEMsYUFBUSxHQUFzQixTQUFTLENBQUM7UUFDeEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FB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LEtBQUs7Z0NBRUwsTUFBTTtpQ0FDTixNQUFNOztJQVBrQjtRQUFmLFlBQVksRUFBRTs7OERBQXNCO0lBQ3JCO1FBQWYsWUFBWSxFQUFFOzt1REFBd0I7SUFDdkI7UUFBZixZQUFZLEVBQUU7OzJEQUE2QjtJQUM1QjtRQUFmLFlBQVksRUFBRTs7MkRBQW9CO0lBQ3BCO1FBQWQsV0FBVyxFQUFFOztnRUFBd0I7SUFrTmpELDBCQUFDO0NBQUEsQUFoUUQsSUFnUUM7U0E5TlksbUJBQW1COzs7SUFDOUIsNENBQWtHOztJQUNsRyx3Q0FBOEM7O0lBQzlDLHlDQUFnRDs7SUFFaEQsZ0RBQWlDOztJQUNqQywwQ0FBeUQ7O0lBQ3pELHVDQUFpRDs7SUFDakQsNENBQThDOztJQUM5QyxxQ0FBZ0Q7O0lBQ2hELHlDQUFxRDs7SUFDckQseUNBQTRDOztJQUM1Qyw4Q0FBK0M7O0lBRS9DLDRDQUE0RTs7SUFDNUUsNkNBQW1HOztJQUVuRywwQ0FBZ0I7O0lBQ2hCLHdDQUF5Qzs7SUFDekMsK0NBQXlCOzs7OztJQUV6QixpQ0FBMkM7Ozs7O0lBQzNDLG9DQUFtQzs7SUFVdkIseUNBQTZCOzs7OztJQUFFLHVDQUEyQjs7Ozs7SUFBRSxrQ0FBOEI7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTEVGVF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIE56Q2Fyb3VzZWxFZmZlY3RzID0gJ2ZhZGUnIHwgJ3Njcm9sbHgnO1xuXG5leHBvcnQgdHlwZSBTd2lwZURpcmVjdGlvbiA9ICdzd2lwZWxlZnQnIHwgJ3N3aXBlcmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY2Fyb3VzZWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWxdJzogJ256VmVydGljYWwnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICAgIGBcbiAgICAgIG56LWNhcm91c2VsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLWRvdHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXRyYWNrIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXNsaWRlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAQ29udGVudENoaWxkcmVuKE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBzbGlkZUNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnKSBzbGlja0xpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWNrVHJhY2snKSBzbGlja1RyYWNrOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG56VHJhbnNpdGlvblNwZWVkID0gNTAwOyAvLyBOb3QgZXhwb3NlZC5cbiAgQElucHV0KCkgbnpEb3RSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XG4gIEBJbnB1dCgpIG56RWZmZWN0OiBOekNhcm91c2VsRWZmZWN0cyA9ICdzY3JvbGx4JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RW5hYmxlU3dpcGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEb3RzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b1BsYXkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpBdXRvUGxheVNwZWVkID0gMzAwMDsgLy8gU2hvdWxkIGJlIG56QXV0b1BsYXlEdXJhdGlvbiwgYnV0IGNoYW5naW5nIHRoaXMgaXMgYnJlYWtpbmcuXG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCZWZvcmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhY3RpdmVJbmRleCA9IDA7XG4gIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSc7XG4gIHRyYW5zaXRpb25BY3Rpb246IG51bWJlcjtcblxuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgc3Vic18gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgZ2V0IG5leHRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluZGV4IDwgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEgPyAodGhpcy5hY3RpdmVJbmRleCArIDEpIDogMDtcbiAgfVxuXG4gIGdldCBwcmV2SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleCA+IDAgPyAodGhpcy5hY3RpdmVJbmRleCAtIDEpIDogKHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJvdXNlbCcpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZpcnN0LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gUmUtcmVuZGVyIHdoZW4gY29udGVudCBjaGFuZ2VzLlxuICAgIHRoaXMuc3Vic18uYWRkKHRoaXMuc2xpZGVDb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnN1YnNfLmFkZChmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShkZWJvdW5jZVRpbWUoNTApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHVzZWQgaW4gbW9kYWxzIChkcmF3ZXJzIG1heWJlIHRvbyksIGl0IHNob3VsZCByZW5kZXIgaXRzZWxmIGFzeW5jaHJvbm91c2x5LlxuICAgIC8vIFJlZmVyIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yMzg3XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9QbGF5IHx8IGNoYW5nZXMubnpBdXRvUGxheVNwZWVkKSB7XG4gICAgICB0aGlzLnNldFVwTmV4dFNjcm9sbCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekVmZmVjdCkge1xuICAgICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzXy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cblxuICBzZXRDb250ZW50QWN0aXZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubnpCZWZvcmVDaGFuZ2UuZW1pdCh7IGZyb206IHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KCkuZmluZEluZGV4KHNsaWRlID0+IHNsaWRlLmlzQWN0aXZlKSwgdG86IGluZGV4IH0pO1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHNsaWRlLmlzQWN0aXZlID0gaW5kZXggPT09IGkpO1xuICAgICAgdGhpcy5zZXRVcE5leHRTY3JvbGwoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgLy8gU2hvdWxkIHRyaWdnZXIgdGhlIGZvbGxvd2luZyB3aGVuIGFuaW1hdGlvbiBpcyBkb25lLiBUaGUgdHJhbnNpdGlvbiB0YWtlcyAwLjUgc2Vjb25kcyBhY2NvcmRpbmcgdG8gdGhlIENTUy5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uekFmdGVyQ2hhbmdlLmVtaXQoaW5kZXgpLCB0aGlzLm56VHJhbnNpdGlvblNwZWVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFRyYW5zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLm56RWZmZWN0ID09PSAnZmFkZSdcbiAgICAgID8gJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJ1xuICAgICAgOiB0aGlzLm56VmVydGljYWxcbiAgICAgICAgLy8gYFNjcm9sbHhgIG1vZGUuXG4gICAgICAgID8gYHRyYW5zbGF0ZTNkKDBweCwgJHstdGhpcy5hY3RpdmVJbmRleCAqIHRoaXMuZWwub2Zmc2V0SGVpZ2h0fXB4LCAwcHgpYFxuICAgICAgICA6IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdGhpcy5lbC5vZmZzZXRXaWR0aH1weCwgMHB4LCAwcHgpYDtcbiAgICBpZiAodGhpcy5zbGlja1RyYWNrKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm0pO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDb250ZW50QWN0aXZlKHRoaXMubmV4dEluZGV4KTtcbiAgfVxuXG4gIHByZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbnRlbnRBY3RpdmUodGhpcy5wcmV2SW5kZXgpO1xuICB9XG5cbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2V0Q29udGVudEFjdGl2ZShpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7IC8vIExlZnRcbiAgICAgIHRoaXMucHJlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7IC8vIFJpZ2h0XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN3aXBlRGlyZWN0aW9uID0gJ3N3aXBlbGVmdCcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpFbmFibGVTd2lwZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSAnc3dpcGVsZWZ0Jykge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24gPT09ICdzd2lwZXJpZ2h0Jykge1xuICAgICAgdGhpcy5wcmUoKTtcbiAgICB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHN3aXBlSW5Qcm9ncmVzcyhlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IGUuaXNGaW5hbDtcbiAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gZmluYWwgPyAwIDogZS5kZWx0YVggKiAxLjI7XG4gICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsUGVyY2VudCA9IHNjcm9sbFdpZHRoIC8gdG90YWxXaWR0aDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsUGVyY2VudCAqIHRvdGFsSGVpZ2h0O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7LXRoaXMuYWN0aXZlSW5kZXggKiB0b3RhbEhlaWdodCArIHNjcm9sbEhlaWdodH1weCwgMHB4KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdG90YWxXaWR0aCArIHNjcm9sbFdpZHRofXB4LCAwcHgsIDBweClgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2xpY2tUcmFjaykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLnNldFVwTmV4dFNjcm9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyVGltZW91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uQWN0aW9uKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uQWN0aW9uKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkFjdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjYXJvdXNlbCBzY3JvbGwgdG8gYHRoaXMubmV4dEluZGV4YCBhZnRlciBgdGhpcy5uekF1dG9QbGF5U3BlZWRgIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIHByaXZhdGUgc2V0VXBOZXh0U2Nyb2xsKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gICAgaWYgKHRoaXMubnpBdXRvUGxheSAmJiB0aGlzLm56QXV0b1BsYXlTcGVlZCA+IDApIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkFjdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldENvbnRlbnRBY3RpdmUodGhpcy5uZXh0SW5kZXgpO1xuICAgICAgfSwgdGhpcy5uekF1dG9QbGF5U3BlZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTW9kZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgICAgdGhpcy5zZXRDb250ZW50QWN0aXZlKDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBzbGlja1RyYWNrRWxlbWVudCA9IHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNsaWNrTGlzdEVsZW1lbnQgPSB0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQsIGkpID0+IHtcbiAgICAgICAgY29udGVudC53aWR0aCA9IHRoaXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh0aGlzLm56RWZmZWN0ID09PSAnZmFkZScpIHtcbiAgICAgICAgICBjb250ZW50LmZhZGVNb2RlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICAgICAgICBjb250ZW50LnRvcCA9IC1pICogdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQubGVmdCA9IC1pICogY29udGVudC53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudC5mYWRlTW9kZSA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRlbnQubGVmdCA9IG51bGw7XG4gICAgICAgICAgY29udGVudC50b3AgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoc2xpY2tMaXN0RWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2xpY2tMaXN0RWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5maXJzdC5lbC5vZmZzZXRIZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsLm9mZnNldEhlaWdodH1weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHNsaWNrTGlzdEVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShzbGlja1RyYWNrRWxlbWVudCwgJ3dpZHRoJyk7IC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgY2Fyb3VzZWwgaXRlbXMgdG8gb3ZlcmZsb3cuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2xpY2tUcmFja0VsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsLm9mZnNldFdpZHRofXB4YCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFVwTmV4dFNjcm9sbCgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=