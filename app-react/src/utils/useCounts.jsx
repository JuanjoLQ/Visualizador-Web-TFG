import { useEffect, useState } from "react";

export const useCounts = (url) => {
  const [counts, setCounts] = useState(null);
  const [loadingCounts, setLoadingCounts] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoadingCounts(true);
    fetch(url)
      .then((res) => res.json())
      .then((counts) => {
        if (isMounted) {
          setCounts(counts);
          // console.log('datos JSON:' + counts)
          setLoadingCounts(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          // console.log(error);
          setLoadingCounts(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { counts, loadingCounts };
};
