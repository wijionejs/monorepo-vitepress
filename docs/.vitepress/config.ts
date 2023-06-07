import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flow UI Web Core docs",
  description: "A VitePress Site",
  base: "/monorepo-vitepress/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  rewrites: {
    'packages/:pkg/docs': ':pkg',
    'packages/package-1/docs': "package-1",
    'packages/package-2/docs': "package-2",
    'package-1': "package-1",
    'package-2': "package-2",
  }
})
