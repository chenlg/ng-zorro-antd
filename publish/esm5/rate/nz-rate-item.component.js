/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util';
var NzRateItemComponent = /** @class */ (function () {
    function NzRateItemComponent() {
        this.allowHalf = false;
        this.itemHover = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.hoverRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemHover.next(isHalf && this.allowHalf);
    };
    /**
     * @param {?} isHalf
     * @return {?}
     */
    NzRateItemComponent.prototype.clickRate = /**
     * @param {?} isHalf
     * @return {?}
     */
    function (isHalf) {
        this.itemClick.next(isHalf && this.allowHalf);
    };
    NzRateItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-rate-item]',
                    template: "<div class=\"ant-rate-star-second\"\n  (mouseover)=\"hoverRate(false); $event.stopPropagation();\"\n  (click)=\"clickRate(false); $event.stopPropagation();\">\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n</div>\n<div class=\"ant-rate-star-first\"\n  (mouseover)=\"hoverRate(true); $event.stopPropagation();\"\n  (click)=\"clickRate(true); $event.stopPropagation();\">\n  <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n</div>\n\n<ng-template #defaultCharacter>\n  <i nz-icon\n    type=\"star\"\n    theme=\"fill\"></i>\n</ng-template>\n"
                }] }
    ];
    NzRateItemComponent.propDecorators = {
        character: [{ type: Input }],
        allowHalf: [{ type: Input }],
        itemHover: [{ type: Output }],
        itemClick: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzRateItemComponent.prototype, "allowHalf", void 0);
    return NzRateItemComponent;
}());
export { NzRateItemComponent };
if (false) {
    /** @type {?} */
    NzRateItemComponent.prototype.character;
    /** @type {?} */
    NzRateItemComponent.prototype.allowHalf;
    /** @type {?} */
    NzRateItemComponent.prototype.itemHover;
    /** @type {?} */
    NzRateItemComponent.prototype.itemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJyYXRlL256LXJhdGUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTVDO0lBQUE7UUFRMkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVM3RCxDQUFDOzs7OztJQVBDLHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFlO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsTUFBZTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUssZ0JBQWdCO29CQUM3Qiw4bUJBQTRDO2lCQUM3Qzs7OzRCQUVFLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxNQUFNOzRCQUNOLE1BQU07O0lBRmtCO1FBQWYsWUFBWSxFQUFFOzswREFBNEI7SUFXdEQsMEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWJZLG1CQUFtQjs7O0lBQzlCLHdDQUFzQzs7SUFDdEMsd0NBQW9EOztJQUNwRCx3Q0FBMkQ7O0lBQzNELHdDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yICAgOiAnW256LXJhdGUtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotcmF0ZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelJhdGVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93SGFsZjogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGhvdmVyUmF0ZShpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1Ib3Zlci5uZXh0KGlzSGFsZiAmJiB0aGlzLmFsbG93SGFsZik7XG4gIH1cblxuICBjbGlja1JhdGUoaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtQ2xpY2submV4dChpc0hhbGYgJiYgdGhpcy5hbGxvd0hhbGYpO1xuICB9XG59XG4iXX0=