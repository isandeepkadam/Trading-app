import { useState, useEffect } from 'react';
import finhub from '../apis/finhub';

const Stocklist = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finhub.get('/quote', {
          params: { symbol: 'MSFT' },
        });
        console.log(response);
        if (isMounted) {
          setStock(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, []);

  return <div>Stocklist</div>;
};

export default Stocklist;
