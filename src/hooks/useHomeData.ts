import { useEffect, useState } from 'react';
import { getHomeData } from '../lib/mockApi';
import { HomeData } from '../types';

export function useHomeData() {
  const [data, setData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getHomeData()
      .then((response) => {
        if (active) {
          setData(response);
        }
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { data, isLoading };
}
