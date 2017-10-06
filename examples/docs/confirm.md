<style>
.demo-toast {
  .van-button {
    margin-left: 15px;
  }
}
</style>


## iOS Confirm

### 使用指南

```javascript
import { Confirm } from 'icui';
```

### 代码演示

#### 文字提示

:::demo 文字提示
```html
<div @click="showConfirm">confirm 内容</div>
```

```javascript
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
      }
  }
};
```
### Options


| 参数       | 说明      | 类型       | 默认值       | 
|-----------|-----------|-----------|-------------|
| title | 标题 | `String` | `'提示'` |
| style | 样式 | `Object` | `'默认配置'` |
| yes | 确定按钮文案和样式| `Object` | `'默认配置'` |
| no | 取消按钮文案和样式| `Object` | `'默认配置'` |


