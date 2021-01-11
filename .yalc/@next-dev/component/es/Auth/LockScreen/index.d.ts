import { FormProps } from 'antd/lib/form';
declare type IProp = FormProps;
export declare const defaultProps: {
    next: {
        logoWith: number;
        alt: string;
        title: string;
        logo: string;
    };
};
declare const NextLockScreen: ({ ...rest }: IProp) => JSX.Element;
export default NextLockScreen;
