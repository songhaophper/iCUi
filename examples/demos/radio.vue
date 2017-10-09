
<template>
    <div>
       <ic-radio name="1" v-model="radio1">单选框1</ic-radio>
       <ic-radio name="2" v-model="radio1">单选框2</ic-radio>
       <ic-radio name="3" v-model="radio1">单选框3</ic-radio>
    </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1'
    };
  }
};
</script>
  