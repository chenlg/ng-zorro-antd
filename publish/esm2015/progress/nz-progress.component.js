/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzProgressComponent {
    constructor() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeLinecap = 'round';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = (/**
         * @param {?} percent
         * @return {?}
         */
        (percent) => `${percent}%`);
        this.isStatusSet = false;
        this.isStrokeWidthSet = false;
        this.isFormatSet = false;
        this.isGapDegreeSet = false;
        this.isGapPositionSet = false;
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzSuccessPercent = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        if (this.nzSize === 'small' && !this.isStrokeWidthSet) {
            this._strokeWidth = 6;
        }
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFormat(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.isFormatSet = true;
        }
    }
    /**
     * @return {?}
     */
    get nzFormat() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPercent(value) {
        this._percent = value;
        if (isNotNil(value)) {
            /** @type {?} */
            const fillAll = parseInt(value.toString(), 10) >= 100;
            if (fillAll && !this.isStatusSet) {
                this._status = 'success';
            }
            else {
                this._status = this._cacheStatus;
            }
            this.updatePathStyles();
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzPercent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStrokeWidth(value) {
        if (isNotNil(value)) {
            this._strokeWidth = value;
            this.isStrokeWidthSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzStrokeWidth() {
        return this._strokeWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStatus(value) {
        if (isNotNil(value)) {
            this._status = value;
            this._cacheStatus = value;
            this.isStatusSet = true;
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this._type = value;
        if (!this.isStrokeWidthSet) {
            if (this.nzType !== 'line') {
                this._strokeWidth = 6;
            }
        }
        if (this.nzType === 'dashboard') {
            if (!this.isGapPositionSet) {
                this._gapPosition = 'bottom';
            }
            if (!this.isGapDegreeSet) {
                this._gapDegree = 75;
            }
        }
        this.updateIcon();
        this.updatePathStyles();
    }
    /**
     * @return {?}
     */
    get nzType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapDegree(value) {
        if (isNotNil(value)) {
            this._gapDegree = value;
            this.isGapDegreeSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapDegree() {
        return this._gapDegree;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapPosition(value) {
        if (isNotNil(value)) {
            this._gapPosition = value;
            this.isGapPositionSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapPosition() {
        return this._gapPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStrokeLinecap(value) {
        this._strokeLinecap = value;
        this.updatePathStyles();
    }
    /**
     * @return {?}
     */
    get nzStrokeLinecap() {
        return this._strokeLinecap;
    }
    /**
     * @return {?}
     */
    get isCirCleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @return {?}
     */
    updatePathStyles() {
        /** @type {?} */
        const radius = 50 - (this.nzStrokeWidth / 2);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
        switch (this.nzGapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
     a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
     a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: `${len - this.nzGapDegree}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: `${(this.nzPercent / 100) * (len - this.nzGapDegree)}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    }
    /**
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const isCircle = (this.nzType === 'circle' || this.nzType === 'dashboard');
        /** @type {?} */
        let ret = '';
        if (this.nzStatus === 'success') {
            ret = 'check';
        }
        if (this.nzStatus === 'exception') {
            ret = 'close';
        }
        if (ret) {
            if (!isCircle) {
                ret += '-circle';
                this.iconTheme = 'fill';
            }
            else {
                this.iconTheme = 'outline';
            }
        }
        this.icon = ret;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePathStyles();
        this.updateIcon();
    }
}
NzProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-progress',
                preserveWhitespaces: false,
                template: "<ng-template #progressInfoTemplate>\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\n    <ng-container *ngIf=\"(nzStatus=='exception')||(nzStatus=='success')&&(!isFormatSet); else formatTemplate\">\n      <!-- Theme is handled in type here. -->\n      <i nz-icon [type]=\"icon\" [theme]=\"iconTheme\"></i>\n    </ng-container>\n    <ng-template #formatTemplate>\n      {{ nzFormat(nzPercent) }}\n    </ng-template>\n  </span>\n</ng-template>\n<div [ngClass]=\"'ant-progress ant-progress-status-'+nzStatus\"\n  [class.ant-progress-line]=\"nzType=='line'\"\n  [class.ant-progress-small]=\"nzSize=='small'\"\n  [class.ant-progress-show-info]=\"nzShowInfo\"\n  [class.ant-progress-circle]=\"isCirCleStyle\">\n  <div *ngIf=\"nzType=='line'\">\n    <div class=\"ant-progress-outer\">\n      <div class=\"ant-progress-inner\">\n        <div class=\"ant-progress-bg\"\n          [style.width.%]=\"nzPercent\"\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n          [style.background]=\"nzStrokeColor\"\n          [style.height.px]=\"nzStrokeWidth\">\n        </div>\n        <div class=\"ant-progress-success-bg\"\n          [style.width.%]=\"nzSuccessPercent\"\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n          [style.height.px]=\"nzStrokeWidth\"></div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n  <div\n    [style.width.px]=\"this.nzWidth\"\n    [style.height.px]=\"this.nzWidth\"\n    [style.fontSize.px]=\"this.nzWidth*0.15+6\"\n    class=\"ant-progress-inner\"\n    *ngIf=\"isCirCleStyle\">\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n      <path\n        class=\"ant-progress-circle-trail\"\n        stroke=\"#f3f3f3\"\n        fill-opacity=\"0\"\n        [attr.stroke-width]=\"nzStrokeWidth\"\n        [ngStyle]=\"trailPathStyle\"\n        [attr.d]=\"pathString\">\n      </path>\n      <path\n        class=\"ant-progress-circle-path\"\n        [attr.d]=\"pathString\"\n        [attr.stroke-linecap]=\"nzStrokeLinecap\"\n        fill-opacity=\"0\"\n        [attr.stroke]=\"nzStrokeColor || statusColorMap[nzStatus]\"\n        [attr.stroke-width]=\"nzPercent?nzStrokeWidth:0\"\n        [ngStyle]=\"strokePathStyle\">\n      </path>\n    </svg>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n</div>"
            }] }
];
NzProgressComponent.propDecorators = {
    nzShowInfo: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzSuccessPercent: [{ type: Input }],
    nzStrokeColor: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzPercent: [{ type: Input }],
    nzStrokeWidth: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzType: [{ type: Input }],
    nzGapDegree: [{ type: Input }],
    nzGapPosition: [{ type: Input }],
    nzStrokeLinecap: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._gapDegree;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._gapPosition;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._percent;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._status;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._cacheStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._strokeLinecap;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._strokeWidth;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._size;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._type;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype._format;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.iconTheme;
    /** @type {?} */
    NzProgressComponent.prototype.isStatusSet;
    /** @type {?} */
    NzProgressComponent.prototype.isStrokeWidthSet;
    /** @type {?} */
    NzProgressComponent.prototype.isFormatSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapDegreeSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapPositionSet;
    /** @type {?} */
    NzProgressComponent.prototype.statusColorMap;
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInByb2dyZXNzL256LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzlDLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFNVSxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsaUJBQVksR0FBOEIsS0FBSyxDQUFDO1FBQ2hELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQXlCLFFBQVEsQ0FBQztRQUN6QyxpQkFBWSxHQUF5QixRQUFRLENBQUM7UUFDOUMsbUJBQWMsR0FBZ0MsT0FBTyxDQUFDO1FBQ3RELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsVUFBSyxHQUF1QixNQUFNLENBQUM7UUFDbkMsWUFBTzs7OztRQUFHLENBQUMsT0FBZSxFQUFVLEVBQUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFDO1FBTTdELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsbUJBQWMsR0FBRztZQUNmLE1BQU0sRUFBSyxTQUFTO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBSSxTQUFTO1NBQ3JCLENBQUM7UUFDTyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUE0TWhDLENBQUM7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QUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQTNPRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGk0RUFBbUQ7YUFDcEQ7Ozt5QkEyQkUsS0FBSztzQkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFFTCxLQUFLO3VCQVlMLEtBQUs7d0JBWUwsS0FBSzs0QkFtQkwsS0FBSzt1QkFhTCxLQUFLO3FCQWNMLEtBQUs7MEJBd0JMLEtBQUs7NEJBY0wsS0FBSzs4QkFhTCxLQUFLOzs7Ozs7O0lBdkpOLHlDQUF1Qjs7Ozs7SUFDdkIsMkNBQXdEOzs7OztJQUN4RCx1Q0FBcUI7Ozs7O0lBQ3JCLHNDQUFpRDs7Ozs7SUFDakQsMkNBQXNEOzs7OztJQUN0RCw2Q0FBOEQ7Ozs7O0lBQzlELDJDQUF5Qjs7Ozs7SUFDekIsb0NBQTBCOzs7OztJQUMxQixvQ0FBMkM7Ozs7O0lBQzNDLHNDQUE2RDs7SUFDN0QsNkNBQTRDOztJQUM1Qyw4Q0FBNkM7O0lBQzdDLHlDQUFtQjs7SUFDbkIsbUNBQUs7O0lBQ0wsd0NBQVU7O0lBQ1YsMENBQW9COztJQUNwQiwrQ0FBeUI7O0lBQ3pCLDBDQUFvQjs7SUFDcEIsNkNBQXVCOztJQUN2QiwrQ0FBeUI7O0lBQ3pCLDZDQUlFOztJQUNGLHlDQUEyQjs7SUFDM0Isc0NBQXVCOztJQUN2QiwrQ0FBOEI7O0lBQzlCLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXhjZXB0aW9uJyB8ICdhY3RpdmUnIHwgJ25vcm1hbCc7XG5leHBvcnQgdHlwZSBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZScgfCAnY2lyY2xlJyB8ICdkYXNoYm9hcmQnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJyB8ICdzcXVhcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXByb2dyZXNzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZ2FwRGVncmVlID0gMDtcbiAgcHJpdmF0ZSBfZ2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgcHJpdmF0ZSBfcGVyY2VudCA9IDA7XG4gIHByaXZhdGUgX3N0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBfY2FjaGVTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgX3N0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCc7XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoID0gODtcbiAgcHJpdmF0ZSBfc2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfdHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBwcml2YXRlIF9mb3JtYXQgPSAocGVyY2VudDogbnVtYmVyKTogc3RyaW5nID0+IGAke3BlcmNlbnR9JWA7XG4gIHRyYWlsUGF0aFN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIHN0cm9rZVBhdGhTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBwYXRoU3RyaW5nOiBzdHJpbmc7XG4gIGljb247XG4gIGljb25UaGVtZTtcbiAgaXNTdGF0dXNTZXQgPSBmYWxzZTtcbiAgaXNTdHJva2VXaWR0aFNldCA9IGZhbHNlO1xuICBpc0Zvcm1hdFNldCA9IGZhbHNlO1xuICBpc0dhcERlZ3JlZVNldCA9IGZhbHNlO1xuICBpc0dhcFBvc2l0aW9uU2V0ID0gZmFsc2U7XG4gIHN0YXR1c0NvbG9yTWFwID0ge1xuICAgIG5vcm1hbCAgIDogJyMxMDhlZTknLFxuICAgIGV4Y2VwdGlvbjogJyNmZjU1MDAnLFxuICAgIHN1Y2Nlc3MgIDogJyM4N2QwNjgnXG4gIH07XG4gIEBJbnB1dCgpIG56U2hvd0luZm8gPSB0cnVlO1xuICBASW5wdXQoKSBueldpZHRoID0gMTMyO1xuICBASW5wdXQoKSBuelN1Y2Nlc3NQZXJjZW50ID0gMDtcbiAgQElucHV0KCkgbnpTdHJva2VDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpemUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5uelNpemUgPT09ICdzbWFsbCcgJiYgIXRoaXMuaXNTdHJva2VXaWR0aFNldCkge1xuICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSA2O1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZvcm1hdCh2YWx1ZTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XG4gICAgICB0aGlzLmlzRm9ybWF0U2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpGb3JtYXQoKTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGVyY2VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyY2VudCA9IHZhbHVlO1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xuICAgICAgaWYgKGZpbGxBbGwgJiYgIXRoaXMuaXNTdGF0dXNTZXQpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FjaGVTdGF0dXM7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBlcmNlbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0cm9rZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IHZhbHVlO1xuICAgICAgdGhpcy5pc1N0cm9rZVdpZHRoU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U3RhdHVzKHZhbHVlOiBOelByb2dyZXNzU3RhdHVzVHlwZSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2FjaGVTdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNTdGF0dXNTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogTnpQcm9ncmVzc1R5cGVUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5pc1N0cm9rZVdpZHRoU2V0KSB7XG4gICAgICBpZiAodGhpcy5uelR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgIGlmICghdGhpcy5pc0dhcFBvc2l0aW9uU2V0KSB7XG4gICAgICAgIHRoaXMuX2dhcFBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNHYXBEZWdyZWVTZXQpIHtcbiAgICAgICAgdGhpcy5fZ2FwRGVncmVlID0gNzU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBOelByb2dyZXNzVHlwZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56R2FwRGVncmVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9nYXBEZWdyZWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNHYXBEZWdyZWVTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgfVxuXG4gIH1cblxuICBnZXQgbnpHYXBEZWdyZWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwRGVncmVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56R2FwUG9zaXRpb24odmFsdWU6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9nYXBQb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0dhcFBvc2l0aW9uU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekdhcFBvc2l0aW9uKCk6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9nYXBQb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0cm9rZUxpbmVjYXAodmFsdWU6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSkge1xuICAgIHRoaXMuX3N0cm9rZUxpbmVjYXAgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgfVxuXG4gIGdldCBuelN0cm9rZUxpbmVjYXAoKTogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlTGluZWNhcDtcbiAgfVxuXG4gIGdldCBpc0NpckNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICB9XG5cbiAgdXBkYXRlUGF0aFN0eWxlcygpOiB2b2lkIHtcbiAgICBjb25zdCByYWRpdXMgPSA1MCAtICh0aGlzLm56U3Ryb2tlV2lkdGggLyAyKTtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xuICAgIHN3aXRjaCAodGhpcy5uekdhcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XG4gICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXkgOiBgJHtsZW4gLSB0aGlzLm56R2FwRGVncmVlfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHt0aGlzLm56R2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcbiAgICB0aGlzLnN0cm9rZVBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheSA6IGAkeyh0aGlzLm56UGVyY2VudCAvIDEwMCkgKiAobGVuIC0gdGhpcy5uekdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke3RoaXMubnpHYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb24gICAgICA6ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlSWNvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NpcmNsZSA9ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKTtcbiAgICBsZXQgcmV0ID0gJyc7XG4gICAgaWYgKHRoaXMubnpTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgcmV0ID0gJ2NoZWNrJztcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTdGF0dXMgPT09ICdleGNlcHRpb24nKSB7XG4gICAgICByZXQgPSAnY2xvc2UnO1xuICAgIH1cbiAgICBpZiAocmV0KSB7XG4gICAgICBpZiAoIWlzQ2lyY2xlKSB7XG4gICAgICAgIHJldCArPSAnLWNpcmNsZSc7XG4gICAgICAgIHRoaXMuaWNvblRoZW1lID0gJ2ZpbGwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWNvbiA9IHJldDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICB9XG5cbn1cbiJdfQ==