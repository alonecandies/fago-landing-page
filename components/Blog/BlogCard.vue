<template>
  <nuxt-link :to="blogLink" class="blog-link">
    <div data-aos="zoom-in" v-editable="blok" class="blog-card">
      <div class="image">
        <img :src="blok.image.filename" :alt="blok.title" />
      </div>
      <div class="content">
        <div class="content-about">
          <span>{{ blok.author }}</span>
          <span>{{ blok.created }}</span>
        </div>
        <h5>{{ blok.title }}</h5>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    },
    blogLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
li {
  list-style-type: disc;
}

.blog-link {
  text-decoration: none;
  color: black;
  margin-top: 30px;
}

.blog-card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.blog-card .image {
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
}

.blog-card .image img {
  width: 100%;
  height: auto;
}

.blog-card .content .content-about {
  margin: 20px 0px;
}

.blog-card .content .content-about span {
  font-size: 14px;
  font-weight: 600;
  color: #636363;
  margin: 0px 10px;
}

.blog-card .content .content-about span:nth-child(1) {
  background: #e5e5e5;
  border-radius: 30px;
  padding: 5px 10px;
}

.blog-card .content h5 {
  font-weight: 600;
}
</style>
