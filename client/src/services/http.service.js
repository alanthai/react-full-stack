import { API_URL } from '../constants';

const defaultHeaders = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
});

export const http = {
  baseUrl: '',

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  },

  request(url: string, init = {}) {
    return fetch(this.baseUrl + url, { headers: defaultHeaders, ...init })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      });
  },

  get(url: string) {
    return this.request(url, { method: 'get' });
  },

  post(url: string, body: any) {
    return this.request(url, { method: 'post', body: JSON.stringify(body) });
  },

  delete(url: string, body: any) {
    return this.request(url, { method: 'delete', body: JSON.stringify(body) });
  },

  put(url: string, body: any) {
    return this.request(url, { method: 'put', body: JSON.stringify(body)});
  },
};

http.setBaseUrl(API_URL);
