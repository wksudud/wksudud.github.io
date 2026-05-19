/* ==============================================
   Personal Systems — Motion and Language
   ============================================== */
(function () {
  const copy = {
    zh: {
      heroMark: '赋智于器，化念成形。',
      heroTitle: '赋予模型以思想，赋予想象以形态。',
      systemsLabel: 'Systems',
      prevLabel: 'Previous',
      nextLabel: 'Next',
      inputLabel: 'Input',
      systemLabel: 'System',
      outputLabel: 'Output',
      methodLabel: 'How I Build',
      methodClassic: '人定其向，智达其境。',
      methodStatement: '人定义方向，智能完成抵达。',
      methodNote: '我更关注系统如何把人的意图变成可执行的过程：定义方向，拆解路径，让智能完成中间的距离。',
      methodCardOneTitle: '把想法压成接口',
      methodCardOneText: '先定义输入、输出、边界和不可触碰区域，让模糊想法变成可以执行的系统合同。',
      methodCardTwoTitle: '让 Agent 分工前进',
      methodCardTwoText: '把创意、实现、审查、验证拆给不同角色，每个角色只拿到必要上下文和明确验收标准。',
      methodCardThreeTitle: '用证据收束结果',
      methodCardThreeText: '每次交付都要留下链接、截图、命令输出或检查记录，而不是只说“已经完成”。',
      railOne: 'Direction',
      railTwo: 'Contract',
      railThree: 'Delegation',
      railFour: 'Verification',
      railFive: 'Artifact',
      connectLabel: 'Connect',
      signature: 'Built by myself, with my own systems.',
      statusLabel: '当前状态',
      statusBadge: '即将毕业 · 寻找机会',
      statusBody: '我即将完成学业，正在寻找能将AI系统工程能力落地的机会。我关注AI工作流、多Agent协作与系统自动化方向，希望加入注重工程质量和系统思维的团队。如果你正在构建需要这些能力的项目，欢迎联系。',
      labnotesLabel: 'Lab Notes',
      labnoteOneTitle: 'Agent Contract 模式',
      labnoteOneText: '探索将模糊需求转化为可执行Agent合同的工作流模式：先定义输入、输出、边界和不可触碰区域，再让Agent在合同范围内自主推进。',
      labnoteTwoTitle: '多Agent编排',
      labnoteTwoText: '研究多Agent协作中的上下文预算、并发控制与证据收束策略，让多个Agent在各自车道内高效协作而不互相干扰。',
      labnoteThreeTitle: 'Workflow-as-Product',
      labnoteThreeText: '把工作流本身当作产品迭代：从一次性脚本到可复用系统，每个工作流都留下可审计的验证记录和交接文档。',
      detailToggle: '展开详情',
      detailClose: '收起详情',
      detailMotivation: '动机',
      detailDesign: '设计决策',
      detailNext: '下一步',
      detailLearning: '经验',
      detailEvidence: '证据',
      railOneText: '先确定人的判断、目标和表达方向。',
      railTwoText: '把模糊任务压成输入、输出、约束和验收标准。',
      railThreeText: '把有边界的任务交给合适的 Agent 车道。',
      railFourText: '用链接、截图、命令输出和边界检查验收结果。',
      railFiveText: '把结果沉淀成页面、笔记、报告或可复用工作流。',
      toolsLabel: 'Tools',
      toolsAgentLabel: 'Agent workflow',
      toolsBuildLabel: 'Build surface',
      toolsProjectLabel: 'Project stack'
    },
    en: {
      heroMark: 'Thought into tools. Form into imagination.',
      heroTitle: 'Giving models thought, and imagination form.',
      systemsLabel: 'Systems',
      prevLabel: 'Previous',
      nextLabel: 'Next',
      inputLabel: 'Input',
      systemLabel: 'System',
      outputLabel: 'Output',
      methodLabel: 'How I Build',
      methodClassic: 'Humans define direction. Intelligence reaches it.',
      methodStatement: 'Humans define direction. Intelligence reaches it.',
      methodNote: 'I care about turning intent into executable systems: define the direction, shape the path, and let intelligence carry the distance.',
      methodCardOneTitle: 'Compress Ideas Into Interfaces',
      methodCardOneText: 'I start with inputs, outputs, boundaries, and protected areas so a vague idea becomes an executable system contract.',
      methodCardTwoTitle: 'Let Agents Move In Formation',
      methodCardTwoText: 'Creative direction, implementation, review, and verification are split into roles with compact context and clear acceptance.',
      methodCardThreeTitle: 'Close With Evidence',
      methodCardThreeText: 'Every delivery should leave links, screenshots, command output, or check records instead of only saying it is done.',
      railOne: 'Direction',
      railTwo: 'Contract',
      railThree: 'Delegation',
      railFour: 'Verification',
      railFive: 'Artifact',
      connectLabel: 'Connect',
      signature: 'Built by myself, with my own systems.',
      statusLabel: 'Current Status',
      statusBadge: 'Nearing Graduation · Open to Opportunities',
      statusBody: 'I\'m nearing graduation and looking for opportunities to apply AI systems engineering in practice. I focus on AI workflows, multi-agent collaboration, and system automation. If you\'re building something that needs these capabilities, let\'s talk.',
      labnotesLabel: 'Lab Notes',
      labnoteOneTitle: 'Agent Contract Pattern',
      labnoteOneText: 'Exploring workflow patterns that turn vague requirements into executable agent contracts: define inputs, outputs, boundaries, and protected areas first, then let agents operate autonomously within the contract.',
      labnoteTwoTitle: 'Multi-Agent Orchestration',
      labnoteTwoText: 'Studying context budgeting, concurrency control, and evidence-gathering strategies in multi-agent systems so agents collaborate efficiently in their own lanes without interference.',
      labnoteThreeTitle: 'Workflow-as-Product',
      labnoteThreeText: 'Treating workflows as products that iterate: from one-off scripts to reusable systems, each workflow leaves auditable verification records and handoff documentation.',
      detailToggle: 'Details',
      detailClose: 'Close',
      detailMotivation: 'Motivation',
      detailDesign: 'Design Decisions',
      detailNext: 'Next Steps',
      detailLearning: 'Experience',
      detailEvidence: 'Evidence',
      railOneText: 'Define the human judgement, goal, and direction of expression.',
      railTwoText: 'Compress fuzzy work into inputs, outputs, constraints, and acceptance.',
      railThreeText: 'Send bounded tasks to the right agent lane.',
      railFourText: 'Verify with links, screenshots, command output, and boundary checks.',
      railFiveText: 'Turn the result into a page, note, report, or reusable workflow.',
      toolsLabel: 'Tools',
      toolsAgentLabel: 'Agent workflow',
      toolsBuildLabel: 'Build surface',
      toolsProjectLabel: 'Project stack'
    }
  };

  const projects = [
    {
      title: 'TelecomOps Agent',
      status: { zh: 'Live system', en: 'Live system' },
      tagline: {
        zh: '面向通信网络场景的智能运维展品：从告警、指标和问题描述中整理判断路径。',
        en: 'A telecom operations exhibit: turning alarms, metrics, and questions into a diagnostic path.'
      },
      input: {
        zh: '网络运维问题、告警与实时遥测信号',
        en: 'Network operations queries, alarms & real-time telemetry streams'
      },
      system: {
        zh: '面向通信场景的智能诊断与工作流推理系统',
        en: 'Reasoning workflow for telecom diagnostics and operations'
      },
      output: {
        zh: '故障判断、处置建议与可执行运维路径',
        en: 'Fault judgement, remediation suggestions & executable paths'
      },
      summary: {
        zh: '通信网络智能运维。',
        en: 'Telecom operations intelligence.'
      },
      links: [
        { label: 'Live Demo', href: 'https://telecomops-agent.streamlit.app/' },
        { label: 'GitHub', href: 'https://github.com/wksudud/telecomops-agent' }
      ],
      motivation: {
        zh: '通信网络运维长期依赖人工经验判断，希望通过Agent系统将诊断路径结构化、可复用。',
        en: 'Telecom operations have long relied on manual expertise. The goal is to structure diagnostic paths into a reusable agent system.'
      },
      design: {
        zh: '采用推理链+工具调用模式，将告警、指标和知识库串联成可追溯的判断流程。',
        en: 'Uses reasoning chains with tool calls, connecting alarms, metrics, and knowledge bases into traceable diagnostic flows.'
      },
      nextStep: {
        zh: '扩展更多通信场景覆盖，优化多轮诊断的上下文管理。',
        en: 'Expand to more telecom scenarios and optimize multi-turn diagnostic context management.'
      },
      learning: {
        zh: '这个项目让我把北邮通信背景和 Agent 工程连接起来：不是泛泛调用模型，而是围绕网络问题组织输入、推理和处置路径。',
        en: 'This project connects my telecom background with agent engineering: not generic model calls, but organizing inputs, reasoning, and remediation around network problems.'
      },
      evidence: {
        zh: '公开 Demo 已上线，GitHub 仓库可查看；页面只展示公开安全的信息。',
        en: 'The public demo is online and the GitHub repository is linked; this page only exposes public-safe information.'
      }
    },
    {
      title: 'ResumeFit Agent',
      status: { zh: 'Prototype system', en: 'Prototype system' },
      tagline: {
        zh: '把个人材料、目标机会和项目证据放进同一个语义系统里，生成更清晰的匹配判断。',
        en: 'A semantic system that aligns personal materials, opportunity signals, and project evidence.'
      },
      input: {
        zh: '个人材料、目标机会信号与项目证据',
        en: 'Personal materials, opportunity signals & project evidence'
      },
      system: {
        zh: '语义匹配、差距分析与内容重构流程',
        en: 'Semantic matching, gap analysis & content restructuring'
      },
      output: {
        zh: '匹配判断、能力地图与针对性改进方案',
        en: 'Fit assessment, capability map & targeted improvement plan'
      },
      summary: {
        zh: '材料到机会的匹配系统。',
        en: 'Material-to-opportunity matching.'
      },
      links: [
        { label: 'Live Demo', href: 'https://multica-agent-workflow-template-5xmbi6a5exwxxqorrhrnzn.streamlit.app/' },
        { label: 'GitHub', href: 'https://github.com/wksudud/resumefit-agent' }
      ],
      motivation: {
        zh: '求职材料与机会匹配长期依赖人工反复调整，希望通过语义系统让匹配更清晰、可解释。',
        en: 'Resume-to-opportunity matching has long relied on manual iteration. The aim is to make matching clearer and more explainable through a semantic system.'
      },
      design: {
        zh: '将个人材料、目标机会和项目证据放进同一个语义空间，输出匹配度、差距分析和改进建议。',
        en: 'Places personal materials, target opportunities, and project evidence into a shared semantic space, producing fit scores, gap analysis, and improvement suggestions.'
      },
      nextStep: {
        zh: '优化匹配算法的可解释性，增加更多机会信号源。',
        en: 'Improve matching algorithm explainability and add more opportunity signal sources.'
      },
      learning: {
        zh: '它把“如何表达自己”转成了一个系统问题：材料、机会和项目证据需要在同一套语义结构里对齐。',
        en: 'It turns self-presentation into a systems problem: materials, opportunities, and project evidence need to align in one semantic structure.'
      },
      evidence: {
        zh: '公开 GitHub 仓库与 Streamlit Demo 已上线，包含源码、测试、样例数据和离线验证流程。',
        en: 'The public GitHub repository and Streamlit demo are live, with source code, tests, sample data, and offline verification.'
      }
    },
    {
      title: 'Multica Workflow',
      status: { zh: 'Workflow system', en: 'Workflow system' },
      tagline: {
        zh: '把复杂任务交给多 Agent 协作：先定义合同，再并发执行，最后用审查和证据收束。',
        en: 'A multi-agent workflow: define the contract, run work in parallel, then close with review and evidence.'
      },
      input: {
        zh: '复杂任务目标、约束与多步骤上下文',
        en: 'Complex task goals, constraints & multi-step context'
      },
      system: {
        zh: '多 Agent 分工、并发推进、审查与证据沉淀',
        en: 'Multi-agent delegation, parallel execution, review & evidence'
      },
      output: {
        zh: '可交付成果、验证记录与可复用工作流',
        en: 'Deliverable artifacts, verification records & reusable workflows'
      },
      summary: {
        zh: '多 Agent 项目治理。',
        en: 'Multi-agent project governance.'
      },
      links: [
        { label: 'GitHub', href: 'https://github.com/wksudud' }
      ],
      motivation: {
        zh: '复杂任务需要多角色协作，但传统工具缺乏结构化的分工、审查和证据收束机制。',
        en: 'Complex tasks need multi-role collaboration, but traditional tools lack structured delegation, review, and evidence-gathering mechanisms.'
      },
      design: {
        zh: '采用合同驱动的多Agent架构：定义接口→并发执行→审查验收→证据沉淀，每个角色只拿到必要上下文。',
        en: 'Uses a contract-driven multi-agent architecture: define interfaces → concurrent execution → review & acceptance → evidence capture, with each role receiving only necessary context.'
      },
      nextStep: {
        zh: '扩展更多Agent角色模板，优化issue-driven的调度与追踪。',
        en: 'Expand agent role templates and optimize issue-driven scheduling and tracking.'
      },
      learning: {
        zh: '最大的经验是：Agent 协作的关键不是“让模型多做事”，而是把边界、上下文、验收和回传格式设计清楚。',
        en: 'The main lesson is that agent collaboration is less about making models do more and more about designing boundaries, context, acceptance, and return formats.'
      },
      evidence: {
        zh: '本主页的多轮改造本身就是一次公开安全的工作流样例：ContextPacket、Multica issue、实现、浏览器验证。',
        en: 'The multi-round evolution of this homepage is a public-safe workflow sample: ContextPacket, Multica issue, implementation, and browser verification.'
      }
    }
  ];

  let currentLanguage = localStorage.getItem('preferred-language') || 'zh';
  let activeProject = 0;

  const wrapIndex = (index) => (index + projects.length) % projects.length;

  const renderProject = () => {
    const lang = currentLanguage === 'en' ? 'en' : 'zh';
    const project = projects[activeProject];
    const previous = projects[wrapIndex(activeProject - 1)];
    const next = projects[wrapIndex(activeProject + 1)];
    const stage = document.querySelector('.showroom-stage');

    document.querySelector('[data-project-index]').textContent = `${String(activeProject + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
    document.querySelector('[data-project-status]').textContent = project.status[lang];
    document.querySelector('[data-project-title]').textContent = project.title;
    document.querySelector('[data-project-tagline]').textContent = project.tagline[lang];
    document.querySelector('[data-project-input]').textContent = project.input[lang];
    document.querySelector('[data-project-system]').textContent = project.system[lang];
    document.querySelector('[data-project-output]').textContent = project.output[lang];
    document.querySelector('[data-project-prev-title]').textContent = previous.title;
    document.querySelector('[data-project-prev-summary]').textContent = previous.summary[lang];
    document.querySelector('[data-project-next-title]').textContent = next.title;
    document.querySelector('[data-project-next-summary]').textContent = next.summary[lang];

    const links = document.querySelector('[data-project-links]');
    links.replaceChildren(...project.links.map((link) => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.label;
      anchor.target = '_blank';
      anchor.rel = 'noopener';
      return anchor;
    }));

    document.querySelector('[data-project-motivation]').textContent = project.motivation[lang];
    document.querySelector('[data-project-design]').textContent = project.design[lang];
    document.querySelector('[data-project-next]').textContent = project.nextStep[lang];
    document.querySelector('[data-project-learning]').textContent = project.learning[lang];
    document.querySelector('[data-project-evidence]').textContent = project.evidence[lang];

    detailToggle.querySelector('span:first-child').textContent =
      copy[lang][detailOpen ? 'detailClose' : 'detailToggle'];

    document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
      const active = index === activeProject;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-selected', String(active));
    });

    stage.classList.remove('is-switching');
    requestAnimationFrame(() => stage.classList.add('is-switching'));
  };

  const createGalleryControls = () => {
    const controls = document.querySelector('[data-gallery-dots]');
    controls.replaceChildren(...projects.map((project, index) => {
      const dot = document.createElement('button');
      dot.className = 'gallery-dot';
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', project.title);
      dot.addEventListener('click', () => {
        activeProject = index;
        renderProject();
      });
      return dot;
    }));
  };

  const setLanguage = (lang) => {
    const dictionary = copy[lang] || copy.zh;
    currentLanguage = lang === 'en' ? 'en' : 'zh';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });

    document.querySelectorAll('.language-button').forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    localStorage.setItem('preferred-language', currentLanguage);

    detailToggle.querySelector('span:first-child').textContent =
      dictionary[detailOpen ? 'detailClose' : 'detailToggle'];

    renderProject();
  };

  document.querySelectorAll('.language-button').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll('[data-gallery]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.gallery === 'next' ? 1 : -1;
      activeProject = wrapIndex(activeProject + direction);
      renderProject();
    });
  });

  let detailOpen = false;
  const detailToggle = document.querySelector('[data-detail-toggle]');
  const detailPanel = document.querySelector('[data-detail-panel]');

  detailToggle.addEventListener('click', () => {
    detailOpen = !detailOpen;
    detailPanel.hidden = !detailOpen;
    detailToggle.setAttribute('aria-expanded', String(detailOpen));
    const lang = currentLanguage === 'en' ? 'en' : 'zh';
    detailToggle.querySelector('span:first-child').textContent =
      copy[lang][detailOpen ? 'detailClose' : 'detailToggle'];
    detailToggle.querySelector('.toggle-icon').textContent = detailOpen ? '−' : '+';
  });

  createGalleryControls();
  setLanguage(currentLanguage);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach((el) => {
    observer.observe(el);
  });
})();
