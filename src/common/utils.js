export function debounce(func, delay) {
    let timer = null
    return function(...args) {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
// debounce函数，用来进行防抖