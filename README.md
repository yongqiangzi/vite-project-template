### 通过不同环境读取不同配置文件

1. .env.development - 开发环境
2. .env.production - 生产环境
3. .env.test - 测试环境

### 各环境打包命令

1. pnpm run build:prod - 生产环境打包
2. pnpm run build:dev - 测试环境打包

### git commit 注释前缀

```
'feat', //新特性、新功能
'fix', //修改bug
'docs', //文档修改
'style', //代码格式修改, 注意不是 css 修改
'refactor', //代码重构
'perf', //优化相关，比如提升性能、体验
'test', //测试用例修改
'chore', //其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert', //回滚到上一个版本
'build', //编译相关的修改，例如发布版本、对项目构建或者依赖的改动
```
