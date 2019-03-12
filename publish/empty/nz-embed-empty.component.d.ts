import { ChangeDetectorRef, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { NzEmptyCustomContent, NzEmptySize } from './nz-empty-config';
import { NzEmptyService } from './nz-empty.service';
export declare class NzEmbedEmptyComponent implements OnChanges, OnInit, OnDestroy {
    emptyService: NzEmptyService;
    private sanitizer;
    private viewContainerRef;
    private cdr;
    private injector;
    nzComponentName: string;
    specificContent: NzEmptyCustomContent;
    content: any;
    contentType: 'component' | 'template' | 'string';
    contentPortal: any;
    defaultSvg: import("@angular/platform-browser").SafeResourceUrl;
    size: NzEmptySize;
    subs_: Subscription;
    constructor(emptyService: NzEmptyService, sanitizer: DomSanitizer, viewContainerRef: ViewContainerRef, cdr: ChangeDetectorRef, injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getEmptySize;
    private renderEmpty;
}
