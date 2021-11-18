export const getItem = async (url, setData) => {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // console.log(json);
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
