import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.petfinder.com/v2',
});

instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : '';
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);

});

export default instance;