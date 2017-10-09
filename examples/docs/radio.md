## Switch 滑动开关

### 使用指南
``` javascript
import { Radio } from 'icui';

Vue.component(Radio.name, Radio);
```

### 代码演示

#### 

:::demo
```html
<ic-radio name="1" v-model="radio">单选框1</ic-radio>
<ic-radio name="2" v-model="radio">单选框2</ic-radio>
<ic-radio name="3" v-model="radio">单选框3</ic-radio>
```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| name | 根据这个来判断radio是否选中 | `Boolean` | false|

