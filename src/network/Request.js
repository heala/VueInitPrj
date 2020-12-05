import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: "",
        timeout: 5000
    })

    instance.interceptors.request.use(config=>{
        console.log(config);
        return config;
    }, rejectConfig => {

    })

    instance.interceptors.response.use(res=> {
        console.log(res);
        return res.data;
    }, onRejected=> {

    })

    return instance(config);
}