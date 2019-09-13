import axios from 'axios';
import { REQUEST_ULR } from '../Constants';
import { getFromLocalState } from './localStorage';
/* eslint-disable import/no-cycle */
import { refreshTokenData } from './HelperFunctions';
/* eslint-enable import/no-cycle */


export const instance = axios.create({
  baseURL: REQUEST_ULR.CORS_BASE_URL,
});


/* eslint-disable consistent-return */
instance.interceptors.request.use((config) => (
  new Promise((resolve, reject) => {
    const headers = {
      ...config.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      Pragma: 'no-cache',
      // Expires: new Date('01.01.2000'),
    };

    if (config.headers.isAuth) {
      const tokenData = getFromLocalState('TOKEN_INFO');
      debugger;
      refreshTokenData(tokenData)
        .then(refreshedTokenData => {
          headers.Authorization = `Bearer ${refreshedTokenData.accessToken}`;

          return resolve({
            ...config,
            headers,
          });
        })
        .catch(error => reject(error));
    } else {
      return resolve({
        ...config,
        headers,
      });
    }
  })
));

instance.interceptors.response.use(
  response => Promise.resolve((response && response.data) ? response.data : null),
  error => Promise.reject(error.response.data),
);


// export const test = () => {
//   debugger;
// };
