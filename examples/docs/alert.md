<style>
.demo-toast {
  .van-button {
    margin-left: 15px;
  }
}
</style>


## iOS Alert

### 使用指南

```javascript
import { Alert } from 'icui';
```

### 代码演示

#### 文字提示

:::demo 文字提示
```html
<div @click="showAlert">alert 内容</div>
```

```javascript
export default {
  methods: {
    showAlert () {
        Alert('欢迎使用icui', {
          title: '提示',
          btn: {
            text: '确定',
            style :{
              'color': '#47c9bc'
            },
          }
        })
        .then(()=>{
          Toast('你点击了确定',2000);
        })
      },
  }
};
```
### Options

| 参数       | 说明      | 类型       | 默认值       | 
|-----------|-----------|-----------|-------------|
| title | 标题 | `String` | `'提示'` |
| btn | 按钮文案和样式| `Object` | `'默认配置'` |




