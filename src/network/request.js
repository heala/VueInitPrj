import axios from 'axios'
import {getToken, removeToken} from './auth'
import {Message} from 'element-ui'

export function request(config) {
    const instance = axios.create({
        //baseURL: "http://81.70.199.252:8080/VueAPI",
        baseURL: "http://localhost:8080/VueAPI",
        timeout: 3000,
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
            removeToken();
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
