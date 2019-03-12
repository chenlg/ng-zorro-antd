/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzNoAnimationModule } from '../core/no-animation/nz-no-animation.module';
import { NzOverlayModule } from '../core/overlay/nz-overlay.module';
import { NzEmptyModule } from '../empty/nz-empty.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzTreeModule } from '../tree/nz-tree.module';
import { NzTreeSelectComponent } from './nz-tree-select.component';
var NzTreeSelectModule = /** @class */ (function () {
    function NzTreeSelectModule() {
    }
    NzTreeSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, FormsModule, NzTreeModule, NzIconModule, NzEmptyModule, NzOverlayModule, NzNoAnimationModule],
                    declarations: [NzTreeSelectComponent],
                    exports: [NzTreeSelectComponent]
                },] }
    ];
    return NzTreeSelectModule;
}());
export { NzTreeSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0L256LXRyZWUtc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkU7SUFBQTtJQU1BLENBQUM7O2dCQU5BLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUU7b0JBQzNJLFlBQVksRUFBRSxDQUFFLHFCQUFxQixDQUFFO29CQUN2QyxPQUFPLEVBQU8sQ0FBRSxxQkFBcUIsQ0FBRTtpQkFDeEM7O0lBRUQseUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL25vLWFuaW1hdGlvbi9uei1uby1hbmltYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IE56T3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9uei1vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOekVtcHR5TW9kdWxlIH0gZnJvbSAnLi4vZW1wdHkvbnotZW1wdHkubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpUcmVlTW9kdWxlIH0gZnJvbSAnLi4vdHJlZS9uei10cmVlLm1vZHVsZSc7XG5pbXBvcnQgeyBOelRyZWVTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL256LXRyZWUtc2VsZWN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEZvcm1zTW9kdWxlLCBOelRyZWVNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpFbXB0eU1vZHVsZSwgTnpPdmVybGF5TW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9uczogWyBOelRyZWVTZWxlY3RDb21wb25lbnQgXSxcbiAgZXhwb3J0cyAgICAgOiBbIE56VHJlZVNlbGVjdENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZVNlbGVjdE1vZHVsZSB7XG59XG4iXX0=