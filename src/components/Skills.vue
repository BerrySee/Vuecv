<template>
  <div>
    <section class="skills">
      <div class="title-container">
        <h1 class="title">Skills</h1>
      </div>
      <div class="skills-container">
        <barchart class="chartclass"></barchart>
      </div>
    </section>
  </div>
</template>
<script>
import barchart from './../Barchart.js'
export default {
  components: {
    barchart
  }
}
</script>
