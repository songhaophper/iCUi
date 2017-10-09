<template>
    <transition name="icbox">
        <div v-if="show" class="icbox">
            <div class="icbox-popup icbox-popup-in">
                <div class="icbox-popup-inner">
                    <div class="icbox-popup-title" v-if="title">{{title}}</div>
                    <div class="icbox-popup-text">{{content}}</div>
                </div>
                <div class="icbox-popup-buttons">
                    <span class="icbox-popup-button" :style="yesStyle" @click="success">{{yes.text}}</span>
                    <span class="icbox-popup-button" :style="noStyle" @click="cancel">{{no.text}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    const COMPONENT_NAME = 'ic-confirm'
    export default {
        name :COMPONENT_NAME ,
        data () {
            return {
                show: false,
                title: '提示',
                content: '',
                style: {},
                yes: {
                    text: '确定',
                    style: {}
                },
                no: {
                    text: '取消',
                    style: {}
                }
            }
        },
        computed: {
            yesStyle () {
                let o = {};
                for (let key in this.style) {
                    o[key] = this.style[key]
                }
                return Object.assign(o, this.yes.style);
            },
            noStyle () {
                let o = {};
                for (let key in this.style) {
                    o[key] = this.style[key]
                }
                return Object.assign(o, this.no.style);
            }
        },
        mounted () {
           
        },
        methods: {
            success () {
                this.show = false;
               
            },
            cancel () {
                this.show = false;
            }
        }
    }
</script>