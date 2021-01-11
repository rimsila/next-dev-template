/// <reference types="react" />
import { FooterProps } from 'rc-footer/es';
export declare const btnType: {
    btn_light: string;
    btn_success: string;
    btn_warning: string;
    btn_black: string;
    btn_error: string;
    btn_pink_base: string;
    btn_volcano_base: string;
    btn_cyan_base: string;
    btn_cyan_4: string;
    btn_cyan_8: string;
    btn_purple_base: string;
};
export declare const btnTypeArr: string[];
export declare type BtnType = typeof btnType;
export declare type NextTheme = keyof BtnType;
export interface NextFooterProps extends FooterProps {
    children?: React.ReactNode;
    nextTheme?: NextTheme;
    className?: string;
}
