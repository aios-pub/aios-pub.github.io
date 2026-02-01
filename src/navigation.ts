import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: '/#',
    },
    {
      text: '服务',
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
      title: '服务',
      links: [
        { text: 'AI战略咨询', href: getPermalink('/services') },
        { text: '解决方案设计', href: getPermalink('/services') },
        { text: '智能体系统开发', href: getPermalink('/services') },
        { text: '数据工程服务', href: getPermalink('/services') },
        { text: '模型优化服务', href: getPermalink('/services') },
        { text: '运维支持服务', href: getPermalink('/services') },
      ],
    },
    {
      title: '产品',
      links: [
        { text: 'MoFA开源框架', href: 'https://github.com/mofa-org/mofa' },
        { text: 'AIOS解决方案', href: getPermalink('/services') },
        { text: '定价方案', href: getPermalink('/pricing') },
        { text: '行业案例', href: getPermalink('/about') },
      ],
    },
    {
      title: '支持',
      links: [
        { text: '技术文档', href: '#' },
        { text: '开发者社区', href: 'https://github.com/mofa-org/mofa' },
        { text: '联系支持', href: getPermalink('/contact') },
      ],
    },
    {
      title: '公司',
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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mofa-org/mofa' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/lijingrs">李靖</a> · All rights reserved.
  `,
};
