/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzTableComponent } from './nz-table.component';
export class NzTrDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzTableComponent
     */
    constructor(elementRef, renderer, nzTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableComponent = nzTableComponent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpand(value) {
        if (toBoolean(value)) {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
        else {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
    }
}
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
NzTrDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
NzTrDirective.propDecorators = {
    nzExpand: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVV4RCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBYXhCLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBNkIsZ0JBQWtDO1FBQWxILGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEksQ0FBQzs7Ozs7SUFiRCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0gsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFNO29CQUNSLHVCQUF1QixFQUFFLGtCQUFrQjtpQkFDNUM7YUFDRjs7OztZQVZtQixVQUFVO1lBQXlCLFNBQVM7WUFFdkQsZ0JBQWdCLHVCQXVCbUQsSUFBSSxZQUFJLFFBQVE7Ozt1QkFYekYsS0FBSzs7Ozs7OztJQVdNLG1DQUE4Qjs7Ozs7SUFBRSxpQ0FBMkI7O0lBQUUseUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0cicsXG4gIGhvc3QgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcm93XSc6ICduelRhYmxlQ29tcG9uZW50J1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgTnpUckRpcmVjdGl2ZSB7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLWV4cGFuZGVkLXJvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLWV4cGFuZGVkLXJvdycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50KSB7XG5cbiAgfVxufVxuIl19