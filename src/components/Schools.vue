<template>
  <div>
    <section class="school">
      <div class="container-fluid">
        <h1 class="row text-center justify-content-around pb-3">My schools</h1>
        <div class="row h-100 justify-content-center">
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
      </div>
    </section>
  </div>
</template>

<script>
import School from "./School";
import mydata from "../data/mydata.json";
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