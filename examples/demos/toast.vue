
    <template>
      <section class="demo-toast">
         <button class="ic-button" @click="showToast">Toast 轻提示</button>
      </section>
    </template>
    <style>
.demo-toast {
  .ic-button {
        width:100px;
        background: #47c9bc;
        text-align:center;
        height:40px;
        font-size:12px;
        color:#fff;
        position:absolute;
        left:50%;
        top:50%;
        margin-top:-40px;
        margin-left:-50px;
        border-radius:6px;
  }
}
</style>
<script>
import { Toast } from 'packages';

export default {
  methods: {
    showToast() {
      Toast('this is a toast',2000);
    }
  }
};
</script>
  