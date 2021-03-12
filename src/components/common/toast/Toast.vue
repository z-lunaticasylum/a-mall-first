<template>
    <div id="toast" v-show="isShow">
        {{showMessage}}
    </div>
</template>

<script>
export default {
    name: "Toast",
    data () {
        return {
            isShow: false,
            showMessage:""
        }
        // isShow是用来决定toast是否显示的
        // showMessage是决定toast显示的信息
    },
    methods: {
        show(message, time = 2000) {
            // 不传入time时，默认停留时间为2s
            this.isShow = true
            this.showMessage = message

            setTimeout(() => {
                this.isShow = false
                this.showMessage = ""
            }, time)
        }
    }
}
</script>

<style scoped>
    #toast {
        height: 30px;
        width: 160px;
        line-height: 30px;
        text-align: center;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background: rgba(0, 0, 0, 0.75);   
        /* 第四个值设置透明度 */
        color: #fff;
        z-index: 100;
    }
</style>
