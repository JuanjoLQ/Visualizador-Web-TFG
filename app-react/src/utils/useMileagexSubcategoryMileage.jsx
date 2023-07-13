import { useEffect, useState } from "react";

import { URL_FLASK } from "../constants";

export const useMileagexSubcategoryMileage = (filter, param) => {
  const url = URL_FLASK + `/${filter}/filter=${param}`;
  const [dataMileageSubcategories, setData] = useState(null);
  const [loadingMileageSubcategories, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          // console.log('datos JSON:' + data)
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          // console.log(error);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { dataMileageSubcategories, loadingMileageSubcategories };
};
