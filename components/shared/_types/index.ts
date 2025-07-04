export type IListComponent<T> = {
    as?: React.ElementType;
    className?: string;
    data: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    ref?: React.Ref<T>
};