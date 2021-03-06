import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class NzCommentAvatarDirective {
}
export declare class NzCommentContentDirective {
}
export declare class NzCommentActionHostDirective extends CdkPortalOutlet implements OnInit, OnDestroy {
    nzCommentActionHost: TemplatePortal | null;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class NzCommentActionComponent implements OnInit {
    private viewContainerRef;
    implicitContent: TemplateRef<void>;
    private contentPortal;
    readonly content: TemplatePortal | null;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
}
