<template>
  <div class="item">
    <h2>{{ text }}</h2>
    <p>{{ description }}</p>
    <h3>{{ start }} - {{ end }}</h3>
  </div>
</template>
<script>
export default {
  name: "School",
  props: {
    index: Number,
    text: String,
    start: String,
    end: String,
    description: String
  }
};
</script>
