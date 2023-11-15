import axios from 'axios';

import { request } from './config';

const authApi = {
  login: (data: any) => {
    return request(`/api/auth/signin`, {
      method: 'POST',
      data,
    });
  },
  refresh: async () => {
    return await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/authentication/api/v1/refreshtoken`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      },
    );
  },
  logout: () => {
    return request('/api/auth/logout', {
      method: 'POST',
    });
  },
};

export default authApi;
