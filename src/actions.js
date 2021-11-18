export const fetchHandler = async (url, config) => {
  let res;
  try {
    const response = await fetch(url, config);

    res = await response.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (url, setData) => {
  try {
    const res = await fetchHandler(url);

    setData(res);
  } catch (error) {
    // console.log(error);
  }
};
