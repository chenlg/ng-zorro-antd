/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';
import { merge, EMPTY, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util';
import { InputBoolean } from '../core/util/convert';
import { NzMenuService } from './nz-menu.service';
import { NzSubmenuService } from './nz-submenu.service';
var NzMenuItemDirective = /** @class */ (function () {
    function NzMenuItemDirective(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzMenuService = nzMenuService;
        this.nzSubmenuService = nzSubmenuService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.originalPadding = null;
        this.selected$ = new Subject();
        this.nzDisabled = false;
        this.nzSelected = false;
    }
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    NzMenuItemDirective.prototype.clickMenuItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuService.onMenuItemClick(this);
        if (this.nzSubmenuService) {
            this.nzSubmenuService.onMenuItemClick();
        }
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["" + prefixName] = true,
            _a[prefixName + "-selected"] = this.nzSelected,
            _a[prefixName + "-disabled"] = this.nzDisabled,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMenuItemDirective.prototype.setSelectedState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSelected = value;
        this.selected$.next(value);
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** store origin padding in padding */
        if (this.el.style['padding-left']) {
            this.originalPadding = parseInt(this.el.style['padding-left'], 10);
        }
        merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : EMPTY).pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var padding = null;
            if (_this.nzMenuService.mode === 'inline') {
                if (isNotNil(_this.nzPaddingLeft)) {
                    padding = _this.nzPaddingLeft;
                }
                else {
                    /** @type {?} */
                    var level = _this.nzSubmenuService ? _this.nzSubmenuService.level + 1 : 1;
                    padding = level * _this.nzMenuService.inlineIndent;
                }
            }
            else {
                padding = _this.originalPadding;
            }
            if (padding) {
                _this.renderer.setStyle(_this.el, 'padding-left', padding + "px");
            }
            else {
                _this.renderer.removeStyle(_this.el, 'padding-left');
            }
        }));
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
        if (changes.nzDisabled) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu-item]',
                    providers: [NzUpdateHostClassService],
                    host: {
                        '(click)': 'clickMenuItem($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzMenuItemDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: NzMenuService },
        { type: NzSubmenuService, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzMenuItemDirective.propDecorators = {
        nzPaddingLeft: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzSelected: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzSelected", void 0);
    return NzMenuItemDirective;
}());
export { NzMenuItemDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.originalPadding;
    /** @type {?} */
    NzMenuItemDirective.prototype.selected$;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzPaddingLeft;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzDisabled;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzSelected;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzSubmenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtZW51L256LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQTRDRSw2QkFBb0Isd0JBQWtELEVBQ2xELGFBQTRCLEVBQ2hCLGdCQUFrQyxFQUM5QyxRQUFtQixFQUNuQixVQUFzQjtRQUp0Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeENsQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQy9CLGNBQVMsR0FB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Qyx1REFBMEQ7Ozs7O0lBQzFELDRDQUFvQzs7Ozs7SUFDcEMsK0NBQXNEOzs7OztJQUN0RCx1Q0FBMkI7Ozs7O0lBQzNCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56TWVudVNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBOelN1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uei1zdWJtZW51LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiAnW256LW1lbnUtaXRlbV0nLFxuICBwcm92aWRlcnM6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIGhvc3QgICAgIDoge1xuICAgICcoY2xpY2spJzogJ2NsaWNrTWVudUl0ZW0oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIG9yaWdpbmFsUGFkZGluZyA9IG51bGw7XG4gIHNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIG56UGFkZGluZ0xlZnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvKiogY2xlYXIgYWxsIGl0ZW0gc2VsZWN0ZWQgc3RhdHVzIGV4Y2VwdCB0aGlzICovXG4gIGNsaWNrTWVudUl0ZW0oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubnpNZW51U2VydmljZS5vbk1lbnVJdGVtQ2xpY2sodGhpcyk7XG4gICAgaWYgKHRoaXMubnpTdWJtZW51U2VydmljZSkge1xuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm9uTWVudUl0ZW1DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeE5hbWUgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0nIDogJ2FudC1tZW51LWl0ZW0nO1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XG4gICAgICBbIGAke3ByZWZpeE5hbWV9YCBdICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHtwcmVmaXhOYW1lfS1zZWxlY3RlZGAgXTogdGhpcy5uelNlbGVjdGVkLFxuICAgICAgWyBgJHtwcmVmaXhOYW1lfS1kaXNhYmxlZGAgXTogdGhpcy5uekRpc2FibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBOek1lbnVTZXJ2aWNlLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xuICAgIGlmICh0aGlzLmVsLnN0eWxlWyAncGFkZGluZy1sZWZ0JyBdKSB7XG4gICAgICB0aGlzLm9yaWdpbmFsUGFkZGluZyA9IHBhcnNlSW50KHRoaXMuZWwuc3R5bGVbICdwYWRkaW5nLWxlZnQnIF0sIDEwKTtcbiAgICB9XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UubW9kZSQsXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JCxcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCQgOiBFTVBUWVxuICAgICkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGxldCBwYWRkaW5nID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLm56TWVudVNlcnZpY2UubW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMubnpQYWRkaW5nTGVmdCkpIHtcbiAgICAgICAgICBwYWRkaW5nID0gdGhpcy5uelBhZGRpbmdMZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMSA6IDE7XG4gICAgICAgICAgcGFkZGluZyA9IGxldmVsICogdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFkZGluZyA9IHRoaXMub3JpZ2luYWxQYWRkaW5nO1xuICAgICAgfVxuICAgICAgaWYgKHBhZGRpbmcpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0JywgYCR7cGFkZGluZ31weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1sZWZ0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56U2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbn1cbiJdfQ==