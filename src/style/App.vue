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
import Aboutme from "./components/Aboutme.vue"
export default {
  data() {
    return {
      mode: "light"
    };
  },
  components: {
    appHeader: Header,
    appAboutme: Aboutme
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
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter {
  opacity: 0;
  transform: translateY(-100px);
}

.view-leave {
  opacity: 1;
  transform: translateY(0px);
}
</style>
