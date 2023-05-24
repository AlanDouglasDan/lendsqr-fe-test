import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = async (url: string) => {
  const [data, setdata] = useState<any>(null);

  useEffect(() => {
    axios.get(url).then((data) => {
      console.log(data);
      setdata(data);
    });
  }, [url]);

  return { data };
};
export default useFetch;
