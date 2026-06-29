window.RESOURCE_INDEX_DATA = {
  categories: [
    {
      slug: "agent-basics",
      name: "Agent basics",
      title: "Agent 工作方式",
      purpose: "理解 AI 如何观察、判断、调用工具、检查结果，再继续推进。",
      accent: "blue"
    },
    {
      slug: "context-engineering",
      name: "Context engineering",
      title: "上下文工程",
      purpose: "把背景、限制、历史决定和工作材料整理成 AI 能读取的上下文。",
      accent: "green"
    },
    {
      slug: "workflow-control-plane",
      name: "Workflow control plane",
      title: "GitHub 工作台",
      purpose: "用 Discussion、issue、board、PR 和 comment 承接任务链。",
      accent: "violet"
    },
    {
      slug: "evaluation-guardrails",
      name: "Evaluation and guardrails",
      title: "验收与护栏",
      purpose: "把关键判断、范围边界和完成证据留给人 review。",
      accent: "amber"
    }
  ],
  resources: [
    {
      id: "agent-ibm-overview",
      title: "IBM: What are AI agents?",
      url: "https://www.ibm.com/think/topics/ai-agents",
      source_type: "article",
      category: "agent-basics",
      why: "解释 agent 如何使用工具、执行任务、根据反馈继续推进。",
      scenario: "给第一次接触 AI agent 的读者建立基本心智模型。",
      status: "selected"
    },
    {
      id: "agent-oracle-loop",
      title: "Oracle: AI agent loop",
      url: "https://blogs.oracle.com/developers/what-is-the-ai-agent-loop-the-core-architecture-behind-autonomous-ai-systems",
      source_type: "article",
      category: "agent-basics",
      why: "用观察、判断、行动、反馈解释 agent loop。",
      scenario: "说明 agent 为什么不是一次性问答，而是循环推进。",
      status: "selected"
    },
    {
      id: "anthropic-context-engineering",
      title: "Anthropic: Effective context engineering",
      url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
      source_type: "article",
      category: "context-engineering",
      why: "解释如何给 AI 准备正确背景和工作材料。",
      scenario: "把提示词、项目文件、历史决策和工具结果组织成可用上下文。",
      status: "selected"
    },
    {
      id: "github-issues",
      title: "GitHub Issues documentation",
      url: "https://docs.github.com/issues/tracking-your-work-with-issues/about-issues",
      source_type: "official-doc",
      category: "workflow-control-plane",
      why: "说明 issue 如何承接任务、讨论和状态。",
      scenario: "把 AI 工作从聊天记录迁移到可寻址任务入口。",
      status: "selected"
    },
    {
      id: "github-pull-requests",
      title: "GitHub Pull Requests documentation",
      url: "https://docs.github.com/pull-requests",
      source_type: "official-doc",
      category: "workflow-control-plane",
      why: "说明 PR 如何承接改动、review 和合并。",
      scenario: "让 AI 改动进入可审查 diff，而不是口头说完成。",
      status: "selected"
    },
    {
      id: "github-projects",
      title: "GitHub Projects documentation",
      url: "https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects",
      source_type: "official-doc",
      category: "workflow-control-plane",
      why: "说明 Project board 如何展示多任务状态。",
      scenario: "用看板替代反复追问 AI 当前做到哪一步。",
      status: "selected"
    },
    {
      id: "human-in-the-loop",
      title: "Human-in-the-loop overview",
      url: "https://www.ibm.com/think/topics/human-in-the-loop",
      source_type: "article",
      category: "evaluation-guardrails",
      why: "解释为什么关键判断需要人类验收。",
      scenario: "说明范围、风险、发布和合并为什么不能完全交给 AI。",
      status: "selected"
    }
  ],
  workflow: [
    {
      title: "Discussion 定方向",
      detail: "先讨论第一版服务谁、收什么、不收什么，避免临时扩范围。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/discussions/1"
    },
    {
      title: "Issue 冻结范围",
      detail: "用 truth-source issue 固定 In / Out，PR review 时按它判越界。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/issues/3"
    },
    {
      title: "PR 承接改动",
      detail: "资料目录、首页和说明文件进入同一个可审查 diff。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/pull/7"
    },
    {
      title: "Comment 回填证据",
      detail: "验收不是口头完成，必须把范围、风险和下一步写回 GitHub。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/issues/6"
    }
  ],
  review: [
    "资料分类必须符合第一版四类范围。",
    "每条资料必须有来源类型、用途和状态。",
    "首页内容必须能追溯到 catalog，不单独漂移。",
    "PR 不引入搜索、登录、数据库或部署。",
    "合并前必须回填验收证据。"
  ]
};
