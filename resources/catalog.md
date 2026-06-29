# AI 资料索引

这个索引用来把分散的 AI 工作流资料整理到可维护的项目空间里。第一版页面数据已经拆到 `site/data/resources.js`，本文件保留同一批资料的可读目录，方便 GitHub review。

| 分类 | 来源类型 | 标题 | 一句话说明 | 适用场景 | 状态 |
|---|---|---|---|---|---|
| Agent basics | article | [IBM: What are AI agents?](https://www.ibm.com/think/topics/ai-agents) | 解释 agent 如何使用工具、执行任务、根据反馈继续推进。 | 给第一次接触 AI agent 的读者建立基本心智模型。 | selected |
| Agent basics | article | [Oracle: AI agent loop](https://blogs.oracle.com/developers/what-is-the-ai-agent-loop-the-core-architecture-behind-autonomous-ai-systems) | 用观察、判断、行动、反馈解释 agent loop。 | 说明 agent 为什么不是一次性问答，而是循环推进。 | selected |
| Context engineering | article | [Anthropic: Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | 解释如何给 AI 准备正确背景和工作材料。 | 把提示词、项目文件、历史决策和工具结果组织成可用上下文。 | selected |
| Workflow control plane | official-doc | [GitHub Issues documentation](https://docs.github.com/issues/tracking-your-work-with-issues/about-issues) | 说明 issue 如何承接任务、讨论和状态。 | 把 AI 工作从聊天记录迁移到可寻址任务入口。 | selected |
| Workflow control plane | official-doc | [GitHub Pull Requests documentation](https://docs.github.com/pull-requests) | 说明 PR 如何承接改动、review 和合并。 | 让 AI 改动进入可审查 diff，而不是口头说完成。 | selected |
| Workflow control plane | official-doc | [GitHub Projects documentation](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | 说明 Project board 如何展示多任务状态。 | 用看板替代反复追问 AI 当前做到哪一步。 | selected |
| Evaluation and guardrails | article | [Human-in-the-loop overview](https://www.ibm.com/think/topics/human-in-the-loop) | 解释为什么关键判断需要人类验收。 | 说明范围、风险、发布和合并为什么不能完全交给 AI。 | selected |

## 同步规则

- [x] 补 5-8 条真实资料链接。
- [x] 给每条资料加适用场景。
- [x] 把资料同步到首页。
- [x] 首页数据拆到 `site/data/resources.js`。
- [ ] 后续资料超过 12 条时，再评估是否改成 JSON/YAML 作为唯一数据源。
