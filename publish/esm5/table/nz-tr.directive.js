/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzTableComponent } from './nz-table.component';
var NzTrDirective = /** @class */ (function () {
    function NzTrDirective(elementRef, renderer, nzTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableComponent = nzTableComponent;
    }
    Object.defineProperty(NzTrDirective.prototype, "nzExpand", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (toBoolean(value)) {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
            else {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
        },
        enumerable: true,
        configurable: true
    });
    NzTrDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'tr',
                    host: {
                        '[class.ant-table-row]': 'nzTableComponent'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTrDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTrDirective.propDecorators = {
        nzExpand: [{ type: Input }]
    };
    return NzTrDirective;
}());
export { NzTrDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.renderer;
    /** @type {?} */
    NzTrDirective.prototype.nzTableComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQXFCRSx1QkFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUE2QixnQkFBa0M7UUFBbEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUV0SSxDQUFDO0lBYkQsc0JBQ0ksbUNBQVE7Ozs7O1FBRFosVUFDYSxLQUFjO1lBQ3pCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7YUFDcEY7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBbkJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFNO3dCQUNSLHVCQUF1QixFQUFFLGtCQUFrQjtxQkFDNUM7aUJBQ0Y7Ozs7Z0JBVm1CLFVBQVU7Z0JBQXlCLFNBQVM7Z0JBRXZELGdCQUFnQix1QkF1Qm1ELElBQUksWUFBSSxRQUFROzs7MkJBWHpGLEtBQUs7O0lBY1Isb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQWhCWSxhQUFhOzs7Ozs7SUFhWixtQ0FBOEI7Ozs7O0lBQUUsaUNBQTJCOztJQUFFLHlDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndHInLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvd10nOiAnbnpUYWJsZUNvbXBvbmVudCdcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIE56VHJEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0b0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudCkge1xuXG4gIH1cbn1cbiJdfQ==