/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
/** @enum {number} */
const Breakpoint = {
    'xxl': 0,
    'xl': 1,
    'lg': 2,
    'md': 3,
    'sm': 4,
    'xs': 5,
};
export { Breakpoint };
Breakpoint[Breakpoint['xxl']] = 'xxl';
Breakpoint[Breakpoint['xl']] = 'xl';
Breakpoint[Breakpoint['lg']] = 'lg';
Breakpoint[Breakpoint['md']] = 'md';
Breakpoint[Breakpoint['sm']] = 'sm';
Breakpoint[Breakpoint['xs']] = 'xs';
/** @type {?} */
const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
export class NzRowDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.actualGutter$ = new Subject();
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    calculateGutter() {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return;
        }
    }
    /**
     * @return {?}
     */
    updateGutter() {
        /** @type {?} */
        const actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
            this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
        }
    }
    /**
     * @return {?}
     */
    watchMedia() {
        // @ts-ignore
        Object.keys(responsiveMap).map((/**
         * @param {?} screen
         * @return {?}
         */
        (screen) => {
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                this.breakPoint = screen;
            }
        }));
        this.updateGutter();
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: !this.nzType,
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-${this.nzType}-${this.nzAlign}`]: this.nzType && this.nzAlign,
            [`${this.prefixCls}-${this.nzType}-${this.nzJustify}`]: this.nzType && this.nzJustify
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                () => this.watchMedia()));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-row],nz-row',
                providers: [NzUpdateHostClassService]
            },] }
];
/** @nocollapse */
NzRowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform }
];
NzRowDirective.propDecorators = {
    nzType: [{ type: Input }],
    nzAlign: [{ type: Input }],
    nzJustify: [{ type: Input }],
    nzGutter: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzRowDirective.prototype.nzType;
    /** @type {?} */
    NzRowDirective.prototype.nzAlign;
    /** @type {?} */
    NzRowDirective.prototype.nzJustify;
    /** @type {?} */
    NzRowDirective.prototype.nzGutter;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.breakPoint;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter$;
    /** @type {?} */
    NzRowDirective.prototype.destroy$;
    /** @type {?} */
    NzRowDirective.prototype.elementRef;
    /** @type {?} */
    NzRowDirective.prototype.renderer;
    /** @type {?} */
    NzRowDirective.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzRowDirective.prototype.mediaMatcher;
    /** @type {?} */
    NzRowDirective.prototype.ngZone;
    /** @type {?} */
    NzRowDirective.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4sU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0lBT3BGLFFBQUs7SUFDTCxPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJO0lBQ0osT0FBSTs7O3NCQUxKLEtBQUssS0FBTCxLQUFLO3NCQUNMLElBQUksS0FBSixJQUFJO3NCQUNKLElBQUksS0FBSixJQUFJO3NCQUNKLElBQUksS0FBSixJQUFJO3NCQUNKLElBQUksS0FBSixJQUFJO3NCQUNKLElBQUksS0FBSixJQUFJOztNQUtBLGFBQWEsR0FBa0I7SUFDbkMsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxxQkFBcUI7Q0FDM0I7QUFNRCxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBc0R6QixZQUFtQixVQUFzQixFQUFTLFFBQW1CLEVBQVMsd0JBQWtELEVBQVMsWUFBMEIsRUFBUyxNQUFj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U0FBUztZQVFGLHdCQUF3QjtZQUp4QixZQUFZO1lBUm5CLE1BQU07WUFTQyxRQUFROzs7cUJBa0NkLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFITixnQ0FBd0I7O0lBQ3hCLGlDQUFrQzs7SUFDbEMsbUNBQXdDOztJQUN4QyxrQ0FBbUM7Ozs7O0lBQ25DLDRCQUF3RDs7Ozs7SUFDeEQsbUNBQThCOzs7OztJQUM5QixvQ0FBK0I7O0lBQy9CLHNDQUFxQjs7SUFDckIsdUNBQXNDOztJQUN0QyxrQ0FBeUI7O0lBNENiLG9DQUE2Qjs7SUFBRSxrQ0FBMEI7O0lBQUUsa0RBQXlEOztJQUFFLHNDQUFpQzs7SUFBRSxnQ0FBcUI7O0lBQUUsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE56SnVzdGlmeSA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3NwYWNlLWFyb3VuZCcgfCAnc3BhY2UtYmV0d2Vlbic7XG5leHBvcnQgdHlwZSBOekFsaWduID0gJ3RvcCcgfCAnbWlkZGxlJyB8ICdib3R0b20nO1xuZXhwb3J0IHR5cGUgTnpUeXBlID0gJ2ZsZXgnIHwgbnVsbDtcblxuZXhwb3J0IGVudW0gQnJlYWtwb2ludCB7XG4gICd4eGwnLFxuICAneGwnLFxuICAnbGcnLFxuICAnbWQnLFxuICAnc20nLFxuICAneHMnXG59XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnRNYXAgPSB7IFtpbmRleCBpbiBrZXlvZiB0eXBlb2YgQnJlYWtwb2ludF06IHN0cmluZyB9O1xuXG5jb25zdCByZXNwb25zaXZlTWFwOiBCcmVha3BvaW50TWFwID0ge1xuICB4cyA6ICcobWF4LXdpZHRoOiA1NzVweCknLFxuICBzbSA6ICcobWluLXdpZHRoOiA1NzZweCknLFxuICBtZCA6ICcobWluLXdpZHRoOiA3NjhweCknLFxuICBsZyA6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bCA6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgeHhsOiAnKG1pbi13aWR0aDogMTYwMHB4KSdcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvciA6ICdbbnotcm93XSxuei1yb3cnLFxuICBwcm92aWRlcnM6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpUeXBlOiBOelR5cGU7XG4gIEBJbnB1dCgpIG56QWxpZ246IE56QWxpZ24gPSAndG9wJztcbiAgQElucHV0KCkgbnpKdXN0aWZ5OiBOekp1c3RpZnkgPSAnc3RhcnQnO1xuICBASW5wdXQoKSBuekd1dHRlcjogbnVtYmVyIHwgb2JqZWN0O1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtcm93JztcbiAgcHJpdmF0ZSBicmVha1BvaW50OiBCcmVha3BvaW50O1xuICBhY3R1YWxHdXR0ZXI6IG51bWJlcjtcbiAgYWN0dWFsR3V0dGVyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNhbGN1bGF0ZUd1dHRlcigpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uekd1dHRlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmVha1BvaW50ICYmIHRoaXMubnpHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlclsgdGhpcy5icmVha1BvaW50IF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVHdXR0ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgYWN0dWFsR3V0dGVyID0gdGhpcy5jYWxjdWxhdGVHdXR0ZXIoKTtcbiAgICBpZiAodGhpcy5hY3R1YWxHdXR0ZXIgIT09IGFjdHVhbEd1dHRlcikge1xuICAgICAgdGhpcy5hY3R1YWxHdXR0ZXIgPSBhY3R1YWxHdXR0ZXI7XG4gICAgICB0aGlzLmFjdHVhbEd1dHRlciQubmV4dCh0aGlzLmFjdHVhbEd1dHRlcik7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tbGVmdCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1yaWdodCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICB9XG4gIH1cblxuICB3YXRjaE1lZGlhKCk6IHZvaWQge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKHNjcmVlbjogQnJlYWtwb2ludCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFsgc2NyZWVuIF0pLm1hdGNoZXM7XG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xuICAgICAgICB0aGlzLmJyZWFrUG9pbnQgPSBzY3JlZW47XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgfVxuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfWAgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogIXRoaXMubnpUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gIF0gICAgICAgICAgICAgICAgICA6IHRoaXMubnpUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56QWxpZ259YCBdICA6IHRoaXMubnpUeXBlICYmIHRoaXMubnpBbGlnbixcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekp1c3RpZnl9YCBdOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56SnVzdGlmeVxuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwdWJsaWMgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VHlwZSB8fCBjaGFuZ2VzLm56QWxpZ24gfHwgY2hhbmdlcy5uekp1c3RpZnkpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpHdXR0ZXIpIHtcbiAgICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgICAgLnBpcGUoYXVkaXRUaW1lKDE2KSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hNZWRpYSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19