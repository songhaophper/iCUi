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
import { Toast } from 'icui';
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
      Toast('toast提示',2000);
    }
  }
}
```

:::
### Options

| 参数       | 说明      | 类型       | 默认值       | 
|-----------|-----------|-----------|-------------|
| content | 内容 | `String` | `''` |
| duration | 时长(ms) | `Number` | `1500` |




