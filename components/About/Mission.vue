<template>
  <div v-editable="blok" class="container-fluid mission">
    <div class="row" data-aos="fade-up">
      <div class="col-6" data-aos="fade-right">
        <div class="image">
          <img :src="blok.image.filename" alt="" />
        </div>
      </div>
      <div class="col-6" data-aos="fade-left">
        <h3>{{ blok.headline }}</h3>
        <p>{{ blok.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mission",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.mission {
  border-right: 70px solid var(--primary-color);
  background: #c4d5f8;
  color: black;
  padding-left: 30px;
  text-align: right;
  margin-top: 100px;
}

.image {
  border-radius: 20px;
  filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  transform: translateY(-30%);
}

.image,
.image img {
  width: 100%;
}

.mission h3 {
  font-size: 40px;
  font-weight: 600;
  margin-top: 50px;
}

.mission p {
  font-size: 20px;
  padding-left: 100px;
}
</style>
