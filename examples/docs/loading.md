<style>
.demo-loading {
  .van-loading {
    display: inline-block;
    margin: 10px 0 10px 20px;
  }
}
</style>

## Loading 加载

### 使用指南
``` javascript
import { Loading } from 'icui';

Vue.component(Loading.name, Loading);
```

### 代码演示

#### 原生 iOS Loading

:::demo
```html
<ic-loading :size = "20"></ic-loading>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| size | loading的大小 | `Number` | 20|

