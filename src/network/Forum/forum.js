import {request} from "../request";

export function publicArticle(data) {
    return request({
        method: "post",
        url: "/forum/publishArticle",
        data
    });
}

export function articleList(category, label) {
    return request({
        url: "/forum/articleList",
        method: "get",
        params: {
            category, label
        }
    })
}

export function articleDetail(articleID) {
    return request({
        method: "get",
        url: "/forum/detail/" + articleID
    })
}

export function uploadFile(formData) {
    return request({
        url: "/forum/upload",
        method: "post",
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data'},

    })
}
