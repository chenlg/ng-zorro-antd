/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzNoAnimationModule } from '../core/no-animation/nz-no-animation.module';
import { NzButtonModule } from '../button/nz-button.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMenuDividerDirective } from '../menu/nz-menu-divider.directive';
import { NzMenuGroupComponent } from '../menu/nz-menu-group.component';
import { NzMenuItemDirective } from '../menu/nz-menu-item.directive';
import { NzMenuDirective } from '../menu/nz-menu.directive';
import { NzSubMenuComponent } from '../menu/nz-submenu.component';
var NzMenuModule = /** @class */ (function () {
    function NzMenuModule() {
    }
    NzMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NzButtonModule, OverlayModule, NzIconModule, NzNoAnimationModule],
                    declarations: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent],
                    exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
                },] }
    ];
    return NzMenuModule;
}());
export { NzMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRTtJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBTyxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLENBQUU7b0JBQzdHLFlBQVksRUFBRSxDQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBRTtvQkFDeEgsT0FBTyxFQUFPLENBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFFO2lCQUN6SDs7SUFFRCxtQkFBQztDQUFBLEFBTkQsSUFNQztTQURZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvbm8tYW5pbWF0aW9uL256LW5vLWFuaW1hdGlvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9uei1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpNZW51RGl2aWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvbnotbWVudS1kaXZpZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOek1lbnVHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL21lbnUvbnotbWVudS1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICcuLi9tZW51L256LW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4uL21lbnUvbnotc3VibWVudS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpCdXR0b25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTnpNZW51RGlyZWN0aXZlLCBOek1lbnVJdGVtRGlyZWN0aXZlLCBOelN1Yk1lbnVDb21wb25lbnQsIE56TWVudURpdmlkZXJEaXJlY3RpdmUsIE56TWVudUdyb3VwQ29tcG9uZW50IF0sXG4gIGV4cG9ydHMgICAgIDogWyBOek1lbnVEaXJlY3RpdmUsIE56TWVudUl0ZW1EaXJlY3RpdmUsIE56U3ViTWVudUNvbXBvbmVudCwgTnpNZW51RGl2aWRlckRpcmVjdGl2ZSwgTnpNZW51R3JvdXBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnVNb2R1bGUge1xufVxuIl19