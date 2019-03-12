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
export class Marks {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNsaWRlci9uei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDZCQUdDOzs7SUFGQyx3QkFBZTs7SUFDZix3QkFBYzs7QUFHaEIsTUFBTSxPQUFPLEtBQUs7Q0FFakI7Ozs7O0FBS0Qsa0NBSUM7OztJQUhDLDZCQUFjOztJQUNkLDhCQUFlOztJQUNmLDhCQUFhOzs7Ozs7QUFNZixtQ0FJQzs7O0lBSEMsK0JBQWdCOztJQUNoQiw4QkFBYzs7SUFDZCw4QkFBZTs7Ozs7O0FBTWpCLG1DQUdDOzs7SUFGQywrQkFBZ0I7O0lBQ2hCLDhCQUFlOzs7OztBQU9qQixtQ0FJQzs7O0lBSEMsK0JBQWU7O0lBQ2YsOEJBQWM7O0lBQ2QsK0JBQWdCOzs7Ozs7QUFHbEIsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFrQjtJQUM5QyxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7UUFDMUIsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFZO0lBQzFDLE9BQU8sTUFBTSxZQUFZLE1BQU0sQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTWFyayA9IHN0cmluZyB8IE1hcmtPYmo7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya09iaiB7XG4gIHN0eWxlPzogb2JqZWN0O1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWFya3Mge1xuICBbIGtleTogbnVtYmVyIF06IE1hcms7XG59XG5cbi8qKlxuICogUHJvY2Vzc2VkIHN0ZXBzIHRoYXQgd291bGQgYmUgcGFzc2VkIHRvIHN1YiBjb21wb25lbnRzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkTWFyayB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuICBjb25maWc6IE1hcms7XG59XG5cbi8qKlxuICogTWFya3MgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRNYXJrIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xuICBzdHlsZT86IG9iamVjdDtcbn1cblxuLyoqXG4gKiBTdGVwcyB0aGF0IHdvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZFN0ZXAgZXh0ZW5kcyBFeHRlbmRlZE1hcmsge1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIHN0eWxlPzogb2JqZWN0O1xufVxuXG5leHBvcnQgdHlwZSBTbGlkZXJTaG93VG9vbHRpcCA9ICdhbHdheXMnIHwgJ25ldmVyJyB8ICdkZWZhdWx0JztcblxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJIYW5kbGVyIHtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVBUmFuZ2UodmFsdWU6IFNsaWRlclZhbHVlKTogdmFsdWUgaXMgbnVtYmVyW10ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbmZpZ0FPYmplY3QoY29uZmlnOiBNYXJrKTogY29uZmlnIGlzIE1hcmtPYmoge1xuICByZXR1cm4gY29uZmlnIGluc3RhbmNlb2YgT2JqZWN0O1xufVxuIl19