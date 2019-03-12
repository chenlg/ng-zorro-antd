/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves } from './animation';
/** @type {?} */
export var collapseMotion = trigger('collapseMotion', [
    state('expanded', style({ height: '*' })),
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('hidden', style({ height: 0, display: 'none' })),
    transition('expanded => collapsed', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('expanded => hidden', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('collapsed => expanded', animate("150ms " + AnimationCurves.EASE_IN_OUT)),
    transition('hidden => expanded', animate("150ms " + AnimationCurves.EASE_IN_OUT))
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9hbmltYXRpb24vY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFOUMsTUFBTSxLQUFPLGNBQWMsR0FBNkIsT0FBTyxDQUFDLGdCQUFnQixFQUFFO0lBQ2hGLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVELEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLFdBQVMsZUFBZSxDQUFDLFdBQWEsQ0FBQyxDQUFDO0lBQ3BGLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsV0FBUyxlQUFlLENBQUMsV0FBYSxDQUFDLENBQUM7SUFDakYsVUFBVSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxXQUFTLGVBQWUsQ0FBQyxXQUFhLENBQUMsQ0FBQztJQUNwRixVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLFdBQVMsZUFBZSxDQUFDLFdBQWEsQ0FBQyxDQUFDO0NBQ2xGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlcyB9IGZyb20gJy4vYW5pbWF0aW9uJztcblxuZXhwb3J0IGNvbnN0IGNvbGxhcHNlTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdjb2xsYXBzZU1vdGlvbicsIFtcbiAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IGhlaWdodDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pKSxcbiAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHsgaGVpZ2h0OiAwLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICB0cmFuc2l0aW9uKCdleHBhbmRlZCA9PiBjb2xsYXBzZWQnLCBhbmltYXRlKGAxNTBtcyAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVH1gKSksXG4gIHRyYW5zaXRpb24oJ2V4cGFuZGVkID0+IGhpZGRlbicsIGFuaW1hdGUoYDE1MG1zICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUfWApKSxcbiAgdHJhbnNpdGlvbignY29sbGFwc2VkID0+IGV4cGFuZGVkJywgYW5pbWF0ZShgMTUwbXMgJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVR9YCkpLFxuICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gZXhwYW5kZWQnLCBhbmltYXRlKGAxNTBtcyAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVH1gKSlcbl0pO1xuIl19