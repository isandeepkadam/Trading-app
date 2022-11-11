import axios from 'axios';

const TOKEN = 'cdmq2qiad3i9q6h65ejgcdmq2qiad3i9q6h65ek0';

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: TOKEN,
  },
});
