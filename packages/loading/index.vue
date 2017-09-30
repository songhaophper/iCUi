<template>
  <div class="Infinite-loading">
          <div class="Spinner-root" :style="stylesheet">
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
            <span class="Spinner-blade"></span>
          </div>
  </div>
</template>
<script>
  export default {
    name :'ic-loading',
    props :{
      size :{
        type :Number,
        default :20
      }
    },
    data() {
      return {
        stylesheet:`width:${this.size}px;height:${this.size}px`
      }
    }
  }
</script>
