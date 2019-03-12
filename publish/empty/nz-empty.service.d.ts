import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzEmptyCustomContent } from './nz-empty-config';
export declare class NzEmptyService<T = any> {
    private defaultEmptyContent;
    userDefaultContent$: BehaviorSubject<NzEmptyCustomContent>;
    constructor(defaultEmptyContent: Type<T>);
    setDefaultContent(content?: NzEmptyCustomContent): void;
    resetDefault(): void;
}
