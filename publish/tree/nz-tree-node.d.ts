import { NzTreeBaseService } from './nz-tree-base.service';
import { NzTreeNodeComponent } from './nz-tree-node.component';
export interface NzTreeNodeOptions {
    title: string;
    key: string;
    icon?: string;
    isLeaf?: boolean;
    checked?: boolean;
    selected?: boolean;
    selectable?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    expanded?: boolean;
    children?: NzTreeNodeOptions[];
    [key: string]: any;
}
export declare class NzTreeNode {
    private _title;
    key: string;
    private _icon;
    level: number;
    private _children;
    private _isLeaf;
    origin: any;
    parentNode: NzTreeNode;
    private _isChecked;
    private _isSelectable;
    private _isDisabled;
    private _isDisableCheckbox;
    private _isExpanded;
    private _isHalfChecked;
    private _isSelected;
    private _isLoading;
    isMatched: boolean;
    private _service;
    component: NzTreeNodeComponent;
    readonly treeService: NzTreeBaseService;
    constructor(option: NzTreeNodeOptions | NzTreeNode, parent?: NzTreeNode, service?: NzTreeBaseService);
    /**
     * auto generate
     * get
     * set
     */
    service: NzTreeBaseService;
    title: string;
    icon: string;
    children: NzTreeNode[];
    isLeaf: boolean;
    isChecked: boolean;
    isHalfChecked: boolean;
    isSelectable: boolean;
    isDisabled: boolean;
    isDisableCheckbox: boolean;
    isExpanded: boolean;
    isSelected: boolean;
    isLoading: boolean;
    /**
     * end
     * get
     * set
     */
    getParentNode(): NzTreeNode;
    getChildren(): NzTreeNode[];
    /**
     * 支持按索引位置插入,叶子节点不可添加
     */
    addChildren(children: any[], childPos?: number): void;
    clearChildren(): void;
    remove(): void;
    update(): void;
}
