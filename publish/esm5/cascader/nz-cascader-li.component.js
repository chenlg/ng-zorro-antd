/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(sanitizer, cdr, elementRef, renderer) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.getOptionLabel = /**
     * @return {?}
     */
    function () {
        return this.option ? this.option[this.nzLabelProperty] : '';
    };
    /**
     * @param {?} str
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.renderHighlightString = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var safeHtml = this.sanitizer.sanitize(SecurityContext.HTML, "<span class=\"ant-cascader-menu-item-keyword\">" + this.highlightText + "</span>");
        if (!safeHtml) {
            throw new Error("[NG-ZORRO] Input value \"" + this.highlightText + "\" is not considered security.");
        }
        return str.replace(new RegExp(this.highlightText, 'g'), safeHtml);
    };
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    NzCascaderOptionComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    template: "<ng-container *ngIf=\"highlightText\"><span [innerHTML]=\"renderHighlightString(getOptionLabel())\"></span></ng-container>\n<ng-container *ngIf=\"!highlightText\">{{ getOptionLabel() }}</ng-container>\n<span *ngIf=\"!option.isLeaf || option.children && option.children.length || option.loading\" class=\"ant-cascader-menu-item-expand-icon\">\n  <i nz-icon [type]=\"option.loading ? 'loading' : 'right'\"></i>\n</span>",
                    host: {
                        '[attr.title]': 'option.title || getOptionLabel()',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        option: [{ type: Input }],
        activated: [{ type: Input }],
        highlightText: [{ type: Input }],
        nzLabelProperty: [{ type: Input }]
    };
    return NzCascaderOptionComponent;
}());
export { NzCascaderOptionComponent };
if (false) {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQUUsU0FBUyxFQUNoQixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RDtJQWtCRSxtQ0FBb0IsU0FBdUIsRUFBVSxHQUFzQixFQUFFLFVBQXNCLEVBQUUsUUFBbUI7UUFBcEcsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSmxFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFHakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELGtEQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELHlEQUFxQjs7OztJQUFyQixVQUFzQixHQUFXOztZQUN6QixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxvREFBZ0QsSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDO1FBQzNJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUEyQixJQUFJLENBQUMsYUFBYSxtQ0FBK0IsQ0FBQyxDQUFDO1NBQy9GO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELGdEQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFJLGlCQUFpQixDQUFDLElBQUk7b0JBQ3ZDLFFBQVEsRUFBUyxzQkFBc0I7b0JBQ3ZDLDZhQUFrRDtvQkFDbEQsSUFBSSxFQUFhO3dCQUNmLGNBQWMsRUFBNkIsa0NBQWtDO3dCQUM3RSx1Q0FBdUMsRUFBSSxXQUFXO3dCQUN0RCx1Q0FBdUMsRUFBSSxnQkFBZ0I7d0JBQzNELHlDQUF5QyxFQUFFLGlCQUFpQjtxQkFDN0Q7aUJBQ0Y7Ozs7Z0JBZFEsWUFBWTtnQkFQbkIsaUJBQWlCO2dCQUVqQixVQUFVO2dCQUNILFNBQVM7Ozt5QkFvQmYsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFxQlIsZ0NBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXpCWSx5QkFBeUI7OztJQUNwQywyQ0FBZ0M7O0lBQ2hDLDhDQUEyQjs7SUFDM0Isa0RBQStCOztJQUMvQixvREFBbUM7Ozs7O0lBRXZCLDhDQUErQjs7Ozs7SUFBRSx3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsIFJlbmRlcmVyMixcbiAgU2VjdXJpdHlDb250ZXh0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ2FzY2FkZXJPcHRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yICAgICAgIDogJ1tuei1jYXNjYWRlci1vcHRpb25dJyxcbiAgdGVtcGxhdGVVcmwgICAgOiAnLi9uei1jYXNjYWRlci1saS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgIDoge1xuICAgICdbYXR0ci50aXRsZV0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnb3B0aW9uLnRpdGxlIHx8IGdldE9wdGlvbkxhYmVsKCknLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1hY3RpdmVdJyAgOiAnYWN0aXZhdGVkJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tZXhwYW5kXScgIDogJyFvcHRpb24uaXNMZWFmJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ29wdGlvbi5kaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgb3B0aW9uOiBDYXNjYWRlck9wdGlvbjtcbiAgQElucHV0KCkgYWN0aXZhdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItbWVudS1pdGVtJyk7XG4gIH1cblxuICBnZXRPcHRpb25MYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbiA/IHRoaXMub3B0aW9uWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSBdIDogJyc7XG4gIH1cblxuICByZW5kZXJIaWdobGlnaHRTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNhZmVIdG1sID0gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGA8c3BhbiBjbGFzcz1cImFudC1jYXNjYWRlci1tZW51LWl0ZW0ta2V5d29yZFwiPiR7dGhpcy5oaWdobGlnaHRUZXh0fTwvc3Bhbj5gKTtcbiAgICBpZiAoIXNhZmVIdG1sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtORy1aT1JST10gSW5wdXQgdmFsdWUgXCIke3RoaXMuaGlnaGxpZ2h0VGV4dH1cIiBpcyBub3QgY29uc2lkZXJlZCBzZWN1cml0eS5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5oaWdobGlnaHRUZXh0LCAnZycpLCBzYWZlSHRtbCk7XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==