import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: '/',
    },
    {
      text: '探索',
      links: [
        {
          text: '前沿项目',
          href: getPermalink('/projects'),
        },
        {
          text: '技术洞察',
          href: getPermalink('/skills'),
        },
        {
          text: 'VibeCoding',
          href: getPermalink('/vibecoding'),
        },
        {
          text: '深度评测',
          href: getPermalink('/reviews'),
        },
      ],
    },
    {
      text: '解决方案',
      href: getPermalink('/services'),
    },
    {
      text: '定价',
      href: getPermalink('/pricing'),
    },
    {
      text: '关于',
      links: [
        {
          text: '关于我们',
          href: getPermalink('/about'),
        },
        {
          text: '联系我们',
          href: getPermalink('/contact'),
        },
        {
          text: '服务条款',
          href: getPermalink('/terms'),
        },
        {
          text: '隐私政策',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: '博客',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: '探索',
      links: [
        { text: '前沿项目', href: getPermalink('/projects') },
        { text: '技术洞察', href: getPermalink('/skills') },
        { text: 'VibeCoding', href: getPermalink('/vibecoding') },
        { text: '深度评测', href: getPermalink('/reviews') },
      ],
    },
    {
      title: '解决方案',
      links: [
        { text: 'AI战略咨询', href: getPermalink('/services') },
        { text: '智能体系统开发', href: getPermalink('/services') },
        { text: '数据工程服务', href: getPermalink('/services') },
        { text: '模型优化服务', href: getPermalink('/services') },
        { text: '运维支持服务', href: getPermalink('/services') },
      ],
    },
    {
      title: '技术生态',
      links: [
        { text: '开发者社区', href: '#' },
        { text: '技术文档', href: '#' },
        { text: '开源项目', href: '#' },
        { text: '行业案例', href: getPermalink('/about') },
      ],
    },
    {
      title: '关于',
      links: [
        { text: '关于我们', href: getPermalink('/about') },
        { text: '联系我们', href: getPermalink('/contact') },
        { text: '博客', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: '服务条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: '微信公众号：架构师部落', icon: 'tabler:brand-wechat', href: getPermalink('/contact') },
    { ariaLabel: '视频号：aios-rs', icon: 'tabler:video', href: getPermalink('/contact') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/aios-rs' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/lijingrs">李靖</a> · All rights reserved.
  `,
};

// English navigation data
export const headerDataEn = {
  links: [
    {
      text: 'Home',
      href: '/en',
    },
    {
      text: 'Explore',
      links: [
        {
          text: 'Projects',
          href: getPermalink('/en/projects'),
        },
        {
          text: 'Insights',
          href: getPermalink('/en/skills'),
        },
        {
          text: 'VibeCoding',
          href: getPermalink('/en/vibecoding'),
        },
        {
          text: 'Reviews',
          href: getPermalink('/en/reviews'),
        },
      ],
    },
    {
      text: 'Solutions',
      href: getPermalink('/en/services'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/en/pricing'),
    },
    {
      text: 'About',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/en/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/en/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/en/terms'),
        },
        {
          text: 'Privacy',
          href: getPermalink('/en/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};

export const footerDataEn = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Projects', href: getPermalink('/en/projects') },
        { text: 'Insights', href: getPermalink('/en/skills') },
        { text: 'VibeCoding', href: getPermalink('/en/vibecoding') },
        { text: 'Reviews', href: getPermalink('/en/reviews') },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'AI Strategy Consulting', href: getPermalink('/en/services') },
        { text: 'Agent System Development', href: getPermalink('/en/services') },
        { text: 'Data Engineering', href: getPermalink('/en/services') },
        { text: 'Model Optimization', href: getPermalink('/en/services') },
        { text: 'Operations Support', href: getPermalink('/en/services') },
      ],
    },
    {
      title: 'Tech Ecosystem',
      links: [
        { text: 'Developer Community', href: '#' },
        { text: 'Documentation', href: '#' },
        { text: 'Open Source', href: '#' },
        { text: 'Case Studies', href: getPermalink('/en/about') },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Us', href: getPermalink('/en/about') },
        { text: 'Contact', href: getPermalink('/en/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/en/terms') },
    { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'WeChat Official Account: 架构师部落',
      icon: 'tabler:brand-wechat',
      href: getPermalink('/en/contact'),
    },
    { ariaLabel: 'Video Account: aios-rs', icon: 'tabler:video', href: getPermalink('/en/contact') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/aios-rs' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/lijingrs">Li Jing</a> · All rights reserved.
  `,
};
