<template>
  <section>
    <div class="container">
      <h2 class="row text-center justify-content-around">My schools</h2>
      <app-school
        v-for="(school, index) in schools"
        v-bind:key="school"
        :text="school.schoolName"
        :start="school.schoolStart"
        :end="school.schoolEnd"
        :description="school.description"
        :index="index"
      ></app-school>
    </div>
  </section>
</template>

<script>
import School from "./School";
import mydata from "../data/mydata.json";
export default {
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
