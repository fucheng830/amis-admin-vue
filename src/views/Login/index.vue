<!-- 组件说明 -->
<template>
  <div class="Login">
    <amis :schema="schema" />
    <Toast key="toast" position="top-right" theme="default" />
    <Alert key="alert" theme="default" />
  </div>
</template>

<script>
import amis from '@/components/Amis/index.vue'
import { ReactInVue } from 'vuera'
import { ToastComponent, AlertComponent } from 'amis'
const schema = {
  type: 'page',
  body: [
    {
      type: 'tpl',
      tpl: '<h3 style="text-align: center;">amis-admin-vue</h3>',
      inline: true,
      id: 'u:58df14c0897a',
      affixFooter: false,
      style: {}
    },
    {
      type: 'tpl',
      tpl: '<h5 style="text-align: center;">基于<a href="https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fbaidu%2Famis">amis</a>&nbsp;渲染器，快速搭建自己的管理系统。 这是基于官方应用模板<a href="https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Faisuda%2Famis-admin">amis-admin</a>的vue实现版本。 支持最新版本的<a href="https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fh7ml%2Famis-admin-vue%2Fblob%2Fmaster%2Fpackage.json%23L3">amis</a></h5>',
      inline: true,
      id: 'u:bbf4edb06976',
      affixFooter: false,
      style: {}
    },
    {
      type: 'panel',
      title: '',
      body: [
        {
          type: 'tpl',
          tpl: '',
          inline: false,
          affixFooter: false,
          style: {}
        },
        {
          type: 'form',
          title: '用户登录',
          body: [
            {
              label: '用户名',
              type: 'input-text',
              name: 'username',
              value: 'admin'
            },
            {
              type: 'input-password',
              label: '密码',
              name: 'password',
              id: 'u:245934d882c8',
              value: '123456'
            }
          ],
          id: 'u:0b62dd7f9117',
          submitText: '登录',
          mode: 'horizontal',
          api: {
            method: 'post',
            url: 'amis/api/mock2/form/saveForm?waitSeconds=2'
          },
          debug: false
        }
      ],
      id: 'u:3cf819f72e28',
      affixFooter: false,
      inline: false,
      subFormMode: '',
      className: 'Panel--primary',
      enlargeAble: false,
      headerClassName: 'b-b m-none p-none'
    }
  ]
}
export default {
  name: 'Login',
  components: {
    amis,
    Toast: ReactInVue(ToastComponent),
    Alert: ReactInVue(AlertComponent)
  },
  data() {
    return {
      schema: schema
    }
  },
  computed: {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {},
  methods: {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped></style>
