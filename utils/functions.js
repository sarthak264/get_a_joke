import axios from 'axios';

const url = 'https://icanhazdadjoke.com';

export const getJoke = async () => {
  var joke;
  return await axios
    .get(url, {
      headers: {
        Accept: 'application/json',
      },
    })
    .then(res => {
      joke = res.data.joke;
      // console.log('function line:19 ' + joke);
      return joke;
    })
    .catch(err => console.log(err));
};
