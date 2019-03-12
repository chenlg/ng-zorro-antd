/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class NzCascaderOptionComponent {
    /**
     * @param {?} sanitizer
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(sanitizer, cdr, elementRef, renderer) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    /**
     * @return {?}
     */
    getOptionLabel() {
        return this.option ? this.option[this.nzLabelProperty] : '';
    }
    /**
     * @param {?} str
     * @return {?}
     */
    renderHighlightString(str) {
        /** @type {?} */
        const safeHtml = this.sanitizer.sanitize(SecurityContext.HTML, `<span class="ant-cascader-menu-item-keyword">${this.highlightText}</span>`);
        if (!safeHtml) {
            throw new Error(`[NG-ZORRO] Input value "${this.highlightText}" is not considered security.`);
        }
        return str.replace(new RegExp(this.highlightText, 'g'), safeHtml);
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
}
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
NzCascaderOptionComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCascaderOptionComponent.propDecorators = {
    option: [{ type: Input }],
    activated: [{ type: Input }],
    highlightText: [{ type: Input }],
    nzLabelProperty: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQUUsU0FBUyxFQUNoQixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWV6RCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBTXBDLFlBQW9CLFNBQXVCLEVBQVUsR0FBc0IsRUFBRSxVQUFzQixFQUFFLFFBQW1CO1FBQXBHLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUpsRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBR2pDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsR0FBVzs7Y0FDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZ0RBQWdELElBQUksQ0FBQyxhQUFhLFNBQVMsQ0FBQztRQUMzSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsSUFBSSxDQUFDLGFBQWEsK0JBQStCLENBQUMsQ0FBQztTQUMvRjtRQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUksaUJBQWlCLENBQUMsSUFBSTtnQkFDdkMsUUFBUSxFQUFTLHNCQUFzQjtnQkFDdkMsNmFBQWtEO2dCQUNsRCxJQUFJLEVBQWE7b0JBQ2YsY0FBYyxFQUE2QixrQ0FBa0M7b0JBQzdFLHVDQUF1QyxFQUFJLFdBQVc7b0JBQ3RELHVDQUF1QyxFQUFJLGdCQUFnQjtvQkFDM0QseUNBQXlDLEVBQUUsaUJBQWlCO2lCQUM3RDthQUNGOzs7O1lBZFEsWUFBWTtZQVBuQixpQkFBaUI7WUFFakIsVUFBVTtZQUNILFNBQVM7OztxQkFvQmYsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQUhOLDJDQUFnQzs7SUFDaEMsOENBQTJCOztJQUMzQixrREFBK0I7O0lBQy9CLG9EQUFtQzs7Ozs7SUFFdkIsOENBQStCOzs7OztJQUFFLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCwgUmVuZGVyZXIyLFxuICBTZWN1cml0eUNvbnRleHQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDYXNjYWRlck9wdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgOiAnW256LWNhc2NhZGVyLW9wdGlvbl0nLFxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgOiB7XG4gICAgJ1thdHRyLnRpdGxlXScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdvcHRpb24udGl0bGUgfHwgZ2V0T3B0aW9uTGFiZWwoKScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWFjdGl2ZV0nICA6ICdhY3RpdmF0ZWQnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1leHBhbmRdJyAgOiAnIW9wdGlvbi5pc0xlYWYnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnb3B0aW9uLmRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBvcHRpb246IENhc2NhZGVyT3B0aW9uO1xuICBASW5wdXQoKSBhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBuekxhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlci1tZW51LWl0ZW0nKTtcbiAgfVxuXG4gIGdldE9wdGlvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uID8gdGhpcy5vcHRpb25bIHRoaXMubnpMYWJlbFByb3BlcnR5IF0gOiAnJztcbiAgfVxuXG4gIHJlbmRlckhpZ2hsaWdodFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2FmZUh0bWwgPSB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgYDxzcGFuIGNsYXNzPVwiYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1rZXl3b3JkXCI+JHt0aGlzLmhpZ2hsaWdodFRleHR9PC9zcGFuPmApO1xuICAgIGlmICghc2FmZUh0bWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW05HLVpPUlJPXSBJbnB1dCB2YWx1ZSBcIiR7dGhpcy5oaWdobGlnaHRUZXh0fVwiIGlzIG5vdCBjb25zaWRlcmVkIHNlY3VyaXR5LmApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmhpZ2hsaWdodFRleHQsICdnJyksIHNhZmVIdG1sKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19