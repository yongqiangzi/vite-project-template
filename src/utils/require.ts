/*
 * @Author: wanglei
 * @Date: 2023-12-24 10:40:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-01-04 13:14:48
 * @FilePath: \src\utils\require.ts
 * @Descripttion: 代替webpack版require
 * 使用示例require('images/xxx.png')，就可以动态引入图片
 */
const require = (imgPath: any) => {
  try {
    // https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url
    return new URL(`../assets/${imgPath}`, import.meta.url).href;
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export default require;
