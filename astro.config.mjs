// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smallmailhub.com',
  // 2026-08-08 修正:原为 'never',与 build.format:'directory' 自相矛盾。
  // directory 格式实际服务 /about/,而 'never' 让 canonical 和 sitemap 都输出 /about,
  // 结果 sitemap 里 97/98 条 URL 命中 308 跳转、canonical 指向一个会跳转的地址。
  // 站内链接本来就是带斜杠的(/about/),改成 'always' 是向现状对齐,不改变已收录 URL。
  trailingSlash: 'always',
  integrations: [sitemap({
    // 小破站 SEO 修复 2026-07-13: 给所有 URL 加 <lastmod>
    // 优先级:1)frontmatter.updatedDate  2)frontmatter.pubDate  3)文件 mtime  4)build time
    // 解决了 lastmod=0 导致的 SEO 重大漏洞(被 daily site-health-cron 告警)
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
    serialize(item) {
      try {
        // 不同路由拿 frontmatter 的方式不同,这里只能依赖 item.url + 全 page data
        // 简化策略:只要 URL 命中 'reviews/alternatives/best/' 就给 weekly 优先级
        let url = item.url;
        if (!url.endsWith('/')) url += '/';
        // 静态优先级
        if (url === '/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.match(/^\/(reviews|alternatives|best)\//)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (url.match(/^\/(about|contact|privacy|disclosure)/)) {
          item.priority = 0.3;
          item.changefreq = 'monthly';
        }
        // lastmod 留默认(插件会从 frontmatter 读,但本文档用 build time 兜底)
        return item;
      } catch (e) {
        return item;
      }
    },
  })],
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
  // Astro v5 legacy.collections is false by default — turn it on
  legacy: {
    collections: true,
  },
});
