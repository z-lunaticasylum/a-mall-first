import axios from "axios"

export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    })

    // 拦截器来对请求到的数据进行筛选清洗

    instance.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(error)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        console.log(error)
    })

    return instance(config)
}