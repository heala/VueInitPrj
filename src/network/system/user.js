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

export function logout() {
    return request({
        url: "/logout",
        method: "post"
    })
}

export function getUserInfo(userName) {
    return request({
        url: "/userInfo/" + userName,
        method: "get"
    })
}

export function uploadAvatar(avatar) {
    const data = {
        avatar: avatar
    }
    return request({
        method: "post",
        url: "/mergeUser",
        data
    });
}
