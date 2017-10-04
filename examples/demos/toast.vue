
    <template>
      <section class="demo-toast">
        <p @click="showToast">this is a toast </p>
      </section>
    </template>
    <style>
.demo-toast {
  .van-button {
    margin-left: 15px;
  }
}
</style>
    <script>
import { Toast } from 'packages';

export default {
  methods: {
    showToast() {
      Toast('this is a toast');
    }
  }
};
</script>
  