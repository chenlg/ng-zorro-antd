/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from '../../../core/util/check';
import { valueFunctionProp } from '../../../core/util/convert';
import { DateHelperService } from '../../../i18n/date-helper.service';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
/** @type {?} */
const DATE_ROW_NUM = 6;
/** @type {?} */
const DATE_COL_NUM = 7;
export class DateTableComponent {
    /**
     * @param {?} i18n
     * @param {?} dateHelper
     */
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        // Customize date content while rendering
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    isDateRealChange(change) {
        if (change) {
            /** @type {?} */
            const previousValue = change.previousValue;
            /** @type {?} */
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    (value, index) => !this.isSameDate(previousValue[index], value)));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue)), currentValue);
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        if (this.value !== value) {
            this.valueChange.emit(value);
        }
    }
    /**
     * @private
     * @return {?}
     */
    makeHeadWeekDays() {
        /** @type {?} */
        const weekDays = [];
        /** @type {?} */
        const firstDayOfWeek = this.dateHelper.getFirstDayOfWeek();
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            const day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            /** @type {?} */
            const tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.dateHelper.format(tempDate.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                // eg. Tue
                veryShort: this.dateHelper.format(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    /**
     * @private
     * @return {?}
     */
    getVeryShortWeekFormat() {
        if (this.dateHelper.relyOnDatePipe) {
            return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
        }
        return 'dd';
    }
    /**
     * @private
     * @return {?}
     */
    makeWeekRows() {
        /** @type {?} */
        const weekRows = [];
        /** @type {?} */
        const firstDayOfWeek = this.dateHelper.getFirstDayOfWeek();
        /** @type {?} */
        const firstDateOfMonth = this.value.setDate(1);
        /** @type {?} */
        const firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        const firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        /** @type {?} */
        let increased = 0;
        for (let rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            /** @type {?} */
            const week = weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            };
            for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                /** @type {?} */
                const current = firstDateToShow.addDays(increased++);
                /** @type {?} */
                const isBeforeMonthYear = this.isBeforeMonthYear(current, this.value);
                /** @type {?} */
                const isAfterMonthYear = this.isAfterMonthYear(current, this.value);
                /** @type {?} */
                const cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this.getDateTitle(current),
                    customContent: valueFunctionProp(this.dateRender, current),
                    // Customized content
                    content: `${current.getDate()}`,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.changeValueFromInside(current)),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    () => this.dayHover.emit(cell.value))
                };
                if (this.showWeek && !week.weekNum) {
                    week.weekNum = this.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) { // Range selections
                    // Range selections
                    /** @type {?} */
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    /** @type {?} */
                    const start = rangeValue[0];
                    /** @type {?} */
                    const end = rangeValue[1];
                    if (start) {
                        if (current.isSame(start, 'day')) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            week.isActive = true;
                        }
                        if (end) {
                            if (current.isSame(end, 'day')) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                week.isActive = true;
                            }
                            else if (current.isAfter(start, 'day') && current.isBefore(end, 'day')) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (current.isSame(this.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this.disabledDate && this.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    [`${this.prefixCls}-today`]: cell.isToday,
                    [`${this.prefixCls}-last-month-cell`]: isBeforeMonthYear,
                    [`${this.prefixCls}-next-month-btn-day`]: isAfterMonthYear,
                    [`${this.prefixCls}-selected-day`]: cell.isSelected,
                    [`${this.prefixCls}-disabled-cell`]: cell.isDisabled,
                    [`${this.prefixCls}-selected-start-date`]: !!cell.isSelectedStartDate,
                    [`${this.prefixCls}-selected-end-date`]: !!cell.isSelectedEndDate,
                    [`${this.prefixCls}-in-range-cell`]: !!cell.isInRange
                };
                week.dateCells.push(cell);
            }
            week.classMap = {
                [`${this.prefixCls}-current-week`]: week.isCurrent,
                [`${this.prefixCls}-active-week`]: week.isActive
            };
        }
        return weekRows;
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    getDateTitle(date) {
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        let dateFormat = (this.locale && this.locale.dateFormat) || 'YYYY-MM-DD';
        if (this.dateHelper.relyOnDatePipe) {
            dateFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dateFormat);
        }
        return this.dateHelper.format(date.nativeDate, dateFormat);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    getWeekNum(date) {
        return this.dateHelper.getISOWeek(date.nativeDate);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isBeforeMonthYear(current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    }
    /**
     * @private
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isAfterMonthYear(current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    }
}
DateTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n  <thead>\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\n      </th>\n      <th *ngFor=\"let cell of headWeekDays\"\n        role=\"columnheader\"\n        title=\"{{ cell.short }}\"\n        class=\"{{ prefixCls }}-column-header\"\n      >\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"{{ prefixCls }}-tbody\">\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\n        title=\"{{ cell.title }}\"\n        [ngClass]=\"cell.classMap\"\n        role=\"gridcell\"\n      >\n\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\n            <span [innerHTML]=\"cell.customContent\"></span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <div\n              class=\"{{ prefixCls }}-date\"\n              [attr.aria-selected]=\"cell.isSelected\"\n              [attr.aria-disabled]=\"cell.isDisabled\"\n            >\n              {{ cell.content }}\n            </div>\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </tr>\n  </tbody>\n</table>"
            }] }
];
/** @nocollapse */
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: DateHelperService }
];
DateTableComponent.propDecorators = {
    locale: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    showWeek: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    dayHover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DateTableComponent.prototype.locale;
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.value;
    /** @type {?} */
    DateTableComponent.prototype.valueChange;
    /** @type {?} */
    DateTableComponent.prototype.showWeek;
    /** @type {?} */
    DateTableComponent.prototype.disabledDate;
    /** @type {?} */
    DateTableComponent.prototype.dateRender;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /** @type {?} */
    DateTableComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableComponent.prototype.headWeekDays;
    /** @type {?} */
    DateTableComponent.prototype.weekRows;
    /** @type {?} */
    DateTableComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableComponent.prototype.isNonEmptyString;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function WeekDayLabel() { }
if (false) {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
export function DateCell() { }
if (false) {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.title;
    /** @type {?} */
    DateCell.prototype.customContent;
    /** @type {?} */
    DateCell.prototype.content;
    /** @type {?|undefined} */
    DateCell.prototype.isSelected;
    /** @type {?|undefined} */
    DateCell.prototype.isToday;
    /** @type {?|undefined} */
    DateCell.prototype.isDisabled;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedStartDate;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedEndDate;
    /** @type {?|undefined} */
    DateCell.prototype.isInRange;
    /** @type {?|undefined} */
    DateCell.prototype.classMap;
    /**
     * @param {?} date
     * @return {?}
     */
    DateCell.prototype.onClick = function (date) { };
    /**
     * @return {?}
     */
    DateCell.prototype.onMouseEnter = function () { };
}
/**
 * @record
 */
export function WeekRow() { }
if (false) {
    /** @type {?|undefined} */
    WeekRow.prototype.isCurrent;
    /** @type {?|undefined} */
    WeekRow.prototype.isActive;
    /** @type {?|undefined} */
    WeekRow.prototype.weekNum;
    /** @type {?|undefined} */
    WeekRow.prototype.classMap;
    /** @type {?} */
    WeekRow.prototype.dateCells;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2RhdGUvZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoTCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTVGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztNQUVwQyxZQUFZLEdBQUcsQ0FBQzs7TUFDaEIsWUFBWSxHQUFHLENBQUM7QUFVdEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFxQjdCLFlBQW9CLElBQW1CLEVBQVUsVUFBNkI7UUFBMUQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBZjNELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQzs7UUFNNUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw2Q0FBNkM7O1FBRTFHLGNBQVMsR0FBVyxjQUFjLENBQUM7UUFJbkMsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFFOEMsQ0FBQzs7OztJQUVuRixRQUFRLEtBQVcsQ0FBQzs7Ozs7SUFFcEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGdC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YXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90eXBlcy9jb21tb24td3JhcCc7XG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUsIERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9kYXRlLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XG5cbmNvbnN0IERBVEVfUk9XX05VTSA9IDY7XG5jb25zdCBEQVRFX0NPTF9OVU0gPSA3O1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkYXRlLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgQElucHV0KCkgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcblxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjsgLy8gQ3VzdG9taXplIGRhdGUgY29udGVudCB3aGlsZSByZW5kZXJpbmdcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF5SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIGhvdmVyIG9uIGEgZGF5IGJ5IG1vdXNlIGVudGVyXG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgaGVhZFdlZWtEYXlzOiBXZWVrRGF5TGFiZWxbXTtcbiAgd2Vla1Jvd3M6IFdlZWtSb3dbXTtcblxuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XG4gICAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XG4gICAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpKSB7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkocHJldmlvdXNWYWx1ZSkgfHxcbiAgICAgICAgICBjdXJyZW50VmFsdWUubGVuZ3RoICE9PSBwcmV2aW91c1ZhbHVlLmxlbmd0aCB8fFxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+ICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZVtpbmRleF0sIHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCAmJiByaWdodC5pc1NhbWUobGVmdCwgJ2RheScpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmhlYWRXZWVrRGF5cyA9IHRoaXMubWFrZUhlYWRXZWVrRGF5cygpO1xuICAgICAgdGhpcy53ZWVrUm93cyA9IHRoaXMubWFrZVdlZWtSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VIZWFkV2Vla0RheXMoKTogV2Vla0RheUxhYmVsW10ge1xuICAgIGNvbnN0IHdlZWtEYXlzOiBXZWVrRGF5TGFiZWxbXSA9IFtdO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXggKyspIHtcbiAgICAgIGNvbnN0IGRheSA9IChmaXJzdERheU9mV2VlayArIGNvbEluZGV4KSAlIERBVEVfQ09MX05VTTtcbiAgICAgIGNvbnN0IHRlbXBEYXRlID0gdGhpcy52YWx1ZS5zZXREYXkoZGF5KTtcbiAgICAgIHdlZWtEYXlzWyBjb2xJbmRleCBdID0ge1xuICAgICAgICBzaG9ydDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh0ZW1wRGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAnRScgOiAnZGRkJyksIC8vIGVnLiBUdWVcbiAgICAgICAgdmVyeVNob3J0OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRlbXBEYXRlLm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSAvLyBlZy4gVHVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB3ZWVrRGF5cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3poJykgPT09IDAgPyAnRUVFRUUnIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXG4gICAgfVxuICAgIHJldHVybiAnZGQnO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlV2Vla1Jvd3MoKTogV2Vla1Jvd1tdIHtcbiAgICBjb25zdCB3ZWVrUm93czogV2Vla1Jvd1tdID0gW107XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKTtcbiAgICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gdGhpcy52YWx1ZS5zZXREYXRlKDEpO1xuICAgIGNvbnN0IGZpcnN0RGF0ZU9mZnNldCA9IChmaXJzdERhdGVPZk1vbnRoLmdldERheSgpICsgNyAtIGZpcnN0RGF5T2ZXZWVrKSAlIDc7XG4gICAgY29uc3QgZmlyc3REYXRlVG9TaG93ID0gZmlyc3REYXRlT2ZNb250aC5hZGREYXlzKDAgLSBmaXJzdERhdGVPZmZzZXQpO1xuXG4gICAgbGV0IGluY3JlYXNlZCA9IDA7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IERBVEVfUk9XX05VTTsgcm93SW5kZXggKyspIHtcbiAgICAgIGNvbnN0IHdlZWs6IFdlZWtSb3cgPSB3ZWVrUm93c1tyb3dJbmRleF0gPSB7XG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaXNDdXJyZW50OiBmYWxzZSxcbiAgICAgICAgZGF0ZUNlbGxzOiBbXVxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXggKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGZpcnN0RGF0ZVRvU2hvdy5hZGREYXlzKGluY3JlYXNlZCArKyk7XG4gICAgICAgIGNvbnN0IGlzQmVmb3JlTW9udGhZZWFyID0gdGhpcy5pc0JlZm9yZU1vbnRoWWVhcihjdXJyZW50LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNBZnRlck1vbnRoWWVhciA9IHRoaXMuaXNBZnRlck1vbnRoWWVhcihjdXJyZW50LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgY2VsbDogRGF0ZUNlbGwgPSB7XG4gICAgICAgICAgdmFsdWU6IGN1cnJlbnQsXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgaXNUb2RheTogZmFsc2UsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0RGF0ZVRpdGxlKGN1cnJlbnQpLFxuICAgICAgICAgIGN1c3RvbUNvbnRlbnQ6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZVJlbmRlciwgY3VycmVudCksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxuICAgICAgICAgIGNvbnRlbnQ6IGAke2N1cnJlbnQuZ2V0RGF0ZSgpfWAsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUoY3VycmVudCksXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmRheUhvdmVyLmVtaXQoY2VsbC52YWx1ZSlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhd2Vlay53ZWVrTnVtKSB7XG4gICAgICAgICAgd2Vlay53ZWVrTnVtID0gdGhpcy5nZXRXZWVrTnVtKGN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuaXNUb2RheSgpKSB7XG4gICAgICAgICAgY2VsbC5pc1RvZGF5ID0gdHJ1ZTtcbiAgICAgICAgICB3ZWVrLmlzQ3VycmVudCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkVmFsdWUpICYmICFpc0JlZm9yZU1vbnRoWWVhciAmJiAhaXNBZnRlck1vbnRoWWVhcikgeyAvLyBSYW5nZSBzZWxlY3Rpb25zXG4gICAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5ob3ZlclZhbHVlIDogdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcmFuZ2VWYWx1ZVswXTtcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xuICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNTYW1lKHN0YXJ0LCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgd2Vlay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzU2FtZShlbmQsICdkYXknKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2Vlay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc0FmdGVyKHN0YXJ0LCAnZGF5JykgJiYgY3VycmVudC5pc0JlZm9yZShlbmQsICdkYXknKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNJblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50LmlzU2FtZSh0aGlzLnZhbHVlLCAnZGF5JykpIHtcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGN1cnJlbnQubmF0aXZlRGF0ZSkpIHtcbiAgICAgICAgICBjZWxsLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICAvLyBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRhdGVgXTogZmFsc2UsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10b2RheWBdOiBjZWxsLmlzVG9kYXksXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LW1vbnRoLWNlbGxgXTogaXNCZWZvcmVNb250aFllYXIsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogaXNBZnRlck1vbnRoWWVhcixcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRheWBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZC1jZWxsYF06IGNlbGwuaXNEaXNhYmxlZCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1lbmQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbi1yYW5nZS1jZWxsYF06ICEhY2VsbC5pc0luUmFuZ2VcbiAgICAgICAgfTtcblxuICAgICAgICB3ZWVrLmRhdGVDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICB3ZWVrLmNsYXNzTWFwID0ge1xuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWN1cnJlbnQtd2Vla2BdOiB3ZWVrLmlzQ3VycmVudCxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1hY3RpdmUtd2Vla2BdOiB3ZWVrLmlzQWN0aXZlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gd2Vla1Jvd3M7XG4gIH1cblxuICBwcml2YXRlIGdldERhdGVUaXRsZShkYXRlOiBDYW5keURhdGUpOiBzdHJpbmcge1xuICAgIC8vIE5PVEU6IENvbXBhdCBmb3IgRGF0ZVBpcGUgZm9ybWF0dGluZyBydWxlc1xuICAgIGxldCBkYXRlRm9ybWF0OiBzdHJpbmcgPSAodGhpcy5sb2NhbGUgJiYgdGhpcy5sb2NhbGUuZGF0ZUZvcm1hdCkgfHwgJ1lZWVktTU0tREQnO1xuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcbiAgICAgIGRhdGVGb3JtYXQgPSAodGhpcy5kYXRlSGVscGVyIGFzIERhdGVIZWxwZXJCeURhdGVQaXBlKS50cmFuc0NvbXBhdEZvcm1hdChkYXRlRm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla051bShkYXRlOiBDYW5keURhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGVIZWxwZXIuZ2V0SVNPV2VlayhkYXRlLm5hdGl2ZURhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0JlZm9yZU1vbnRoWWVhcihjdXJyZW50OiBDYW5keURhdGUsIHRhcmdldDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpIDwgdGFyZ2V0LmdldFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPCB0YXJnZXQuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBZnRlck1vbnRoWWVhcihjdXJyZW50OiBDYW5keURhdGUsIHRhcmdldDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpID4gdGFyZ2V0LmdldFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPiB0YXJnZXQuZ2V0TW9udGgoKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXlMYWJlbCB7XG4gIHNob3J0OiBzdHJpbmc7XG4gIHZlcnlTaG9ydDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDZWxsIHtcbiAgdmFsdWU6IENhbmR5RGF0ZTtcbiAgdGl0bGU6IHN0cmluZztcbiAgY3VzdG9tQ29udGVudDogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG4gIGlzVG9kYXk/OiBib29sZWFuO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZFN0YXJ0RGF0ZT86IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWRFbmREYXRlPzogYm9vbGVhbjtcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XG4gIG9uQ2xpY2soZGF0ZTogQ2FuZHlEYXRlKTogdm9pZDtcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1JvdyB7XG4gIGlzQ3VycmVudD86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgdG9kYXkgc3RheXMgaW5cbiAgaXNBY3RpdmU/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IGN1cnJlbnQgc2V0dGluZyBkYXRlIHN0YXlzIGluXG4gIHdlZWtOdW0/OiBudW1iZXI7XG4gIGNsYXNzTWFwPzogb2JqZWN0O1xuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XG59XG4iXX0=