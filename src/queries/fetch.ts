import axios from "axios";

const fetchData = async (url: string) => {
  try {
    const data = await axios.get(url);

    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
