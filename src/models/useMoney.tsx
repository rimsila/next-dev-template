import type { IAddMoney } from '@/services/global';
import { moneyApi } from '@/services/money';
import { getMoneyBaseCurrency } from '@/utils';
import type { ProFormProps } from '@ant-design/pro-form';
import { useRequest } from 'ahooks/es';
import { Form } from 'antd';

export default () => {
  const [formPayment] = Form.useForm();

  // * ------------ addCategory --------------
  const { loading: loadingMoney, run: runAddMoney } = useRequest(moneyApi.addMoney, {
    manual: true,
  });

  // * ------------ onSubmitLogin --------------
  const onAddMoney = async (value: any) => {
    const { currencyCode, description, riel, usd, sharedWith, paidFor, categoryId } = value || {};

    const addModel: IAddMoney = {
      currencyCode,
      accountType: 'CASH',
      amount: String(getMoneyBaseCurrency({ currencyType: currencyCode, kh: riel, usd })),
      categoryId,
      paidFor: paidFor || [
        {
          userId: 'sss',
        },
      ],
      sharedWith,
      status: 'unpaid',
      description,
    };
    await runAddMoney(addModel);
  };

  // * ------------ addMoneyFormProps --------------
  const addMoneyFormProps: ProFormProps = {
    onFinish: onAddMoney,
    form: formPayment,
  };

  return {
    formPayment,
    addMoneyFormProps,
    loadingMoney,
  };
};
