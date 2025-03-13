# Intelligence-UI

<insert OG>

Intelligence-UI 是一套轻松易用的 React 组件库，基于 [React Aria Components](https://react-spectrum.adobe.com/react-aria/getting-started.html?ref=getjustd.com) 构建，致力于保持网页的可访问性。组件易于自定义，可以直接复制粘贴到你的 React 项目中。此外，它还内置了 Tailwind CSS，让你可以直接获得精美的样式效果。

## 开发前必看

本项目是在[Justd](https://github.com/irsyadadl/justd/)的基础上开发的，这是一个类似于 shadcn-ui 的组件库

在原作者的基础上，我做了如下几点修改：

1. 将项目改为[monorepo](https://monorepo.tools/)架构，这是一种很好的架构思想
2. 引入 [Turborepo](https://turbo.build/)，可以带来高性能的构建
3. 将 bun 改为 node 环境（不太敢用太新的东西，为了稳步开发，可以牺牲一些速度）
4. 基于 adventureX 的需要，进行组件样式和逻辑的调整
5. 添加缺失的依赖

### 提交规范

```

```

## 项目的特点

- 基于 TailwindCSS4
- HeadlessUI 组件思想，如果你没有听说过这个思想，可以先初始化一个基于 nextjs 的 tailwindcss 项目，然后按照指导使用本组件库
