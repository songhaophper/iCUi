<template>
    <div>
        <div class="ic-radio">
            <span class="ic-radio-input">
                <input type="radio" class="ic-radio-control"
                    :value="name"
                    v-model="currentValue"
                >
                <span class="ic-icon" :class="{
                    'ic-icon-checked': currentValue === name,
                    'ic-icon-check': currentValue !== name
                }"></span>
            </span>
            <span class="ic-radio-label" @click="handleLabelClick">
                <slot></slot>
            </span>
        </div>
    </div>
</template>
<script>
    const COMPONENT_NAME = 'ic-radio'
    export default {
        name: COMPONENT_NAME,
        props :{
            value: {},
            name: [String, Number]
        },
        computed :{
            currentValue : {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val);
                }
            }
        },
        methods :{
            handleLabelClick() {
                this.currentValue = this.name;
            },
        }
    }
</script>