import Axios, { AxiosInstance } from 'axios';

let axiosInstance: AxiosInstance;

function getAxios() {
  if (axiosInstance) return axiosInstance;

  axiosInstance = Axios.create({
    baseURL: '/api',
    timeout: 5000,
  });
  
  return axiosInstance;
}

export default getAxios();

export { getAxios };
