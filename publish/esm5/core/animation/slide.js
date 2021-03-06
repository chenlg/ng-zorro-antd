/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDuration } from './animation';
/** @type {?} */
var ANIMATION_TRANSITION_IN = AnimationDuration.BASE + " " + AnimationCurves.EASE_OUT_QUINT;
/** @type {?} */
var ANIMATION_TRANSITION_OUT = AnimationDuration.BASE + " " + AnimationCurves.EASE_IN_QUINT;
/** @type {?} */
export var slideMotion = trigger('slideMotion', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('bottom => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate(ANIMATION_TRANSITION_IN)
    ]),
    transition('top => void', [
        animate(ANIMATION_TRANSITION_OUT, style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);
/** @type {?} */
export var slideAlertMotion = trigger('slideAlertMotion', [
    transition(':leave', [
        style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        animate(AnimationDuration.SLOW + " " + AnimationCurves.EASE_IN_OUT_CIRC, style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9hbmltYXRpb24vc2xpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFFM0QsdUJBQXVCLEdBQU0saUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxjQUFnQjs7SUFDdkYsd0JBQXdCLEdBQU0saUJBQWlCLENBQUMsSUFBSSxTQUFJLGVBQWUsQ0FBQyxhQUFlOztBQUU3RixNQUFNLEtBQU8sV0FBVyxHQUE2QixPQUFPLENBQUMsYUFBYSxFQUFFO0lBQzFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sRUFBVSxDQUFDO1FBQ2xCLFNBQVMsRUFBUSxXQUFXO1FBQzVCLGVBQWUsRUFBRSxPQUFPO0tBQ3pCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ2pCLE9BQU8sRUFBVSxDQUFDO1FBQ2xCLFNBQVMsRUFBUSxXQUFXO1FBQzVCLGVBQWUsRUFBRSxTQUFTO0tBQzNCLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUMzQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDO1FBQ0YsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0tBQ2pDLENBQUM7SUFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7UUFDM0IsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQztZQUN0QyxPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQUM7S0FDSixDQUFDO0lBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTtRQUN4QixLQUFLLENBQUM7WUFDSixPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsU0FBUztTQUMzQixDQUFDO1FBQ0YsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0tBQ2pDLENBQUM7SUFDRixVQUFVLENBQUMsYUFBYSxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7WUFDdEMsT0FBTyxFQUFVLENBQUM7WUFDbEIsU0FBUyxFQUFRLGFBQWE7WUFDOUIsZUFBZSxFQUFFLFNBQVM7U0FDM0IsQ0FBQyxDQUFDO0tBQ0osQ0FBQztDQUNILENBQUM7O0FBRUYsTUFBTSxLQUFPLGdCQUFnQixHQUE2QixPQUFPLENBQUMsa0JBQWtCLEVBQUU7SUFDcEYsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3ZFLE9BQU8sQ0FBSSxpQkFBaUIsQ0FBQyxJQUFJLFNBQUksZUFBZSxDQUFDLGdCQUFrQixFQUFFLEtBQUssQ0FBQztZQUM3RSxPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsV0FBVztZQUM1QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlcixcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmVzLCBBbmltYXRpb25EdXJhdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uJztcblxuY29uc3QgQU5JTUFUSU9OX1RSQU5TSVRJT05fSU4gPSBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX09VVF9RVUlOVH1gO1xuY29uc3QgQU5JTUFUSU9OX1RSQU5TSVRJT05fT1VUID0gYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX0gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9RVUlOVH1gO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVNb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlTW90aW9uJywgW1xuICBzdGF0ZSgnYm90dG9tJywgc3R5bGUoe1xuICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICB9KSksXG4gIHN0YXRlKCd0b3AnLCBzdHlsZSh7XG4gICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCd2b2lkID0+IGJvdHRvbScsIFtcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICB9KSxcbiAgICBhbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX0lOKVxuICBdKSxcbiAgdHJhbnNpdGlvbignYm90dG9tID0+IHZvaWQnLCBbXG4gICAgYW5pbWF0ZShBTklNQVRJT05fVFJBTlNJVElPTl9PVVQsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgIH0pKVxuICBdKSxcbiAgdHJhbnNpdGlvbigndm9pZCA9PiB0b3AnLCBbXG4gICAgc3R5bGUoe1xuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICB9KSxcbiAgICBhbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX0lOKVxuICBdKSxcbiAgdHJhbnNpdGlvbigndG9wID0+IHZvaWQnLCBbXG4gICAgYW5pbWF0ZShBTklNQVRJT05fVFJBTlNJVElPTl9PVVQsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgfSkpXG4gIF0pXG5dKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlQWxlcnRNb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlQWxlcnRNb3Rpb24nLCBbXG4gIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyB9KSxcbiAgICBhbmltYXRlKGAke0FuaW1hdGlvbkR1cmF0aW9uLlNMT1d9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fT1VUX0NJUkN9YCwgc3R5bGUoe1xuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDApJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgIH0pKVxuICBdKVxuXSk7XG4iXX0=