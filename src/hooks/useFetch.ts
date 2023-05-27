import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);

  const fetchUsers = async () => {
    axios
      .get(url)
      .then((_data) => {
        setData(_data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, setData, fetchUsers };
};
export default useFetch;
