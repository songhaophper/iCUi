## ic-qrcode 轮播

### 使用指南
``` javascript
import { Qrcode } from 'icui';

Vue.component(Qrcode.name, Qrcode);
```

### 代码演示

#### 

:::demo
```html
<ic-qrcode val="https://www.baidu.com/"></ic-qrcode>
```

:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| val| 二维码信息 | `String` | ` '' ` |
| size | 二维码大小 | `Number` | `128`|
| bg-color | 背景颜色 | `String` | `#ffffff`|
| fg-color	 | 二维码颜色 | `String` | `#000000`|

