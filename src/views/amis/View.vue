<template>
  <div><component :is="component" /></div>
</template>

<script>
import AmisView from '@/components/View/index.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'View',
  components: {
    AmisView
  },
  computed: {
    ...mapGetters({
      component: 'amis/component'
    })
  }
}
</script>
