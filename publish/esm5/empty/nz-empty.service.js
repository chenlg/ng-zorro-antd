/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NZ_DEFAULT_EMPTY_CONTENT } from './nz-empty-config';
import { getEmptyContentTypeError } from './nz-empty-error';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
/**
 * @template T
 */
var NzEmptyService = /** @class */ (function () {
    function NzEmptyService(defaultEmptyContent) {
        this.defaultEmptyContent = defaultEmptyContent;
        // tslint:disable-line:no-any
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (this.defaultEmptyContent) {
            this.userDefaultContent$.next(this.defaultEmptyContent);
        }
    }
    /**
     * @param {?=} content
     * @return {?}
     */
    NzEmptyService.prototype.setDefaultContent = /**
     * @param {?=} content
     * @return {?}
     */
    function (content) {
        if (typeof content === 'string'
            || content === undefined
            || content === null
            || content instanceof TemplateRef
            || content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw getEmptyContentTypeError(content);
        }
    };
    /**
     * @return {?}
     */
    NzEmptyService.prototype.resetDefault = /**
     * @return {?}
     */
    function () {
        this.userDefaultContent$.next(undefined);
    };
    NzEmptyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzEmptyService.ctorParameters = function () { return [
        { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ NzEmptyService.ngInjectableDef = i0.defineInjectable({ factory: function NzEmptyService_Factory() { return new i1.NzEmptyService(i0.inject(i1.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: i1.NzEmptyService, providedIn: "root" });
    return NzEmptyService;
}());
export { NzEmptyService };
if (false) {
    /** @type {?} */
    NzEmptyService.prototype.userDefaultContent$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.defaultEmptyContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJlbXB0eS9uei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBRTVEO0lBTUUsd0JBQWtFLG1CQUE0QjtRQUE1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVM7O1FBRjlGLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUF1QixTQUFTLENBQUMsQ0FBQztRQUd6RSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBOEI7UUFDOUMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO2VBQzFCLE9BQU8sS0FBSyxTQUFTO2VBQ3JCLE9BQU8sS0FBSyxJQUFJO2VBQ2hCLE9BQU8sWUFBWSxXQUFXO2VBQzlCLE9BQU8sWUFBWSxJQUFJLEVBQzFCO1lBQ0EsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7SUFFRCxxQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBtRCxJQUFJLHVCQVd6QyxNQUFNLFNBQUMsd0JBQXdCLGNBQUcsUUFBUTs7O3lCQVh6RDtDQWlDQyxBQTVCRCxJQTRCQztTQXpCWSxjQUFjOzs7SUFDekIsNkNBQTJFOzs7OztJQUUvRCw2Q0FBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOekVtcHR5Q3VzdG9tQ29udGVudCwgTlpfREVGQVVMVF9FTVBUWV9DT05URU5UIH0gZnJvbSAnLi9uei1lbXB0eS1jb25maWcnO1xuaW1wb3J0IHsgZ2V0RW1wdHlDb250ZW50VHlwZUVycm9yIH0gZnJvbSAnLi9uei1lbXB0eS1lcnJvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56RW1wdHlTZXJ2aWNlPFQgPSBhbnk+IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgdXNlckRlZmF1bHRDb250ZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpFbXB0eUN1c3RvbUNvbnRlbnQ+KHVuZGVmaW5lZCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQpIEBPcHRpb25hbCgpIHByaXZhdGUgZGVmYXVsdEVtcHR5Q29udGVudDogVHlwZTxUPikge1xuICAgIGlmICh0aGlzLmRlZmF1bHRFbXB0eUNvbnRlbnQpIHtcbiAgICAgIHRoaXMudXNlckRlZmF1bHRDb250ZW50JC5uZXh0KHRoaXMuZGVmYXVsdEVtcHR5Q29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGVmYXVsdENvbnRlbnQoY29udGVudD86IE56RW1wdHlDdXN0b21Db250ZW50KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgfHwgY29udGVudCA9PT0gdW5kZWZpbmVkXG4gICAgICB8fCBjb250ZW50ID09PSBudWxsXG4gICAgICB8fCBjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWZcbiAgICAgIHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlXG4gICAgKSB7XG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0RW1wdHlDb250ZW50VHlwZUVycm9yKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RGVmYXVsdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh1bmRlZmluZWQpO1xuICB9XG59XG4iXX0=