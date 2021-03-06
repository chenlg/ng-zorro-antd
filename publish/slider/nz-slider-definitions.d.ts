export declare type Mark = string | MarkObj;
export interface MarkObj {
    style?: object;
    label: string;
}
export declare class Marks {
    [key: number]: Mark;
}
/**
 * Processed steps that would be passed to sub components.
 */
export interface ExtendedMark {
    value: number;
    offset: number;
    config: Mark;
}
/**
 * Marks that would be rendered.
 */
export interface DisplayedMark extends ExtendedMark {
    active: boolean;
    label: string;
    style?: object;
}
/**
 * Steps that would be rendered.
 */
export interface DisplayedStep extends ExtendedMark {
    active: boolean;
    style?: object;
}
export declare type SliderShowTooltip = 'always' | 'never' | 'default';
export declare type SliderValue = number[] | number;
export interface SliderHandler {
    offset: number;
    value: number;
    active: boolean;
}
export declare function isValueARange(value: SliderValue): value is number[];
export declare function isConfigAObject(config: Mark): config is MarkObj;
