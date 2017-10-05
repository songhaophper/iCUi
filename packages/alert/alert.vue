<template>
    <transition name="icbox">
        <div v-if="show" class="icbox">
            <div class="icbox-popup icbox-popup-in">
                <div class="icbox-popup-inner">
                    <div class="icbox-popup-title" v-if="title">{{title}}</div>
                    <div class="icbox-popup-text">{{content}}</div>
                </div>
                <div class="icbox-popup-buttons">
                    <span class="icbox-popup-button icbox-popup-button-bold" :style="btn.style" @click="success">
                        {{btn.text}}
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'ic-alert',
        data () {
            return {
                show: false,
                title: '提示',
                content: '',
                btn: {
                    text: '确定',
                    style: {}
                }
            }
        },
        mounted () {
        },
        methods: {
            success () {
                this.show = false;
            }
        }
    }
</script>