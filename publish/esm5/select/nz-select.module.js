/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzNoAnimationModule } from '../core/no-animation/nz-no-animation.module';
import { NzOverlayModule } from '../core/overlay/nz-overlay.module';
import { NzEmptyModule } from '../empty/nz-empty.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionLiComponent } from './nz-option-li.component';
import { NzOptionComponent } from './nz-option.component';
import { NzFilterGroupOptionPipe, NzFilterOptionPipe } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
import { NzSelectUnselectableDirective } from './nz-select-unselectable.directive';
import { NzSelectComponent } from './nz-select.component';
var NzSelectModule = /** @class */ (function () {
    function NzSelectModule() {
    }
    NzSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NzI18nModule,
                        FormsModule,
                        OverlayModule,
                        NzIconModule,
                        NzAddOnModule,
                        NzEmptyModule,
                        NzOverlayModule,
                        NzNoAnimationModule
                    ],
                    declarations: [
                        NzFilterGroupOptionPipe,
                        NzFilterOptionPipe,
                        NzOptionComponent,
                        NzSelectComponent,
                        NzOptionContainerComponent,
                        NzOptionGroupComponent,
                        NzOptionLiComponent,
                        NzSelectTopControlComponent,
                        NzSelectUnselectableDirective
                    ],
                    exports: [
                        NzOptionComponent,
                        NzSelectComponent,
                        NzOptionContainerComponent,
                        NzOptionGroupComponent,
                        NzSelectTopControlComponent
                    ]
                },] }
    ];
    return NzSelectModule;
}());
export { NzSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBQUE7SUFnQ0EsQ0FBQzs7Z0JBaENBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQU87d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixlQUFlO3dCQUNmLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQiw2QkFBNkI7cUJBQzlCO29CQUNELE9BQU8sRUFBTzt3QkFDWixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLDJCQUEyQjtxQkFDNUI7aUJBQ0Y7O0lBRUQscUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQURZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FkZG9uL2FkZG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9uby1hbmltYXRpb24vbnotbm8tYW5pbWF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOek92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvbnotb3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTnpFbXB0eU1vZHVsZSB9IGZyb20gJy4uL2VtcHR5L256LWVtcHR5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25MaUNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWxpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekZpbHRlckdyb3VwT3B0aW9uUGlwZSwgTnpGaWx0ZXJPcHRpb25QaXBlIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5pbXBvcnQgeyBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL256LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL256LXNlbGVjdC11bnNlbGVjdGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56U2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1zZWxlY3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE56STE4bk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOekFkZE9uTW9kdWxlLFxuICAgIE56RW1wdHlNb2R1bGUsXG4gICAgTnpPdmVybGF5TW9kdWxlLFxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpGaWx0ZXJHcm91cE9wdGlvblBpcGUsXG4gICAgTnpGaWx0ZXJPcHRpb25QaXBlLFxuICAgIE56T3B0aW9uQ29tcG9uZW50LFxuICAgIE56U2VsZWN0Q29tcG9uZW50LFxuICAgIE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIE56T3B0aW9uR3JvdXBDb21wb25lbnQsXG4gICAgTnpPcHRpb25MaUNvbXBvbmVudCxcbiAgICBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQsXG4gICAgTnpTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0cyAgICAgOiBbXG4gICAgTnpPcHRpb25Db21wb25lbnQsXG4gICAgTnpTZWxlY3RDb21wb25lbnQsXG4gICAgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQsXG4gICAgTnpPcHRpb25Hcm91cENvbXBvbmVudCxcbiAgICBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelNlbGVjdE1vZHVsZSB7XG59XG4iXX0=