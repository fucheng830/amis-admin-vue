<template>
  <div class="card">
    <div class="card-header">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="btn-group">
              <button
                aria-expanded="false"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                type="button"
              >
                主题风格: {{ editor.theme }}
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" @click="changeTheme('default')">default</a>
                </li>
                <li><a class="dropdown-item" @click="changeTheme('cxd')">cxd</a></li>
                <li>
                  <a class="dropdown-item" @click="changeTheme('dark')">dark</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="changeTheme('antd')">antd</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="btn-group">
              <button
                aria-expanded="false"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                type="button"
              >
                PC端/移动端: {{ editor.isMobile?'移动端':'PC端' }}
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="changeMobile(true)">PC端</a></li>
                <li>
                  <a class="dropdown-item" @click="changeMobile(false)">移动端</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="btn-group">
              <button
                aria-expanded="false"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                type="button"
              >
                预览/编辑: {{ editor.isPreview?'预览':'编辑' }}
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" @click="changePreview(true)">预览</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="changePreview(false)">编辑</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <AmisEditor
        :is-mobile="editor.isMobile"
        :is-preview="editor.isPreview"
        :theme="editor.theme"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import AmisEditor from '@/components/Editor/index.vue'
export default {
  name: 'Editor',
  components: {
    AmisEditor
  },
  computed: {
    ...mapGetters({
      editor: 'amis/editor'
    })
  },
  methods: {
    ...mapMutations({
      changeMobile: 'amis/changeMobile',
      changePreview: 'amis/changePreview',
      changeTheme: 'amis/changeTheme'
    })
  }
}
</script>
