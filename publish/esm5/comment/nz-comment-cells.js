/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
var NzCommentAvatarDirective = /** @class */ (function () {
    function NzCommentAvatarDirective() {
    }
    NzCommentAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-avatar[nz-comment-avatar]'
                },] }
    ];
    return NzCommentAvatarDirective;
}());
export { NzCommentAvatarDirective };
var NzCommentContentDirective = /** @class */ (function () {
    function NzCommentContentDirective() {
    }
    NzCommentContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-comment-content, [nz-comment-content]',
                    host: { 'class': 'ant-comment-content-detail' }
                },] }
    ];
    return NzCommentContentDirective;
}());
export { NzCommentContentDirective };
var NzCommentActionHostDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzCommentActionHostDirective, _super);
    function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.attach(this.nzCommentActionHost);
    };
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    NzCommentActionHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzCommentActionHost]'
                },] }
    ];
    /** @nocollapse */
    NzCommentActionHostDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    NzCommentActionHostDirective.propDecorators = {
        nzCommentActionHost: [{ type: Input }]
    };
    return NzCommentActionHostDirective;
}(CdkPortalOutlet));
export { NzCommentActionHostDirective };
if (false) {
    /** @type {?} */
    NzCommentActionHostDirective.prototype.nzCommentActionHost;
}
var NzCommentActionComponent = /** @class */ (function () {
    function NzCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(NzCommentActionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCommentActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    NzCommentActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-comment-action',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    NzCommentActionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NzCommentActionComponent.propDecorators = {
        implicitContent: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    return NzCommentActionComponent;
}());
export { NzCommentActionComponent };
if (false) {
    /** @type {?} */
    NzCommentActionComponent.prototype.implicitContent;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.contentPortal;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb21tZW50L256LWNvbW1lbnQtY2VsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUFFLHdCQUF3QixFQUNuQyxTQUFTLEVBQUUsS0FBSyxFQUVoQixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUFFLGlCQUFpQixFQUNwQyxNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO0lBSUEsQ0FBQzs7Z0JBSkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7aUJBQ3pDOztJQUVELCtCQUFDO0NBQUEsQUFKRCxJQUlDO1NBRFksd0JBQXdCO0FBR3JDO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztvQkFDcEQsSUFBSSxFQUFNLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFO2lCQUNwRDs7SUFFRCxnQ0FBQztDQUFBLEFBTEQsSUFLQztTQURZLHlCQUF5QjtBQUd0QztJQUdrRCx3REFBZTtJQUkvRCxzQ0FBWSx3QkFBa0QsRUFDbEQsZ0JBQWtDO2VBQzVDLGtCQUFNLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxrREFBVzs7O0lBQVg7UUFDRSxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDOzs7O2dCQXZCWSx3QkFBd0I7Z0JBS25DLGdCQUFnQjs7O3NDQXFCZixLQUFLOztJQWVSLG1DQUFDO0NBQUEsQUFwQkQsQ0FHa0QsZUFBZSxHQWlCaEU7U0FqQlksNEJBQTRCOzs7SUFFdkMsMkRBQW9EOztBQWlCdEQ7SUFjRSxrQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOOUMsa0JBQWEsR0FBMEIsSUFBSSxDQUFDO0lBUXBELENBQUM7SUFORCxzQkFBSSw2Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7O0lBTUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFTLG1CQUFtQjtvQkFDcEMsYUFBYSxFQUFJLGlCQUFpQixDQUFDLElBQUk7b0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQVMsc0RBQXNEO2lCQUN4RTs7OztnQkEzQ0MsZ0JBQWdCOzs7a0NBNkNmLFNBQVMsU0FBQyxXQUFXOztJQWN4QiwrQkFBQztDQUFBLEFBckJELElBcUJDO1NBZlksd0JBQXdCOzs7SUFDbkMsbURBQTJEOzs7OztJQUMzRCxpREFBb0Q7Ozs7O0lBTXhDLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1BvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1hdmF0YXJbbnotY29tbWVudC1hdmF0YXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUge1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1jb21tZW50LWNvbnRlbnQsIFtuei1jb21tZW50LWNvbnRlbnRdJyxcbiAgaG9zdCAgICA6IHsgJ2NsYXNzJzogJ2FudC1jb21tZW50LWNvbnRlbnQtZGV0YWlsJyB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUge1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpDb21tZW50QWN0aW9uSG9zdF0nXG59KVxuZXhwb3J0IGNsYXNzIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmUgZXh0ZW5kcyBDZGtQb3J0YWxPdXRsZXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgbnpDb21tZW50QWN0aW9uSG9zdDogVGVtcGxhdGVQb3J0YWwgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5hdHRhY2godGhpcy5uekNvbW1lbnRBY3Rpb25Ib3N0KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgIDogJ256LWNvbW1lbnQtYWN0aW9uJyxcbiAgZW5jYXBzdWxhdGlvbiAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGUgICAgICAgOiAnPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgaW1wbGljaXRDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBjb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbCB8IG51bGwgPSBudWxsO1xuXG4gIGdldCBjb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFBvcnRhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5pbXBsaWNpdENvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cbiJdfQ==