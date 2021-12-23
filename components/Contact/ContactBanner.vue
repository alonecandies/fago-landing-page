<template>
  <div v-editable="blok" class="contact-banner" data-aos="fade-down">
    <div class="image">
      <img :src="blok.image.filename" alt="" />
      <div class="content">
        <h3 data-aos="fade-down">{{ blok.headline }}</h3>
        <p data-aos="fade-down">{{ blok.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBanner",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.image,
.image img {
  position: relative;
  width: 100%;
}

.content {
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  text-align: center;
}

.content h3{
  font-size: 45px;
  font-weight: 600;
}

.content p{
  font-size: 18px;
  padding: 0px 150px;
}
</style>
