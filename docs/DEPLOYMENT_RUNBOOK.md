# Cloudflare Pages 部署执行手册 — smallmailhub.com

## 进度状态

- [x] 域名 smallmailhub.com 已注册（阿里云，¥85/首年，微信支付，2026-07-02）
- [x] Cloudflare 账号已登录（zengweidao0603@gmail.com）
- [x] 18 个页面已构建完毕（dist/ 目录 236KB）
- [x] sitemap / robots.txt / canonical / OG meta 已就绪
- [x] GA4 / GSC 占位变量已配置（部署后填环境变量）
- [ ] **Cloudflare 添加站点（NS 记录获取）— 导哥明早第一件事**
- [ ] **阿里云修改 NS 指向 Cloudflare — 导哥明早第二件事**
- [ ] **GitHub repo 创建 + Pages 部署 — 协作**
- [ ] **Pages 绑定 custom domain — 协作**
- [ ] **SSL 自动 + 验证 — 自动**
- [ ] **Google Search Console 提交 sitemap**

---

## Step 1 — Cloudflare 添加站点

**入口：** https://dash.cloudflare.com/

**操作：**
1. 右上角 `+ Add a site`
2. 输入 `smallmailhub.com`
3. 选 **Free** 套餐（$0/月）
4. 跳过 Quick scan DNS records（直接 Continue）
5. Cloudflare 给你两条 NS（截图或复制下来）

**预期 NS 格式：**
```
xxx.ns.cloudflare.com   ← 两条之一
yyy.ns.cloudflare.com   ← 两条之二
```

**关键截图点：**
- 成功添加后显示 "Set up DNS records" 页面 → 直接 Continue
- 最后 Cloudflare 显示一个 "Great news!" 页面，里面有两个 NS 服务器地址

---

## Step 2 — 阿里云修改 NS 指向 Cloudflare

**入口：** 阿里云 APP → 域名控制台 → smallmailhub.com

**操作路径：**
1. 阿里云 APP 首页 → "我的" → "我的域名" 或搜索"域名控制台"
2. 找到 smallmailhub.com → 进入详情
3. 找 "DNS 修改" / "修改 DNS 服务器" 按钮
4. 把 Cloudflare 给的两条 NS 填进去（替换阿里云默认的 5 条 ns1-5.aliyun.com）
5. 保存

**注意：**
- 阿里云通常要发短信验证码（用 19278948808 手机收）
- 修改 NS 会让域名 "脱离" 阿里云 DNS 解析（但域名仍归你所有）
- 修改后需要 30 分钟 - 48 小时全球生效

---

## Step 3 — 等待 NS 全球生效

在 Cloudflare Dashboard → smallmailhub.com → Overview → 顶部会显示：
- "Active" — 已生效
- "Pending" — 等待中

**通常 30 分钟 - 2 小时。** 我会主动查 Cloudflare API 帮你监控。

---

## Step 4 — GitHub 仓库 + Cloudflare Pages 部署

**操作：**

### 4.1 创建 GitHub repo

**入口：** https://github.com/new

- 仓库名：`smallmailhub`（或 `mailpilot-site`）
- 公开 / 私有都行（公开方便 Pages 访问，但私有 + Cloudflare Pages 也支持）
- 不勾选 Initialize with README（我们已经有代码了）

### 4.2 推送代码

```bash
cd ~/Desktop/mailpilot-site
git init
git add .
git commit -m "Initial site: 18 pages, SEO-optimized Astro build"
git branch -M main
git remote add origin https://github.com/<your-username>/smallmailhub.git
git push -u origin main
```

（需要 GitHub 登录态，导哥你电脑操作 / 我用你的 PAT 推）

### 4.3 Cloudflare Pages 接入 GitHub

**入口：** Cloudflare Dashboard → Workers & Pages → Pages → Create application → Pages → Connect to Git

- 选 GitHub → 授权 → 选 `smallmailhub` repo
- Project name: `smallmailhub`
- Production branch: `main`
- Build command: `bun run build`
- Build output directory: `dist`
- Environment variables:
  - `PUBLIC_GA4_ID` = `G-XXXXXXXXXX`（稍后填，先空着也行）
  - `PUBLIC_GSC_VERIFICATION` = Google Search Console 验证码（稍后填）
- Save and Deploy

### 4.4 自动部署

首次构建大约 1-3 分钟。完成后 Cloudflare 给你一个 `smallmailhub.pages.dev` 临时域名，可以立刻预览。

---

## Step 5 — Pages 绑定 custom domain

**入口：** Cloudflare Pages 项目 → Custom domains → Set up a custom domain

**操作：**
1. 输入 `smallmailhub.com`
2. Cloudflare 自动检测 DNS 记录（因为 NS 已切到 Cloudflare）→ 自动添加 CNAME 记录
3. 等待 SSL 证书签发（1-5 分钟）
4. 完成 → smallmailhub.com 显示 Active

---

## Step 6 — 验证网站上线

打开浏览器访问 https://smallmailhub.com 检查：
- 首页正常加载
- 至少 3 个页面可以打开（/reviews/mailerlite, /alternatives/mailchimp-alternatives-for-small-business, /best/best-email-marketing-tools-for-small-business）
- sitemap-index.xml 可访问
- favicon 正常显示

---

## Step 7 — Google Search Console 提交

**入口：** https://search.google.com/search-console/

1. 用 zengweidao0603@gmail.com 登录
2. Property type: URL prefix
3. 输入 `https://smallmailhub.com`
4. 验证方式：HTML tag（最简单）
5. 把 Google 提供的 `<meta name="google-site-verification" content="XXX" />` 里的 `XXX` 字符串复制
6. 把这个字符串填到 Cloudflare Pages 的 `PUBLIC_GSC_VERIFICATION` 环境变量
7. 等下一次自动部署（push 任何改动或手动 Retry）
8. 验证成功后，GSC → Sitemaps → 提交 `https://smallmailhub.com/sitemap-index.xml`

---

## Step 8 — Google Analytics 4

**入口：** https://analytics.google.com/

1. 用 zengweidao0603@gmail.com 登录
2. 创建新 GA4 property
3. 拿到 Measurement ID 格式 `G-XXXXXXXXXX`
4. 填到 Cloudflare Pages 的 `PUBLIC_GA4_ID` 环境变量
5. 等下一次部署生效

---

## 总成本确认

| 项目 | 金额 | 周期 |
|------|------|------|
| 域名 smallmailhub.com | ¥85（已付） | 首年 |
| 续费 | ¥79/年 | 次年起 |
| Cloudflare Pages | $0 | 永久 |
| SSL | $0 | 永久 |
| GA4 / GSC | $0 | 永久 |

**首年总成本：¥85（约 $12）**
**次年：¥79（约 $11）**

---

## 关键注意事项

- **NS 修改会让域名 "脱离" 阿里云 DNS 解析**，但域名所有权不变
- 阿里云默认 DNS 解析（A 记录、MX 记录）会失效，需要在 Cloudflare 重新设置（但小破站暂不需要）
- Pages 部署后所有更新只需 git push，自动重新构建
- GA4 + GSC 验证不阻塞站点上线，可以后补