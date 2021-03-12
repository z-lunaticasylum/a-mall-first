<template>
    <div id="details-commends">
        <div class="commends-title">
            <span>用户评价</span>
            <span>更多</span>
        </div>
        <div class="commends-user">
            <div class="user-info" v-for="(item, index) in commends" :key="index">
                <img :src="item.user.avatar" alt="">
                <span>{{item.user.uname}}</span>
            </div>
            <div class="user-commends" v-for="(itema, indey) in commends" :key="indey + 2">
                {{itema.content}}</div>
            <div class="commends-info" v-for="(itemb, indez) in commends" :key="indez + 1">
                <span class="commends-time">{{itemb.created | changeDateForm}}</span>
                <span>{{itemb.style}}</span>
                <img src="image" alt="" v-for="(image, indexx) in itemb.images" :key="indexx">
            </div>
        </div>
    </div>
</template>

<script>
import {formatDate} from "common/utils"

export default {
    name: "DetailsCommendsInfo",
    props: {
        commends: {
            type: Array,
            default() {
                return []
            }
        }
    },
    filters: {
        changeDateForm(value) {
            const date = new Date(value * 1000)
            // 创建一个时间对象，Date()传入的是秒，而时间戳的单位是毫秒

            return formatDate(date, "yyyy-MM-dd")
        }
    }
}
</script>

<style scoped>
    .commends-title {
        margin: 0px 20px;
        padding-bottom: 10px;
        border-bottom: 3px solid rgb(242, 242, 241);
        display: flex;
        justify-content: space-between;
        text-align: center;
        font-size: 15px;
        color: black;
    }
    .commends-user {
        margin: 0px 20px;
        border-bottom: 3px solid rgb(242, 242, 241);
    }
    .commends-user .user-info {
        margin: 10px 0; 
        height: 50px;
    }
    .user-info img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .user-info span {
        position: relative;
        top: -13px;
        margin-left: 5px;
        color: black;
    }
    .user-commends {
        margin-bottom: 10px;
        font-size: 15px;
    }
    .commends-info {
        font-size: 13px;
        color: rgb(160, 160, 160);
    }
    .commends-time {
        margin-right: 5px;
    }
</style>
