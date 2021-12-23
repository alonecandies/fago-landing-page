<template>
  <div v-editable="blok" class="container-fluid blog-top">
    <div class="row">
      <div class="col-9">
        <new-card
          data-aos="fade-up"
          v-for="blog in blogs"
          :key="blog._uid"
          :blok="blog.content"
          :blog-link="blog.full_slug"
        />
        <div class="view-more" :class="{ hide: hide }">
          <button data-aos="fade-up" @click.prevent="viewMore">
            View more <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <a
        data-aos="fade-left"
        :href="adsright"
        class="col-3 adsright"
        target="_blank"
      >
        <img :src="adsright" alt="" />
      </a>
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
  data() {
    return {
      page: 0,
      hide: false
    };
  },
  computed: {
    blogs() {
      const listBlogs = this.$store.state.blogs.blogs.slice(
        7,
        this.$store.state.blogs.blogs.length
      );
      if (listBlogs.length <= (this.page + 1) * 6) {
        this.hide = true;
      }
      return listBlogs.slice(0, 7);
    },
    adsright() {
      return this.$store.state.ads.ads[1].content.url;
    }
  },
  methods: {
    viewMore: function() {
      const listBlogs = this.$store.state.blogs.blogs.slice(
        7,
        this.$store.state.blogs.blogs.length - 1
      );
      this.page++;
      this.blogs.push(
        listBlogs.slice(this.page * 6 + 1, (this.page + 1) * 6 + 1)
      );
      if (listBlogs.length <= this.page * 6 + 1) {
        this.hide = true;
      }
    }
  }
};
</script>

<style scoped>
.blog-top {
  margin: 50px 0px;
}

.blog-top .view-more {
  display: flex;
  justify-content: center;
}

.blog-top button {
  background: var(--primary-color);
  padding: 10px 15px;
  border-radius: 20px;
  margin-top: 30px;
  color: white;
}

.blog-top button i {
  font-size: 12px;
  transform: translateY(-2px);
}

.blog-top button:hover {
  background: var(--secondary-color);
  transition: all 0.4s ease 0s;
}

.adsright,
.adsright img {
  width: 100%;
}

.view-more.hide {
  display: none;
}
</style>
