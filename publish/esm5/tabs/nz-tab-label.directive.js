/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
var NzTabLabelDirective = /** @class */ (function () {
    function NzTabLabelDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
    }
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetLeft = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetWidth = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetTop = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetTop;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetHeight = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetHeight;
    };
    NzTabLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tab-label]',
                    host: {
                        '[class.ant-tabs-tab-disabled]': 'disabled'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTabLabelDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzTabLabelDirective.propDecorators = {
        disabled: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTabLabelDirective.prototype, "disabled", void 0);
    return NzTabLabelDirective;
}());
export { NzTabLabelDirective };
if (false) {
    /** @type {?} */
    NzTabLabelDirective.prototype.disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYi1sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRDtJQVNFLDZCQUFtQixVQUFzQixFQUFFLFFBQW1CO1FBQTNDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUd4QyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELDJDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3BELENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsSUFBSSxFQUFNO3dCQUNSLCtCQUErQixFQUFFLFVBQVU7cUJBQzVDO2lCQUNGOzs7O2dCQVRtQixVQUFVO2dCQUFTLFNBQVM7OzsyQkFXN0MsS0FBSzs7SUFBbUI7UUFBZixZQUFZLEVBQUU7O3lEQUFrQjtJQXFCNUMsMEJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXRCWSxtQkFBbUI7OztJQUM5Qix1Q0FBMEM7O0lBRTlCLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei10YWItbGFiZWxdJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYi1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJMYWJlbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYnMtdGFiJyk7XG4gIH1cblxuICBnZXRPZmZzZXRMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gIH1cblxuICBnZXRPZmZzZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIGdldE9mZnNldFRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gIH1cblxuICBnZXRPZmZzZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9XG59XG4iXX0=