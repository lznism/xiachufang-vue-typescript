import axios from 'axios';
import { HttpResponse } from '../interface/request';

const http = axios.create({
    baseURL: '/api',
    timeout: 100000
});

export default {
    get(url: string, params= {}): Promise<HttpResponse> {
        return http.get(url, {params})
            .then(res => <HttpResponse>res.data);
    },
    post(url: string, data): Promise<HttpResponse> {
        return http.post(url, data)
            .then(res => <HttpResponse>res.data);
    }
};
