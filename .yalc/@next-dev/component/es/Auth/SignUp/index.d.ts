import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/col';
import { NextButtonProps } from '../../NextButton/type';
interface IProp extends FormProps {
    next?: {
        logo?: any;
        alt?: string;
        title?: string;
        titleAlign?: any;
        isHasSocial: boolean;
        colProps?: ColProps;
        signUpBtnProps?: NextButtonProps;
    };
}
export declare const defaultProps: {
    next: {
        logoWith: number;
        alt: string;
        title: string;
        logo: string;
    };
};
declare const NextSignUp: ({ next, ...rest }: IProp) => JSX.Element;
export default NextSignUp;
