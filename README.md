# 老张 · 纺织制造数字化笔记

极简风格的个人博客，基于 [Astro](https://astro.build) 静态生成。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:4321
```

## 写文章

在 `src/content/posts/` 下新建 `.md` 文件，头部格式：

```yaml
---
title: 文章标题
date: 2026-09-12
topic: MES 实施        # 纺织数字化 / MES 实施 / AI 落地 / 项目交付 / 方案与销售
excerpt: 一句话摘要，显示在首页列表
readTime: 9 分钟阅读
---
```

保存后首页自动收录，无需改任何代码。

## 构建与部署

```bash
npm run build     # 产物在 dist/
```

- **Cloudflare Pages / Vercel**：连 GitHub 仓库，构建命令 `npm run build`，输出目录 `dist`
- **国内方案**：腾讯云 EdgeOne Pages 同理，域名需 ICP 备案

上线前记得把 `astro.config.mjs` 里的 `site` 改成你的真实域名。
