import {request} from "network/request"

export function getHomeMultiData() {
    return request({
        url: "/home/multidata"
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: "home/data",
        params: {
            type,
            page
        }
    })
}
// type和page是拼接在url ？后面的query