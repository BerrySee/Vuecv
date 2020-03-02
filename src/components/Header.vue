<template>
  <header>
    <h1>{{ mode }} Mode</h1>
    <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle>
    <nav>
      <router-link to="/aboutme" tag="li" activeClass="active" class="nav-link">
        <a>Aboutme</a>
      </router-link>
      <router-link to="/schools" tag="li" activeClass="active" class="nav-link">
        <a>Schools</a>
      </router-link>
      <router-link to="/resume" tag="li" activeClass="active" class="nav-link">
        <a>Resumé</a>
      </router-link>
      <router-link to="/skills" tag="li" activeClass="active" class="nav-link">
        <a>Skills</a>
      </router-link>
    </nav>
  </header>
</template>
<script>
import Toggle from "./Toggle";
export default {
  props: ["mode"],
  components: {
    Toggle
  }
};
</script>
