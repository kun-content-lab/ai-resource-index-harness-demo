# AI 资料索引

这个索引用来把分散的 AI 工作流资料整理到可维护的项目空间里。第一版页面数据已经拆到 `site/data/resources.js`，本文件保留同一批资料的可读目录，方便 GitHub review。

## 资料流规则

- [x] 抓取每条资料的标题、摘要、状态码和最终 URL。
- [x] 只沉淀 source card，不复制外部网页全文。
- [x] 每条资料都能从页面点击跳转到原站。
- [x] 每条资料都有分类、来源类型、收录理由、适用场景和抓取状态。
- [ ] 后续资料超过 12 条时，再评估是否改成 JSON/YAML 作为唯一数据源。

| 分类 | 来源类型 | 标题 | 来源摘要 | 适用场景 | 状态 |
|---|---|---|---|---|---|
| Agent basics | article | [IBM: What are AI agents?](https://www.ibm.com/think/topics/ai-agents) | IBM 将 AI agent 定义为能代表用户或系统自主执行任务的系统或程序。 | 给第一次接触 AI agent 的读者建立基本心智模型。 | selected |
| Agent basics | official-doc | [AWS: The agent function: perceive, reason, act](https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-foundations/perceive-reason-act.html) | AWS 用感知、推理、行动解释 agentic AI 的核心循环。 | 把“agent 为什么能持续推进任务”讲成一个清楚的执行闭环。 | selected |
| Agent basics | course | [Hugging Face: Thought-Action-Observation Cycle](https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure) | Hugging Face Agents Course 用 thought-action-observation 组织 agent 步骤。 | 把抽象的 agent loop 变成更适合学习和讲解的步骤模型。 | selected |
| Context engineering | article | [Anthropic: Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Anthropic 文章聚焦 agent 的上下文工程实践。 | 把提示词、项目文件、历史决策和工具结果组织成可用上下文。 | selected |
| Workflow control plane | official-doc | [GitHub Docs: About issues](https://docs.github.com/issues/tracking-your-work-with-issues/about-issues) | GitHub Docs 说明 issues 可用于追踪想法、反馈、任务或 bug。 | 把 AI 工作从聊天记录迁移到可寻址任务入口。 | selected |
| Workflow control plane | official-doc | [GitHub Docs: Pull requests](https://docs.github.com/pull-requests) | GitHub Docs 说明 pull requests 用来提出变更、接收 review 并处理合并问题。 | 让 AI 改动进入可审查 diff，而不是口头说完成。 | selected |
| Workflow control plane | official-doc | [GitHub Docs: About Projects](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | GitHub Docs 将 Projects 描述为规划和追踪工作的灵活工具。 | 用看板替代反复追问 AI 当前做到哪一步。 | selected |
| Evaluation and guardrails | article | [IBM: Human-in-the-loop](https://www.ibm.com/think/topics/human-in-the-loop) | IBM 将 HITL 描述为人参与自动化或 AI 系统监督和决策的过程。 | 说明范围、风险、发布和合并为什么不能完全交给 AI。 | selected |
