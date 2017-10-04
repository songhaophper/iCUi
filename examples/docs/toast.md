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
      Toast('我是提示文案，建议不超过十五字~');
    }
  }
};
</script>

## Toast 轻提示

### 使用指南

```javascript
import { Toast } from 'vant';
```

### 代码演示

#### 文字提示

:::demo 文字提示
```html
<div @click="showToast">文字提示</div>
```

```javascript
export default {
  methods: {
    showToast() {
      Toast('我是提示文案，建议不超过十五字~');
    }
  }
}
```



