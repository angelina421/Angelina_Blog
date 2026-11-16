import { defineSageConfig } from "astro-sage";

const githubRepository = process.env.BLOG_GITHUB_URL ??
  (process.env.GITHUB_REPOSITORY ? `https://github.com/${process.env.GITHUB_REPOSITORY}` : undefined);

export default defineSageConfig({
  site: {
    // Set this to the final domain before publishing for canonical links and RSS.
    url: process.env.BLOG_SITE_URL ?? "https://example.com/",
    title: "Angelina Blog",
    description: "Angelina 的双语 Blog：Linux 入门、工程项目与随笔。",
    author: "Angelina",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  home: {
    title: "Angelina Blog",
    intro: "记录学习时的好奇，整理实践中的答案。这里是持续生长的个人知识库。",
  },
  typography: { serif: "source-serif-4" },
  posts: { perPage: 12, perIndex: 8, scheduledPostMargin: 15 * 60 * 1000 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: false,
    search: "pagefind",
  },
  socials: githubRepository ? [{ name: "github", url: githubRepository }] : [],
});
