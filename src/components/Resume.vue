<template>
  <div>
    <section class="jobs">
      <div class="container">
        <h1 class="row text-center justify-content-around pb-3">My Jobs</h1>
        <div class="row h-100 justify-content-center">
          <app-job
            v-for="(job, index) in jobs"
            v-bind:key="job"
            :text="job.jobName"
            :start="job.jobStart"
            :end="job.jobEnd"
            :description="job.description"
            :index="index"
          ></app-job>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Job from "./Job";
import mydata from "../data/jobs.json";
export default {
  props: ['mode'],
  data() {
    return {
      jobs: mydata
    };
  },
  components: {
    appJob: Job
  }
};
</script>
<style scoped>
</style>