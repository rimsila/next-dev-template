/// <reference types="react" />
import { ProCardProps } from '@ant-design/pro-card/es';
export declare const btnType: {
    light: string;
    success: string;
    warning: string;
    black: string;
    error: string;
    pink_base: string;
    volcano_base: string;
    cyan_base: string;
    cyan_4: string;
    cyan_8: string;
    purple_base: string;
};
export declare const btnTypeArr: string[];
export declare type BtnType = typeof btnType;
export declare type NextTheme = keyof BtnType;
export interface NextCardProps extends ProCardProps {
    children?: React.ReactNode;
    nextTheme?: NextTheme;
    width?: string | number;
}
