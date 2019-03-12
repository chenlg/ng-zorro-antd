/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
export function scrollIntoView(node) {
    // Non-standard
    /* tslint:disable-next-line:no-string-literal */
    if (node['scrollIntoViewIfNeeded']) {
        /* tslint:disable-next-line:no-string-literal */
        node['scrollIntoViewIfNeeded'](false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFpQjtJQUU5QyxlQUFlO0lBQ2YsZ0RBQWdEO0lBQ2hELElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7UUFDbEMsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE9BQU87S0FDUjtJQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU87S0FDUjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcobm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblxuICAvLyBOb24tc3RhbmRhcmRcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gIGlmIChub2RlWydzY3JvbGxJbnRvVmlld0lmTmVlZGVkJ10pIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICBub2RlWydzY3JvbGxJbnRvVmlld0lmTmVlZGVkJ10oZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChub2RlLnNjcm9sbEludG9WaWV3KSB7XG4gICAgbm9kZS5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=