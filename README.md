# Rollup build typescript

`rollup --config`
`rollup --config --watch`




Q:*编写 node 项目使用 esm 规范，还是沿用 cjs 规范？*
A: 1. esm 未来主流标准，

Q:*浏览器缓存？*
A: 
  - 强制缓存(高优先级)
    - cache-control(高优先级) ：绝对时间
    - expires ：相对时间
  - 协商缓存
    - etag(高优先级) ：资源文件hash值
    - last-modified ：资源文件修改时间


## Reference

- 前端工程化 主要探讨方向 rollup webpack vite
  - [前端模块化详解(完整版)](https://segmentfault.com/a/1190000017466120)
  - [2023前端面试系列-- webpack & Git篇](https://juejin.cn/post/7196630860811075642)
  - [2024前端高频面试题之-- 前端工程化篇](https://juejin.cn/post/7350535815132659749)
  - [2024前端高频面试题之-- 前端工程化篇](https://juejin.cn/post/7350535815132659749)
  - [面试必备：常见的webpack / Vite面试题汇总](https://juejin.cn/post/7207659644487893051)
  - [前端，通过面试去学习，工程化（webpack、rollup、parcel、tree-shaking、babel）](https://blog.csdn.net/IronKee/article/details/122204906)
- Http 缓存 强缓存&弱缓存