/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzStatisticComponent = /** @class */ (function () {
    function NzStatisticComponent() {
        this.nzValueStyle = {};
    }
    NzStatisticComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-statistic',
                    template: "<div class=\"ant-statistic-title\">\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n</div>\n<div class=\"ant-statistic-content\" [ngStyle]=\"nzValueStyle\">\n  <span *ngIf=\"nzPrefix\" class=\"ant-statistic-content-prefix\">\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\n  </span>\n  <nz-statistic-number\n    [nzValue]=\"nzValue\"\n    [nzValueTemplate]=\"nzValueTemplate\">\n  </nz-statistic-number>\n  <span *ngIf=\"nzSuffix\" class=\"ant-statistic-content-suffix\">\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n  </span>\n</div>\n",
                    host: {
                        class: 'ant-statistic'
                    },
                    styles: ['nz-statistic { display: block; }']
                }] }
    ];
    NzStatisticComponent.propDecorators = {
        nzPrefix: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzValueStyle: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
    return NzStatisticComponent;
}());
export { NzStatisticComponent };
if (false) {
    /** @type {?} */
    NzStatisticComponent.prototype.nzPrefix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzSuffix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzTitle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueStyle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzdGF0aXN0aWMvbnotc3RhdGlzdGljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFBQTtRQWVXLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBRTdCLENBQUM7O2dCQWpCQSxTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBSSxpQkFBaUIsQ0FBQyxJQUFJO29CQUN2QyxRQUFRLEVBQVMsY0FBYztvQkFDL0Isd3BCQUFnRDtvQkFDaEQsSUFBSSxFQUFhO3dCQUNmLEtBQUssRUFBRSxlQUFlO3FCQUN2Qjs2QkFDa0Isa0NBQWtDO2lCQUN0RDs7OzJCQUVFLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOztJQUNSLDJCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FQWSxvQkFBb0I7OztJQUMvQix3Q0FBOEM7O0lBQzlDLHdDQUE4Qzs7SUFDOUMsdUNBQTZDOztJQUM3Qyx1Q0FBdUM7O0lBQ3ZDLDRDQUEyQjs7SUFDM0IsK0NBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U3RhdGlzdGljVmFsdWVUeXBlIH0gZnJvbSAnLi9uei1zdGF0aXN0aWMtZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgOiAnbnotc3RhdGlzdGljJyxcbiAgdGVtcGxhdGVVcmwgICAgOiAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICA6IHtcbiAgICBjbGFzczogJ2FudC1zdGF0aXN0aWMnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgIDogWyAnbnotc3RhdGlzdGljIHsgZGlzcGxheTogYmxvY2s7IH0nIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdGF0aXN0aWNDb21wb25lbnQge1xuICBASW5wdXQoKSBuelByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56U3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56VmFsdWU6IE56U3RhdGlzdGljVmFsdWVUeXBlO1xuICBASW5wdXQoKSBuelZhbHVlU3R5bGUgPSB7fTtcbiAgQElucHV0KCkgbnpWYWx1ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTdGF0aXN0aWNWYWx1ZVR5cGUgfT47XG59XG4iXX0=