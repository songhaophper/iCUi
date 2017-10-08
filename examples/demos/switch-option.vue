<template>
  <section>
    <ic-switch :name="On" :value="true"></ic-switch>
    <ic-switch :name="Off" :value="false"></ic-switch>
  </section>
</template>
<script>
export default {
    data (){
        return {
            On:'On',
            Off:'Off'
        }
    }
}
</script>
<style>
</style>
    
  