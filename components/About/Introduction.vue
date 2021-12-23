<template>
  <div v-editable="blok" class="container-fluid introduction">
    <div class="row">
      <div class="col-4" data-aos="fade-right">
        <h3>{{ blok.headline }}</h3>
        <p>{{ blok.description }}</p>
        <button data-aos="fade-right">
          <nuxt-link to="/contactus"
            >Contact Us <i class="fa fa-arrow-right"></i
          ></nuxt-link>
        </button>
      </div>
      <div class="col-8 image" data-aos="fade-left">
        <img :src="blok.image.filename" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.introduction {
  padding-right: 30px;
  color: black;
}

.image,
.image img {
  width: 100%;
}

.introduction h3 {
  font-size: 40px;
  font-weight: 600;
  margin-top: 100px;
}

.introduction p {
  font-size: 20px;
  padding: 20px 20px 0px 0px;
}

.introduction button {
  background: #fba60b;
  padding: 10px 25px;
  border-radius: 20px;
  margin-top: 20px;
}

.introduction button:hover {
  background: var(--secondary-color);
  transition: all 0.4s ease 0s;
}

.introduction button a {
  color: white;
  text-decoration: none;
}

.introduction button a i {
  font-size: 12px;
  transform: translateY(-2px);
}
</style>
