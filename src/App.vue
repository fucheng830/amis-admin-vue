<template>
  <div id="app">
    <AmisView />
    <Toast key="toast" position="top-right" theme="default" />
    <Alert key="alert" theme="default" />
  </div>
</template>

<script>
import AmisView from "./components/amisAdmin/AmisView.vue";
import { ReactInVue } from "vuera";
import { ToastComponent, AlertComponent } from "amis";

export default {
  name: "App",
  components: {
    AmisView,
    Toast: ReactInVue(ToastComponent),
    Alert: ReactInVue(AlertComponent),
  },
};
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
