<template>
  <div>
    <section class="aboutme">
      <div class="title-container">
        <h1 class="title">Welcome To My Page</h1>
      </div>

      <div class="aboutme-container">
        <div class="me text center">
          <h1>About me</h1>
          <p>My name is Bertalan Bogyó I am a self taugth web developer</p>
        </div>
        <div class="picture">
          <img :src="images.me" />
        </div>
      </div>
      <div class="download-btn">
        <p>Download My CV in PDF</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: {
        me: require('./../picture/portre.jpg')
      }
    };
  }
};
</script>
<style></style>
