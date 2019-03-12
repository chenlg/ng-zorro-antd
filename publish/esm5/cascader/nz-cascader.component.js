/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, HostListener, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion } from '../core/animation/slide';
import { NzNoAnimationDirective } from '../core/no-animation/nz-no-animation.directive';
import { DEFAULT_CASCADER_POSITIONS } from '../core/overlay/overlay-position';
import { arraysEqual, toArray } from '../core/util/array';
import { InputBoolean } from '../core/util/convert';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
/** @type {?} */
var defaultDisplayRender = (/**
 * @param {?} label
 * @return {?}
 */
function (label) { return label.join(' / '); });
var ɵ0 = defaultDisplayRender;
var NzCascaderComponent = /** @class */ (function () {
    function NzCascaderComponent(elementRef, cdr, renderer, noAnimation) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelProperty = 'label';
        this.nzSize = 'default';
        this.nzPlaceHolder = 'Please select';
        this.nzMouseEnterDelay = 150; // ms
        // ms
        this.nzMouseLeaveDelay = 150; // ms
        // ms
        this.nzTriggerAction = (/** @type {?} */ (['click']));
        this.nzSelectionChange = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzClear = new EventEmitter();
        this.nzVisibleChange = new EventEmitter(); // Not exposed, only for test
        // Not exposed, only for test
        this.nzChange = new EventEmitter(); // Not exposed, only for test
        // Not exposed, only for test
        this.el = this.elementRef.nativeElement;
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.columns = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = tslib_1.__spread(DEFAULT_CASCADER_POSITIONS);
        this.isSearching = false;
        this.isFocused = false;
        this.isOpening = false;
        this.selectedOptions = [];
        this.activatedOptions = [];
        this._inputValue = '';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.columns[0];
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
            if (!this.isSearching) {
                if (this.defaultValue && this.columns.length) {
                    this.initOptions(0);
                }
            }
            else {
                this.prepareSearchValue();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inputValue;
        },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this._inputValue = inputValue;
            this.toggleSearchMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {},
                _a["" + this.nzMenuClassName] = !!this.nzMenuClassName,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {},
                _a["" + this.nzColumnClassName] = !!this.nzColumnClassName,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    //#region Menu
    //#region Menu
    /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetMenuVisible = 
    //#region Menu
    /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setMenuVisible(visible);
                _this.cdr.detectChanges();
                _this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isOpening = false;
                    }), 100);
                }
            }), delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        if (this.nzDisabled) {
            return;
        }
        if (this.menuVisible !== visible) {
            this.menuVisible = visible;
            this.cdr.detectChanges();
            if (visible) {
                this.loadRootOptions();
            }
            this.nzVisibleChange.emit(visible);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelayMenuTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.loadRootOptions = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.columns.length) {
            /** @type {?} */
            var root = {};
            this.loadChildrenAsync(root, -1);
        }
    };
    //#endregion
    //#region Init
    //#endregion
    //#region Init
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isLoaded = 
    //#endregion
    //#region Init
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * @private
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.findOption = /**
     * @private
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        var _this = this;
        /** @type {?} */
        var options = this.columns[index];
        if (options) {
            /** @type {?} */
            var value_1 = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return value_1 === _this.getOptionValue(o); }));
        }
        return null;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.activateOnInit = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function (index, value) {
        var _a;
        /** @type {?} */
        var option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : (_a = {},
                _a["" + this.nzValueProperty] = value,
                _a["" + this.nzLabelProperty] = value,
                _a);
        }
        this.setOptionActivated(option, index, false, false);
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.initOptions = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var vs = this.defaultValue;
        /** @type {?} */
        var lastIndex = vs.length - 1;
        /** @type {?} */
        var load = (/**
         * @return {?}
         */
        function () {
            _this.activateOnInit(index, vs[index]);
            if (index < lastIndex) {
                _this.initOptions(index + 1);
            }
            if (index === lastIndex) {
                _this.afterWriteValue();
            }
        });
        if (this.isLoaded(index) || !this.nzLoadData) {
            load();
        }
        else {
            /** @type {?} */
            var node = this.activatedOptions[index - 1] || {};
            this.loadChildrenAsync(node, index - 1, load, this.afterWriteValue);
        }
    };
    //#endregion
    //#region Mutating data
    //#endregion
    //#region Mutating data
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    NzCascaderComponent.prototype.setOptionActivated = 
    //#endregion
    //#region Mutating data
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    function (option, columnIndex, select, loadChildren) {
        if (select === void 0) { select = false; }
        if (loadChildren === void 0) { loadChildren = true; }
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        // Set parent option and all ancestor options as active.
        for (var i = columnIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
        // Set child options and all success options as inactive.
        if (columnIndex < this.activatedOptions.length - 1) {
            this.activatedOptions = this.activatedOptions.slice(0, columnIndex + 1);
        }
        // Load child options.
        if (option.children && option.children.length && !option.isLeaf) {
            option.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) { return child.parent = option; }));
            this.setColumnData(option.children, columnIndex + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildrenAsync(option, columnIndex);
        }
        if (select) {
            this.setOptionSelected(option, columnIndex);
        }
        this.cdr.detectChanges();
        this.reposition();
    };
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderComponent.prototype.loadChildrenAsync = /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, columnIndex, success, failure) {
        var _this = this;
        if (this.nzLoadData) {
            this.isLoading = columnIndex < 0;
            option.loading = true;
            this.nzLoadData(option, columnIndex).then((/**
             * @return {?}
             */
            function () {
                if (option.children) {
                    option.children.forEach((/**
                     * @param {?} child
                     * @return {?}
                     */
                    function (child) { return child.parent = columnIndex < 0 ? undefined : option; }));
                    _this.setColumnData(option.children, columnIndex + 1);
                }
                if (success) {
                    success();
                }
                option.loading = _this.isLoading = false; // Need to check children.
                _this.checkChildren();
                // Reposition in the next tick, because we use markForCheck above.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.reposition(); }));
            }), (/**
             * @return {?}
             */
            function () {
                option.loading = _this.isLoading = false;
                option.isLeaf = true;
                _this.cdr.detectChanges();
                if (failure) {
                    failure();
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    NzCascaderComponent.prototype.setOptionSelected = /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    function (option, columnIndex) {
        var _this = this;
        /** @type {?} */
        var shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        function (o, i) {
            return typeof _this.nzChangeOn === 'function' ? _this.nzChangeOn(o, i) === true : false;
        });
        this.nzSelect.emit({ option: option, index: columnIndex });
        if (option.isLeaf || this.nzChangeOnSelect || shouldPerformSelection(option, columnIndex)) {
            this.selectedOptions = this.activatedOptions;
            this.buildDisplayLabel();
            this.onValueChange();
        }
        if (option.isLeaf) {
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @private
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    NzCascaderComponent.prototype.setColumnData = /**
     * @private
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    function (options, columnIndex) {
        if (!arraysEqual(this.columns[columnIndex], options)) {
            this.columns[columnIndex] = options;
            if (columnIndex < this.columns.length - 1) {
                this.columns = this.columns.slice(0, columnIndex + 1);
            }
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NzCascaderComponent.prototype.clearSelection = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.inputValue = '';
        this.setMenuVisible(false);
        this.onValueChange();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.getSubmitValue = 
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var values = [];
        this.selectedOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            values.push(_this.getOptionValue(option));
        }));
        return values;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.onValueChange = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getSubmitValue();
        if (!arraysEqual(this.value, value)) {
            this.defaultValue = null;
            this.value = value;
            this.onChange(value);
            if (value.length === 0) {
                this.nzClear.emit();
            }
            this.nzSelectionChange.emit(this.selectedOptions);
            this.nzChange.emit(value);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.afterWriteValue = /**
     * @return {?}
     */
    function () {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    };
    //#endregion
    //#region Mouse and keyboard event handles, view children
    //#endregion
    //#region Mouse and keyboard event handles, view children
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.focus = 
    //#endregion
    //#region Mouse and keyboard event handles, view children
    /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputBlur = /**
     * @return {?}
     */
    function () {
        this.menuVisible ? this.focus() : this.blur();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputFocus = /**
     * @return {?}
     */
    function () {
        this.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.isSearching && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === UP_ARROW) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerClick = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled) {
            return;
        }
        if (this.isActionTrigger('hover')) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.menuVisible || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isActionTrigger('hover')) {
            /** @type {?} */
            var mouseTarget = (/** @type {?} */ (event.relatedTarget));
            /** @type {?} */
            var hostEl = this.el;
            /** @type {?} */
            var menuEl = this.menu && (/** @type {?} */ (this.menu.nativeElement));
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    NzCascaderComponent.prototype.isActionTrigger = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.isSearching
            ? this.setSearchOptionActivated((/** @type {?} */ (option)), event)
            : this.setOptionActivated(option, columnIndex, true);
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.onEnter = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var option = this.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.isSearching
                ? this.setSearchOptionActivated((/** @type {?} */ (option)), null)
                : this.setOptionSelected(option, columnIndex);
        }
    };
    /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUpOrDown = /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.columns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
        if (!activeOption) { // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setOptionActivated(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveLeft = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveRight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.activatedOptions.length;
        /** @type {?} */
        var options = this.columns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return !o.disabled; }));
            if (nextOpt) {
                this.setOptionActivated(nextOpt, length);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseEnter = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, true);
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseLeave = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, false);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @private
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySelectOption = /**
     * @private
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    function (option, index, doSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setOptionActivated(option, index);
                _this.delaySelectTimer = null;
            }), 150);
        }
    };
    //#endregion
    //#region Search
    //#endregion
    //#region Search
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.toggleSearchMode = 
    //#endregion
    //#region Search
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var willBeInSearch = !!this._inputValue;
        // Take a snapshot before entering search mode.
        if (!this.isSearching && willBeInSearch) {
            this.isSearching = true;
            this.activatedOptionsSnapshot = this.activatedOptions;
            this.activatedOptions = [];
            this.labelRenderText = '';
            if (this.input) {
                /** @type {?} */
                var width = this.input.nativeElement.offsetWidth;
                this.dropdownWidthStyle = width + "px";
            }
        }
        // Restore the snapshot after leaving search mode.
        if (this.isSearching && !willBeInSearch) {
            this.isSearching = false;
            this.activatedOptions = this.activatedOptionsSnapshot;
            this.columns = this.columnsSnapshot;
            this.dropdownWidthStyle = '';
            if (this.activatedOptions) {
                this.buildDisplayLabel();
            }
        }
        if (this.isSearching) {
            this.prepareSearchValue();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.prepareSearchValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var results = [];
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = (/**
         * @param {?} inputValue
         * @param {?} p
         * @return {?}
         */
        function (inputValue, p) {
            return p.some((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                /** @type {?} */
                var label = _this.getOptionLabel(n);
                return label && label.indexOf(inputValue) !== -1;
            }));
        });
        /** @type {?} */
        var filter = this.nzShowSearch instanceof Object && ((/** @type {?} */ (this.nzShowSearch))).filter
            ? ((/** @type {?} */ (this.nzShowSearch))).filter
            : defaultFilter;
        /** @type {?} */
        var sorter = this.nzShowSearch instanceof Object && ((/** @type {?} */ (this.nzShowSearch))).sorter;
        /** @type {?} */
        var loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                } // Build parent reference when doing searching
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            }));
            path.pop();
        });
        /** @type {?} */
        var loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            var _a;
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(_this._inputValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.nzLabelProperty] = cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return _this.getOptionLabel(p); })).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        });
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return (node.isLeaf || !node.children || !node.children.length)
            ? loopChild(node)
            : loopParent(node); }));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return sorter(a.path, b.path, _this._inputValue); }));
        }
        this.columns = [results];
    };
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.setSearchOptionActivated = /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    function (result, event) {
        var _this = this;
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.inputValue = '';
            /** @type {?} */
            var index = result.path.length - 1;
            /** @type {?} */
            var destinationNode = result.path[index];
            // NOTE: optimize this.
            /** @type {?} */
            var mockClickParent = (/**
             * @param {?} node
             * @param {?} columnIndex
             * @return {?}
             */
            function (node, columnIndex) {
                if (node && node.parent) {
                    mockClickParent(node.parent, columnIndex - 1);
                }
                _this.onOptionClick(node, columnIndex, event);
            });
            mockClickParent(destinationNode, index);
        }), 300);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
        //#endregion
        //#region Helpers
        get: 
        //#endregion
        //#region Helpers
        /**
         * @private
         * @return {?}
         */
        function () {
            return !!this.inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !!this.value && !!this.value.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.hasInput || this.hasValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.nzLabelRender;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionLabel = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzLabelProperty || 'label'];
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzValueProperty || 'value'];
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isOptionActivated = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.buildDisplayLabel = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.getOptionLabel(o); }));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
        // When components inits with default value, this would make display label appear correctly.
        this.cdr.detectChanges();
    };
    //#endregion
    //#endregion
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCascaderComponent.prototype.setDisabledState = 
    //#endregion
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.writeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the browser boundary.
     */
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the browser boundary.
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.reposition = /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the browser boundary.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.overlay.overlayRef.updatePosition();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.checkChildren = /**
     * @private
     * @return {?}
     */
    function () {
        this.cascaderItems.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.markForCheck(); }));
    };
    NzCascaderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-cascader,[nz-cascader]',
                    preserveWhitespaces: false,
                    template: "<div\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  #trigger>\n  <div *ngIf=\"nzShowInput\">\n    <input\n      #input\n      nz-input\n      class=\"ant-cascader-input\"\n      [class.ant-cascader-input-disabled]=\"nzDisabled\"\n      [class.ant-cascader-input-lg]=\"nzSize === 'large'\"\n      [class.ant-cascader-input-sm]=\"nzSize === 'small'\"\n      [attr.autoComplete]=\"'off'\"\n      [attr.placeholder]=\"showPlaceholder ? nzPlaceHolder : null\"\n      [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n      [readonly]=\"!nzShowSearch\"\n      [disabled]=\"nzDisabled\"\n      [nzSize]=\"nzSize\"\n      [(ngModel)]=\"inputValue\"\n      (blur)=\"handleInputBlur()\"\n      (focus)=\"handleInputFocus()\"\n      (change)=\"$event.stopPropagation()\">\n    <i *ngIf=\"clearIconVisible\"\n       nz-icon\n       type=\"close-circle\"\n       theme=\"fill\"\n       class=\"ant-cascader-picker-clear\"\n       (click)=\"clearSelection($event)\"></i>\n    <i *ngIf=\"nzShowArrow && !isLoading\"\n       nz-icon\n       type=\"down\"\n       class=\"ant-cascader-picker-arrow\"\n       [class.ant-cascader-picker-arrow-expand]=\"menuVisible\">\n    </i>\n    <i *ngIf=\"isLoading\" nz-icon type=\"loading\" class=\"ant-cascader-picker-arrow\"></i>\n    <span\n      class=\"ant-cascader-picker-label\"\n      [class.ant-cascader-show-search]=\"!!nzShowSearch\"\n      [class.ant-focusd]=\"!!nzShowSearch && isFocused && !inputValue\">\n      <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\n      </ng-template>\n    </span>\n  </div>\n  <ng-content></ng-content>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  (backdropClick)=\"closeMenu()\"\n  (detach)=\"closeMenu()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\n  <div\n    #menu\n    class=\"ant-cascader-menus\"\n    *ngIf=\"nzOptions && nzOptions.length || isSearching\"\n    [class.ant-cascader-menus-hidden]=\"!menuVisible\"\n    [ngClass]=\"menuCls\"\n    [ngStyle]=\"nzMenuStyle\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@slideMotion]=\"dropDownPosition\"\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\n    <ul *ngFor=\"let options of columns; let i = index;\" class=\"ant-cascader-menu\"\n        [ngClass]=\"menuColumnCls\"\n        [style.height]=\"isSearching && !columns[0].length ? 'auto': ''\"\n        [style.width]=\"dropdownWidthStyle\">\n      <li\n        nz-cascader-option\n        *ngFor=\"let option of options\"\n        [nzLabelProperty]=\"nzLabelProperty\"\n        [activated]=\"isOptionActivated(option, i)\"\n        [highlightText]=\"isSearching ? inputValue : ''\"\n        [option]=\"option\"\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\n        (click)=\"onOptionClick(option, i, $event)\">\n      </li>\n      <li *ngIf=\"isSearching && !columns[0].length\"\n          class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\n        <nz-embed-empty [nzComponentName]=\"'cascader'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n",
                    animations: [slideMotion],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCascaderComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"',
                        '[class.ant-cascader-lg]': 'nzSize === "large"',
                        '[class.ant-cascader-sm]': 'nzSize === "small"',
                        '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                        '[class.ant-cascader-picker-open]': 'menuVisible',
                        '[class.ant-cascader-picker-with-value]': '!!inputValue',
                        '[class.ant-cascader-focused]': 'isFocused'
                    },
                    styles: ["\n    .ant-cascader-menus {\n      margin-top: 4px;\n      margin-bottom: 4px;\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzCascaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzCascaderComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input',] }],
        menu: [{ type: ViewChild, args: ['menu',] }],
        overlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        cascaderItems: [{ type: ViewChildren, args: [NzCascaderOptionComponent,] }],
        nzShowInput: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzChangeOnSelect: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzColumnClassName: [{ type: Input }],
        nzExpandTrigger: [{ type: Input }],
        nzValueProperty: [{ type: Input }],
        nzLabelRender: [{ type: Input }],
        nzLabelProperty: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzMenuClassName: [{ type: Input }],
        nzMenuStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzTriggerAction: [{ type: Input }],
        nzChangeOn: [{ type: Input }],
        nzLoadData: [{ type: Input }],
        nzOptions: [{ type: Input }],
        nzSelectionChange: [{ type: Output }],
        nzSelect: [{ type: Output }],
        nzClear: [{ type: Output }],
        nzVisibleChange: [{ type: Output }],
        nzChange: [{ type: Output }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onTriggerClick: [{ type: HostListener, args: ['click',] }],
        onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
        onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowInput", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowArrow", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzDisabled", void 0);
    return NzCascaderComponent;
}());
export { NzCascaderComponent };
if (false) {
    /** @type {?} */
    NzCascaderComponent.prototype.input;
    /** @type {?} */
    NzCascaderComponent.prototype.menu;
    /** @type {?} */
    NzCascaderComponent.prototype.overlay;
    /** @type {?} */
    NzCascaderComponent.prototype.cascaderItems;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowInput;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOnSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCascaderComponent.prototype.nzColumnClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzExpandTrigger;
    /** @type {?} */
    NzCascaderComponent.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelRender;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSize;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzTriggerAction;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOn;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLoadData;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelectionChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChange;
    /** @type {?} */
    NzCascaderComponent.prototype.el;
    /** @type {?} */
    NzCascaderComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzCascaderComponent.prototype.menuVisible;
    /** @type {?} */
    NzCascaderComponent.prototype.isLoading;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderText;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderContext;
    /** @type {?} */
    NzCascaderComponent.prototype.columns;
    /** @type {?} */
    NzCascaderComponent.prototype.onChange;
    /** @type {?} */
    NzCascaderComponent.prototype.onTouched;
    /** @type {?} */
    NzCascaderComponent.prototype.positions;
    /** @type {?} */
    NzCascaderComponent.prototype.dropdownWidthStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.isSearching;
    /** @type {?} */
    NzCascaderComponent.prototype.isFocused;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.isOpening;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.defaultValue;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.selectedOptions;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.activatedOptions;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.columnsSnapshot;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.activatedOptionsSnapshot;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.delayMenuTimer;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.delaySelectTimer;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype._inputValue;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzCascaderComponent.prototype.cdr;
    /** @type {?} */
    NzCascaderComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7SUFXakUsb0JBQW9COzs7O0FBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFBOztBQUV2RDtJQTB3QkUsNkJBQW9CLFVBQXNCLEVBQVUsR0FBc0IsRUFBRSxRQUFtQixFQUN4RCxXQUFvQztRQUR2RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBbnVCbEQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkMsb0JBQWUsR0FBNEIsT0FBTyxDQUFDO1FBQ25ELG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBRTFCLG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBRTFCLFdBQU0sR0FBbUIsU0FBUyxDQUFDO1FBRW5DLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBR2hDLHNCQUFpQixHQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O1FBQ3RDLHNCQUFpQixHQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O1FBQ3RDLG9CQUFlLEdBQW9ELG1CQUFBLENBQUUsT0FBTyxDQUFFLEVBQTJCLENBQUM7UUFzQmhHLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQ3pELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBNkMsQ0FBQztRQUN6RSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUMsQ0FBQyw2QkFBNkI7O1FBQzVFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsNkJBQTZCOztRQUUvRSxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELHFCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUM1QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQXVCLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5QixjQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUMvQixjQUFTLG9CQUFrQywwQkFBMEIsRUFBRztRQUV4RSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRVYsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdsQixvQkFBZSxHQUFxQixFQUFFLENBQUM7UUFDdkMscUJBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQWV4QyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQW9wQnZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBN3NCRCxzQkFDSSwwQ0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzNCLENBQUM7Ozs7O1FBRUQsVUFBYyxPQUFnQztZQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO29CQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7O09BWEE7SUEyQ0Qsc0JBQUksMkNBQVU7Ozs7UUFLZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQVBELFVBQWUsVUFBa0I7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSx3Q0FBTzs7OztRQUFYOztZQUNFO2dCQUNFLEdBQUUsS0FBRyxJQUFJLENBQUMsZUFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7bUJBQ3JEO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBYTs7OztRQUFqQjs7WUFDRTtnQkFDRSxHQUFFLEtBQUcsSUFBSSxDQUFDLGlCQUFtQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO21CQUN6RDtRQUNKLENBQUM7OztPQUFBO0lBRUQsY0FBYzs7Ozs7Ozs7SUFFZCxpREFBbUI7Ozs7Ozs7O0lBQW5CLFVBQW9CLE9BQWdCLEVBQUUsS0FBYSxFQUFFLFVBQTJCO1FBQWhGLGlCQW1CQztRQW5Cb0QsMkJBQUEsRUFBQSxrQkFBMkI7UUFDOUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVOzs7WUFBQztnQkFDL0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLElBQUksT0FBTyxFQUFFO29CQUNYLFVBQVU7OztvQkFBQzt3QkFDVCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNUO1lBQ0gsQ0FBQyxHQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ1g7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLE9BQU8sRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pCLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpREFBbUI7Ozs7SUFBM0I7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRU8sNkNBQWU7Ozs7SUFBdkI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7O2dCQUNsQixJQUFJLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxZQUFZO0lBRVosY0FBYzs7Ozs7Ozs7SUFFTixzQ0FBUTs7Ozs7Ozs7SUFBaEIsVUFBaUIsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUUsS0FBSyxDQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRSxLQUFLLENBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7Ozs7SUFFTyx3Q0FBVTs7Ozs7O0lBQWxCLFVBQW1CLE1BQXNCLEVBQUUsS0FBYTtRQUF4RCxpQkFPQzs7WUFOTyxPQUFPLEdBQXFCLElBQUksQ0FBQyxPQUFPLENBQUUsS0FBSyxDQUFFO1FBQ3ZELElBQUksT0FBTyxFQUFFOztnQkFDTCxPQUFLLEdBQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQy9FLE9BQU8sT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQUssS0FBSyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDLENBQUM7U0FDNUQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQ0FBa0M7Ozs7Ozs7O0lBQzFCLDRDQUFjOzs7Ozs7OztJQUF0QixVQUF1QixLQUFhLEVBQUUsS0FBVTs7O1lBQzFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxHQUFFLEtBQUcsSUFBSSxDQUFDLGVBQWlCLElBQUksS0FBSztnQkFDcEMsR0FBRSxLQUFHLElBQUksQ0FBQyxlQUFpQixJQUFJLEtBQUs7bUJBQ3JDLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyx5Q0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBYTtRQUFqQyxpQkFvQkM7O1lBbkJPLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWTs7WUFDdEIsU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7WUFFekIsSUFBSTs7O1FBQUc7WUFDWCxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUUsS0FBSyxDQUFFLENBQUMsQ0FBQztZQUN4QyxJQUFJLEtBQUssR0FBRyxTQUFTLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN2QixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUE7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzVDLElBQUksRUFBRSxDQUFDO1NBQ1I7YUFBTTs7Z0JBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxLQUFLLEdBQUcsQ0FBQyxDQUFFLElBQUksRUFBRTtZQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRCxZQUFZO0lBRVosdUJBQXVCOzs7Ozs7Ozs7OztJQUVmLGdEQUFrQjs7Ozs7Ozs7Ozs7SUFBMUIsVUFBMkIsTUFBc0IsRUFBRSxXQUFtQixFQUFFLE1BQXVCLEVBQUUsWUFBNEI7UUFBckQsdUJBQUEsRUFBQSxjQUF1QjtRQUFFLDZCQUFBLEVBQUEsbUJBQTRCO1FBQzNILElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM5QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUUsV0FBVyxDQUFFLEdBQUcsTUFBTSxDQUFDO1FBRTlDLHdEQUF3RDtRQUN4RCxLQUFLLElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFFLENBQUMsQ0FBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxNQUFNLENBQUM7YUFDcEU7U0FDRjtRQUVELHlEQUF5RDtRQUN6RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDL0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBckIsQ0FBcUIsRUFBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7OztJQUVPLCtDQUFpQjs7Ozs7Ozs7SUFBekIsVUFBMEIsTUFBc0IsRUFBRSxXQUFtQixFQUFFLE9BQW9CLEVBQUUsT0FBb0I7UUFBakgsaUJBeUJDO1FBeEJDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSTs7O1lBQUM7Z0JBQ3hDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBbkQsQ0FBbUQsRUFBQyxDQUFDO29CQUN0RixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQztpQkFDWDtnQkFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsMEJBQTBCO2dCQUNuRSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLGtFQUFrRTtnQkFDbEUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixFQUFDLENBQUM7WUFDbEQsQ0FBQzs7O1lBQUU7Z0JBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDO2lCQUNYO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7Ozs7SUFFTywrQ0FBaUI7Ozs7OztJQUF6QixVQUEwQixNQUFzQixFQUFFLFdBQW1CO1FBQXJFLGlCQWdCQzs7WUFmTyxzQkFBc0I7Ozs7O1FBQUcsVUFBQyxDQUFpQixFQUFFLENBQVM7WUFDMUQsT0FBTyxPQUFPLEtBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN4RixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksc0JBQXNCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQ3pGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzdDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLDJDQUFhOzs7Ozs7SUFBckIsVUFBc0IsT0FBeUIsRUFBRSxXQUFtQjtRQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsV0FBVyxDQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxXQUFXLENBQUUsR0FBRyxPQUFPLENBQUM7WUFDdEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrQ0FBa0M7Ozs7O0lBQ2xDLDRDQUFjOzs7OztJQUFkO1FBQUEsaUJBTUM7O1lBTE8sTUFBTSxHQUFHLEVBQUU7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTywyQ0FBYTs7OztJQUFyQjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFlBQVk7SUFFWix5REFBeUQ7Ozs7OztJQUV6RCxtQ0FBSzs7Ozs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsOENBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUdELHVDQUFTOzs7O0lBRFQsVUFDVSxLQUFvQjs7WUFDdEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO1FBRTdCLElBQUksT0FBTyxLQUFLLFVBQVU7WUFDeEIsT0FBTyxLQUFLLFFBQVE7WUFDcEIsT0FBTyxLQUFLLFVBQVU7WUFDdEIsT0FBTyxLQUFLLFdBQVc7WUFDdkIsT0FBTyxLQUFLLEtBQUs7WUFDakIsT0FBTyxLQUFLLFNBQVM7WUFDckIsT0FBTyxLQUFLLE1BQU0sRUFDbEI7WUFDQSxPQUFPO1NBQ1I7UUFFRCx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3BFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztRQUVELHFEQUFxRDtRQUNyRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxVQUFVLElBQUksT0FBTyxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQ3BHLE9BQU87U0FDUjtRQUVELCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekI7aUJBQU0sSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU0sSUFBSSxPQUFPLEtBQUssV0FBVyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7aUJBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7U0FDRjtJQUNILENBQUM7Ozs7SUFHRCw0Q0FBYzs7O0lBRGQ7UUFFRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUdELGlEQUFtQjs7O0lBRG5CO1FBRUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7Ozs7O0lBR0QsaURBQW1COzs7O0lBRG5CLFVBQ29CLEtBQWlCO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7O2dCQUMzQixXQUFXLEdBQUcsbUJBQUEsS0FBSyxDQUFDLGFBQWEsRUFBZTs7Z0JBQ2hELE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRTs7Z0JBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFlO1lBQ2xFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVFLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyw2Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsTUFBeUI7UUFDL0MsT0FBTyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUTtZQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxNQUFNO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7O0lBRUQsMkNBQWE7Ozs7OztJQUFiLFVBQWMsTUFBc0IsRUFBRSxXQUFtQixFQUFFLEtBQVk7UUFDckUsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzdCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVc7WUFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLG1CQUFBLE1BQU0sRUFBd0IsRUFBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRU8scUNBQU87Ozs7SUFBZjs7WUFDUSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBQzNELE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsV0FBVyxDQUFFO1FBQ25ELElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLG1CQUFBLE1BQU0sRUFBd0IsRUFBRSxJQUFJLENBQUM7Z0JBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMENBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQWE7O1lBQzFCLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7WUFDM0QsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxXQUFXLENBQUU7O1lBQ25ELE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFFLFdBQVcsQ0FBRSxJQUFJLEVBQUU7O1lBQzNDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTs7WUFDekIsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsc0NBQXNDO1lBQ3pELFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNMLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNDO1FBRUQsT0FBTyxJQUFJLEVBQUU7WUFDWCxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxTQUFTLElBQUksTUFBTSxFQUFFO2dCQUN4QyxNQUFNO2FBQ1A7O2dCQUNLLFVBQVUsR0FBRyxPQUFPLENBQUUsU0FBUyxDQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDdEMsU0FBUzthQUNWO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNqRCxNQUFNO1NBQ1A7SUFDSCxDQUFDOzs7OztJQUVPLHNDQUFROzs7O0lBQWhCOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1FBQ3JDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7U0FDdEM7SUFDSCxDQUFDOzs7OztJQUVPLHVDQUFTOzs7O0lBQWpCOztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTTs7WUFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsTUFBTSxDQUFFO1FBQ3RDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7O2dCQUN2QixPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBWCxDQUFXLEVBQUM7WUFDOUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELGdEQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLE1BQXNCLEVBQUUsV0FBbUIsRUFBRSxLQUFZO1FBQzFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7Ozs7SUFFRCxnREFBa0I7Ozs7OztJQUFsQixVQUFtQixNQUFzQixFQUFFLFdBQW1CLEVBQUUsS0FBWTtRQUMxRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQUVPLG1EQUFxQjs7OztJQUE3QjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTywrQ0FBaUI7Ozs7Ozs7SUFBekIsVUFBMEIsTUFBc0IsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFBbEYsaUJBUUM7UUFQQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVOzs7WUFBQztnQkFDakMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxZQUFZO0lBRVosZ0JBQWdCOzs7Ozs7O0lBRVIsOENBQWdCOzs7Ozs7O0lBQXhCOztZQUNRLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7UUFFekMsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLGNBQWMsRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFFMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztvQkFDUixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVztnQkFDbEQsSUFBSSxDQUFDLGtCQUFrQixHQUFNLEtBQUssT0FBSSxDQUFDO2FBQ3hDO1NBQ0Y7UUFFRCxrREFBa0Q7UUFDbEQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVPLGdEQUFrQjs7OztJQUExQjtRQUFBLGlCQWdFQzs7WUEvRE8sT0FBTyxHQUEyQixFQUFFOztZQUNwQyxJQUFJLEdBQXFCLEVBQUU7O1lBRTNCLGFBQWE7Ozs7O1FBQUcsVUFBQyxVQUFrQixFQUFFLENBQW1CO1lBQzVELE9BQU8sQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUM7O29CQUNQLEtBQUssR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQTs7WUFFSyxNQUFNLEdBQ1YsSUFBSSxDQUFDLFlBQVksWUFBWSxNQUFNLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxFQUF1QixDQUFDLENBQUMsTUFBTTtZQUN0RixDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxFQUF1QixDQUFDLENBQUMsTUFBTTtZQUNuRCxDQUFDLENBQUMsYUFBYTs7WUFFYixNQUFNLEdBQ1YsSUFBSSxDQUFDLFlBQVksWUFBWSxNQUFNLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsWUFBWSxFQUF1QixDQUFDLENBQUMsTUFBTTs7WUFFcEYsVUFBVTs7Ozs7UUFBRyxVQUFDLElBQW9CLEVBQUUsYUFBcUI7WUFBckIsOEJBQUEsRUFBQSxxQkFBcUI7O2dCQUN2RCxRQUFRLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDakIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ3JCLENBQUMsOENBQThDO2dCQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDakIsVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUM3RCxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUM1QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFBOztZQUVLLFNBQVM7Ozs7O1FBQUcsVUFBQyxJQUFvQixFQUFFLGFBQXFCO1lBQXJCLDhCQUFBLEVBQUEscUJBQXFCOztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFDVixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRTs7b0JBQzdCLFFBQVEsR0FBRyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVE7O29CQUN6QyxNQUFNO3dCQUNWLFFBQVEsVUFBQTt3QkFDUixNQUFNLEVBQW9CLElBQUk7d0JBQzlCLElBQUksRUFBc0IsS0FBSzs7b0JBQy9CLEdBQUUsS0FBSSxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsR0FBRzs7OztvQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3VCQUM3RTtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFBO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBRSxFQUFFLENBQUUsQ0FBQztZQUN0QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBRSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUZzQixDQUV0QixFQUFDLENBQUM7UUFDdEIsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVELHNEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsTUFBNEIsRUFBRSxLQUFZO1FBQW5FLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O2dCQUNmLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDOztnQkFDOUIsZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFOzs7Z0JBRXRDLGVBQWU7Ozs7O1lBQUcsVUFBQyxJQUFvQixFQUFFLFdBQW1CO2dCQUNoRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN2QixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2dCQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUE7WUFDRCxlQUFlLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFNRCxzQkFBWSx5Q0FBUTtRQUpwQixZQUFZO1FBRVosaUJBQWlCOzs7Ozs7OztRQUVqQjtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSx5Q0FBUTs7Ozs7UUFBcEI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzREFBcUI7Ozs7UUFBekI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsa0NBQWtDOzs7Ozs7SUFDbEMsNENBQWM7Ozs7OztJQUFkLFVBQWUsTUFBc0I7UUFDbkMsT0FBTyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsa0NBQWtDOzs7Ozs7SUFDbEMsNENBQWM7Ozs7OztJQUFkLFVBQWUsTUFBc0I7UUFDbkMsT0FBTyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUUsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7O0lBQWpCLFVBQWtCLE1BQXNCLEVBQUUsS0FBYTs7WUFDL0MsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxLQUFLLENBQUU7UUFDaEQsT0FBTyxTQUFTLEtBQUssTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU8sK0NBQWlCOzs7O0lBQXpCO1FBQUEsaUJBVUM7O1lBVE8sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlOztZQUN0QyxNQUFNLEdBQWEsZUFBZSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLEVBQUM7UUFDekUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsZUFBZSxpQkFBQSxFQUFFLENBQUM7U0FDdkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDakY7UUFDRCw0RkFBNEY7UUFDNUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWTs7Ozs7O0lBRVosOENBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsdUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBUUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELCtDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyx3Q0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFVOztZQUNiLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixRQUF3Qzs7WUFDakQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQ2hGLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0ssd0NBQVU7Ozs7OztJQUFsQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDL0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztZQUFDO2dCQUNyQixLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFTywyQ0FBYTs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBL3pCRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxRQUFRLEVBQWEsMkJBQTJCO29CQUNoRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixvL0dBQW1EO29CQUNuRCxVQUFVLEVBQVcsQ0FBRSxXQUFXLENBQUU7b0JBQ3BDLFNBQVMsRUFBWTt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7NEJBQ2xELEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtvQkFDRCxJQUFJLEVBQWlCO3dCQUNuQixpQkFBaUIsRUFBeUIsS0FBSzt3QkFDL0MseUJBQXlCLEVBQWlCLG9CQUFvQjt3QkFDOUQseUJBQXlCLEVBQWlCLG9CQUFvQjt3QkFDOUQsc0NBQXNDLEVBQUksWUFBWTt3QkFDdEQsa0NBQWtDLEVBQVEsYUFBYTt3QkFDdkQsd0NBQXdDLEVBQUUsY0FBYzt3QkFDeEQsOEJBQThCLEVBQVksV0FBVztxQkFDdEQ7NkJBQ3NCLDRLQVN0QjtpQkFDRjs7OztnQkFyRUMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBV2pCLFNBQVM7Z0JBU0Ysc0JBQXNCLHVCQTZ4QmhCLElBQUksWUFBSSxRQUFROzs7d0JBeHVCNUIsU0FBUyxTQUFDLE9BQU87dUJBQ2pCLFNBQVMsU0FBQyxNQUFNOzBCQUNoQixTQUFTLFNBQUMsbUJBQW1CO2dDQUM3QixZQUFZLFNBQUMseUJBQXlCOzhCQUV0QyxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsS0FBSztvQ0FDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSztrQ0FDTCxLQUFLOzhCQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLO2tDQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFHTCxLQUFLOzRCQUVMLEtBQUs7b0NBZ0JMLE1BQU07MkJBQ04sTUFBTTswQkFDTixNQUFNO2tDQUNOLE1BQU07MkJBQ04sTUFBTTs0QkE0VE4sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFFLFFBQVEsQ0FBRTtpQ0EwQ3BDLFlBQVksU0FBQyxPQUFPO3NDQWNwQixZQUFZLFNBQUMsWUFBWTtzQ0FVekIsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTs7SUEzYWY7UUFBZixZQUFZLEVBQUU7OzREQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7NERBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzs2REFBcUI7SUFDcEI7UUFBZixZQUFZLEVBQUU7OzREQUFxQjtJQUNwQjtRQUFmLFlBQVksRUFBRTs7aUVBQTBCO0lBQ3pCO1FBQWYsWUFBWSxFQUFFOzsyREFBb0I7SUFteEI5QywwQkFBQztDQUFBLEFBaDBCRCxJQWcwQkM7U0E5eEJZLG1CQUFtQjs7O0lBQzlCLG9DQUFzQzs7SUFDdEMsbUNBQW9DOztJQUNwQyxzQ0FBNkQ7O0lBQzdELDRDQUE2Rjs7SUFFN0YsMENBQTRDOztJQUM1QywwQ0FBNEM7O0lBQzVDLDJDQUE2Qzs7SUFDN0MsMENBQTZDOztJQUM3QywrQ0FBa0Q7O0lBQ2xELHlDQUE0Qzs7SUFDNUMsZ0RBQW1DOztJQUNuQyw4Q0FBNEQ7O0lBQzVELDhDQUFtQzs7SUFDbkMsNENBQTBDOztJQUMxQyw4Q0FBbUM7O0lBQ25DLGdEQUF1RDs7SUFDdkQscUNBQTRDOztJQUM1QywyQ0FBcUQ7O0lBQ3JELDRDQUF5Qzs7SUFDekMsOENBQWlDOztJQUNqQywwQ0FBbUQ7O0lBQ25ELGdEQUF5Qzs7SUFDekMsZ0RBQXlDOztJQUN6Qyw4Q0FBbUg7O0lBQ25ILHlDQUF3RTs7SUFHeEUseUNBQWdGOztJQWtCaEYsZ0RBQTRFOztJQUM1RSx1Q0FBNEY7O0lBQzVGLHNDQUFzRDs7SUFDdEQsOENBQWlFOztJQUNqRSx1Q0FBaUQ7O0lBRWpELGlDQUFnRDs7SUFDaEQsK0NBQTRCOztJQUM1QiwwQ0FBb0I7O0lBQ3BCLHdDQUFrQjs7SUFDbEIsOENBQXdCOztJQUN4QixpREFBd0I7O0lBQ3hCLHNDQUFpQzs7SUFDakMsdUNBQThCOztJQUM5Qix3Q0FBK0I7O0lBQy9CLHdDQUF3RTs7SUFDeEUsaURBQTJCOztJQUMzQiwwQ0FBb0I7O0lBQ3BCLHdDQUFrQjs7Ozs7SUFFbEIsd0NBQTBCOzs7OztJQUMxQiwyQ0FBcUI7Ozs7O0lBQ3JCLG9DQUFjOzs7OztJQUNkLDhDQUErQzs7Ozs7SUFDL0MsK0NBQWdEOzs7OztJQUNoRCw4Q0FBNEM7Ozs7O0lBQzVDLHVEQUFtRDs7Ozs7SUFDbkQsNkNBQStCOzs7OztJQUMvQiwrQ0FBaUM7Ozs7O0lBV2pDLDBDQUF5Qjs7Ozs7SUFrcEJiLHlDQUE4Qjs7Ozs7SUFBRSxrQ0FBOEI7O0lBQzlELDBDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vc2xpZGUnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2NvcmUvbm8tYW5pbWF0aW9uL256LW5vLWFuaW1hdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgREVGQVVMVF9DQVNDQURFUl9QT1NJVElPTlMgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMvbmctY2xhc3MnO1xuaW1wb3J0IHsgYXJyYXlzRXF1YWwsIHRvQXJyYXkgfSBmcm9tICcuLi9jb3JlL3V0aWwvYXJyYXknO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgQ2FzY2FkZXJPcHRpb24sXG4gIENhc2NhZGVyU2VhcmNoT3B0aW9uLFxuICBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlcixcbiAgTnpDYXNjYWRlclNpemUsXG4gIE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSxcbiAgTnpTaG93U2VhcmNoT3B0aW9uc1xufSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdERpc3BsYXlSZW5kZXIgPSBsYWJlbCA9PiBsYWJlbC5qb2luKCcgLyAnKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhc2NhZGVyLFtuei1jYXNjYWRlcl0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2FzY2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIHNsaWRlTW90aW9uIF0sXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhc2NhZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1thdHRyLnRhYkluZGV4XScgICAgICAgICAgICAgICAgICAgICAgIDogJ1wiMFwiJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1sZ10nICAgICAgICAgICAgICAgOiAnbnpTaXplID09PSBcImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXNtXScgICAgICAgICAgICAgICA6ICduelNpemUgPT09IFwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLWRpc2FibGVkXScgIDogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1vcGVuXScgICAgICA6ICdtZW51VmlzaWJsZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLXdpdGgtdmFsdWVdJzogJyEhaW5wdXRWYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItZm9jdXNlZF0nICAgICAgICAgIDogJ2lzRm9jdXNlZCdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1jYXNjYWRlci1tZW51cyB7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtZW51JykgbWVudTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkcmVuKE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQpIGNhc2NhZGVySXRlbXM6IFF1ZXJ5TGlzdDxOekNhc2NhZGVyT3B0aW9uQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SW5wdXQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QXJyb3cgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoYW5nZU9uU2VsZWN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q29sdW1uQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RXhwYW5kVHJpZ2dlcjogTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIgPSAnY2xpY2snO1xuICBASW5wdXQoKSBuelZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xuICBASW5wdXQoKSBuekxhYmVsUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelNpemU6IE56Q2FzY2FkZXJTaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelNob3dTZWFyY2g6IGJvb2xlYW4gfCBOelNob3dTZWFyY2hPcHRpb25zO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJ1BsZWFzZSBzZWxlY3QnO1xuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpNZW51U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56VHJpZ2dlckFjdGlvbjogTnpDYXNjYWRlclRyaWdnZXJUeXBlIHwgTnpDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbICdjbGljaycgXSBhcyBOekNhc2NhZGVyVHJpZ2dlclR5cGVbXTtcbiAgQElucHV0KCkgbnpDaGFuZ2VPbjogKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBuekxvYWREYXRhOiAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGluZGV4PzogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuek9wdGlvbnMoKTogQ2FzY2FkZXJPcHRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1sgMCBdO1xuICB9XG5cbiAgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdIHwgbnVsbCkge1xuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90ID0gdGhpcy5jb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFsgb3B0aW9ucyBdIDogW107XG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoaW5nKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZXJPcHRpb25bXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIgfT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIE5vdCBleHBvc2VkLCBvbmx5IGZvciB0ZXN0XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gTm90IGV4cG9zZWQsIG9ubHkgZm9yIHRlc3RcblxuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgZHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xuICBtZW51VmlzaWJsZSA9IGZhbHNlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGFiZWxSZW5kZXJUZXh0OiBzdHJpbmc7XG4gIGxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xuICBjb2x1bW5zOiBDYXNjYWRlck9wdGlvbltdW10gPSBbXTtcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIC4uLkRFRkFVTFRfQ0FTQ0FERVJfUE9TSVRJT05TIF07XG4gIGRyb3Bkb3duV2lkdGhTdHlsZTogc3RyaW5nO1xuICBpc1NlYXJjaGluZyA9IGZhbHNlO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGlzT3BlbmluZyA9IGZhbHNlO1xuICBwcml2YXRlIGRlZmF1bHRWYWx1ZTsgLy8gRGVmYXVsdCB2YWx1ZSB3cml0dGVuIGJ5IGBbbmdNb2RlbF1gXG4gIHByaXZhdGUgdmFsdWU7XG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gIHByaXZhdGUgYWN0aXZhdGVkT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIGNvbHVtbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXVtdO1xuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXTtcbiAgcHJpdmF0ZSBkZWxheU1lbnVUaW1lcjogbnVtYmVyO1xuICBwcml2YXRlIGRlbGF5U2VsZWN0VGltZXI6IG51bWJlcjtcblxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB0aGlzLnRvZ2dsZVNlYXJjaE1vZGUoKTtcbiAgfVxuXG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9pbnB1dFZhbHVlID0gJyc7XG5cbiAgZ2V0IG1lbnVDbHMoKTogTmdDbGFzc1R5cGUge1xuICAgIHJldHVybiB7XG4gICAgICBbIGAke3RoaXMubnpNZW51Q2xhc3NOYW1lfWAgXTogISF0aGlzLm56TWVudUNsYXNzTmFtZVxuICAgIH07XG4gIH1cblxuICBnZXQgbWVudUNvbHVtbkNscygpOiBOZ0NsYXNzVHlwZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFsgYCR7dGhpcy5uekNvbHVtbkNsYXNzTmFtZX1gIF06ICEhdGhpcy5uekNvbHVtbkNsYXNzTmFtZVxuICAgIH07XG4gIH1cblxuICAvLyNyZWdpb24gTWVudVxuXG4gIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5sb2FkUm9vdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5TWVudVRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5TWVudVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheU1lbnVUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRSb290T3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB7fTtcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuQXN5bmMocm9vdCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBJbml0XG5cbiAgcHJpdmF0ZSBpc0xvYWRlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1sgaW5kZXggXSAmJiB0aGlzLmNvbHVtbnNbIGluZGV4IF0ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE9wdGlvbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogQ2FzY2FkZXJPcHRpb24ge1xuICAgIGNvbnN0IG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSB0aGlzLmNvbHVtbnNbIGluZGV4IF07XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgPyB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikgOiBvcHRpb247XG4gICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBhY3RpdmF0ZU9uSW5pdChpbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih2YWx1ZSwgaW5kZXgpO1xuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBvcHRpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7XG4gICAgICAgIFsgYCR7dGhpcy5uelZhbHVlUHJvcGVydHl9YCBdOiB2YWx1ZSxcbiAgICAgICAgWyBgJHt0aGlzLm56TGFiZWxQcm9wZXJ0eX1gIF06IHZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGluZGV4LCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdnMgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB2cy5sZW5ndGggLSAxO1xuXG4gICAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVPbkluaXQoaW5kZXgsIHZzWyBpbmRleCBdKTtcbiAgICAgIGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICB0aGlzLmFmdGVyV3JpdGVWYWx1ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0xvYWRlZChpbmRleCkgfHwgIXRoaXMubnpMb2FkRGF0YSkge1xuICAgICAgbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpbmRleCAtIDEgXSB8fCB7fTtcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuQXN5bmMobm9kZSwgaW5kZXggLSAxLCBsb2FkLCB0aGlzLmFmdGVyV3JpdGVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIE11dGF0aW5nIGRhdGFcblxuICBwcml2YXRlIHNldE9wdGlvbkFjdGl2YXRlZChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSwgbG9hZENoaWxkcmVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICghb3B0aW9uIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXSA9IG9wdGlvbjtcblxuICAgIC8vIFNldCBwYXJlbnQgb3B0aW9uIGFuZCBhbGwgYW5jZXN0b3Igb3B0aW9ucyBhcyBhY3RpdmUuXG4gICAgZm9yIChsZXQgaSA9IGNvbHVtbkluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpIF0pIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpIF0gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgKyAxIF0ucGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBjaGlsZCBvcHRpb25zIGFuZCBhbGwgc3VjY2VzcyBvcHRpb25zIGFzIGluYWN0aXZlLlxuICAgIGlmIChjb2x1bW5JbmRleCA8IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMuc2xpY2UoMCwgY29sdW1uSW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIGNoaWxkIG9wdGlvbnMuXG4gICAgaWYgKG9wdGlvbi5jaGlsZHJlbiAmJiBvcHRpb24uY2hpbGRyZW4ubGVuZ3RoICYmICFvcHRpb24uaXNMZWFmKSB7XG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBvcHRpb24pO1xuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb24uaXNMZWFmICYmIGxvYWRDaGlsZHJlbikge1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5Bc3luYyhvcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZENoaWxkcmVuQXN5bmMob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgc3VjY2Vzcz86ICgpID0+IHZvaWQsIGZhaWx1cmU/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpMb2FkRGF0YSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBjb2x1bW5JbmRleCA8IDA7XG4gICAgICBvcHRpb24ubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLm56TG9hZERhdGEob3B0aW9uLCBjb2x1bW5JbmRleCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBjb2x1bW5JbmRleCA8IDAgPyB1bmRlZmluZWQgOiBvcHRpb24pO1xuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlOyAvLyBOZWVkIHRvIGNoZWNrIGNoaWxkcmVuLlxuICAgICAgICB0aGlzLmNoZWNrQ2hpbGRyZW4oKTtcbiAgICAgICAgLy8gUmVwb3NpdGlvbiBpbiB0aGUgbmV4dCB0aWNrLCBiZWNhdXNlIHdlIHVzZSBtYXJrRm9yQ2hlY2sgYWJvdmUuXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5yZXBvc2l0aW9uKCkpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbi5pc0xlYWYgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uID0gKG86IENhc2NhZGVyT3B0aW9uLCBpOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5uekNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5uekNoYW5nZU9uKG8sIGkpID09PSB0cnVlIDogZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMubnpTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXg6IGNvbHVtbkluZGV4IH0pO1xuXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5uekNoYW5nZU9uU2VsZWN0IHx8IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24ob3B0aW9uLCBjb2x1bW5JbmRleCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2x1bW5EYXRhKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10sIGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIWFycmF5c0VxdWFsKHRoaXMuY29sdW1uc1sgY29sdW1uSW5kZXggXSwgb3B0aW9ucykpIHtcbiAgICAgIHRoaXMuY29sdW1uc1sgY29sdW1uSW5kZXggXSA9IG9wdGlvbnM7XG4gICAgICBpZiAoY29sdW1uSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuc2xpY2UoMCwgY29sdW1uSW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcbiAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XG5cbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0U3VibWl0VmFsdWUoKTogYW55W10ge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcbiAgICBpZiAoIWFycmF5c0VxdWFsKHRoaXMudmFsdWUsIHZhbHVlKSkge1xuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubnpDbGVhci5lbWl0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBhZnRlcldyaXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcbiAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gTW91c2UgYW5kIGtleWJvYXJkIGV2ZW50IGhhbmRsZXMsIHZpZXcgY2hpbGRyZW5cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmZvY3VzKCk7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICh0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbCkuYmx1cigpO1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51VmlzaWJsZSA/IHRoaXMuZm9jdXMoKSA6IHRoaXMuYmx1cigpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRGb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyAnJGV2ZW50JyBdKVxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmIChrZXlDb2RlICE9PSBET1dOX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBVUF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gTEVGVF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gUklHSFRfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IEVOVEVSICYmXG4gICAgICBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiZcbiAgICAgIGtleUNvZGUgIT09IEVTQ0FQRVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXNzIGFueSBrZXlzIGFib3ZlIHRvIHJlb3BlbiBtZW51LlxuICAgIGlmICghdGhpcy5tZW51VmlzaWJsZSAmJiBrZXlDb2RlICE9PSBCQUNLU1BBQ0UgJiYga2V5Q29kZSAhPT0gRVNDQVBFKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRNZW51VmlzaWJsZSh0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHRoZXNlIGtleXMgd29yayBhcyBkZWZhdWx0IGluIHNlYXJjaGluZyBtb2RlLlxuICAgIGlmICh0aGlzLmlzU2VhcmNoaW5nICYmIChrZXlDb2RlID09PSBCQUNLU1BBQ0UgfHwga2V5Q29kZSA9PT0gTEVGVF9BUlJPVyB8fCBrZXlDb2RlID09PSBSSUdIVF9BUlJPVykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnRlcmFjdCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bihmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgICAgdGhpcy5vbkVudGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvblRyaWdnZXJDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2NsaWNrJykpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSghdGhpcy5tZW51VmlzaWJsZSwgMTAwKTtcbiAgICB9XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvblRyaWdnZXJNb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUodHJ1ZSwgdGhpcy5uek1vdXNlRW50ZXJEZWxheSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsgJyRldmVudCcgXSlcbiAgb25UcmlnZ2VyTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1lbnVWaXNpYmxlIHx8IHRoaXMuaXNPcGVuaW5nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcbiAgICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGhvc3RFbCA9IHRoaXMuZWw7XG4gICAgICBjb25zdCBtZW51RWwgPSB0aGlzLm1lbnUgJiYgdGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0FjdGlvblRyaWdnZXIoYWN0aW9uOiAnY2xpY2snIHwgJ2hvdmVyJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnXG4gICAgICA/IHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSBhY3Rpb25cbiAgICAgIDogdGhpcy5uelRyaWdnZXJBY3Rpb24uaW5kZXhPZihhY3Rpb24pICE9PSAtMTtcbiAgfVxuXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgdGhpcy5pc1NlYXJjaGluZ1xuICAgICAgPyB0aGlzLnNldFNlYXJjaE9wdGlvbkFjdGl2YXRlZChvcHRpb24gYXMgQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50KVxuICAgICAgOiB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25FbnRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGNvbHVtbkluZGV4IF07XG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzU2VhcmNoaW5nXG4gICAgICAgID8gdGhpcy5zZXRTZWFyY2hPcHRpb25BY3RpdmF0ZWQob3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBudWxsKVxuICAgICAgICA6IHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVXBPckRvd24oaXNVcDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xuICAgIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb2x1bW5zWyBjb2x1bW5JbmRleCBdIHx8IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcbiAgICBpZiAoIWFjdGl2ZU9wdGlvbikgeyAvLyBOb3Qgc2VsZWN0ZWQgb3B0aW9ucyBpbiB0aGlzIGNvbHVtblxuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IGxlbmd0aCA6IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmluZGV4T2YoYWN0aXZlT3B0aW9uKTtcbiAgICB9XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IG5leHRJbmRleCAtIDEgOiBuZXh0SW5kZXggKyAxO1xuICAgICAgaWYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSBvcHRpb25zWyBuZXh0SW5kZXggXTtcbiAgICAgIGlmICghbmV4dE9wdGlvbiB8fCBuZXh0T3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlTGVmdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVJpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGg7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29sdW1uc1sgbGVuZ3RoIF07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRPcHQgPSBvcHRpb25zLmZpbmQobyA9PiAhby5kaXNhYmxlZCk7XG4gICAgICBpZiAobmV4dE9wdCkge1xuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0LCBsZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uT3B0aW9uTW91c2VFbnRlcihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm56RXhwYW5kVHJpZ2dlciA9PT0gJ2hvdmVyJyAmJiAhb3B0aW9uLmlzTGVhZikge1xuICAgICAgdGhpcy5kZWxheVNlbGVjdE9wdGlvbihvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RPcHRpb24ob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5U2VsZWN0VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGF5U2VsZWN0T3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGRvU2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcbiAgICBpZiAoZG9TZWxlY3QpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGluZGV4KTtcbiAgICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFNlYXJjaFxuXG4gIHByaXZhdGUgdG9nZ2xlU2VhcmNoTW9kZSgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWxsQmVJblNlYXJjaCA9ICEhdGhpcy5faW5wdXRWYWx1ZTtcblxuICAgIC8vIFRha2UgYSBzbmFwc2hvdCBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoIG1vZGUuXG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoaW5nICYmIHdpbGxCZUluU2VhcmNoKSB7XG4gICAgICB0aGlzLmlzU2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90ID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9ICcnO1xuXG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSBgJHt3aWR0aH1weGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSB0aGUgc25hcHNob3QgYWZ0ZXIgbGVhdmluZyBzZWFyY2ggbW9kZS5cbiAgICBpZiAodGhpcy5pc1NlYXJjaGluZyAmJiAhd2lsbEJlSW5TZWFyY2gpIHtcbiAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90O1xuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zU25hcHNob3Q7XG4gICAgICB0aGlzLmRyb3Bkb3duV2lkdGhTdHlsZSA9ICcnO1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9ucykge1xuICAgICAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTZWFyY2hpbmcpIHtcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2VhcmNoVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzdWx0czogQ2FzY2FkZXJTZWFyY2hPcHRpb25bXSA9IFtdO1xuICAgIGNvbnN0IHBhdGg6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXIgPSAoaW5wdXRWYWx1ZTogc3RyaW5nLCBwOiBDYXNjYWRlck9wdGlvbltdKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gcC5zb21lKG4gPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwobik7XG4gICAgICAgIHJldHVybiBsYWJlbCAmJiBsYWJlbC5pbmRleE9mKGlucHV0VmFsdWUpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBmaWx0ZXI6IChpbnB1dFZhbHVlOiBzdHJpbmcsIHA6IENhc2NhZGVyT3B0aW9uW10pID0+IGJvb2xlYW4gPVxuICAgICAgdGhpcy5uelNob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLmZpbHRlclxuICAgICAgICA/ICh0aGlzLm56U2hvd1NlYXJjaCBhcyBOelNob3dTZWFyY2hPcHRpb25zKS5maWx0ZXJcbiAgICAgICAgOiBkZWZhdWx0RmlsdGVyO1xuXG4gICAgY29uc3Qgc29ydGVyOiAoYTogQ2FzY2FkZXJPcHRpb25bXSwgYjogQ2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXIgPVxuICAgICAgdGhpcy5uelNob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLnNvcnRlcjtcblxuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICBwYXRoLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKHNOb2RlKSA9PiB7XG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7XG4gICAgICAgICAgc05vZGUucGFyZW50ID0gbm9kZTtcbiAgICAgICAgfSAvLyBCdWlsZCBwYXJlbnQgcmVmZXJlbmNlIHdoZW4gZG9pbmcgc2VhcmNoaW5nXG4gICAgICAgIGlmICghc05vZGUuaXNMZWFmKSB7XG4gICAgICAgICAgbG9vcFBhcmVudChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzTm9kZS5pc0xlYWYgfHwgIXNOb2RlLmNoaWxkcmVuIHx8ICFzTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBsb29wQ2hpbGQoc05vZGUsIGRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb29wQ2hpbGQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xuICAgICAgaWYgKGZpbHRlcih0aGlzLl9pbnB1dFZhbHVlLCBjUGF0aCkpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbjogQ2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgaXNMZWFmICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgIHBhdGggICAgICAgICAgICAgICAgICAgIDogY1BhdGgsXG4gICAgICAgICAgWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSBdOiBjUGF0aC5tYXAocCA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKHApKS5qb2luKCcgLyAnKVxuICAgICAgICB9O1xuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcblxuICAgIGlmICghdGhpcy5jb2x1bW5zU25hcHNob3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBbIFtdIF07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3RbIDAgXS5mb3JFYWNoKG5vZGUgPT4gKG5vZGUuaXNMZWFmIHx8ICFub2RlLmNoaWxkcmVuIHx8ICFub2RlLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgID8gbG9vcENoaWxkKG5vZGUpXG4gICAgICA6IGxvb3BQYXJlbnQobm9kZSkpO1xuICAgIGlmIChzb3J0ZXIpIHtcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCB0aGlzLl9pbnB1dFZhbHVlKSk7XG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyA9IFsgcmVzdWx0cyBdO1xuICB9XG5cbiAgc2V0U2VhcmNoT3B0aW9uQWN0aXZhdGVkKHJlc3VsdDogQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsgcmVzdWx0IF07XG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCAyMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICAgIGNvbnN0IGluZGV4ID0gcmVzdWx0LnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uTm9kZSA9IHJlc3VsdC5wYXRoWyBpbmRleCBdO1xuICAgICAgLy8gTk9URTogb3B0aW1pemUgdGhpcy5cbiAgICAgIGNvbnN0IG1vY2tDbGlja1BhcmVudCA9IChub2RlOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCkge1xuICAgICAgICAgIG1vY2tDbGlja1BhcmVudChub2RlLnBhcmVudCwgY29sdW1uSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uT3B0aW9uQ2xpY2sobm9kZSwgY29sdW1uSW5kZXgsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgICBtb2NrQ2xpY2tQYXJlbnQoZGVzdGluYXRpb25Ob2RlLCBpbmRleCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBIZWxwZXJzXG5cbiAgcHJpdmF0ZSBnZXQgaGFzSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnB1dFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy52YWx1ZSAmJiAhIXRoaXMudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHNob3dQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISh0aGlzLmhhc0lucHV0IHx8IHRoaXMuaGFzVmFsdWUpO1xuICB9XG5cbiAgZ2V0IGNsZWFySWNvblZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpBbGxvd0NsZWFyICYmICF0aGlzLm56RGlzYWJsZWQgJiYgKHRoaXMuaGFzVmFsdWUgfHwgdGhpcy5oYXNJbnB1dCk7XG4gIH1cblxuICBnZXQgaXNMYWJlbFJlbmRlclRlbXBsYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMubnpMYWJlbFJlbmRlcjtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJyBdO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRPcHRpb25WYWx1ZShvcHRpb246IENhc2NhZGVyT3B0aW9uKTogYW55IHtcbiAgICByZXR1cm4gb3B0aW9uWyB0aGlzLm56VmFsdWVQcm9wZXJ0eSB8fCAndmFsdWUnIF07XG4gIH1cblxuICBpc09wdGlvbkFjdGl2YXRlZChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYWN0aXZlT3B0ID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpbmRleCBdO1xuICAgIHJldHVybiBhY3RpdmVPcHQgPT09IG9wdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaXNwbGF5TGFiZWwoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnM7XG4gICAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IHNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKG8pKTtcbiAgICBpZiAodGhpcy5pc0xhYmVsUmVuZGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0geyBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9IGRlZmF1bHREaXNwbGF5UmVuZGVyLmNhbGwodGhpcywgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBXaGVuIGNvbXBvbmVudHMgaW5pdHMgd2l0aCBkZWZhdWx0IHZhbHVlLCB0aGlzIHdvdWxkIG1ha2UgZGlzcGxheSBsYWJlbCBhcHBlYXIgY29ycmVjdGx5LlxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuYmx1cigpO1xuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlcicpO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXNjYWRlci1waWNrZXInKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHZzID0gdGhpcy5kZWZhdWx0VmFsdWUgPSB0b0FycmF5KHZhbHVlKTtcbiAgICBpZiAodnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXRPcHRpb25zKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdnM7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJyA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgaWYgKHRoaXMuZHJvcERvd25Qb3NpdGlvbiAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvc2l0aW9uIHRoZSBjYXNjYWRlciBwYW5lbC4gV2hlbiBhIG1lbnUgb3BlbnMsIHRoZSBjYXNjYWRlciBleHBhbmRzXG4gICAqIGFuZCBtYXkgZXhjZWVkIHRoZSBicm93c2VyIGJvdW5kYXJ5LlxuICAgKi9cbiAgcHJpdmF0ZSByZXBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5tZW51VmlzaWJsZSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYXNjYWRlckl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxufVxuIl19