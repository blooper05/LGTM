import { useSWRInfinite } from 'swr';

const API_BASE_URL = 'https://lgtumblr-api.herokuapp.com/images';

const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null;

  const params = `?identifier=${pageIndex}`;
  return API_BASE_URL + params;
};

const Hook = () => {
  const { data, error, size, setSize } = useSWRInfinite(getKey);

  return { data, error, size, setSize };
};

export default Hook;
