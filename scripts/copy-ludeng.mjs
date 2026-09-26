// 2026-09-26：smallmailhub.com 改挂「路灯下写歌」作品站。Cloudflare Pages 构建时只把 ludeng-dist/ 原样复制成 dist/。
// 生成源在 ~/Projects/路灯下写歌网站（build.py），旧邮件站在分支 archive/email-site-2026-09-26。
import { cpSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
cpSync('ludeng-dist', 'dist', { recursive: true });
console.log('ludeng-dist -> dist');
