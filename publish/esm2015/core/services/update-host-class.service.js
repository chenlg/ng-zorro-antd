/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, RendererFactory2 } from '@angular/core';
export class NzUpdateHostClassService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = Object.assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    }
}
NzUpdateHostClassService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzUpdateHostClassService.ctorParameters = () => [
    { type: RendererFactory2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUpdateHostClassService.prototype.classMap;
    /**
     * @type {?}
     * @private
     */
    NzUpdateHostClassService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQTRCbkMsWUFBWSxnQkFBa0M7UUEzQnRDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUE0QnBCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUExQkQsZUFBZSxDQUFDLEVBQWUsRUFBRSxRQUFnQjtRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxxQkFBUSxRQUFRLENBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7OztJQUVPLFdBQVcsQ0FBQyxFQUFlLEVBQUUsUUFBZ0IsRUFBRSxRQUFtQjtRQUN4RSxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7OztJQUVPLFFBQVEsQ0FBQyxFQUFlLEVBQUUsUUFBZ0IsRUFBRSxRQUFtQjtRQUNyRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksUUFBUSxDQUFFLENBQUMsQ0FBRSxFQUFFO29CQUNqQixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBM0JGLFVBQVU7Ozs7WUFGcUIsZ0JBQWdCOzs7Ozs7O0lBSTlDLDRDQUFzQjs7Ozs7SUFDdEIsNENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2Uge1xuICBwcml2YXRlIGNsYXNzTWFwID0ge307XG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICB1cGRhdGVIb3N0Q2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgICB0aGlzLmFkZENsYXNzKGVsLCB0aGlzLmNsYXNzTWFwLCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgICBpZiAoY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgICBpZiAoY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgaWYgKGNsYXNzTWFwWyBpIF0pIHtcbiAgICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==