import { AxiosRequestConfig } from 'axios';
import axios from './axios';

interface ApiObject {
    url: (input: any) => string;
    method: 'get' | 'post';
}

interface AxiosConfig {
    input?: any;
    data?: any;
}

function getApiHook(apiObject: ApiObject) {
    return async (axiosConfig?: AxiosConfig) => {
        const { input } = axiosConfig ?? {};
        const { url, method } = apiObject;
        const finalOpts: AxiosRequestConfig = { 
            url: url(input),
            method,
            ...axiosConfig
        };
        try {
            const response = await axios(finalOpts);
            return response;
        }
        catch (err) {
            throw err;
        }
    };
  }

const API = {
    Testimonial: {
        Create: getApiHook({
            method: 'post',
            url: () => '/testimonials/create'
        }),
        List: getApiHook({
            method: 'get',
            url: () => '/testimonials/list'
        }),
        Get: getApiHook({
            method: 'get',
            url: ({ id }: { id: string }) => `/testimonials/${id}`
        }),
    }
}

export default API;
