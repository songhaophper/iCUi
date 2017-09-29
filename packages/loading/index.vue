<template>
  <div class="Infinite-loading-3ZpH">
          <div class="Spinner-root-1qUQ" :style="stylesheet">
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
            <span class="Spinner-blade-2zCD"></span>
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
