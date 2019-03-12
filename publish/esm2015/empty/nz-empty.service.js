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
export class NzEmptyService {
    /**
     * @param {?} defaultEmptyContent
     */
    constructor(defaultEmptyContent) {
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
    setDefaultContent(content) {
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
    }
    /**
     * @return {?}
     */
    resetDefault() {
        this.userDefaultContent$.next(undefined);
    }
}
NzEmptyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzEmptyService.ctorParameters = () => [
    { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
];
/** @nocollapse */ NzEmptyService.ngInjectableDef = i0.defineInjectable({ factory: function NzEmptyService_Factory() { return new i1.NzEmptyService(i0.inject(i1.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: i1.NzEmptyService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NzEmptyService.prototype.userDefaultContent$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.defaultEmptyContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJlbXB0eS9uei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBSzVELE1BQU0sT0FBTyxjQUFjOzs7O0lBR3pCLFlBQWtFLG1CQUE0QjtRQUE1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVM7O1FBRjlGLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUF1QixTQUFTLENBQUMsQ0FBQztRQUd6RSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUE4QjtRQUM5QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7ZUFDMUIsT0FBTyxLQUFLLFNBQVM7ZUFDckIsT0FBTyxLQUFLLElBQUk7ZUFDaEIsT0FBTyxZQUFZLFdBQVc7ZUFDOUIsT0FBTyxZQUFZLElBQUksRUFDMUI7WUFDQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxNQUFNLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQTNCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQbUQsSUFBSSx1QkFXekMsTUFBTSxTQUFDLHdCQUF3QixjQUFHLFFBQVE7Ozs7O0lBRnZELDZDQUEyRTs7Ozs7SUFFL0QsNkNBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpFbXB0eUN1c3RvbUNvbnRlbnQsIE5aX0RFRkFVTFRfRU1QVFlfQ09OVEVOVCB9IGZyb20gJy4vbnotZW1wdHktY29uZmlnJztcbmltcG9ydCB7IGdldEVtcHR5Q29udGVudFR5cGVFcnJvciB9IGZyb20gJy4vbnotZW1wdHktZXJyb3InO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekVtcHR5U2VydmljZTxUID0gYW55PiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIHVzZXJEZWZhdWx0Q29udGVudCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RW1wdHlDdXN0b21Db250ZW50Pih1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTlpfREVGQVVMVF9FTVBUWV9DT05URU5UKSBAT3B0aW9uYWwoKSBwcml2YXRlIGRlZmF1bHRFbXB0eUNvbnRlbnQ6IFR5cGU8VD4pIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0RW1wdHlDb250ZW50KSB7XG4gICAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh0aGlzLmRlZmF1bHRFbXB0eUNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldERlZmF1bHRDb250ZW50KGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgIHx8IGNvbnRlbnQgPT09IHVuZGVmaW5lZFxuICAgICAgfHwgY29udGVudCA9PT0gbnVsbFxuICAgICAgfHwgY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmXG4gICAgICB8fCBjb250ZW50IGluc3RhbmNlb2YgVHlwZVxuICAgICkge1xuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQoY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGdldEVtcHR5Q29udGVudFR5cGVFcnJvcihjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICByZXNldERlZmF1bHQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodW5kZWZpbmVkKTtcbiAgfVxufVxuIl19