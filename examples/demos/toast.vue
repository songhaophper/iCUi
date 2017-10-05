
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
        height:30px;
        font-size:12px;
        margin-top:30px;
        color:#fff;
        position:absolute;
        left:50%;
        margin-left:-50px;
        border-radius:3px;
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
  