<template>
  <body>
    <amis :schema="schema" />
    <Toast key="toast" position="top-right" theme="default" />
    <Alert key="alert" theme="default" />
  </body>
</template>

<script>
import amis from '@/components/Amis/index.vue'
import { ReactInVue } from 'vuera'
import { ToastComponent, AlertComponent } from 'amis'
export default {
  name: 'View',
  components: {
    amis,
    Toast: ReactInVue(ToastComponent),
    Alert: ReactInVue(AlertComponent)
  },
  data() {
    return {
      schema: {
        type: 'app',
        brandName: 'amis-admin-vue',
        logo: '/logo.png',
        header: {
          type: 'tpl',
          inline: false,
          className: 'w-full',
          tpl:
            '<div class="flex justify-between">' +
            '<div class="justify-between"><ul class="HeaderLinks"><a href="/amis/zh-CN/docs"  target="_blank">文档</a><a href="/amis/zh-CN/components"  target="_blank">组件</a><a href="/amis/zh-CN/style">样式</a><a href="/"  target="_blank">示例</a><a href="/iframe">编辑器</a></ul></div>' +
            '<div  class="hidden-xs ml-auto flex justify-between"><div class="hidden-xs ml-auto"><div tabindex="0" class="cxd-Select" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-0-label"><div class="cxd-Select-valueWrap"><div class="cxd-Select-value">中文</div></div><span class="cxd-Select-arrow"><svg viewBox="0 0 12 8" class="icon icon-caret"><g id="04\u4E0B\u62C9/24px/\u9ED8\u8BA4\u7981\u7528" transform="translate(-115.000000, -8.000000)"><polygon id="Shape" fill="currentColor" fill-rule="nonzero" points="125.472727 8 121 12.8 116.527273 8 115 9.6 121 16 127 9.6"></polygon></g></svg></span></div></div><div class="hidden-xs ml-2"><div tabindex="0" class="cxd-Select" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-1-label"><div class="cxd-Select-valueWrap"><div class="cxd-Select-value">云舍</div></div><span class="cxd-Select-arrow"><svg viewBox="0 0 12 8" class="icon icon-caret"><g id="04\u4E0B\u62C9/24px/\u9ED8\u8BA4\u7981\u7528" transform="translate(-115.000000, -8.000000)"><polygon id="Shape" fill="currentColor" fill-rule="nonzero" points="125.472727 8 121 12.8 116.527273 8 115 9.6 121 16 127 9.6"></polygon></g></svg></span></div></div><div class="hidden-xs ml-2"><div tabindex="0" class="cxd-Select" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-2-label"><div class="cxd-Select-valueWrap"><div class="cxd-Select-value">桌面端</div></div><span class="cxd-Select-arrow"><svg viewBox="0 0 12 8" class="icon icon-caret"><g id="04\u4E0B\u62C9/24px/\u9ED8\u8BA4\u7981\u7528" transform="translate(-115.000000, -8.000000)"><polygon id="Shape" fill="currentColor" fill-rule="nonzero" points="125.472727 8 121 12.8 116.527273 8 115 9.6 121 16 127 9.6"></polygon></g></svg></span></div></div><div id="Header-toolbar"><div class="hidden-xs hidden-sm ml-3"><div><div class="Doc-headingList"><div class="Doc-headingList-item"><a>查看配置 <i class="fa fa-code p-l-xs"></i></a></div><div class="Doc-headingList-item"><a>复制配置 <i class="fa fa-copy p-l-xs"></i></a></div></div></div></div></div></div>' +
            '</div>'
        },
        api: '/pages/site.json'
      }
    }
  },
  created() {
    const { host, origin } = location
    if (host.includes('gitee') || host.includes('github'))
      this.schema.api = origin + '/amis-admin-vue/pages/host.json'
  }
}
</script>
<style>
.fa {
  margin: calc(
      (
          var(--Layout-nav-height) - var(--lineHeightBase) *
            var(--Layout-asideLink-fontSize)
        ) / -2
    ) -0.625rem;
  line-height: var(--Layout-nav-height) !important;
  width: var(--Layout-nav-height);
  vertical-align: middle;
  float: left;
  margin-right: 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  /*color: var(--Layout-asideLink-iconColor);*/
  /*font-size: var(--Layout-asideLink-onHover-iconSize);*/
}
.w-full {
  height: 50px;
}
.HeaderLinks {
  font-size: 14px;
  margin: 0;
  padding: 0;
  float: left;
  line-height: 50px;
  white-space: nowrap;
}

.HeaderLinks > a {
  display: inline-block;
  color: #333;
  padding: 0 5px;
  margin: 0 5px;
  font-weight: 500;
  text-decoration: none;
}

.HeaderLinks > a:hover,
.HeaderLinks > a.is-active {
  color: var(--primary);
  position: relative;
  text-decoration: none;
}

.HeaderLinks > a:hover::before,
.HeaderLinks > a.is-active::before {
  content: '';
  border-bottom: 2px solid var(--primary);
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
