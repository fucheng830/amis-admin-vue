<template>
  <div id="app">
    <component :is="component" />
  </div>
</template>

<script>
import AmisView from '@/components/View/index.vue'
import AmisEditor from '@/components/Editor/index.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    AmisView,
    AmisEditor
  },
  computed: {
    ...mapGetters({
      component: 'amis/component'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
