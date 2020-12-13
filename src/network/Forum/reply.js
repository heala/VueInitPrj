import {request} from "../request";

export function replyArticle(data) {
    return request({
        method: "post",
        url: "/reply/save",
        data
    });
}
export function replyList(articleId) {
    return request({
        url: "/reply/list/" + articleId,
        method: "get"
    })
}