import axios from 'axios';

const $http = axios.create({
    baseURL: process.env?.API_URL || 'http://localhost:3000',
});

$http.interceptors.request.use((config) => {
    console.log('AXIOS REQUEST');
    // config.headers.Authorization = `Bearer ${localStorage.get('token')}`
    return config;
});

$http.interceptors.response.use((value) => {
    if (value.status === 401) {
        const router = useRouter();
        router.push('/login');
    }

    if (value.data.access_token) {
        localStorage.set('token', value.data.access_token);
    }
    return value;
});

export default $http;
