/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentContentDirective } from './nz-comment-cells';
import { NzCommentComponent } from './nz-comment.component';
/** @type {?} */
const NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
export class NzCommentModule {
}
NzCommentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NzAddOnModule
                ],
                exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
                declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29tbWVudC9uei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDMUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7TUFFdEQsZ0JBQWdCLEdBQUc7SUFDdkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0NBQzdCO0FBVUQsTUFBTSxPQUFPLGVBQWU7OztZQVIzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFPO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQU8sQ0FBRSxrQkFBa0IsRUFBRSxHQUFHLGdCQUFnQixDQUFFO2dCQUN6RCxZQUFZLEVBQUUsQ0FBRSxrQkFBa0IsRUFBRSxHQUFHLGdCQUFnQixDQUFFO2FBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hZGRvbi9hZGRvbi5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50LFxuICBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlLFxuICBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsXG4gIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmVcbn0gZnJvbSAnLi9uei1jb21tZW50LWNlbGxzJztcbmltcG9ydCB7IE56Q29tbWVudENvbXBvbmVudCB9IGZyb20gJy4vbnotY29tbWVudC5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT01NRU5UX0NFTExTID0gW1xuICBOekNvbW1lbnRBdmF0YXJEaXJlY3RpdmUsXG4gIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUsXG4gIE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCxcbiAgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE56QWRkT25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0cyAgICAgOiBbIE56Q29tbWVudENvbXBvbmVudCwgLi4uTlpfQ09NTUVOVF9DRUxMUyBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTnpDb21tZW50Q29tcG9uZW50LCAuLi5OWl9DT01NRU5UX0NFTExTIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb21tZW50TW9kdWxlIHtcbn1cbiJdfQ==