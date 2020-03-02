<template>
  <div>
    <section class="school">
      <div class="container">
        <h1 class="title">My schools</h1>
        <div class="item-container">
          <app-school
            v-for="(school) in schools"
            :text="school.schoolName"
            :start="school.schoolStart"
            :end="school.schoolEnd"
            :description="school.description"
          ></app-school>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import School from "./School";
import mydata from "../data/schools.json";
export default {
  props: ['mode'],
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
<style scoped>
</style>