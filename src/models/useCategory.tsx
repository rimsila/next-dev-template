import { categoryApi } from '@/services/category';
import { useRequest } from 'ahooks/es';

export default function useCategoryModel() {
  // * ------------ addCategory --------------
  const { data: addCategoryData, loading: loadingAddCategory } = useRequest(
    categoryApi.addCategory,
    {
      manual: true,
    },
  );

  // * ------------ getCategory --------------
  const { data: categoryData, loading: loadingCategory, run: onGetCategory } = useRequest(
    categoryApi.getCategory,
    {
      manual: true,
    },
  );
  type CateOption = {
    createdAt: string;
    createdBy: string;
    name: string;
    status: string;
    updatedAt: string;
    updatedBy: string;
    _id: string;
  };

  const getCateOption = () => {
    const option: {
      value: string;
      label: string;
    }[] = [];
    categoryData?.data?.records.forEach((i: CateOption) => {
      const optionModel = {
        value: i._id,
        label: i.name,
      };
      option.push(optionModel);
    });
    return option;
  };

  return {
    cateOption: getCateOption().length > 0 ? getCateOption() : [],
    categoryRecord: categoryData?.data?.records || [],
    onGetCategory,
    loadingCategory,
    loadingAddCategory,
    addCategoryData,
  };
}
