<template>
  <div v-editable="blok" class="container-fluid blog">
    <a data-aos="fade-up" :href="adstop" class="adstop" target="_blank">
      <img :src="adstop" alt="" />
    </a>
    <div class="row">
      <div class="col-8 blog-content">
        <h1>{{ blok.title }}</h1>
        <span>{{ blok.author }}</span>
        <span>{{ blok.created }}</span>
        <div>
          <img :src="blok.image.filename" :alt="blok.title" />
        </div>
        <rich-text-renderer :document="blok.content" />
        <span>{{ blok.author }}</span>
        <span>{{ blok.created }}</span>
      </div>
      <a
        data-aos="fade-left"
        :href="adsright"
        class="col-4 adsright"
        target="_blank"
      >
        <img :src="adsright" alt="" />
      </a>
    </div>
    <div class="related-blog">
      <h2>Related Blog</h2>
      <span>You maybe concern about it!</span>
      <div class="row">
        <blog-card
          class="col-4"
          v-for="blog in relatedBlogs"
          :key="blog._uid"
          :blok="blog.content"
          :blog-link="blog.full_slug"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    },
    adstop: {
      type: String
    },
    adsright: {
      type: String
    }
  },
  computed: {
    relatedBlogs() {
      return this.$store.state.blogs.blogs.slice(0, 6);
    }
  }
};
</script>

<style scoped>
.adstop,
.adstop img,
.adsright,
.adsright img {
  width: 100%;
  margin-top: 110px;
}

.blog-content {
  margin-top: 40px;
}

.blog-content h1 {
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
}

.blog-content span {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  margin: 20px;
}

.blog-content div,
.blog-content div img {
  width: 100%;
  margin-top: 20px;
}

.related-blog {
  margin: 20px 0px 50px 0px;
}
</style>
