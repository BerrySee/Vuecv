<template>
  <div>
    <section class="school">
      <div class="title-container">
        <h1 class="title">My schools</h1>
      </div>
      <div class="item-container">
        <app-school
          v-for="school in schools"
          v-bind:key="school"
          :text="school.name"
          :start="school.start"
          :end="school.end"
          :description="school.description"
        ></app-school>
      </div>
    </section>
  </div>
</template>

<script>
import School from './School';
import mydata from '../data/schools.json';
export default {
  props: ['mode', 'school'],
  data() {
    return {
      schools: mydata
    };
  },
  components: {
    appSchool: School
  }
};
</script>
<style scoped></style>
