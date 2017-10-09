<template>
   <div slot="content">
      <p class="title">Slider 轮播</p>
      <div v-if="items.length" class="slide-wrapper">
        <div class="slide-content">
          <ic-slider :interval="2000">
            <div v-for="item in items">
              <a :href="item.linkUrl" target="_block">
                <img :src="item.picUrl">
              </a>
            </div>
          </ic-slider>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            linkUrl: 'https://www.baidu.com',
            picUrl: 'http://p1.music.126.net/fuQ4VCYBj-nbYvbSRxBkZg==/19216164719007635.jpg',
            id: 11351
          },
          {
            linkUrl: 'https://www.github.com',
            picUrl: 'http://p1.music.126.net/JnxqB8HC2tygUsOcdKDdQA==/19171084742269773.jpg',
            id: 11372
          }
        ]
      }
    }
  }
</script>

<style>
.title{
    text-align:center;
    margin:16px;
    font-size:20px;
}
.slide-wrapper{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
}
    
.slide-wrapper .slide-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
       
</style>