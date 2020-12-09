import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: "http://localhost/",
        timeout: 5000,
        headers: {'Content-Type':'multipart-formdata'}
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
