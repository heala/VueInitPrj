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