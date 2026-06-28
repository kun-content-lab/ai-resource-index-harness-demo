# 项目说明：AI 资料索引站

## 目标

做一个小型 AI 资料索引站，用来展示 GitHub 如何承接 AI 工作流。

第一版不是追求完整内容库，而是先跑通一条可维护的工作链：

- 背景先进入 Discussion。
- 共识转成 parent issue。
- 执行拆成 task issue。
- 状态进入 Project board。
- 改动进入 PR。
- 证据回填到 comment。

## 第一版范围

### In

- 资料主题分类。
- 5-8 条示例资料。
- 一个静态首页。
- 一个 evidence comment 模板。
- 一个可 review 的 PR。

### Out

- 不做登录。
- 不做数据库。
- 不做搜索后端。
- 不做真实部署。

## 资料分类

| 分类 | 用途 |
|---|---|
| Agent basics | 解释 agent、tool use、agent loop |
| Context engineering | 解释上下文工程和资料组织 |
| Workflow control plane | 解释 issue、PR、comment、board 如何承接工作流 |
| Evaluation and guardrails | 解释验证、护栏、人工验收 |

## 验收标准

- README 能说明项目定位和维护方式。
- `resources/catalog.md` 有资料索引。
- `site/index.html` 有第一版静态页面。
- GitHub issue/PR/comment/Project board 能展示完整工作链。
