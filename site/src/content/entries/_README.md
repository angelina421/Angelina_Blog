# 双语内容目录

在这里添加项目、随笔和未来的英文笔记。文件名以下划线开头的说明文件不会发布。

示例 `en/projects/my-project.md`：

```yaml
---
locale: en
kind: project
title: "My project"
description: "A short introduction."
translationKey: my-project
pubDatetime: 2026-11-16T00:00:00+08:00
modDatetime: 2026-11-16T00:00:00+08:00
author: Angelina
---
```

可用的 `kind`：`note`、`project`、`essay`。中文内容放在 `zh-CN/`，英文放在 `en/`。同一内容的中英文版使用相同的 `translationKey`。
修改文章后更新 `modDatetime`；文章页和“最新”排序都使用这个日期。
