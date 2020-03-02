<template>
  <div>
    <div class="item">
      <h2>{{ text }}</h2>
      <p>{{ description }}</p>
      <p>{{ start }} - {{ end }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Job",
  props: {
    index: Number,
    text: String,
    start: String,
    end: String,
    description: String
  }
};
</script>
