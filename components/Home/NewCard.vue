<template>
  <nuxt-link :to="blogLink" class="blog-link">
    <div data-aos="zoom-in" v-editable="blok" class="blog-card">
      <div class="image">
        <img :src="blok.image.filename" :alt="blok.title" />
      </div>
      <div class="content">
        <span>{{ blok.created }}</span>
        <h5>{{ blok.title }}</h5>
        <p>{{ blok.description }}</p>
        <a href="#">Continue reading <i class="fa fa-angle-right"></i></a>
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
  width: 100%;
  position: relative;
  align-items: center;
  padding: 30px;
}

.blog-card .image {
  width: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.blog-card .image img {
  width: 100%;
  height: auto;
}

.blog-card .content {
  width: 100%;
  margin-left: 15px;
}

.blog-card .content span {
  font-size: 10px;
  font-weight: 600;
  color: #636363;
  background: #e5e5e5;
  border-radius: 30px;
  padding: 5px 10px;
}

.blog-card .content h5 {
  font-weight: 600;
  margin: 10px 0px;
}

.blog-card .content p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #636363;
  font-size: 14px;
}

.blog-card .content a {
  position: absolute;
  bottom: 0;
  right: 5%;
  text-decoration: none;
  color: black;
}
</style>
