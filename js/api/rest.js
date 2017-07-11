export const getPuppies = () => {
  return fetch('https://www.reddit.com/r/aww.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.data.children.map(i => i.data);
      })
      .catch((error) => {
        console.error(error);
      });
};
