<!-- 组件说明 -->
<template>
  <div class="NotFound"><h1>404，你的页面走丢了</h1></div>
</template>

<script>
// import x from ''
export default {
  name: 'NotFound',
  components: {},
  data() {
    return {}
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
