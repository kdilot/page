import { useRouter } from 'next/router';
import { useEffect } from 'react';
import files from '../articles';
import { revertArticleName } from '../utils/article';

const useArticle = (fileName: string) => {
  const router = useRouter();
  const file = files[revertArticleName(fileName)];

  useEffect(() => {
    if (!file) {
      router.replace('/404');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return file;
};

export default useArticle;
