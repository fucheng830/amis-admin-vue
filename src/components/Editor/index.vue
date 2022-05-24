<template>
  <div class="amis">
    <amis-editor
      id="editorName"
      :key="refreshKey"
      class-name="is-fixed"
      :is-mobile="isMobile"
      :preview="isPreview"
      :theme="theme"
      :value="schema"
      @onChange="onChange"
    />
  </div>
</template>
<script>
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'amis-editor/dist/style.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import 'amis/lib/themes/antd.css'
import 'amis/lib/themes/default.css'
import 'amis/lib/themes/dark.css'
import 'amis/lib/themes/cxd.css'
import 'amis/sdk/sdk.js'

import { Editor } from 'amis-editor'
import { ReactInVue } from 'vuera'
export default {
  name: 'Editor',
  components: {
    amisEditor: ReactInVue(Editor)
  },
  props: {
    isPreview: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'antd'
    },
    value: {
      type: Object,
      default: function () {
        return {
          message: 'hello'
        }
      }
    }
  },
  data() {
    return {
      refreshKey: Math.random() * (3 - 1),
      schema: {}
    }
  },
  mounted() {
    this.schema = this.value
  },
  methods: {
    setSchema(obj) {
      this.schema = obj
    },
    getSchema() {
      return this.schema
    },
    onChange(e) {
      this.$emit('onChange', e)
    }
  }
}
</script>

<style lang="less" scoped>
.amis {
  width: 100%;
  height: calc(100vh - 60px * 2.7) !important;

  #editor {
    width: 100%;
    height: calc(100vh - 60px * 2.7) !important;
  }
}

.ae-Editor .ae-Editor-inner {
  height: calc(100vh - 60px * 2.7) !important;
}
</style>
