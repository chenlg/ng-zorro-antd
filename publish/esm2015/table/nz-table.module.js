/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from '../checkbox/nz-checkbox.module';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzDropDownModule } from '../dropdown/nz-dropdown.module';
import { NzEmptyModule } from '../empty/nz-empty.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMenuModule } from '../menu/nz-menu.module';
import { NzPaginationModule } from '../pagination/nz-pagination.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSpinModule } from '../spin/nz-spin.module';
import { NzTableComponent } from './nz-table.component';
import { NzTbodyDirective } from './nz-tbody.directive';
import { NzTdComponent } from './nz-td.component';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzTrDirective } from './nz-tr.directive';
import { NzVirtualScrollDirective } from './nz-virtual-scroll.directive';
export class NzTableModule {
}
NzTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective],
                exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective],
                imports: [
                    NzMenuModule,
                    FormsModule,
                    NzAddOnModule,
                    NzRadioModule,
                    NzCheckboxModule,
                    NzDropDownModule,
                    CommonModule,
                    NzPaginationModule,
                    NzSpinModule,
                    NzI18nModule,
                    NzIconModule,
                    NzEmptyModule,
                    ScrollingModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFxQnpFLE1BQU0sT0FBTyxhQUFhOzs7WUFuQnpCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBRTtnQkFDN0ksT0FBTyxFQUFPLENBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLENBQUU7Z0JBQzdJLE9BQU8sRUFBTztvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsWUFBWTtvQkFDWixZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixlQUFlO2lCQUNoQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L256LWNoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hZGRvbi9hZGRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL256LWRyb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOekVtcHR5TW9kdWxlIH0gZnJvbSAnLi4vZW1wdHkvbnotZW1wdHkubW9kdWxlJztcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICcuLi9tZW51L256LW1lbnUubW9kdWxlJztcbmltcG9ydCB7IE56UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJy4uL3BhZ2luYXRpb24vbnotcGFnaW5hdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJy4uL3JhZGlvL256LXJhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBOelNwaW5Nb2R1bGUgfSBmcm9tICcuLi9zcGluL256LXNwaW4ubW9kdWxlJztcblxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGJvZHlEaXJlY3RpdmUgfSBmcm9tICcuL256LXRib2R5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRkQ29tcG9uZW50IH0gZnJvbSAnLi9uei10ZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcbmltcG9ydCB7IE56VGhlYWRDb21wb25lbnQgfSBmcm9tICcuL256LXRoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10ci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei12aXJ0dWFsLXNjcm9sbC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgTnpUYWJsZUNvbXBvbmVudCwgTnpUaENvbXBvbmVudCwgTnpUZENvbXBvbmVudCwgTnpUaGVhZENvbXBvbmVudCwgTnpUYm9keURpcmVjdGl2ZSwgTnpUckRpcmVjdGl2ZSwgTnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlIF0sXG4gIGV4cG9ydHMgICAgIDogWyBOelRhYmxlQ29tcG9uZW50LCBOelRoQ29tcG9uZW50LCBOelRkQ29tcG9uZW50LCBOelRoZWFkQ29tcG9uZW50LCBOelRib2R5RGlyZWN0aXZlLCBOelRyRGlyZWN0aXZlLCBOelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgXSxcbiAgaW1wb3J0cyAgICAgOiBbXG4gICAgTnpNZW51TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE56QWRkT25Nb2R1bGUsXG4gICAgTnpSYWRpb01vZHVsZSxcbiAgICBOekNoZWNrYm94TW9kdWxlLFxuICAgIE56RHJvcERvd25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE56UGFnaW5hdGlvbk1vZHVsZSxcbiAgICBOelNwaW5Nb2R1bGUsXG4gICAgTnpJMThuTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOekVtcHR5TW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVNb2R1bGUge1xufVxuIl19