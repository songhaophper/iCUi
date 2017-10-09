## Slider 轮播

### 使用指南
``` javascript
import { Slider } from 'icui';

Vue.component(Slider.name, Slider);
```

### 代码演示

#### 

:::demo
```html
<ic-slider :interval="2000">
    <div v-for="item in items">
        <a :href="item.linkUrl" >
        <img :src="item.picUrl">
        </a>
    </div>
</ic-slider>
```

```js
export default {
    data() {
        return {
            items: [
                {
                    linkUrl: 'https://www.baidu.com',
                    picUrl: '123.jpg'
                },
                {
                    linkUrl: 'https://www.github.com',
                    picUrl: '456.jpg'
                }
            ]
        }
    }
}

```
:::

### Options

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| loop | 是否循环播放 | `Boolean` | true|
| autoPlay | 自动播放 | `Boolean` | true|
| interval | 切换时间 | `Nubmber` | 4000|
| showDot | 指示灯 | `Boolean` | true|
| click | 允许点击 | `Boolean` | true|

