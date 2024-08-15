# Rollup build typescript

`rollup --config`
`rollup --config --watch`

Q:_编写 node 项目使用 esm 规范，还是沿用 cjs 规范？_
A: 1. esm 未来主流标准，

Q:_浏览器缓存？_
A:

- 强制缓存(高优先级)
  - cache-control(高优先级) ：绝对时间
  - expires ：相对时间
- 协商缓存
  - etag(高优先级) ：资源文件 hash 值
  - last-modified ：资源文件修改时间

## Reference

- 前端工程化 主要探讨方向 rollup webpack vite
  - [前端模块化详解(完整版)](https://segmentfault.com/a/1190000017466120)
  - [2023 前端面试系列-- webpack & Git 篇](https://juejin.cn/post/7196630860811075642)
  - [2024 前端高频面试题之-- 前端工程化篇](https://juejin.cn/post/7350535815132659749)
  - [2024 前端高频面试题之-- 前端工程化篇](https://juejin.cn/post/7350535815132659749)
  - [面试必备：常见的 webpack / Vite 面试题汇总](https://juejin.cn/post/7207659644487893051)
  - [前端，通过面试去学习，工程化（webpack、rollup、parcel、tree-shaking、babel）](https://blog.csdn.net/IronKee/article/details/122204906)
- Http 缓存 强缓存&弱缓存

Q:_快速填充数组?_
A:

1. `new Array(3).fill(120)` 填充的值是引用，一改全改了
2. `Array.from({length:3},()=>120)` 填充的值是复制，只会改一个
3. `[...new Array(3).keys()]` 能用但是不灵活

Q:_暂时性死区？_
A:

- `var` 关键字 用来声明变量，**作用域：全局作用域**、**变量提升：存在变量提升**、**重复声明：允许重复声明**
- `let` 关键字 用来声明变量，**作用域：块级作用域**、**变量提升：暂时性死区**、**重复声明：不允许**
- `const` 关键字 用来声明常量，**作用域：块级作用域**、**变量提升：暂时性死区**、**重复声明：不允许**

Q:_`Number.isNaN(xx) & isNaN(xx)?`_
A: `Number.isNaN()`先判断是否是 number，再判断是否

Q:_js 数据类型？_
A:

- 基本数据类型：string、number、boolean、undefined、null、symbol、bigint
- 引用数据类型：object、function、array

Q:_js 判断类型的方法？_
A:

- `typeof 12 === 'number'` 能够判断 string、number、boolean、undefined、functoin、symbol、bigint
- `([]) instanceof Array`

在 JavaScript 中，判断数据类型的方法有很多，每种方法都有其特点和适用场景。以下是几种常见的判断数据类型的方法及其使用说明：

选择合适的方法取决于你的具体需求和上下文。

## cookie

Cookie 是一种由 Web 服务器创建并存储在用户浏览器中的小型数据文件。它们用于在用户的浏览器和服务器之间存储状态信息。Cookies 的主要用途包括保存用户的登录状态、跟踪用户行为以及个性化用户体验。

### Cookies 的基本概念

1. **定义**：

   - **Cookie** 是由服务器发送到浏览器的文本数据，浏览器会在后续的请求中自动附带这些数据。

2. **结构**：
   - 一个 Cookie 通常包含以下几个部分：
     - **名称**：Cookie 的名称。
     - **值**：Cookie 的值。
     - **过期时间**：Cookie 失效的时间。如果未设置过期时间，则 Cookie 在会话结束时（浏览器关闭时）会被删除。
     - **域**：指定哪些域名可以访问该 Cookie。
     - **路径**：指定在 Cookie 所在域名下哪些路径可以访问该 Cookie。
     - **安全性**：标记 Cookie 仅通过 HTTPS 连接传输（`Secure` 属性）。
     - **HttpOnly**：标记 Cookie 只能被服务器访问，不能被客户端 JavaScript 访问（`HttpOnly` 属性）。

### Cookie 的创建与管理

#### 1. 创建 Cookie

- **服务器端设置**：
  服务器通过 HTTP 响应头中的 `Set-Cookie` 字段设置 Cookie。例如：

  ```http
  Set-Cookie: user=JohnDoe; expires=Fri, 01 Jan 2025 12:00:00 GMT; path=/; domain=example.com; secure; HttpOnly
  ```

- **客户端设置**：
  可以使用 JavaScript 通过 `document.cookie` 属性设置 Cookie。例如：
  ```javascript
  document.cookie =
    "username=JohnDoe; expires=Fri, 01 Jan 2025 12:00:00 GMT; path=/";
  ```

#### 2. 读取 Cookie

- 使用 `document.cookie` 读取当前域下的所有 Cookie。它返回一个包含所有 Cookie 的字符串。
  ```javascript
  console.log(document.cookie);
  ```

#### 3. 删除 Cookie

- 要删除 Cookie，可以设置过期时间为过去的时间。例如：
  ```javascript
  document.cookie =
    "username=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  ```

### Cookie 的属性

1. **`expires`**：

   - **描述**：指定 Cookie 的过期时间。如果未设置，Cookie 会在会话结束时被删除。
   - **示例**：`expires=Fri, 01 Jan 2025 12:00:00 GMT`

2. **`max-age`**：

   - **描述**：指定 Cookie 的最大生存时间（以秒为单位）。`max-age` 优先于 `expires`。
   - **示例**：`max-age=3600`（表示 Cookie 在 1 小时后过期）

3. **`path`**：

   - **描述**：指定 Cookie 的适用路径。Cookie 仅在指定路径下可用。
   - **示例**：`path=/`（表示 Cookie 对整个域名下的路径都有效）

4. **`domain`**：

   - **描述**：指定 Cookie 的适用域名。通常设置为当前域名及其子域名。
   - **示例**：`domain=example.com`

5. **`secure`**：

   - **描述**：指定 Cookie 仅通过 HTTPS 连接传输。
   - **示例**：`secure`

6. **`HttpOnly`**：
   - **描述**：指定 Cookie 只能通过 HTTP 协议访问，不能通过 JavaScript 访问。
   - **示例**：`HttpOnly`

### Cookie 的安全性和隐私

- **安全性**：

  - **`Secure` 属性**：确保 Cookie 仅通过加密的 HTTPS 连接发送，防止在不安全的 HTTP 连接中泄露。
  - **`HttpOnly` 属性**：防止 JavaScript 访问 Cookie，减少跨站脚本攻击（XSS）的风险。

- **隐私**：
  - **第三方 Cookies**：可能用于跟踪用户在不同网站之间的行为。浏览器通常允许用户管理和阻止第三方 Cookies，以提高隐私保护。

### 使用场景

1. **会话管理**：

   - 用于保存用户的登录状态和会话信息。

2. **个性化设置**：

   - 保存用户的个性化设置和偏好，如语言和主题。

3. **跟踪和分析**：

   - 用于跟踪用户行为，进行分析和广告投放。

4. **购物车**：
   - 保存用户的购物车信息，以便在不同页面或会话中恢复购物车状态。

### 总结

Cookie 是一种简单而强大的机制，用于在用户浏览器中存储和传递状态信息。尽管 Cookie 有其便利性，但在使用时需要注意安全性和隐私问题，尤其是在处理敏感数据时。了解和合理使用 Cookie 属性，可以帮助提升用户体验并确保数据安全。

## use strict 严格模式

- 消除 js 语法不合理之处，减少怪异行为
- 的代码运行更安全
- 编译器效率更高，增加运行速率
- 禁用 with 语句
- 禁止 this 指向全局
- 对象不能重名属性

## DOM 文档对象模型 BOM 浏览器对象模型

- BOM : window、navigator、screen、location、history
- DOM : 对 html 进行操作 的 api
