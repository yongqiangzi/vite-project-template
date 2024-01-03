/*
 * @Author: wanglei
 * @Date: 2023-12-24 10:40:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-01-03 20:07:39
 * @FilePath: \src\utils\require.ts
 * @Descripttion: 代替webpack版require
 */
const require = (imgPath: any) => {
  try {
    const handlePath = imgPath.replace('@', '..');
    // https://vitejs.cn/guide/assets.html#the-public-directory
    return new URL(handlePath, import.meta.url).href;
  } catch (error) {
    return false;
  }
};

export default require;
