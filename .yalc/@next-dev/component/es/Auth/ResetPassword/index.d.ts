import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/col';
interface IProp extends FormProps {
    next?: {
        logo?: string;
        logoWidth?: string;
        colProps?: ColProps;
    };
}
export declare const defaultProps: {
    next: {
        logo: string;
        logoWidth: number;
    };
};
declare const ResetPassword: ({ next, ...rest }: IProp) => JSX.Element;
export default ResetPassword;
