import {request} from "../request";

export function publicArticle(data) {
    return request({
        method: "post",
        url: "/forum/publishArticle",
        data
    });
}

export function articleList(query) {
    return request({
        url: "/forum/articleList",
        method: "get",
        params: query
    })
}

export function articleDetail(articleId) {
    return request({
        method: "get",
        url: "/forum/detail/" + articleId
    })
}

export function uploadFile(formData) {
    return request({
        url: "/forum/upload",
        method: "post",
        data: formData,
        timeout: 30000,
        headers: { 'Content-Type': 'multipart/form-data'},

    })
}

export function opinionArticle(data) {
    return request({
        url: "/forum/opinion",
        method: "post",
        data
    })
}
