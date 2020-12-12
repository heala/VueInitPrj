import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: "http://localhost:8080//VueAPI",
        timeout: 5000,
    })

    instance.interceptors.request.use(config=>{
        return config;
    }, rejectConfig => {

    })

    instance.interceptors.response.use(res=> {
        return res.data;
    }, onRejected=> {

    })

    return instance(config);
}
