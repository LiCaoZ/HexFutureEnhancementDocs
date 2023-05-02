import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '十六进制课堂增强扩展程序',
  description: '一款帮助改善 「十六进制课堂」 用户体验的扩展程序。',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '安装',
        items: [
          { text: '通过 Microsoft Edge 外接组件商店安装', link: 'https://microsoftedge.microsoft.com/addons/detail/ejlpgfdcoaofgnhkjbpemhnpoihaimck' },
          { text: '使用 CRX 安装', link: '/quick-start#%E4%BD%BF%E7%94%A8-crx-%E7%A8%8B%E5%BA%8F%E5%8C%85%E5%AE%89%E8%A3%85' },
          { text: '通过源代码安装', link: '/item-3' }
        ]
      },
      {
        text: '教师&学校',
        items: [
          { text: '申请白名单', link: '/whitelist' },
          { text: '下课时间新增与调整', link: '/finishClassTime' }
        ]
      },
      {
        text: '源代码',
        items: [
          { text: 'GitHub', link: 'https://github.com/LiCaoZ/HexFutureEnhancement' },
          { text: 'Gitee', link: 'https://gitee.com/LiCaoZ/HexFutureEnhancement' }
        ]
      },
      {
        text: '联系',
        items: [
          { text: '问题追踪器', link: 'https://github.com/LiCaoZ/HexFutureEnhancement/issues' },
          { text: 'QQ 群组', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=lTqBRzHBaJn0ErRt9aUPifSphWgVTupE&jump_from=webapi&authKey=JDtGLIcmPx92crGnmiSBJWK8xlqBXZETJXhlbfCeBcMNAVpFdSQjImI6wk5fC5r0' },
          { text: '电子邮箱', link: 'mailto:admin@licaoz.com' }
        ]
      }
    ],

    sidebar: [
      {
        text: '用户指南',
        items: [
          { text: '🧭 开始之前', link: '/before-start' },
          { text: '🚩 快速开始', link: '/quick-start' }
        ]
      },
      {
        text: '教师&学校',
        items: [
          { text: '申请白名单', link: '/whitelist' },
          { text: '下课时间新增与调整', link: '/finishClassTime' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiCaoZ/HexFutureEnhancement' }
    ],

    footer: {
      message: '<b>十六进制课堂 HEXFUTURE</b> 是 <b>北京十六进制科技有限公司</b> 的注册商标。十六进制课堂由北京十六进制科技有限公司（及其关联公司）运营。本扩展程序并非由北京十六进制科技有限公司开发，亦不受其明示或暗示担保与背书。<br>此网站使用 VitePress 构建。'
    },

    docFooter: {
      prev: '上一章节',
      next: '下一章节'
    },
    
    lastUpdatedText: '上次更新于',
    returnToTopLabel: '返回页首',
    darkModeSwitchLabel: '外观切换',
    sidebarMenuLabel: '菜单'
  }
})
