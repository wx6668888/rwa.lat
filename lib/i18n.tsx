'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Lang = 'en' | 'zh' | 'ja' | 'ko'

export const LANG_LABELS: Record<Lang, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
}

export const LANG_SHORT: Record<Lang, string> = {
  en: 'EN',
  zh: '中',
  ja: '日',
  ko: '한',
}

type Dict = {
  nav: {
    product: string
    ai: string
    markets: string
    compute: string
    signals: string
    pricing: string
    login: string
    download: string
    beta: string
    menu: {
      assistant: { title: string; desc: string }
      stock: { title: string; desc: string }
      compute: { title: string; desc: string }
      prediction: { title: string; desc: string }
    }
  }
  hero: {
    title1: string
    title2: string
    subtitle: string
    cta1: string
    cta2: string
    scroll: string
  }
  bento: {
    heading: string
    subtitle: string
    agent: string
    active: string
    stock: string
    stockTrend: string
    compute: string
    utilization: string
    prediction: string
    via: string
    signals: string
  }
  analyst: {
    heading: string
    report: string
    live: string
    confidence: string
    bullish: string
    keyDrivers: string
    features: { title: string; desc: string }[]
    marketTrend: string
    volatility: string
    momentum: string
    riskScore: string
    valBullish: string
    valLow: string
    valStrong: string
  }
  portfolio: {
    heading: string
    totalValue: string
    thisMonth: string
    aiScore: string
    excellent: string
    topGlobally: string
    allocation: string
    stocks: string
    aiCompute: string
    cash: string
  }
  cta: {
    heading: string
    subtitle: string
    button: string
    users: string
    assets: string
    accuracy: string
  }
  footer: {
    tagline: string
    terms: string
    termsOfService: string
    privacy: string
    cookie: string
    resources: string
    docs: string
    blog: string
    changelog: string
    connect: string
    feedback: string
    discord: string
    reddit: string
    community: string
    copyright: string
    backToTop: string
  }
}

const en: Dict = {
  nav: {
    product: 'Product',
    ai: 'AI',
    markets: 'Markets',
    compute: 'Compute',
    signals: 'Signals',
    pricing: 'Pricing',
    login: 'Login',
    download: 'Download App',
    beta: 'BETA',
    menu: {
      assistant: { title: 'AI Assistant', desc: 'Your always-on investment agent' },
      stock: { title: 'Stock Intelligence', desc: 'AI-scored equities in real time' },
      compute: { title: 'AI Compute', desc: 'On-demand model infrastructure' },
      prediction: { title: 'Prediction Markets', desc: 'Signals from Polymarket, decoded' },
    },
  },
  hero: {
    title1: 'Invest Smarter.',
    title2: 'Powered by AI.',
    subtitle: 'The AI operating system for global market intelligence.',
    cta1: 'Get Started Free',
    cta2: 'See How It Works',
    scroll: 'Scroll',
  },
  bento: {
    heading: 'One Platform. Full Spectrum.',
    subtitle: 'Every module powered by proprietary AI, working together to give you a complete investment edge.',
    agent: 'AI Investment Agent',
    active: 'Active',
    stock: 'Stock Intelligence',
    stockTrend: '90-day trend',
    compute: 'AI Compute Infrastructure',
    utilization: 'Utilization',
    prediction: 'Prediction Intelligence',
    via: 'via Polymarket',
    signals: 'AI-interpreted market signals',
  },
  analyst: {
    heading: 'Your AI Investment Analyst.',
    report: 'AI Report',
    live: 'Live',
    confidence: 'AI Confidence',
    bullish: 'BULLISH',
    keyDrivers: 'KEY DRIVERS',
    features: [
      {
        title: 'Institutional-Grade Analysis',
        desc: 'Our AI processes 50M+ data points daily — earnings, analyst ratings, sentiment, and macro signals — synthesized into a single confidence score.',
      },
      {
        title: 'Real-Time Signal Processing',
        desc: 'Continuous monitoring of market microstructure, dark pool activity, and options flow gives you alpha before it is priced in.',
      },
      {
        title: 'Explainable AI Decisions',
        desc: 'Every recommendation comes with a complete chain of reasoning — no black boxes, no guesswork. You always know why.',
      },
    ],
    marketTrend: 'Market Trend',
    volatility: 'Volatility',
    momentum: 'Momentum',
    riskScore: 'Risk Score',
    valBullish: 'Bullish',
    valLow: 'Low',
    valStrong: 'Strong',
  },
  portfolio: {
    heading: 'Your Portfolio, Reimagined.',
    totalValue: 'Total Portfolio Value',
    thisMonth: 'this month',
    aiScore: 'AI Portfolio Score',
    excellent: 'Excellent',
    topGlobally: 'Top 8% globally',
    allocation: 'allocation',
    stocks: 'Stocks',
    aiCompute: 'AI Compute',
    cash: 'Cash',
  },
  cta: {
    heading: 'The future of investing is intelligent.',
    subtitle: 'Join thousands of investors already using RWA.LAT to make smarter, faster, and more confident decisions powered by AI.',
    button: 'Join RWA.LAT',
    users: 'Active Users',
    assets: 'Assets Analyzed',
    accuracy: 'AI Accuracy',
  },
  footer: {
    tagline: 'AI-powered investment intelligence for the next generation of investors.',
    terms: 'Terms',
    termsOfService: 'Terms of Service',
    privacy: 'Privacy Policy',
    cookie: 'Cookie Policy',
    resources: 'Resources',
    docs: 'Docs',
    blog: 'Blog',
    changelog: 'Changelog',
    connect: 'Connect',
    feedback: 'Feedback',
    discord: 'Discord',
    reddit: 'Reddit',
    community: 'Community',
    copyright: '© 2026 RWA.LAT',
    backToTop: 'Back to top',
  },
}

const zh: Dict = {
  nav: {
    product: '产品',
    ai: 'AI',
    markets: '市场',
    compute: '算力',
    signals: '信号',
    pricing: '定价',
    login: '登录',
    download: '下载应用',
    beta: '测试版',
    menu: {
      assistant: { title: 'AI 助手', desc: '全天候在线的投资助手' },
      stock: { title: '股票情报', desc: '实时 AI 评分的股票' },
      compute: { title: 'AI 算力', desc: '按需的模型基础设施' },
      prediction: { title: '预测市场', desc: '解读来自 Polymarket 的信号' },
    },
  },
  hero: {
    title1: '更聪明地投资。',
    title2: '由 AI 驱动。',
    subtitle: '面向全球市场情报的 AI 操作系统。',
    cta1: '免费开始',
    cta2: '了解运作方式',
    scroll: '下滑',
  },
  bento: {
    heading: '一个平台，全景覆盖。',
    subtitle: '每个模块均由自研 AI 驱动，协同运作，为你带来完整的投资优势。',
    agent: 'AI 投资助手',
    active: '在线',
    stock: '股票情报',
    stockTrend: '90 天趋势',
    compute: 'AI 算力基础设施',
    utilization: '利用率',
    prediction: '预测情报',
    via: '来自 Polymarket',
    signals: 'AI 解读的市场信号',
  },
  analyst: {
    heading: '你的 AI 投资分析师。',
    report: 'AI 报告',
    live: '实时',
    confidence: 'AI 置信度',
    bullish: '看涨',
    keyDrivers: '关键驱动因素',
    features: [
      {
        title: '机构级分析',
        desc: '我们的 AI 每日处理超过 5000 万个数据点——财报、分析师评级、情绪与宏观信号——综合为单一置信度评分。',
      },
      {
        title: '实时信号处理',
        desc: '持续监控市场微观结构、暗池活动与期权资金流，让你在价格反应之前获得超额收益。',
      },
      {
        title: '可解释的 AI 决策',
        desc: '每一条建议都附带完整的推理链——没有黑箱，没有猜测，你始终知道原因。',
      },
    ],
    marketTrend: '市场趋势',
    volatility: '波动率',
    momentum: '动能',
    riskScore: '风险评分',
    valBullish: '看涨',
    valLow: '低',
    valStrong: '强劲',
  },
  portfolio: {
    heading: '重新定义你的投资组合。',
    totalValue: '投资组合总价值',
    thisMonth: '本月',
    aiScore: 'AI 组合评分',
    excellent: '优秀',
    topGlobally: '全球前 8%',
    allocation: '配置',
    stocks: '股票',
    aiCompute: 'AI 算力',
    cash: '现金',
  },
  cta: {
    heading: '投资的未来充满智能。',
    subtitle: '加入数千名已在使用 RWA.LAT 的投资者，借助 AI 做出更聪明、更快速、更有把握的决策。',
    button: '加入 RWA.LAT',
    users: '活跃用户',
    assets: '已分析资产',
    accuracy: 'AI 准确率',
  },
  footer: {
    tagline: '为新一代投资者打造的 AI 投资情报。',
    terms: '条款',
    termsOfService: '服务条款',
    privacy: '隐私政策',
    cookie: 'Cookie 政策',
    resources: '资源',
    docs: '文档',
    blog: '博客',
    changelog: '更新日志',
    connect: '联系',
    feedback: '反馈',
    discord: 'Discord',
    reddit: 'Reddit',
    community: '社区',
    copyright: '© 2026 RWA.LAT',
    backToTop: '返回顶部',
  },
}

const ja: Dict = {
  nav: {
    product: 'プロダクト',
    ai: 'AI',
    markets: 'マーケット',
    compute: 'コンピュート',
    signals: 'シグナル',
    pricing: '料金',
    login: 'ログイン',
    download: 'アプリを入手',
    beta: 'ベータ',
    menu: {
      assistant: { title: 'AI アシスタント', desc: '常時稼働する投資エージェント' },
      stock: { title: '株式インテリジェンス', desc: 'リアルタイムの AI スコア付き株式' },
      compute: { title: 'AI コンピュート', desc: 'オンデマンドのモデル基盤' },
      prediction: { title: '予測マーケット', desc: 'Polymarket のシグナルを解読' },
    },
  },
  hero: {
    title1: 'よりスマートに投資。',
    title2: 'AI の力で。',
    subtitle: 'グローバル市場インテリジェンスのための AI オペレーティングシステム。',
    cta1: '無料で始める',
    cta2: '仕組みを見る',
    scroll: 'スクロール',
  },
  bento: {
    heading: 'ひとつのプラットフォーム、全方位。',
    subtitle: '各モジュールは独自の AI で駆動し、連携してあなたに完全な投資の優位性をもたらします。',
    agent: 'AI 投資エージェント',
    active: '稼働中',
    stock: '株式インテリジェンス',
    stockTrend: '90日トレンド',
    compute: 'AI コンピュート基盤',
    utilization: '使用率',
    prediction: '予測インテリジェンス',
    via: 'Polymarket 経由',
    signals: 'AI が解釈した市場シグナル',
  },
  analyst: {
    heading: 'あなたの AI 投資アナリスト。',
    report: 'AI レポート',
    live: 'ライブ',
    confidence: 'AI 信頼度',
    bullish: '強気',
    keyDrivers: '主要ドライバー',
    features: [
      {
        title: '機関投資家グレードの分析',
        desc: '当社の AI は毎日 5,000 万以上のデータポイント（決算、アナリスト評価、センチメント、マクロシグナル）を処理し、単一の信頼度スコアに統合します。',
      },
      {
        title: 'リアルタイムシグナル処理',
        desc: '市場のマイクロストラクチャー、ダークプール活動、オプションフローを継続的に監視し、価格に織り込まれる前にアルファを提供します。',
      },
      {
        title: '説明可能な AI の判断',
        desc: 'すべての推奨には完全な推論の連鎖が付属します。ブラックボックスも当て推量もなく、常に理由がわかります。',
      },
    ],
    marketTrend: '市場トレンド',
    volatility: 'ボラティリティ',
    momentum: 'モメンタム',
    riskScore: 'リスクスコア',
    valBullish: '強気',
    valLow: '低',
    valStrong: '強い',
  },
  portfolio: {
    heading: 'あなたのポートフォリオを再定義。',
    totalValue: 'ポートフォリオ総額',
    thisMonth: '今月',
    aiScore: 'AI ポートフォリオスコア',
    excellent: '優秀',
    topGlobally: '世界トップ 8%',
    allocation: '配分',
    stocks: '株式',
    aiCompute: 'AI コンピュート',
    cash: '現金',
  },
  cta: {
    heading: '投資の未来は、知的である。',
    subtitle: 'すでに RWA.LAT を使ってよりスマートで迅速、確信を持った判断を行う数千人の投資家に加わりましょう。',
    button: 'RWA.LAT に参加',
    users: 'アクティブユーザー',
    assets: '分析済み資産',
    accuracy: 'AI 精度',
  },
  footer: {
    tagline: '次世代の投資家のための AI 投資インテリジェンス。',
    terms: '規約',
    termsOfService: '利用規約',
    privacy: 'プライバシーポリシー',
    cookie: 'Cookie ポリシー',
    resources: 'リソース',
    docs: 'ドキュメント',
    blog: 'ブログ',
    changelog: '変更履歴',
    connect: 'つながる',
    feedback: 'フィードバック',
    discord: 'Discord',
    reddit: 'Reddit',
    community: 'コミュニティ',
    copyright: '© 2026 RWA.LAT',
    backToTop: 'トップへ戻る',
  },
}

const ko: Dict = {
  nav: {
    product: '제품',
    ai: 'AI',
    markets: '마켓',
    compute: '컴퓨트',
    signals: '시그널',
    pricing: '요금',
    login: '로그인',
    download: '앱 다운로드',
    beta: '베타',
    menu: {
      assistant: { title: 'AI 어시스턴트', desc: '항상 켜져 있는 투자 에이전트' },
      stock: { title: '주식 인텔리전스', desc: '실시간 AI 점수 주식' },
      compute: { title: 'AI 컴퓨트', desc: '온디맨드 모델 인프라' },
      prediction: { title: '예측 마켓', desc: 'Polymarket 시그널 해독' },
    },
  },
  hero: {
    title1: '더 똑똑하게 투자하세요.',
    title2: 'AI로 구동됩니다.',
    subtitle: '글로벌 시장 인텔리전스를 위한 AI 운영체제.',
    cta1: '무료로 시작하기',
    cta2: '작동 방식 보기',
    scroll: '스크롤',
  },
  bento: {
    heading: '하나의 플랫폼, 전 영역.',
    subtitle: '모든 모듈은 자체 AI로 구동되며 함께 작동하여 완전한 투자 우위를 제공합니다.',
    agent: 'AI 투자 에이전트',
    active: '활성',
    stock: '주식 인텔리전스',
    stockTrend: '90일 추세',
    compute: 'AI 컴퓨트 인프라',
    utilization: '사용률',
    prediction: '예측 인텔리전스',
    via: 'Polymarket 제공',
    signals: 'AI가 해석한 시장 신호',
  },
  analyst: {
    heading: '당신의 AI 투자 애널리스트.',
    report: 'AI 리포트',
    live: '실시간',
    confidence: 'AI 신뢰도',
    bullish: '강세',
    keyDrivers: '핵심 동인',
    features: [
      {
        title: '기관급 분석',
        desc: '우리의 AI는 매일 5천만 개 이상의 데이터 포인트(실적, 애널리스트 평가, 심리, 매크로 신호)를 처리하여 단일 신뢰도 점수로 통합합니다.',
      },
      {
        title: '실시간 신호 처리',
        desc: '시장 미시구조, 다크풀 활동, 옵션 흐름을 지속적으로 모니터링하여 가격에 반영되기 전에 알파를 제공합니다.',
      },
      {
        title: '설명 가능한 AI 결정',
        desc: '모든 추천에는 완전한 추론 과정이 포함됩니다. 블랙박스도 추측도 없이 항상 이유를 알 수 있습니다.',
      },
    ],
    marketTrend: '시장 추세',
    volatility: '변동성',
    momentum: '모멘텀',
    riskScore: '위험 점수',
    valBullish: '강세',
    valLow: '낮음',
    valStrong: '강함',
  },
  portfolio: {
    heading: '당신의 포트폴리오, 재정의하다.',
    totalValue: '총 포트폴리오 가치',
    thisMonth: '이번 달',
    aiScore: 'AI 포트폴리오 점수',
    excellent: '우수',
    topGlobally: '글로벌 상위 8%',
    allocation: '배분',
    stocks: '주식',
    aiCompute: 'AI 컴퓨트',
    cash: '현금',
  },
  cta: {
    heading: '투자의 미래는 지능적입니다.',
    subtitle: '이미 RWA.LAT를 사용해 더 똑똑하고 빠르며 자신 있는 결정을 내리는 수천 명의 투자자와 함께하세요.',
    button: 'RWA.LAT 참여하기',
    users: '활성 사용자',
    assets: '분석된 자산',
    accuracy: 'AI 정확도',
  },
  footer: {
    tagline: '차세대 투자자를 위한 AI 투자 인텔리전스.',
    terms: '약관',
    termsOfService: '서비스 약관',
    privacy: '개인정보 처리방침',
    cookie: '쿠키 정책',
    resources: '리소스',
    docs: '문서',
    blog: '블로그',
    changelog: '변경 로그',
    connect: '연결',
    feedback: '피드백',
    discord: 'Discord',
    reddit: 'Reddit',
    community: '커뮤니티',
    copyright: '© 2026 RWA.LAT',
    backToTop: '맨 위로',
  },
}

const dictionaries: Record<Lang, Dict> = { en, zh, ja, ko }

interface I18nContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l
    }
  }, [])

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
