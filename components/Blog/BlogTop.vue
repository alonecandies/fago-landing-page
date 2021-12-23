<template>
  <div data-aos="fade-up" v-editable="blok" class="container-fluid blog-top">
    <div class="row">
      <blog-card
        data-aos="zoom-in"
        class="col-4"
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
      if (blogs.length >= 13) return blogs.slice(0, 6);
      else return blogs.slice(0,6);
    }
  }
};
</script>

<style scoped>
.blog-top {
  margin: 50px 0px;
}
</style>
