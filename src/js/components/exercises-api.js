import axios from 'axios';

export default function axiosFilters(button, pageLoad = 1) {
  axios.defaults.baseURL = 'https://your-energy.b.goit.study/api/filters';

  const requestParams = {
    params: {
      filter: button,
      page: pageLoad,
      limit: 12,
    },
  };
  

  return axios.get('', requestParams);
}
