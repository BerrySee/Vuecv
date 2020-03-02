<template>
  <div class="app" :class="mode">
    <app-header :mode="mode" @toggle="toggle"></app-header>
    <transition name="view">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  data() {
    return {
      mode: "light"
    };
  },
  components: {
    appHeader: Header
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  }
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>
