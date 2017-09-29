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
import iCUi from 'icui';
import 'icui/lib/icui-css/index.css';

Vue.use(iCUi);
```
