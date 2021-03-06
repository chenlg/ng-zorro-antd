/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDuration } from './animation';
/** @type {?} */
const ANIMATION_TRANSITION_IN = `${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_QUINT}`;
/** @type {?} */
const ANIMATION_TRANSITION_OUT = `${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_QUINT}`;
/** @type {?} */
export const slideMotion = trigger('slideMotion', [
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
export const slideAlertMotion = trigger('slideAlertMotion', [
    transition(':leave', [
        style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9hbmltYXRpb24vc2xpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7TUFFM0QsdUJBQXVCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTs7TUFDdkYsd0JBQXdCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLGFBQWEsRUFBRTs7QUFFN0YsTUFBTSxPQUFPLFdBQVcsR0FBNkIsT0FBTyxDQUFDLGFBQWEsRUFBRTtJQUMxRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztRQUNwQixPQUFPLEVBQVUsQ0FBQztRQUNsQixTQUFTLEVBQVEsV0FBVztRQUM1QixlQUFlLEVBQUUsT0FBTztLQUN6QixDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUNqQixPQUFPLEVBQVUsQ0FBQztRQUNsQixTQUFTLEVBQVEsV0FBVztRQUM1QixlQUFlLEVBQUUsU0FBUztLQUMzQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7UUFDM0IsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFVLENBQUM7WUFDbEIsU0FBUyxFQUFRLGFBQWE7WUFDOUIsZUFBZSxFQUFFLE9BQU87U0FDekIsQ0FBQztRQUNGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztLQUNqQyxDQUFDO0lBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7WUFDdEMsT0FBTyxFQUFVLENBQUM7WUFDbEIsU0FBUyxFQUFRLGFBQWE7WUFDOUIsZUFBZSxFQUFFLE9BQU87U0FDekIsQ0FBQyxDQUFDO0tBQ0osQ0FBQztJQUNGLFVBQVUsQ0FBQyxhQUFhLEVBQUU7UUFDeEIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFVLENBQUM7WUFDbEIsU0FBUyxFQUFRLGFBQWE7WUFDOUIsZUFBZSxFQUFFLFNBQVM7U0FDM0IsQ0FBQztRQUNGLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztLQUNqQyxDQUFDO0lBQ0YsVUFBVSxDQUFDLGFBQWEsRUFBRTtRQUN4QixPQUFPLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxhQUFhO1lBQzlCLGVBQWUsRUFBRSxTQUFTO1NBQzNCLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSCxDQUFDOztBQUVGLE1BQU0sT0FBTyxnQkFBZ0IsR0FBNkIsT0FBTyxDQUFDLGtCQUFrQixFQUFFO0lBQ3BGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQzdFLE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxPQUFPO1NBQ3pCLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZXMsIEFuaW1hdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24nO1xuXG5jb25zdCBBTklNQVRJT05fVFJBTlNJVElPTl9JTiA9IGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfT1VUX1FVSU5UfWA7XG5jb25zdCBBTklNQVRJT05fVFJBTlNJVElPTl9PVVQgPSBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX1FVSU5UfWA7XG5cbmV4cG9ydCBjb25zdCBzbGlkZU1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGVNb3Rpb24nLCBbXG4gIHN0YXRlKCdib3R0b20nLCBzdHlsZSh7XG4gICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gIH0pKSxcbiAgc3RhdGUoJ3RvcCcsIHN0eWxlKHtcbiAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICB9KSksXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYm90dG9tJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgIH0pLFxuICAgIGFuaW1hdGUoQU5JTUFUSU9OX1RSQU5TSVRJT05fSU4pXG4gIF0pLFxuICB0cmFuc2l0aW9uKCdib3R0b20gPT4gdm9pZCcsIFtcbiAgICBhbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX09VVCwgc3R5bGUoe1xuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgfSkpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCd2b2lkID0+IHRvcCcsIFtcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgIH0pLFxuICAgIGFuaW1hdGUoQU5JTUFUSU9OX1RSQU5TSVRJT05fSU4pXG4gIF0pLFxuICB0cmFuc2l0aW9uKCd0b3AgPT4gdm9pZCcsIFtcbiAgICBhbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX09VVCwgc3R5bGUoe1xuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICB9KSlcbiAgXSlcbl0pO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVBbGVydE1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGVBbGVydE1vdGlvbicsIFtcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnIH0pLFxuICAgIGFuaW1hdGUoYCR7QW5pbWF0aW9uRHVyYXRpb24uU0xPV30gJHtBbmltYXRpb25DdXJ2ZXMuRUFTRV9JTl9PVVRfQ0lSQ31gLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgfSkpXG4gIF0pXG5dKTtcbiJdfQ==