/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzCarouselContentDirective = /** @class */ (function () {
    function NzCarouselContentDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._active = false;
        this._width = 0;
        this._fadeMode = false;
        this.el = this.elementRef.nativeElement;
        renderer.addClass(elementRef.nativeElement, 'slick-slide');
    }
    Object.defineProperty(NzCarouselContentDirective.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._width;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            this.renderer.setStyle(this.el, 'width', this.width + "px");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "left", {
        get: /**
         * @return {?}
         */
        function () {
            return this._left;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._left = value;
            if (isNotNil(this.left)) {
                this.renderer.setStyle(this.el, 'left', this.left + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "top", {
        get: /**
         * @return {?}
         */
        function () {
            return this._top;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._top = value;
            if (isNotNil(this.top)) {
                this.renderer.setStyle(this.el, 'top', this.top + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'top');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = value;
            this.updateOpacity();
            if (this.isActive) {
                this.renderer.addClass(this.el, 'slick-active');
            }
            else {
                this.renderer.removeClass(this.el, 'slick-active');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "fadeMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fadeMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fadeMode = value;
            if (this.fadeMode) {
                this.renderer.setStyle(this.el, 'position', 'relative');
            }
            else {
                this.renderer.removeStyle(this.el, 'position');
            }
            this.updateOpacity();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselContentDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'transition', 'opacity 500ms ease');
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselContentDirective.prototype.updateOpacity = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'opacity', this.isActive ? 1 : 0);
        }
    };
    NzCarouselContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-carousel-content]'
                },] }
    ];
    /** @nocollapse */
    NzCarouselContentDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzCarouselContentDirective;
}());
export { NzCarouselContentDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype._active;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype._width;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype._left;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype._top;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype._fadeMode;
    /** @type {?} */
    NzCarouselContentDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCarouselContentDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwvbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUM7SUEwRUUsb0NBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0RS9ELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUduQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFrRTlDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBakVELHNCQUFJLDZDQUFLOzs7O1FBS1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFQRCxVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUssSUFBSSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSw0Q0FBSTs7OztRQVNSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBWEQsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxL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Ozs7Ozs7SUFDckMsNkNBQXdCOzs7OztJQUN4Qiw0Q0FBMkI7Ozs7O0lBQzNCLDJDQUFzQjs7Ozs7SUFDdEIsMENBQXFCOzs7OztJQUNyQiwrQ0FBMEI7O0lBQzFCLHdDQUFnRDs7Ozs7SUFpRXBDLGdEQUE4Qjs7Ozs7SUFBRSw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1jYXJvdXNlbC1jb250ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XG4gIHByaXZhdGUgX2ZhZGVNb2RlID0gZmFsc2U7XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd3aWR0aCcsIGAke3RoaXMud2lkdGh9cHhgKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIHNldCBsZWZ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZWZ0ID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMubGVmdCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCBgJHt0aGlzLmxlZnR9cHhgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnbGVmdCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XG4gIH1cblxuICBzZXQgdG9wKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3AgPSB2YWx1ZTtcbiAgICBpZiAoaXNOb3ROaWwodGhpcy50b3ApKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd0b3AnLCBgJHt0aGlzLnRvcH1weGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICd0b3AnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcDtcbiAgfVxuXG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdzbGljay1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnc2xpY2stYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBzZXQgZmFkZU1vZGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mYWRlTW9kZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmZhZGVNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU9wYWNpdHkoKTtcbiAgfVxuXG4gIGdldCBmYWRlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmFkZU1vZGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NsaWNrLXNsaWRlJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd0cmFuc2l0aW9uJywgJ29wYWNpdHkgNTAwbXMgZWFzZScpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVPcGFjaXR5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZhZGVNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdvcGFjaXR5JywgdGhpcy5pc0FjdGl2ZSA/IDEgOiAwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==