# Angelina Blog

> 把好奇，写成自己的路。

这是我的个人 Blog，也是一本持续更新的公开笔记。我在这里整理学到的知识、动手做过的工程，以及偶尔值得写下来的想法。希望每篇内容都清楚、好读，过一段时间再回来，依然能帮我找到当时的思路。

网站提供中文和英文界面，支持手机与电脑阅读。现有文章以中文为主，英文译文会逐篇补充。

## 这里有什么

| 栏目 | 内容 |
| --- | --- |
| 关于 | 这个 Blog 的由来与我的写作方式 |
| 知识 | 按系列整理的学习笔记，目前从 **Linux 入门** 开始 |
| 工程 | 从实际问题出发做的小工具、实验和项目 |
| 随笔 | 关于学习、创造和生活的零散思考 |

**Linux 入门**目前有五篇文章，按学习顺序阅读：Linux 系统安装 → Shell 常见命令 → Linux 与 Windows 交互 → Linux 文件系统 → Linux 网络配置。工程与随笔栏目已准备好，内容会逐步加入。

## 网站

这个站点使用 Astro 构建，并在 [AstroSage](https://github.com/chintak/astro-sage) 的阅读主题基础上调整了首页、导航和双语入口。文章用 Markdown 编写，站点以静态文件发布，支持站内搜索、明暗主题和响应式布局。

项目的主要目录：

```text
site/   页面、配置、文章和图片
theme/  本项目使用的 AstroSage 主题源码
```

新增项目、随笔或英文译文的字段说明见 [内容目录说明](site/src/content/entries/_README.md)。更新 Linux 笔记时，请同步修改文章开头的 `modDatetime`，知识页的“最新”排序会使用这个日期。

## 本地运行

需要 Node.js 22.12 或更新版本。在仓库根目录执行：

```bash
npm ci
npm run dev
```

构建与检查：

```bash
npm run build
npm run check
```

生成的网站位于 `site/dist/`。

## 发布到 GitHub Pages

1. 将这个文件夹中的内容放在新仓库的**根目录**，使用 `main` 作为分支。
2. 在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
3. 推送后，仓库中的 [发布工作流](.github/workflows/pages.yml) 会构建、检查并发布网站。它会根据仓库名称自动处理 GitHub Pages 的网址路径。

发布时，页脚的 GitHub 链接会自动指向当前仓库。本地预览如需显示该链接，可设置 `BLOG_GITHUB_URL`。使用其他托管服务时，可通过 `BLOG_SITE_URL` 设置网站网址；若网站位于子路径，再设置 `BLOG_BASE_PATH`。站点的其他信息在 [配置文件](site/sage.config.ts) 中修改。

## 图片与主题

首页摄影图片来自 Unsplash：[Amal K Raju](https://unsplash.com/photos/abstract-architectural-lines-with-light-and-shadow-qaO04vmpMd8)、[Ivona Rož](https://unsplash.com/photos/books-sit-open-on-a-desk-illuminated-by-light-qPQX5q6Su5w)、[Lazar Stankovic](https://unsplash.com/photos/laptop-screen-with-system-monitoring-terminal-d8o0hJ1NZ1c)、[Duc Nguyen](https://unsplash.com/photos/modern-concrete-entryway-with-stairs-leading-up-e8o4kG2aRkg) 和 [Priscilla Du Preez](https://unsplash.com/photos/a-cup-of-coffee-and-a-notebook-on-a-table-CeW--PHwpGc)。图片已放在项目中，页面不依赖外部图片链接。

AstroSage 主题的原始 MIT 许可声明保留在 [LICENSE](LICENSE) 和 [theme/LICENSE](theme/LICENSE) 中。

---

**English:** Angelina Blog is a personal space for notes, projects, and essays. The site has Chinese and English interfaces; article translations are being added gradually. The knowledge section currently begins with a five-part introduction to Linux.
