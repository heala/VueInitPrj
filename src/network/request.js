import axios from 'axios'
import {getToken} from './auth'
import {Message} from 'element-ui'

export function request(config) {
    const instance = axios.create({
        baseURL: "http://localhost:8080/VueAPI",
        timeout: 5000,
    })

    instance.interceptors.request.use(config=>{
        let token = getToken();
        if(token) {
            config.headers['Authentication'] = "Bearer " + token;
        }
        return config;
    }, rejectConfig => {

    })

    instance.interceptors.response.use(res=> {
        const code = res.data.code;
        const msg = res.data.msg;
        if(res.data.code === 401) {
            Message({
                type: "error",
                message: msg,
                duration: 800
            })
            return;
        } else if(code === 500) {
            Message({
                type: "error",
                message: msg,
                duration: 800
            })
            return Promise.reject(new Error(msg))
        } else {
            return res.data;
        }
    }, onRejected=> {

    })

    return instance(config);
}
