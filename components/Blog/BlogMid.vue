<template>
  <div v-editable="blok" class="container-fluid blog-mid">
    <div class="row">
      <nuxt-link
        :to="blog.full_slug"
        class="col-6 image"
        data-aos="fade-up-right"
      >
        <img :src="blog.content.image.filename" :alt="blog.content.title" />
      </nuxt-link>
      <div class="col-6 content" data-aos="fade-up-left">
        <nuxt-link :to="blog.full_slug">{{ blog.content.title }}</nuxt-link>
        <div class="content-about">
          <span>{{ blog.content.author }}</span>
          <span>{{ blog.content.created }}</span>
        </div>
        <p>{{ blog.content.description }}</p>
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
    }
  },
  computed: {
    blog() {
      const blogs = this.$store.state.blogs.blogs;
      if (blogs.length >= 13) return blogs.slice(6, 7)[0];
      else return blogs[0];
    }
  }
};
</script>

<style scoped>
.blog-mid {
  margin: 100px 0px;
}

.image,
.image img {
  width: 100%;
}

.content a {
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-weight: 600;
}

.content .content-about {
  margin: 10px 0px;
}

.content .content-about span {
  font-size: 14px;
  font-weight: 600;
  color: #636363;
  margin: 0px 10px;
}

.content .content-about span:nth-child(1) {
  background: #e5e5e5;
  border-radius: 30px;
  padding: 5px 10px;
}

.content p {
  color: rgba(0, 0, 0, 0.6);
}
</style>
