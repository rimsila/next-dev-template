interface IUseSelect {
    debug?: boolean;
    init?: any;
}
export declare const useSelect: (props: IUseSelect) => {
    handleSelect: (value: any) => void;
    select: any;
};
export {};
