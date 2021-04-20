import axios from 'axios'

const baseUrl = "https://jsonplaceholder.typicode.com/";

export const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});