/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER } from './nz-message-config';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageComponent } from './nz-message.component';
import { NzMessageService } from './nz-message.service';
var NzMessageModule = /** @class */ (function () {
    function NzMessageModule() {
    }
    NzMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule],
                    declarations: [NzMessageContainerComponent, NzMessageComponent],
                    providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER, NzMessageService],
                    entryComponents: [NzMessageContainerComponent]
                },] }
    ];
    return NzMessageModule;
}());
export { NzMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVzc2FnZS9uei1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQUFBO0lBT0EsQ0FBQzs7Z0JBUEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFFO29CQUM5RCxZQUFZLEVBQUssQ0FBRSwyQkFBMkIsRUFBRSxrQkFBa0IsQ0FBRTtvQkFDcEUsU0FBUyxFQUFRLENBQUUsa0NBQWtDLEVBQUUsZ0JBQWdCLENBQUU7b0JBQ3pFLGVBQWUsRUFBRSxDQUFFLDJCQUEyQixDQUFFO2lCQUNqRDs7SUFFRCxzQkFBQztDQUFBLEFBUEQsSUFPQztTQURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcblxuaW1wb3J0IHsgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJR19QUk9WSURFUiB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9uei1tZXNzYWdlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICAgICA6IFsgQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekljb25Nb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zICAgOiBbIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgTnpNZXNzYWdlQ29tcG9uZW50IF0sXG4gIHByb3ZpZGVycyAgICAgIDogWyBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHX1BST1ZJREVSLCBOek1lc3NhZ2VTZXJ2aWNlIF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VNb2R1bGUge1xufVxuIl19