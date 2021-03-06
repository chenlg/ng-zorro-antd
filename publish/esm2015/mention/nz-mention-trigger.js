/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { forwardRef, Directive, ElementRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NzMentionTriggerDirective)),
    multi: true
};
export class NzMentionTriggerDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    ngOnDestroy() {
        this.completeEvents();
    }
    /**
     * @return {?}
     */
    completeEvents() {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    }
    /**
     * @param {?=} caretPos
     * @return {?}
     */
    focus(caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    }
    /**
     * @param {?} mention
     * @return {?}
     */
    insertMention(mention) {
        /** @type {?} */
        const value = this.el.nativeElement.value;
        /** @type {?} */
        const insertValue = mention.mention.trim() + ' ';
        /** @type {?} */
        const newValue = [
            value.slice(0, mention.startPos + 1),
            insertValue,
            value.slice(mention.endPos, value.length)
        ].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
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
NzMentionTriggerDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1lbnRpb24vbnotbWVudGlvbi10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBSXpFLE1BQU0sT0FBTywyQkFBMkIsR0FBcUI7SUFDM0QsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQWVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFZcEMsWUFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFQeEIsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxZQUFPLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsY0FBUyxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELFlBQU8sR0FBNkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUloRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxRQUFpQjtRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBZ0I7O2NBQ3RCLEtBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLOztjQUMzQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHOztjQUMxQyxRQUFRLEdBQUc7WUFDZixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNwQyxXQUFXO1lBQ1gsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDMUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNyQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFEQUFxRDtnQkFDL0QsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsS0FBSztvQkFDckIsV0FBVyxFQUFLLGtCQUFrQjtvQkFDbEMsUUFBUSxFQUFRLGVBQWU7b0JBQy9CLFNBQVMsRUFBTyxzQkFBc0I7b0JBQ3RDLFdBQVcsRUFBSyx3QkFBd0I7b0JBQ3hDLFNBQVMsRUFBTyxzQkFBc0I7aUJBQ3ZDO2FBQ0Y7Ozs7WUF0QitCLFVBQVU7Ozs7SUEwQnhDLDZDQUFrQzs7SUFDbEMsOENBQXNCOztJQUV0Qiw4Q0FBNEQ7O0lBQzVELDJDQUF5RDs7SUFDekQsNENBQW1FOztJQUNuRSw4Q0FBcUU7O0lBQ3JFLDRDQUFnRTs7SUFDaEUsMENBQWM7O0lBRUYsdUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEV4aXN0aW5nUHJvdmlkZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNZW50aW9uIH0gZnJvbSAnLi9uei1tZW50aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBOWl9NRU5USU9OX1RSSUdHRVJfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W256TWVudGlvblRyaWdnZXJdLCB0ZXh0YXJlYVtuek1lbnRpb25UcmlnZ2VyXScsXG4gIHByb3ZpZGVyczogW05aX01FTlRJT05fVFJJR0dFUl9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsXG4gICAgJyhmb2N1c2luKScgICA6ICdvbkZvY3VzaW4uZW1pdCgpJyxcbiAgICAnKGJsdXIpJyAgICAgIDogJ29uQmx1ci5lbWl0KCknLFxuICAgICcoaW5wdXQpJyAgICAgOiAnb25JbnB1dC5lbWl0KCRldmVudCknLFxuICAgICcoa2V5ZG93biknICAgOiAnb25LZXlkb3duLmVtaXQoJGV2ZW50KScsXG4gICAgJyhjbGljayknICAgICA6ICdvbkNsaWNrLmVtaXQoJGV2ZW50KSdcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcblxuICByZWFkb25seSBvbkZvY3VzaW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uSW5wdXQ6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZG9ubHkgb25LZXlkb3duOiBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWRvbmx5IG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcGxldGVFdmVudHMoKTtcbiAgfVxuXG4gIGNvbXBsZXRlRXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMub25Gb2N1c2luLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5vbkJsdXIuY29tcGxldGUoKTtcbiAgICB0aGlzLm9uSW5wdXQuY29tcGxldGUoKTtcbiAgICB0aGlzLm9uS2V5ZG93bi5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25DbGljay5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZm9jdXMoY2FyZXRQb3M/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3MsIGNhcmV0UG9zKTtcbiAgfVxuXG4gIGluc2VydE1lbnRpb24obWVudGlvbjogTWVudGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgY29uc3QgaW5zZXJ0VmFsdWUgPSBtZW50aW9uLm1lbnRpb24udHJpbSgpICsgJyAnO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gW1xuICAgICAgdmFsdWUuc2xpY2UoMCwgbWVudGlvbi5zdGFydFBvcyArIDEpLFxuICAgICAgaW5zZXJ0VmFsdWUsXG4gICAgICB2YWx1ZS5zbGljZShtZW50aW9uLmVuZFBvcywgdmFsdWUubGVuZ3RoKVxuICAgIF0uam9pbignJyk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5mb2N1cyhtZW50aW9uLnN0YXJ0UG9zICsgaW5zZXJ0VmFsdWUubGVuZ3RoICsgMSk7XG4gICAgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxufVxuIl19