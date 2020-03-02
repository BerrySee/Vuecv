<template>
  <div class="text-center col-md-6 col-xs-12 p-3 note">
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
