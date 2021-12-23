<template>
  <div data-aos="fade-right" v-editable="blok" class="contact-method">
    <div class="image">
      <img :src="blok.image.filename" :alt="blok.image.filename" />
    </div>
    <h4>{{ blok.headline }}</h4>
    <p>{{ blok.description }}</p>
    <div class="phone">
      <span>Phone:</span>
      <span>{{ blok.phone }}</span>
    </div>
    <div class="email">
      <span>Email:</span>
      <span>{{ blok.email }}</span>
    </div>
    <span>({{ blok.note }})</span>
  </div>
</template>

<script>
export default {
  name: "ContactMethod",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.contact-method {
  border-bottom: 1px solid rgba(57, 115, 230, 0.57);
  font-size: 18px;
  padding: 20px 20px 20px 0px;
}

.image {
  width: 100px;
  height: 100px;
}

.image img {
  width: 100%;
}

.contact-method h4 {
  font-size: 30px;
  font-weight: 600;
}

.phone,
.email {
  margin: 10px 0px;
}

.phone span:nth-child(1),
.email span:nth-child(1) {
  font-weight: 600;
}
</style>
