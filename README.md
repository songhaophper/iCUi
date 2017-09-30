## iCUi

一套基于`Vue.js 2.0`的 Mobile 组件库

### 安装

```shell
npm i icui -S
```

### 引入组件

#### 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { "libraryName": "icui", "style": true }]
     ]
   }
   ```
   
   接着你可以直接引入 iCUi 组件，等价于下方的按需引入组件

   ```js
   // 模块化地引入 js 和 css, 通过 babel-plugin-import 插件解析
   import { Button } from 'icui';
   ```

#### 按需引入组件

   ```jsx
   import { Button } from 'icui/lib/button';
   import 'icui/lib/icui-css/button.css';
   ```
 
#### 导入所有组件
 
```javascript
import Vue from 'vue';
import icui from 'icui';
import 'icui/lib/icui-css/index.css';

Vue.use(icui);
```
## Preview

![image](https://qr.api.cli.im/qr?data=http%253A%252F%252F118.190.69.137%253A5678&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=d8d83cde61dc22a9c5ebd4c4b72fa481)