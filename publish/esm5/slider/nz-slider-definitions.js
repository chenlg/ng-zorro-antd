/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function MarkObj() { }
if (false) {
    /** @type {?|undefined} */
    MarkObj.prototype.style;
    /** @type {?} */
    MarkObj.prototype.label;
}
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
export { Marks };
/**
 * Processed steps that would be passed to sub components.
 * @record
 */
export function ExtendedMark() { }
if (false) {
    /** @type {?} */
    ExtendedMark.prototype.value;
    /** @type {?} */
    ExtendedMark.prototype.offset;
    /** @type {?} */
    ExtendedMark.prototype.config;
}
/**
 * Marks that would be rendered.
 * @record
 */
export function DisplayedMark() { }
if (false) {
    /** @type {?} */
    DisplayedMark.prototype.active;
    /** @type {?} */
    DisplayedMark.prototype.label;
    /** @type {?|undefined} */
    DisplayedMark.prototype.style;
}
/**
 * Steps that would be rendered.
 * @record
 */
export function DisplayedStep() { }
if (false) {
    /** @type {?} */
    DisplayedStep.prototype.active;
    /** @type {?|undefined} */
    DisplayedStep.prototype.style;
}
/**
 * @record
 */
export function SliderHandler() { }
if (false) {
    /** @type {?} */
    SliderHandler.prototype.offset;
    /** @type {?} */
    SliderHandler.prototype.value;
    /** @type {?} */
    SliderHandler.prototype.active;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
export function isConfigAObject(config) {
    return config instanceof Object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNsaWRlci9uei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDZCQUdDOzs7SUFGQyx3QkFBZTs7SUFDZix3QkFBYzs7QUFHaEI7SUFBQTtJQUVBLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7OztBQUtELGtDQUlDOzs7SUFIQyw2QkFBYzs7SUFDZCw4QkFBZTs7SUFDZiw4QkFBYTs7Ozs7O0FBTWYsbUNBSUM7OztJQUhDLCtCQUFnQjs7SUFDaEIsOEJBQWM7O0lBQ2QsOEJBQWU7Ozs7OztBQU1qQixtQ0FHQzs7O0lBRkMsK0JBQWdCOztJQUNoQiw4QkFBZTs7Ozs7QUFPakIsbUNBSUM7OztJQUhDLCtCQUFlOztJQUNmLDhCQUFjOztJQUNkLCtCQUFnQjs7Ozs7O0FBR2xCLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBa0I7SUFDOUMsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7S0FDM0I7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBWTtJQUMxQyxPQUFPLE1BQU0sWUFBWSxNQUFNLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIE1hcmsgPSBzdHJpbmcgfCBNYXJrT2JqO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtPYmoge1xuICBzdHlsZT86IG9iamVjdDtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtzIHtcbiAgWyBrZXk6IG51bWJlciBdOiBNYXJrO1xufVxuXG4vKipcbiAqIFByb2Nlc3NlZCBzdGVwcyB0aGF0IHdvdWxkIGJlIHBhc3NlZCB0byBzdWIgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZE1hcmsge1xuICB2YWx1ZTogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgY29uZmlnOiBNYXJrO1xufVxuXG4vKipcbiAqIE1hcmtzIHRoYXQgd291bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkTWFyayBleHRlbmRzIEV4dGVuZGVkTWFyayB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3R5bGU/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogU3RlcHMgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRTdGVwIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBzdHlsZT86IG9iamVjdDtcbn1cblxuZXhwb3J0IHR5cGUgU2xpZGVyU2hvd1Rvb2x0aXAgPSAnYWx3YXlzJyB8ICduZXZlcicgfCAnZGVmYXVsdCc7XG5cbmV4cG9ydCB0eXBlIFNsaWRlclZhbHVlID0gbnVtYmVyW10gfCBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVySGFuZGxlciB7XG4gIG9mZnNldDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlQVJhbmdlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IHZhbHVlIGlzIG51bWJlcltdIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb25maWdBT2JqZWN0KGNvbmZpZzogTWFyayk6IGNvbmZpZyBpcyBNYXJrT2JqIHtcbiAgcmV0dXJuIGNvbmZpZyBpbnN0YW5jZW9mIE9iamVjdDtcbn1cbiJdfQ==