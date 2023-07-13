import { useEffect, useState } from "react";

import { URL_FLASK } from "../constants";

export const useCustomerDate = () => {
  const url = URL_FLASK + "/Customer/filter=useCustomersDate"
  const [dataCustomerDate, setData] = useState(null);
  const [loadingCustomerDate, setLoading] = useState(true);

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

  return { dataCustomerDate, loadingCustomerDate };
};
