<template>
  <AMisRenderer :schema="schema" />
</template>

<script>
import AMisRenderer from "@/components/amis/AMisRenderer.vue";
export default {
  name: "AmisView",
  components: {
    AMisRenderer,
  },
  data() {
    return {
      schema: {
        type: "app",
        brandName: "amis-admin-vue",
        logo: "/logo.png",
        header: {
          type: "tpl",
          inline: false,
          className: "w-full",
          tpl:
            '<div class="flex justify-between">' +
            '<div><ul class="HeaderLinks"><a href="/amis/zh-CN/docs"  target="_blank">文档</a><a href="/amis/zh-CN/components"  target="_blank">组件</a><a href="/amis/zh-CN/style">样式</a><a href="/"  target="_blank">示例</a><a href="/iframe">编辑器</a></ul>' +
            "</div>",
        },
        api: "/pages/site.json",
      },
    };
  },
};
</script>
<style>
.w-full {
  height: 50px;
}
.HeaderLinks {
  /* font-size:14px; */
  /* padding-left:35px; */
  /* margin:0; */
  padding: 0;
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
  content: "";
  border-bottom: 2px solid var(--primary);
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
