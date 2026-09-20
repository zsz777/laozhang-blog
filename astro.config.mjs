import { defineConfig } from 'astro/config';

// 静态输出，构建产物在 dist/，可直接部署到 Cloudflare Pages / Vercel / EdgeOne Pages
export default defineConfig({
  site: 'https://example.com', // 上线后改成你的真实域名
  title: '老张 · 纺织制造数字化笔记',
});
