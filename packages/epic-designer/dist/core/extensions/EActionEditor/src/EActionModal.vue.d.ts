declare function handleOpen(): void;
declare function handleOpenEdit(action: any): void;
declare const _default: import("vue").DefineComponent<{}, {
    handleOpen: typeof handleOpen;
    handleOpenEdit: typeof handleOpenEdit;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("add" | "edit")[], "add" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onAdd?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
