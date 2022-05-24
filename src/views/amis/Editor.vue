<template>
  <div class="card">
    <div class="card-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4 text-center">
            <div class="btn-group">
              <div class="col-auto">
                <label class="fs-5 col-form-label fa-brands fa-themeco"
                  >主题样式
                </label>
              </div>
              <div class="col-auto">
                <button
                  aria-expanded="false"
                  class="btn btn-primary dropdown-toggle ms-3"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  {{ editor.theme }}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" @click="changeTheme('default')"
                      >default</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" @click="changeTheme('cxd')">cxd</a>
                  </li>
                  <li>
                    <a class="dropdown-item" @click="changeTheme('dark')"
                      >dark</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" @click="changeTheme('antd')"
                      >antd</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-4 text-center">
            <div class="btn-group">
              <div class="col-auto">
                <label
                  class="fs-5 col-form-label"
                  :class="
                    editor.isMobile
                      ? 'fa-duotone fa-phone'
                      : 'fa-brands fa-windows'
                  "
                >
                  {{ editor.isMobile ? '移动端' : 'PC端' }}
                </label>
              </div>
              <button
                aria-expanded="false"
                class="btn btn-primary dropdown-toggle ms-3"
                :class="
                  editor.isMobile
                    ? 'fa-duotone fa-phone'
                    : 'fa-brands fa-windows'
                "
                data-bs-toggle="dropdown"
                type="button"
              >
                {{ editor.isMobile ? '移动端' : 'PC端' }}
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item fa-brands fa-windows"
                    @click="changeMobile(false)"
                    >PC端</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item fa-duotone fa-phone"
                    @click="changeMobile(true)"
                    >移动端</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-4 text-center">
            <div class="btn-group">
              <div class="col-auto">
                <label
                  class="fs-5 col-form-label fa-solid"
                  :class="editor.isPreview ? 'fa-eye' : 'fa-pen-to-square'"
                >
                  {{ editor.isPreview ? '预览' : '编辑' }}
                </label>
              </div>
              <button
                aria-expanded="false"
                class="btn btn-primary dropdown-toggle ms-3"
                data-bs-toggle="dropdown"
                type="button"
              >
                {{ editor.isPreview ? '预览' : '编辑' }}
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item fa-solid fa-eye"
                    @click="changePreview(true)"
                    >预览</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item fa-solid fa-pen-to-square"
                    @click="changePreview(false)"
                    >编辑</a
                  >
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
import '@fortawesome/fontawesome-free/css/all.css'
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
