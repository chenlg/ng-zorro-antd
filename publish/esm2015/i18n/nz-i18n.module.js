/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoggerModule } from '../core/util/logger/logger.module';
import { NzI18nPipe } from './nz-i18n.pipe';
import { NZ_DATE_LOCALE, NZ_I18N } from './nz-i18n.token';
export class NzI18nModule {
}
NzI18nModule.decorators = [
    { type: NgModule, args: [{
                imports: [LoggerModule],
                declarations: [NzI18nPipe],
                exports: [NzI18nPipe],
                providers: [
                    DatePipe,
                    { provide: NZ_I18N, useValue: null },
                    { provide: NZ_DATE_LOCALE, useValue: null }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9uei1pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBWTFELE1BQU0sT0FBTyxZQUFZOzs7WUFWeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBTyxDQUFFLFlBQVksQ0FBRTtnQkFDOUIsWUFBWSxFQUFFLENBQUUsVUFBVSxDQUFFO2dCQUM1QixPQUFPLEVBQU8sQ0FBRSxVQUFVLENBQUU7Z0JBQzVCLFNBQVMsRUFBSztvQkFDWixRQUFRO29CQUNSLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO29CQUNwQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtpQkFDNUM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5cbmltcG9ydCB7IE56STE4blBpcGUgfSBmcm9tICcuL256LWkxOG4ucGlwZSc7XG5pbXBvcnQgeyBOWl9EQVRFX0xPQ0FMRSwgTlpfSTE4TiB9IGZyb20gJy4vbnotaTE4bi50b2tlbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHMgICAgIDogWyBMb2dnZXJNb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbIE56STE4blBpcGUgXSxcbiAgZXhwb3J0cyAgICAgOiBbIE56STE4blBpcGUgXSxcbiAgcHJvdmlkZXJzICAgOiBbXG4gICAgRGF0ZVBpcGUsXG4gICAgeyBwcm92aWRlOiBOWl9JMThOLCB1c2VWYWx1ZTogbnVsbCB9LFxuICAgIHsgcHJvdmlkZTogTlpfREFURV9MT0NBTEUsIHVzZVZhbHVlOiBudWxsIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekkxOG5Nb2R1bGUge1xufVxuIl19