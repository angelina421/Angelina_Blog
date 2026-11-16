import type { UIStrings } from "../types";

export default {
  nav: { home: "首页", posts: "笔记", series: "系列", tags: "标签", about: "关于", archives: "归档", search: "搜索" },
  post: {
    publishedAt: "发布于", updatedAt: "更新于", sharePostIntro: "分享这篇笔记：",
    sharePostOn: "分享到 {{platform}}", sharePostViaEmail: "通过邮件分享", tagLabel: "标签",
    backToTop: "返回顶部", goBack: "返回", editPage: "编辑页面",
    previousPost: "上一篇", nextPost: "下一篇",
  },
  pagination: { prev: "上一页", next: "下一页", page: "第" },
  home: { socialLinks: "其他链接", featured: "精选笔记", recentPosts: "最近笔记", allPosts: "全部笔记" },
  footer: { copyright: "版权", allRightsReserved: "保留所有权利。" },
  pages: {
    tagTitle: "标签", tagDesc: "这个标签下的全部文章",
    tagsTitle: "标签", tagsDesc: "按标签浏览笔记。",
    postsTitle: "笔记", postsDesc: "全部技术笔记。",
    archivesTitle: "归档", archivesDesc: "按时间浏览笔记。",
    seriesTitle: "系列", seriesDesc: "按顺序阅读相关笔记。",
    searchTitle: "搜索", searchDesc: "搜索所有笔记。",
  },
  a11y: {
    skipToContent: "跳转到正文", openMenu: "打开菜单", closeMenu: "关闭菜单",
    toggleTheme: "切换明暗主题", searchPlaceholder: "搜索笔记…", noResults: "没有找到结果",
    goToPreviousPage: "前往上一页", goToNextPage: "前往下一页",
  },
  notFound: { title: "404 页面不存在", message: "没有找到这个页面", goHome: "返回首页" },
} satisfies UIStrings;
