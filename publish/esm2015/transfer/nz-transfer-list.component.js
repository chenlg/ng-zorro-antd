/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzTransferListComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     * @param {?} cdr
     */
    constructor(el, updateHostClassService, cdr) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.cdr = cdr;
        // #region fields
        this.direction = '';
        this.titleText = '';
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        // #endregion
        // #region styles
        this.prefixCls = 'ant-transfer-list';
        // #endregion
        // #region select all
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-with-footer`]: !!this.footer
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @param {?} status
     * @return {?}
     */
    onHandleSelectAll(status) {
        this.dataSource.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (!item.disabled && !item._hiden) {
                item.checked = status;
            }
        }));
        this.updateCheckStatus();
        this.handleSelectAll.emit(status);
    }
    /**
     * @private
     * @return {?}
     */
    updateCheckStatus() {
        /** @type {?} */
        const validCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.disabled)).length;
        this.stat.checkCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked && !w.disabled)).length;
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w._hiden)).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    }
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    handleFilter(value) {
        this.filter = value;
        this.dataSource.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item._hiden = value.length > 0 && !this.matchFilter(value, item);
        }));
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w._hiden)).length;
        this.filterChange.emit({ direction: this.direction, value });
    }
    /**
     * @return {?}
     */
    handleClear() {
        this.handleFilter('');
    }
    /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    matchFilter(text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _handleSelect(item) {
        if (this.disabled || item.disabled) {
            return;
        }
        item.checked = !item.checked;
        this.updateCheckStatus();
        this.handleSelect.emit(item);
    }
}
NzTransferListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-transfer-list',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<div class=\"ant-transfer-list-header\">\n  <label nz-checkbox [nzChecked]=\"stat.checkAll\" (nzCheckedChange)=\"onHandleSelectAll($event)\"\n    [nzIndeterminate]=\"stat.checkHalf\" [nzDisabled]=\"stat.shownCount == 0 || disabled\">\n  </label>\n  <span class=\"ant-transfer-list-header-selected\">\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n  </span>\n</div>\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n    <div nz-transfer-search\n      (valueChanged)=\"handleFilter($event)\"\n      (valueClear)=\"handleClear()\"\n      [placeholder]=\"searchPlaceholder\"\n      [disabled]=\"disabled\"\n      [value]=\"filter\"></div>\n  </div>\n  <ul class=\"ant-transfer-list-content\">\n    <ng-container *ngFor=\"let item of dataSource\">\n      <li *ngIf=\"!item._hiden\"\n        class=\"ant-transfer-list-content-item\" [ngClass]=\"{'ant-transfer-list-content-item-disabled': disabled || item.disabled}\">\n        <label nz-checkbox [nzChecked]=\"item.checked\" (nzCheckedChange)=\"_handleSelect(item)\" [nzDisabled]=\"disabled || item.disabled\">\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n        </label>\n      </li>\n    </ng-container>\n  </ul>\n  <div *ngIf=\"dataSource.length === 0\" class=\"ant-transfer-list-body-not-found\">\n    <nz-embed-empty [nzComponentName]=\"'transfer'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n  </div>\n</div>\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzTransferListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService },
    { type: ChangeDetectorRef }
];
NzTransferListComponent.propDecorators = {
    direction: [{ type: Input }],
    titleText: [{ type: Input }],
    dataSource: [{ type: Input }],
    itemUnit: [{ type: Input }],
    itemsUnit: [{ type: Input }],
    filter: [{ type: Input }],
    disabled: [{ type: Input }],
    showSearch: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    filterOption: [{ type: Input }],
    render: [{ type: Input }],
    footer: [{ type: Input }],
    handleSelectAll: [{ type: Output }],
    handleSelect: [{ type: Output }],
    filterChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTransferListComponent.prototype.direction;
    /** @type {?} */
    NzTransferListComponent.prototype.titleText;
    /** @type {?} */
    NzTransferListComponent.prototype.dataSource;
    /** @type {?} */
    NzTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.filter;
    /** @type {?} */
    NzTransferListComponent.prototype.disabled;
    /** @type {?} */
    NzTransferListComponent.prototype.showSearch;
    /** @type {?} */
    NzTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    NzTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    NzTransferListComponent.prototype.filterOption;
    /** @type {?} */
    NzTransferListComponent.prototype.render;
    /** @type {?} */
    NzTransferListComponent.prototype.footer;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.filterChange;
    /** @type {?} */
    NzTransferListComponent.prototype.prefixCls;
    /** @type {?} */
    NzTransferListComponent.prototype.stat;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidHJhbnNmZXIvbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQVl0RixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7O0lBK0ZsQyxZQUFvQixFQUFjLEVBQVUsc0JBQWdELEVBQVUsR0FBc0I7UUFBeEcsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUE1Rm5ILGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsZUFBVSxHQUFtQixFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixXQUFNLEdBQUcsRUFBRSxDQUFDOztRQVdGLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDckUsaUJBQVksR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCxpQkFBWSxHQUF1RCxJQUFJLFlBQVksRUFBRSxDQUFDOzs7UUFNekcsY0FBUyxHQUFHLG1CQUFtQixDQUFDOzs7UUFjaEMsU0FBSSxHQUFHO1lBQ0wsUUFBUSxFQUFJLEtBQUs7WUFDakIsU0FBUyxFQUFHLEtBQUs7WUFDakIsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztTQUNkLENB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Szt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3FCQUVMLEtBQUs7cUJBQ0wsS0FBSzs4QkFHTCxNQUFNOzJCQUNOLE1BQU07MkJBQ04sTUFBTTs7OztJQXBCUCw0Q0FBd0I7O0lBQ3hCLDRDQUF3Qjs7SUFFeEIsNkNBQXlDOztJQUV6QywyQ0FBdUI7O0lBQ3ZCLDRDQUF3Qjs7SUFDeEIseUNBQXFCOztJQUNyQiwyQ0FBMkI7O0lBQzNCLDZDQUE2Qjs7SUFDN0Isb0RBQW1DOztJQUNuQyxrREFBaUM7O0lBQ2pDLCtDQUEyRTs7SUFFM0UseUNBQW1DOztJQUNuQyx5Q0FBbUM7O0lBR25DLGtEQUF3Rjs7SUFDeEYsK0NBQWlGOztJQUNqRiwrQ0FBeUc7O0lBTXpHLDRDQUFnQzs7SUFjaEMsdUNBS0U7Ozs7O0lBK0NVLHFDQUFzQjs7Ozs7SUFBRSx5REFBd0Q7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVHJhbnNmZXJJdGVtIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRyYW5zZmVyLWxpc3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBkaXJlY3Rpb24gPSAnJztcbiAgQElucHV0KCkgdGl0bGVUZXh0ID0gJyc7XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICBASW5wdXQoKSBpdGVtVW5pdCA9ICcnO1xuICBASW5wdXQoKSBpdGVtc1VuaXQgPSAnJztcbiAgQElucHV0KCkgZmlsdGVyID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93U2VhcmNoOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyT3B0aW9uOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyBldmVudHNcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhhbmRsZVNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlU2VsZWN0OiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGlyZWN0aW9uOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3R5bGVzXG5cbiAgcHJlZml4Q2xzID0gJ2FudC10cmFuc2Zlci1saXN0JztcblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30td2l0aC1mb290ZXJgIF06ICEhdGhpcy5mb290ZXJcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZWxlY3QgYWxsXG5cbiAgc3RhdCA9IHtcbiAgICBjaGVja0FsbCAgOiBmYWxzZSxcbiAgICBjaGVja0hhbGYgOiBmYWxzZSxcbiAgICBjaGVja0NvdW50OiAwLFxuICAgIHNob3duQ291bnQ6IDBcbiAgfTtcblxuICBvbkhhbmRsZVNlbGVjdEFsbChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5faGlkZW4pIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gc3RhdHVzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0QWxsLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsaWRDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0NvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+IHcuY2hlY2tlZCAmJiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3Ll9oaWRlbikubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0FsbCA9IHZhbGlkQ291bnQgPiAwICYmIHZhbGlkQ291bnQgPT09IHRoaXMuc3RhdC5jaGVja0NvdW50O1xuICAgIHRoaXMuc3RhdC5jaGVja0hhbGYgPSB0aGlzLnN0YXQuY2hlY2tDb3VudCA+IDAgJiYgIXRoaXMuc3RhdC5jaGVja0FsbDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNlYXJjaFxuXG4gIGhhbmRsZUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uX2hpZGVuID0gdmFsdWUubGVuZ3RoID4gMCAmJiAhdGhpcy5tYXRjaEZpbHRlcih2YWx1ZSwgaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0LnNob3duQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuX2hpZGVuKS5sZW5ndGg7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24sIHZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaEZpbHRlcih0ZXh0OiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZpbHRlck9wdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyT3B0aW9uKHRleHQsIGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbS50aXRsZS5pbmNsdWRlcyh0ZXh0KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCdmb290ZXInIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX2hhbmRsZVNlbGVjdChpdGVtOiBUcmFuc2Zlckl0ZW0pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0LmVtaXQoaXRlbSk7XG4gIH1cbn1cbiJdfQ==