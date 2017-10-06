
    <template>
      <section class="demo-toast">
         <button class="ic-button" @click="confirm">原生iOS Confirm</button>
      </section>
    </template>
    <style>
</style>
<script>
import { Confirm ,Toast} from 'packages';

export default {
  methods: {
    confirm () {
        Confirm('欢迎使用 icui', {
          title: '提示',
          style: {
            'font-size': '16px',
            'color': '#47c9bc'
          },
          yes: {
            text: '新按钮',
            style: {
              'font-size': '16px'
            }
          },
          no: {
            text: '取消',
            style: {}
         }
        })
          .then(()=>{
            Toast('你点击了确定');
          })
          .catch(()=>{
            Toast('你点击了取消');
          })
      },
  }
};
</script>
  