window.RESOURCE_INDEX_DATA = {
  retrieved_at: "2026-06-29",
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
      final_url: "https://www.ibm.com/think/topics/ai-agents",
      source_type: "article",
      category: "agent-basics",
      why: "解释 agent 如何使用工具、执行任务、根据反馈继续推进。",
      scenario: "给第一次接触 AI agent 的读者建立基本心智模型。",
      source_summary: "IBM 将 AI agent 定义为能代表用户或系统自主执行任务的系统或程序。",
      flow_note: "先用它解释 agent 的基本概念，再接后面的循环和工具使用资料。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    },
    {
      id: "aws-agent-function",
      title: "AWS: The agent function: perceive, reason, act",
      url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-foundations/perceive-reason-act.html",
      final_url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-foundations/perceive-reason-act.html",
      source_type: "official-doc",
      category: "agent-basics",
      why: "用 perceive、reason、act 三步解释 agentic AI 的工作循环。",
      scenario: "把“agent 为什么能持续推进任务”讲成一个清楚的执行闭环。",
      source_summary: "AWS 用感知、推理、行动解释 agentic AI 的核心循环。",
      flow_note: "放在 IBM 概念之后，帮助读者从定义过渡到执行机制。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    },
    {
      id: "hf-agent-steps",
      title: "Hugging Face: Thought-Action-Observation Cycle",
      url: "https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure",
      final_url: "https://huggingface.co/learn/agents-course/en/unit1/agent-steps-and-structure",
      source_type: "course",
      category: "agent-basics",
      why: "用 thought、action、observation 解释 agent 步骤结构。",
      scenario: "把抽象的 agent loop 变成更适合学习和讲解的步骤模型。",
      source_summary: "Hugging Face Agents Course 用 thought-action-observation 组织 agent 步骤。",
      flow_note: "作为学习型入口，承接 AWS 的机制解释。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    },
    {
      id: "anthropic-context-engineering",
      title: "Anthropic: Effective context engineering",
      url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
      final_url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
      source_type: "article",
      category: "context-engineering",
      why: "解释如何给 AI 准备正确背景和工作材料。",
      scenario: "把提示词、项目文件、历史决策和工具结果组织成可用上下文。",
      source_summary: "Anthropic 文章聚焦 agent 的上下文工程实践。",
      flow_note: "从 agent 执行循环进入项目材料和上下文组织。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    },
    {
      id: "github-issues",
      title: "GitHub Docs: About issues",
      url: "https://docs.github.com/issues/tracking-your-work-with-issues/about-issues",
      final_url: "https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues",
      source_type: "official-doc",
      category: "workflow-control-plane",
      why: "说明 issue 如何承接任务、讨论和状态。",
      scenario: "把 AI 工作从聊天记录迁移到可寻址任务入口。",
      source_summary: "GitHub Docs 说明 issues 可用于追踪想法、反馈、任务或 bug。",
      flow_note: "作为 GitHub 控制面的第一个对象，承接需求和任务。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    },
    {
      id: "github-pull-requests",
      title: "GitHub Docs: Pull requests",
      url: "https://docs.github.com/pull-requests",
      final_url: "https://docs.github.com/en/pull-requests",
      source_type: "official-doc",
      category: "workflow-control-plane",
      why: "说明 PR 如何承接改动、review 和合并。",
      scenario: "让 AI 改动进入可审查 diff，而不是口头说完成。",
      source_summary: "GitHub Docs 说明 pull requests 用来提出变更、接收 review 并处理合并问题。",
      flow_note: "把 issue 里的任务推进到文件 diff 和 review。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    },
    {
      id: "github-projects",
      title: "GitHub Docs: About Projects",
      url: "https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects",
      final_url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects",
      source_type: "official-doc",
      category: "workflow-control-plane",
      why: "说明 Project board 如何展示多任务状态。",
      scenario: "用看板替代反复追问 AI 当前做到哪一步。",
      source_summary: "GitHub Docs 将 Projects 描述为规划和追踪工作的灵活工具。",
      flow_note: "把多个 issue 和 PR 组织到可扫读的状态视图。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    },
    {
      id: "human-in-the-loop",
      title: "IBM: Human-in-the-loop",
      url: "https://www.ibm.com/think/topics/human-in-the-loop",
      final_url: "https://www.ibm.com/think/topics/human-in-the-loop",
      source_type: "article",
      category: "evaluation-guardrails",
      why: "解释为什么关键判断需要人类验收。",
      scenario: "说明范围、风险、发布和合并为什么不能完全交给 AI。",
      source_summary: "IBM 将 HITL 描述为人参与自动化或 AI 系统监督和决策的过程。",
      flow_note: "放在最后，说明 GitHub 控制面为什么仍然需要人 review。",
      status: "selected",
      source_status: "fetched",
      status_code: 200
    }
  ],
  workflow: [
    {
      title: "下载与核验来源",
      detail: "先抓取原站标题、摘要、状态码和最终 URL，形成 source card。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/issues/8"
    },
    {
      title: "进入资料流",
      detail: "把 source card 放进分类、摘要、适用场景和跳转路径。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/issues/10"
    },
    {
      title: "PR 承接改动",
      detail: "资源数据、首页和目录进入同一个可审查 diff。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/pull/7"
    },
    {
      title: "验收回填证据",
      detail: "确认来源可打开、页面可跳转、范围没有扩成后端产品。",
      link: "https://github.com/kun-content-lab/ai-resource-index-harness-demo/issues/6"
    }
  ],
  review: [
    "资料必须有抓取状态、最终 URL 和来源摘要。",
    "每张资料卡都必须能点击跳转到原网站。",
    "资料流必须能解释来源、分类、用途和适用场景。",
    "PR 不引入搜索后端、登录、数据库或部署。",
    "合并前必须回填抓取和浏览器验证证据。"
  ]
};
