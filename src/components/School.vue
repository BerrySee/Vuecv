<template>
  <div class="item col-md-3 p-3" :class="'grid-' + index">
    <h2>{{ text }}</h2>
    <p>{{ description }}</p>
    <p>{{ start }} - {{ end }}</p>
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
