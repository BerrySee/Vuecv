<template>
  <div>
    <section class="jobs">
      <div class="container">
        <h1 class="title">My Jobs</h1>
        <div class="item-container">
          <app-job
            v-for="(job) in jobs"
            :text="job.jobName"
            :start="job.jobStart"
            :end="job.jobEnd"
            :description="job.description"
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