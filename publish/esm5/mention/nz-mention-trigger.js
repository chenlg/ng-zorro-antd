/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { forwardRef, Directive, ElementRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NzMentionTriggerDirective; })),
    multi: true
};
var NzMentionTriggerDirective = /** @class */ (function () {
    function NzMentionTriggerDirective(el) {
        this.el = el;
        this.onFocusin = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onInput = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.completeEvents();
    };
    /**
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.completeEvents = /**
     * @return {?}
     */
    function () {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    };
    /**
     * @param {?=} caretPos
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.focus = /**
     * @param {?=} caretPos
     * @return {?}
     */
    function (caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    };
    /**
     * @param {?} mention
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.insertMention = /**
     * @param {?} mention
     * @return {?}
     */
    function (mention) {
        /** @type {?} */
        var value = this.el.nativeElement.value;
        /** @type {?} */
        var insertValue = mention.mention.trim() + ' ';
        /** @type {?} */
        var newValue = [
            value.slice(0, mention.startPos + 1),
            insertValue,
            value.slice(mention.endPos, value.length)
        ].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzMentionTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    NzMentionTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                    providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                    host: {
                        'autocomplete': 'off',
                        '(focusin)': 'onFocusin.emit()',
                        '(blur)': 'onBlur.emit()',
                        '(input)': 'onInput.emit($event)',
                        '(keydown)': 'onKeydown.emit($event)',
                        '(click)': 'onClick.emit($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzMentionTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NzMentionTriggerDirective;
}());
export { NzMentionTriggerDirective };
if (false) {
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onChange;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onTouched;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onFocusin;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onBlur;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onInput;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onKeydown;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.onClick;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.value;
    /** @type {?} */
    NzMentionTriggerDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lbnRpb24vbnotbWVudGlvbi10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSXpFLE1BQU0sS0FBTywyQkFBMkIsR0FBcUI7SUFDM0QsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixFQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQXlCRSxtQ0FBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFQeEIsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFPLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsY0FBUyxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELFlBQU8sR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUloRSxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxrREFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCx5Q0FBSzs7OztJQUFMLFVBQU0sUUFBaUI7UUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsaURBQWE7Ozs7SUFBYixVQUFjLE9BQWdCOztZQUN0QixLQUFLLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSzs7WUFDM0MsV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRzs7WUFDMUMsUUFBUSxHQUFHO1lBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDcEMsV0FBVztZQUNYLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELDhDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQUVELG9EQUFnQjs7OztJQUFoQixVQUFpQixFQUEyQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELHFEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFEQUFxRDtvQkFDL0QsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ3hDLElBQUksRUFBRTt3QkFDSixjQUFjLEVBQUUsS0FBSzt3QkFDckIsV0FBVyxFQUFLLGtCQUFrQjt3QkFDbEMsUUFBUSxFQUFRLGVBQWU7d0JBQy9CLFNBQVMsRUFBTyxzQkFBc0I7d0JBQ3RDLFdBQVcsRUFBSyx3QkFBd0I7d0JBQ3hDLFNBQVMsRUFBTyxzQkFBc0I7cUJBQ3ZDO2lCQUNGOzs7O2dCQXRCK0IsVUFBVTs7SUF1RjFDLGdDQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0EvRFkseUJBQXlCOzs7SUFFcEMsNkNBQWtDOztJQUNsQyw4Q0FBc0I7O0lBRXRCLDhDQUE0RDs7SUFDNUQsMkNBQXlEOztJQUN6RCw0Q0FBbUU7O0lBQ25FLDhDQUFxRTs7SUFDckUsNENBQWdFOztJQUNoRSwwQ0FBYzs7SUFFRix1Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgRXhpc3RpbmdQcm92aWRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1lbnRpb24gfSBmcm9tICcuL256LW1lbnRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IE5aX01FTlRJT05fVFJJR0dFUl9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbnpNZW50aW9uVHJpZ2dlcl0sIHRleHRhcmVhW256TWVudGlvblRyaWdnZXJdJyxcbiAgcHJvdmlkZXJzOiBbTlpfTUVOVElPTl9UUklHR0VSX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJyxcbiAgICAnKGZvY3VzaW4pJyAgIDogJ29uRm9jdXNpbi5lbWl0KCknLFxuICAgICcoYmx1ciknICAgICAgOiAnb25CbHVyLmVtaXQoKScsXG4gICAgJyhpbnB1dCknICAgICA6ICdvbklucHV0LmVtaXQoJGV2ZW50KScsXG4gICAgJyhrZXlkb3duKScgICA6ICdvbktleWRvd24uZW1pdCgkZXZlbnQpJyxcbiAgICAnKGNsaWNrKScgICAgIDogJ29uQ2xpY2suZW1pdCgkZXZlbnQpJ1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xuXG4gIHJlYWRvbmx5IG9uRm9jdXNpbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkb25seSBvbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25JbnB1dDogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkb25seSBvbktleWRvd246IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25DbGljazogRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb21wbGV0ZUV2ZW50cygpO1xuICB9XG5cbiAgY29tcGxldGVFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy5vbkZvY3VzaW4uY29tcGxldGUoKTtcbiAgICB0aGlzLm9uQmx1ci5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25JbnB1dC5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25LZXlkb3duLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5vbkNsaWNrLmNvbXBsZXRlKCk7XG4gIH1cblxuICBmb2N1cyhjYXJldFBvcz86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShjYXJldFBvcywgY2FyZXRQb3MpO1xuICB9XG5cbiAgaW5zZXJ0TWVudGlvbihtZW50aW9uOiBNZW50aW9uKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBjb25zdCBpbnNlcnRWYWx1ZSA9IG1lbnRpb24ubWVudGlvbi50cmltKCkgKyAnICc7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBbXG4gICAgICB2YWx1ZS5zbGljZSgwLCBtZW50aW9uLnN0YXJ0UG9zICsgMSksXG4gICAgICBpbnNlcnRWYWx1ZSxcbiAgICAgIHZhbHVlLnNsaWNlKG1lbnRpb24uZW5kUG9zLCB2YWx1ZS5sZW5ndGgpXG4gICAgXS5qb2luKCcnKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLmZvY3VzKG1lbnRpb24uc3RhcnRQb3MgKyBpbnNlcnRWYWx1ZS5sZW5ndGggKyAxKTtcbiAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG59XG4iXX0=