import axios from 'axios';

export const getIpLocation = async (ip) => {
  const APIKEY = '56afd34d62f03d50f12dbff15126a0b0'; // TODO: move to .env

  return await axios.get(`http://api.ipstack.com/${ip}?access_key=${APIKEY}`);
};
