<template>
  <div class="qrContainer">
    <p>二维码</p>
    <ic-qrcode val="https://www.baidu.com/" :size="160"></ic-qrcode>
  </div>
</template>
<style>
  .qrContainer{
      text-align:center;
      margin-top:20px;
  }
  .qrContainer p{
      margin-bottom:20px;
      font-size:20px;
  }
</style>
    
  