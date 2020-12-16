import {request} from "../request";

export function login(data) {
    return request({
        method: "post",
        url: "/login",
        data
    });
}

export function regist(data) {
    return request({
        method: "post",
        url: "/regist",
        data
    });
}
