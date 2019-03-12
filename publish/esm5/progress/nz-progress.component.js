/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent() {
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
        function (percent) { return percent + "%"; });
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
    Object.defineProperty(NzProgressComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            if (this.nzSize === 'small' && !this.isStrokeWidthSet) {
                this._strokeWidth = 6;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzFormat", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.isFormatSet = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzPercent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = value;
            if (isNotNil(value)) {
                /** @type {?} */
                var fillAll = parseInt(value.toString(), 10) >= 100;
                if (fillAll && !this.isStatusSet) {
                    this._status = 'success';
                }
                else {
                    this._status = this._cacheStatus;
                }
                this.updatePathStyles();
                this.updateIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStrokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._strokeWidth = value;
                this.isStrokeWidthSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._status = value;
                this._cacheStatus = value;
                this.isStatusSet = true;
                this.updateIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzGapDegree", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapDegree;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapDegree = value;
                this.isGapDegreeSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzGapPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapPosition = value;
                this.isGapPositionSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStrokeLinecap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeLinecap;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeLinecap = value;
            this.updatePathStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCirCleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updatePathStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var radius = 50 - (this.nzStrokeWidth / 2);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
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
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: len - this.nzGapDegree + "px " + len + "px",
            strokeDashoffset: "-" + this.nzGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: (this.nzPercent / 100) * (len - this.nzGapDegree) + "px " + len + "px",
            strokeDashoffset: "-" + this.nzGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updateIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCircle = (this.nzType === 'circle' || this.nzType === 'dashboard');
        /** @type {?} */
        var ret = '';
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
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePathStyles();
        this.updateIcon();
    };
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
    return NzProgressComponent;
}());
export { NzProgressComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInByb2dyZXNzL256LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDO0lBQUE7UUFNVSxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsaUJBQVksR0FBOEIsS0FBSyxDQUFDO1FBQ2hELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQXlCLFFBQVEsQ0FBQztRQUN6QyxpQkFBWSxHQUF5QixRQUFRLENBQUM7UUFDOUMsbUJBQWMsR0FBZ0MsT0FBTyxDQUFDO1FBQ3RELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsVUFBSyxHQUF1QixNQUFNLENBQUM7UUFDbkMsWUFBTzs7OztRQUFHLFVBQUMsT0FBZSxJQUFhLE9BQUcsT0FBTyxNQUFHLEVBQWIsQ0FBYSxFQUFDO1FBTTdELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsbUJBQWMsR0FBRztZQUNmLE1BQU0sRUFBSyxTQUFTO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBSSxTQUFTO1NBQ3JCLENBQUM7UUFDTyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUE0TWhDLENBQUM7SUF6TUMsc0JBQ0ksdUNBQU07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QUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBM09GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsYUFBYTtvQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsaTRFQUFtRDtpQkFDcEQ7Ozs2QkEyQkUsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFFTCxLQUFLOzJCQVlMLEtBQUs7NEJBWUwsS0FBSztnQ0FtQkwsS0FBSzsyQkFhTCxLQUFLO3lCQWNMLEtBQUs7OEJBd0JMLEtBQUs7Z0NBY0wsS0FBSztrQ0FhTCxLQUFLOztJQWdGUiwwQkFBQztDQUFBLEFBN09ELElBNk9DO1NBeE9ZLG1CQUFtQjs7Ozs7O0lBQzlCLHlDQUF1Qjs7Ozs7SUFDdkIsMkNBQXdEOzs7OztJQUN4RCx1Q0FBcUI7Ozs7O0lBQ3JCLHNDQUFpRDs7Ozs7SUFDakQsMkNBQXNEOzs7OztJQUN0RCw2Q0FBOEQ7Ozs7O0lBQzlELDJDQUF5Qjs7Ozs7SUFDekIsb0NBQTBCOzs7OztJQUMxQixvQ0FBMkM7Ozs7O0lBQzNDLHNDQUE2RDs7SUFDN0QsNkNBQTRDOztJQUM1Qyw4Q0FBNkM7O0lBQzdDLHlDQUFtQjs7SUFDbkIsbUNBQUs7O0lBQ0wsd0NBQVU7O0lBQ1YsMENBQW9COztJQUNwQiwrQ0FBeUI7O0lBQ3pCLDBDQUFvQjs7SUFDcEIsNkNBQXVCOztJQUN2QiwrQ0FBeUI7O0lBQ3pCLDZDQUlFOztJQUNGLHlDQUEyQjs7SUFDM0Isc0NBQXVCOztJQUN2QiwrQ0FBOEI7O0lBQzlCLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXhjZXB0aW9uJyB8ICdhY3RpdmUnIHwgJ25vcm1hbCc7XG5leHBvcnQgdHlwZSBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZScgfCAnY2lyY2xlJyB8ICdkYXNoYm9hcmQnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJyB8ICdzcXVhcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXByb2dyZXNzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZ2FwRGVncmVlID0gMDtcbiAgcHJpdmF0ZSBfZ2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgcHJpdmF0ZSBfcGVyY2VudCA9IDA7XG4gIHByaXZhdGUgX3N0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBfY2FjaGVTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgX3N0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCc7XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoID0gODtcbiAgcHJpdmF0ZSBfc2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfdHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBwcml2YXRlIF9mb3JtYXQgPSAocGVyY2VudDogbnVtYmVyKTogc3RyaW5nID0+IGAke3BlcmNlbnR9JWA7XG4gIHRyYWlsUGF0aFN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIHN0cm9rZVBhdGhTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBwYXRoU3RyaW5nOiBzdHJpbmc7XG4gIGljb247XG4gIGljb25UaGVtZTtcbiAgaXNTdGF0dXNTZXQgPSBmYWxzZTtcbiAgaXNTdHJva2VXaWR0aFNldCA9IGZhbHNlO1xuICBpc0Zvcm1hdFNldCA9IGZhbHNlO1xuICBpc0dhcERlZ3JlZVNldCA9IGZhbHNlO1xuICBpc0dhcFBvc2l0aW9uU2V0ID0gZmFsc2U7XG4gIHN0YXR1c0NvbG9yTWFwID0ge1xuICAgIG5vcm1hbCAgIDogJyMxMDhlZTknLFxuICAgIGV4Y2VwdGlvbjogJyNmZjU1MDAnLFxuICAgIHN1Y2Nlc3MgIDogJyM4N2QwNjgnXG4gIH07XG4gIEBJbnB1dCgpIG56U2hvd0luZm8gPSB0cnVlO1xuICBASW5wdXQoKSBueldpZHRoID0gMTMyO1xuICBASW5wdXQoKSBuelN1Y2Nlc3NQZXJjZW50ID0gMDtcbiAgQElucHV0KCkgbnpTdHJva2VDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpemUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5uelNpemUgPT09ICdzbWFsbCcgJiYgIXRoaXMuaXNTdHJva2VXaWR0aFNldCkge1xuICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSA2O1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZvcm1hdCh2YWx1ZTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XG4gICAgICB0aGlzLmlzRm9ybWF0U2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpGb3JtYXQoKTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGVyY2VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyY2VudCA9IHZhbHVlO1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xuICAgICAgaWYgKGZpbGxBbGwgJiYgIXRoaXMuaXNTdGF0dXNTZXQpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FjaGVTdGF0dXM7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBlcmNlbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0cm9rZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IHZhbHVlO1xuICAgICAgdGhpcy5pc1N0cm9rZVdpZHRoU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U3RhdHVzKHZhbHVlOiBOelByb2dyZXNzU3RhdHVzVHlwZSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2FjaGVTdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNTdGF0dXNTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogTnpQcm9ncmVzc1R5cGVUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5pc1N0cm9rZVdpZHRoU2V0KSB7XG4gICAgICBpZiAodGhpcy5uelR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgIGlmICghdGhpcy5pc0dhcFBvc2l0aW9uU2V0KSB7XG4gICAgICAgIHRoaXMuX2dhcFBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNHYXBEZWdyZWVTZXQpIHtcbiAgICAgICAgdGhpcy5fZ2FwRGVncmVlID0gNzU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBOelByb2dyZXNzVHlwZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56R2FwRGVncmVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9nYXBEZWdyZWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNHYXBEZWdyZWVTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgfVxuXG4gIH1cblxuICBnZXQgbnpHYXBEZWdyZWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwRGVncmVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56R2FwUG9zaXRpb24odmFsdWU6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9nYXBQb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0dhcFBvc2l0aW9uU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekdhcFBvc2l0aW9uKCk6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9nYXBQb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0cm9rZUxpbmVjYXAodmFsdWU6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSkge1xuICAgIHRoaXMuX3N0cm9rZUxpbmVjYXAgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgfVxuXG4gIGdldCBuelN0cm9rZUxpbmVjYXAoKTogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlTGluZWNhcDtcbiAgfVxuXG4gIGdldCBpc0NpckNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICB9XG5cbiAgdXBkYXRlUGF0aFN0eWxlcygpOiB2b2lkIHtcbiAgICBjb25zdCByYWRpdXMgPSA1MCAtICh0aGlzLm56U3Ryb2tlV2lkdGggLyAyKTtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xuICAgIHN3aXRjaCAodGhpcy5uekdhcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XG4gICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXkgOiBgJHtsZW4gLSB0aGlzLm56R2FwRGVncmVlfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHt0aGlzLm56R2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcbiAgICB0aGlzLnN0cm9rZVBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheSA6IGAkeyh0aGlzLm56UGVyY2VudCAvIDEwMCkgKiAobGVuIC0gdGhpcy5uekdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke3RoaXMubnpHYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb24gICAgICA6ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlSWNvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NpcmNsZSA9ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKTtcbiAgICBsZXQgcmV0ID0gJyc7XG4gICAgaWYgKHRoaXMubnpTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgcmV0ID0gJ2NoZWNrJztcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTdGF0dXMgPT09ICdleGNlcHRpb24nKSB7XG4gICAgICByZXQgPSAnY2xvc2UnO1xuICAgIH1cbiAgICBpZiAocmV0KSB7XG4gICAgICBpZiAoIWlzQ2lyY2xlKSB7XG4gICAgICAgIHJldCArPSAnLWNpcmNsZSc7XG4gICAgICAgIHRoaXMuaWNvblRoZW1lID0gJ2ZpbGwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWNvbiA9IHJldDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICB9XG5cbn1cbiJdfQ==