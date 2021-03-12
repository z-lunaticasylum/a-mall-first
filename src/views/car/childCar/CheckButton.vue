<template>
    <div id="check-button" :class="{isActive: isactive}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name: "CheckButton",
    data () {
        return {
            selected: {
                type: Boolean,
                default() {
                    return false
                }
            }      
        }
    },
    props: {
        isactive: {
            type: Boolean
        }
    },
    methods: {
        // selectButton() {
        //     this.selected = !this.selected
        //     this.$emit("changeSelected", this.selected)
        // }
    }
}
</script>

<style scoped>
    #check-button {
        height: 18px;
        width: 18px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
    }
    .isActive {
        background-color: rgb(255, 87, 119);
    }
</style>
