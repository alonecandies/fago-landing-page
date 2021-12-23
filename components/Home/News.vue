<template>
  <div v-editable="blok" class="container-fluid news">
    <h1 data-aos="fade-up">{{ blok.headline }}</h1>
    <p data-aos="fade-up">{{ blok.description }}</p>
    <div class="row">
      <new-card
        class="col-6"
        v-for="blog in blogs"
        :key="blog._uid"
        :blok="blog.content"
        :blog-link="blog.full_slug"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    blogs() {
      const blogs = this.$store.state.blogs.blogs;
      if (blogs.length >= 4) return blogs.slice(0, 4);
      else return blogs;
    }
  }
};
</script>

<style scoped>
.row {
  position: relative;
}

.news {
  margin: 50px 0px;
  padding: 0px 300px;
}

.news h1,
.news p {
  text-align: center;
}

.news h1 {
  font-size: 50px;
  position: relative;
}

.news h1::after {
  content: "";
  width: 150px;
  height: 3px;
  background-color: var(--primary-color);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.news p {
  font-size: 20px;
  color: #636363;
  padding: 30px 300px;
}
</style>
