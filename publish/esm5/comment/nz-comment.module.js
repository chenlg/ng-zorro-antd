/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentContentDirective } from './nz-comment-cells';
import { NzCommentComponent } from './nz-comment.component';
/** @type {?} */
var NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
var NzCommentModule = /** @class */ (function () {
    function NzCommentModule() {
    }
    NzCommentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NzAddOnModule
                    ],
                    exports: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS),
                    declarations: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS)
                },] }
    ];
    return NzCommentModule;
}());
export { NzCommentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29tbWVudC9uei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDRCQUE0QixFQUM1Qix3QkFBd0IsRUFDeEIseUJBQXlCLEVBQzFCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBRXRELGdCQUFnQixHQUFHO0lBQ3ZCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtDQUM3QjtBQUVEO0lBQUE7SUFTQSxDQUFDOztnQkFUQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFPO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTtxQkFDZDtvQkFDRCxPQUFPLG9CQUFTLGtCQUFrQixHQUFLLGdCQUFnQixDQUFFO29CQUN6RCxZQUFZLG9CQUFJLGtCQUFrQixHQUFLLGdCQUFnQixDQUFFO2lCQUMxRDs7SUFFRCxzQkFBQztDQUFBLEFBVEQsSUFTQztTQURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FkZG9uL2FkZG9uLm1vZHVsZSc7XG5pbXBvcnQge1xuICBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQsXG4gIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmUsXG4gIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSxcbiAgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZVxufSBmcm9tICcuL256LWNvbW1lbnQtY2VsbHMnO1xuaW1wb3J0IHsgTnpDb21tZW50Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jb21tZW50LmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTU1FTlRfQ0VMTFMgPSBbXG4gIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSxcbiAgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZSxcbiAgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50LFxuICBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICA6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpBZGRPbk1vZHVsZVxuICBdLFxuICBleHBvcnRzICAgICA6IFsgTnpDb21tZW50Q29tcG9uZW50LCAuLi5OWl9DT01NRU5UX0NFTExTIF0sXG4gIGRlY2xhcmF0aW9uczogWyBOekNvbW1lbnRDb21wb25lbnQsIC4uLk5aX0NPTU1FTlRfQ0VMTFMgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRNb2R1bGUge1xufVxuIl19