import { usePersistFn } from 'ahooks/es';
import { useState } from 'react';

export const useCommon = () => {
  const [isImgDefault, setIsImgDefault] = useState<boolean>(false);

  /**
   *  handle when img error from server|null
   * @onImgError will execute when img err from server or null
   * @isImgDefault will be true if @onImgError executed
   */
  const onImgError = usePersistFn(() => {
    setIsImgDefault(true);
    return true;
  });

  // console.log('useCommon', isImgDefault);
  return {
    onImgError,
    isImgDefault,
  };
};
