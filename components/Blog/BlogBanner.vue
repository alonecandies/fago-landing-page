<template>
  <div v-editable="blok" class="banner" data-aos="fade-up">
    <div class="image">
      <img :src="blok.image.filename" />
      <div class="content">
        <h3>{{ blok.headline }}</h3>
        <p>{{ blok.description }}</p>
        <form>
          <input
            type="text"
            placeholder="Your Keywords?"
            v-model="searchInput"
          />
          <div class="search">
            <nuxt-link
              v-for="blog in searchResult"
              :key="blog._uid"
              class="search-item"
              :to="blog.full_slug"
            >
              <div class="image">
                <img
                  :src="blog.content.image.filename"
                  :alt="blog.content.title"
                />
              </div>
              <span>{{ blog.content.title }}</span>
            </nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogBanner",
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      searchInput: ""
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs;
    },
    searchResult() {
      if (this.searchInput !== "") {
        return this.blogs.filter(blog => {
          return blog.content.title
            .toLowerCase()
            .includes(this.searchInput.toString().toLowerCase());
        });
      } else return [];
    }
  }
};
</script>

<style scoped>
.image,
.image img {
  width: 100%;
  position: relative;
}

.content {
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}

.content h3 {
  font-size: 60px;
  font-weight: 600;
  text-align: center;
}

.content p {
  font-size: 20px;
  text-align: center;
}

.content form {
  width: 400px;
  text-align: center;
}

.content form input {
  border-radius: 50px;
  padding: 7px 20px;
  width: 300px;
  margin-bottom: 20px;
}

.search {
  height: 250px;
  width: 100%;
  overflow: scroll;
}

.search::-webkit-scrollbar {
  display: none;
}

.search .search-item {
  display: flex;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
}

.search .search-item .image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.search .search-item .image img {
  width: inherit;
  height: 100%;
}

.search .search-item span {
  text-decoration: none;
  color: black;
}

.search .search-item:hover span {
  color:var(--primary-color);
  transition: all .3s ease 0s;
}
</style>
