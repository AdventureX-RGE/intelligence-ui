# Intelligence-UI

<insert OG>

Intelligence-UI 是一套轻松易用的 React 组件库，基于 [React Aria Components](https://react-spectrum.adobe.com/react-aria/getting-started.html?ref=getjustd.com) 构建，致力于保持网页的可访问性。组件易于自定义，可以直接复制粘贴到你的 React 项目中。此外，它还内置了 Tailwind CSS，让你可以直接获得精美的样式效果。

## 开发前必看

本项目是在[Intelligence-UI](https://github.com/irsyadadl/justd/)的基础上开发的，这是一个类似于 shadcn-ui 的组件库

在原作者的基础上，我做了如下几点修改：

1. 将项目改为[monorepo](https://monorepo.tools/)架构，这是一种很好的架构思想
2. 引入 [Turborepo](https://turbo.build/)，可以带来高性能的构建
3. 将 bun 改为 node 环境（不太敢用太新的东西，为了稳步开发，可以牺牲一些速度）
4. 基于 adventureX 的需要，进行组件样式和逻辑的调整
5. 添加缺失的依赖

本项目的基础目录结构如下

```
- apps
  - ui：组件以及组件库的官网
- packages
  - cli：cli 执行
```

## 如何调试

所有便于开发者进行调试的命令都被放在了根目录的`package.json`中，例如运行命令，你无需 cd 到对应的目录进行测试

```bash
pnpm dev # 根目录运行即可
```

### 组件库开发规范

这里以添加一个 button 组件为例子

### cli 开发规范

根目录运行如下命令进行测试，会为你创建一个全局的 link

```bash
pnpm test:cli
```

在你需要测试的目录执行

```bash
pnpm link @adventure-x/intelligence-cli --global
```

### 分支规范

使用`feat/xxx`来代表增添新功能，使用`hotfix/xxx`代表线上 bug 的修复

使用 `dev` 分支作为上线前的预览分支，只有这个分支可以合并到 main 分支，且务必提 pr

### 提交规范

本项目使用 husky 执行 git hooks，请你按照如下的规范进行提交，且禁止向 main 分支强制推送

```
"feat": 添加新的功能或特性
"fix": 修复代码缺陷或问题
"docs": 修改文档、注释或 README
"chore": 构建过程或辅助工具的变动，不影响源代码
"style": 代码格式修改（空格、格式化、分号等）
"refactor": 重构代码，不涉及新功能或修复
"ci": CI 配置文件和脚本的修改
"test": 添加或修改测试用例
"revert": 回滚之前的提交
"perf": 提升性能的代码更改

git commit -m "feat: add a button"
```

## 项目的特点

- 基于 TailwindCSS4
- HeadlessUI 组件思想，如果你没有听说过这个思想，可以先初始化一个基于 nextjs 的 tailwindcss 项目，然后按照指导使用本组件库
