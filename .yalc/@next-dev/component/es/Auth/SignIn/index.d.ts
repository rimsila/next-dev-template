import React, { ReactNode } from 'react';
import { FormProps, FormItemProps } from 'antd/lib/form';
import { NextButtonProps } from '../../NextButton/type';
import { InputProps } from 'antd/lib/input';
import { ColProps } from 'antd/lib/col';
interface IProp extends FormProps {
    next?: {
        logoWith?: number | string;
        emailItemProps?: FormItemProps;
        passwordItemProps?: FormItemProps;
        logo?: any;
        alt?: string;
        title?: string;
        submitBtnProps?: NextButtonProps;
        isHideSubmitBtn?: boolean;
        customFooter?: ReactNode;
        emailInputProps?: InputProps;
        titleAlign?: any;
        forgotPassPath?: string;
        colProps?: ColProps;
    };
}
export declare const defaultProps: {
    next: {
        logoWith: number;
        alt: string;
        title: string;
        logo: string;
        forgotPassPath: string;
    };
};
declare const NextSignIn: React.MemoExoticComponent<({ next, ...rest }: IProp) => JSX.Element>;
export default NextSignIn;
