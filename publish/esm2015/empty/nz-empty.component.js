/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { emptyImage } from './nz-empty-config';
export class NzEmptyComponent {
    /**
     * @param {?} sanitizer
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(sanitizer, i18n, cdr) {
        this.sanitizer = sanitizer;
        this.i18n = i18n;
        this.cdr = cdr;
        // NOTE: It would be very hack to use `ContentChild`, because Angular could
        // tell if user actually pass something to <ng-content>.
        // See: https://github.com/angular/angular/issues/12530.
        // I can use a directive but this would expose the name `footer`.
        // @ContentChild(TemplateRef) nzNotFoundFooter: TemplateRef<void>;
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(emptyImage);
        this.isContentString = false;
        this.locale = {};
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    get shouldRenderContent() {
        /** @type {?} */
        const content = this.nzNotFoundContent;
        return !!(content || typeof content === 'string');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzNotFoundContent } = changes;
        if (nzNotFoundContent) {
            this.isContentString = typeof nzNotFoundContent.currentValue === 'string';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Empty');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzEmptyComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-empty',
                template: "<div class=\"ant-empty-image\">\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundImage\">\n    <img [src]=\"nzNotFoundImage || defaultSvg\" [alt]=\"isContentString ? nzNotFoundContent : 'empty'\">\n  </ng-container>\n</div>\n<p class=\"ant-empty-description\">\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundContent\">\n    {{ shouldRenderContent ? nzNotFoundContent : locale['description'] }}\n  </ng-container>\n</p>\n<div class=\"ant-empty-footer\" *ngIf=\"nzNotFoundFooter\">\n  <ng-container *nzStringTemplateOutlet=\"nzNotFoundFooter\">\n    {{ nzNotFoundFooter }}\n  </ng-container>\n</div>\n",
                host: {
                    'class': 'ant-empty'
                },
                styles: ['nz-empty { display: block; }']
            }] }
];
/** @nocollapse */
NzEmptyComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
NzEmptyComponent.propDecorators = {
    nzNotFoundImage: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzNotFoundFooter: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundImage;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzEmptyComponent.prototype.nzNotFoundFooter;
    /** @type {?} */
    NzEmptyComponent.prototype.defaultSvg;
    /** @type {?} */
    NzEmptyComponent.prototype.isContentString;
    /** @type {?} */
    NzEmptyComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzEmptyComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImVtcHR5L256LWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUFFLGlCQUFpQixFQUMxQyxTQUFTLEVBQ1QsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVkvQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFzQjNCLFlBQ1UsU0FBdUIsRUFDdkIsSUFBbUIsRUFDbkIsR0FBc0I7UUFGdEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7Ozs7UUFkaEMsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQU9KLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBT3ZDLENBQUM7Ozs7SUFaRCxJQUFJLG1CQUFtQjs7Y0FDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtRQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQVdELFdBQVcsQ0FBQyxPQUFzQjtjQUMxQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTztRQUNyQyxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxpQkFBaUIsQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFJLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3ZDLFFBQVEsRUFBUyxVQUFVO2dCQUMzQiw2bUJBQTRDO2dCQUU1QyxJQUFJLEVBQWE7b0JBQ2YsT0FBTyxFQUFFLFdBQVc7aUJBQ3JCO3lCQUhrQiw4QkFBOEI7YUFJbEQ7Ozs7WUFoQlEsWUFBWTtZQUdaLGFBQWE7WUFYSyxpQkFBaUI7Ozs4QkEwQnpDLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzs7O0lBRk4sMkNBQXFEOztJQUNyRCw2Q0FBdUQ7O0lBQ3ZELDRDQUFzRDs7SUFRdEQsc0NBQXVFOztJQUN2RSwyQ0FBd0I7O0lBQ3hCLGtDQUFZOzs7OztJQU9aLG9DQUF1Qzs7Ozs7SUFHckMscUNBQStCOzs7OztJQUMvQixnQ0FBMkI7Ozs7O0lBQzNCLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBlbXB0eUltYWdlIH0gZnJvbSAnLi9uei1lbXB0eS1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgOiAnbnotZW1wdHknLFxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LWVtcHR5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgOiBbICduei1lbXB0eSB7IGRpc3BsYXk6IGJsb2NrOyB9JyBdLFxuICBob3N0ICAgICAgICAgICA6IHtcbiAgICAnY2xhc3MnOiAnYW50LWVtcHR5J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpOb3RGb3VuZEltYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuek5vdEZvdW5kRm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyBOT1RFOiBJdCB3b3VsZCBiZSB2ZXJ5IGhhY2sgdG8gdXNlIGBDb250ZW50Q2hpbGRgLCBiZWNhdXNlIEFuZ3VsYXIgY291bGRcbiAgLy8gdGVsbCBpZiB1c2VyIGFjdHVhbGx5IHBhc3Mgc29tZXRoaW5nIHRvIDxuZy1jb250ZW50Pi5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMC5cbiAgLy8gSSBjYW4gdXNlIGEgZGlyZWN0aXZlIGJ1dCB0aGlzIHdvdWxkIGV4cG9zZSB0aGUgbmFtZSBgZm9vdGVyYC5cbiAgLy8gQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgbnpOb3RGb3VuZEZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgZGVmYXVsdFN2ZyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChlbXB0eUltYWdlKTtcbiAgaXNDb250ZW50U3RyaW5nID0gZmFsc2U7XG4gIGxvY2FsZSA9IHt9O1xuXG4gIGdldCBzaG91bGRSZW5kZXJDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm56Tm90Rm91bmRDb250ZW50O1xuICAgIHJldHVybiAhIShjb250ZW50IHx8IHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek5vdEZvdW5kQ29udGVudCB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpOb3RGb3VuZENvbnRlbnQpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50U3RyaW5nID0gdHlwZW9mIG56Tm90Rm91bmRDb250ZW50LmN1cnJlbnRWYWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRW1wdHknKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=