/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzCountdownComponent } from './nz-countdown.component';
import { NzStatisticNumberComponent } from './nz-statistic-number.component';
import { NzStatisticComponent } from './nz-statistic.component';
import { NzTimeRangePipe } from './nz-time-range.pipe';
var NzStatisticModule = /** @class */ (function () {
    function NzStatisticModule() {
    }
    NzStatisticModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent, NzTimeRangePipe],
                    exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent, NzTimeRangePipe]
                },] }
    ];
    return NzStatisticModule;
}());
export { NzStatisticModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzdGF0aXN0aWMvbnotc3RhdGlzdGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RDtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBTyxDQUFFLFlBQVksRUFBRSxhQUFhLENBQUU7b0JBQzdDLFlBQVksRUFBRSxDQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLGVBQWUsQ0FBRTtvQkFDekcsT0FBTyxFQUFPLENBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxDQUFFO2lCQUMxRzs7SUFFRCx3QkFBQztDQUFBLEFBTkQsSUFNQztTQURZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hZGRvbi9hZGRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpDb3VudGRvd25Db21wb25lbnQgfSBmcm9tICcuL256LWNvdW50ZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL256LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56U3RhdGlzdGljQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGltZVJhbmdlUGlwZSB9IGZyb20gJy4vbnotdGltZS1yYW5nZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTnpTdGF0aXN0aWNDb21wb25lbnQsIE56Q291bnRkb3duQ29tcG9uZW50LCBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCwgTnpUaW1lUmFuZ2VQaXBlIF0sXG4gIGV4cG9ydHMgICAgIDogWyBOelN0YXRpc3RpY0NvbXBvbmVudCwgTnpDb3VudGRvd25Db21wb25lbnQsIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50LCBOelRpbWVSYW5nZVBpcGUgXVxufSlcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY01vZHVsZSB7XG59XG4iXX0=