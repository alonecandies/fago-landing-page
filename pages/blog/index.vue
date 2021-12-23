<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Fagolabs | Blog"
    };
  },
  data() {
    return {
      story: { content: {} }
    };
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on("input", event => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(["published", "change"], event => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        });
      });
    });
  },
  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get("cdn/stories/blog", {
        version: "draft"
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  },
  async fetch(context) {
    // Fetch advertise data
    if (context.store.state.ads.loaded !== "1") {
      let adsRefRes = await context.app.$storyapi.get("cdn/stories/", {
        starts_with: "advertise/",
        version: "draft",
        sort_by: "id:asc"
      });
      context.store.commit("ads/setAds", adsRefRes.data.stories);
      context.store.commit("ads/setLoaded", "1");
    }
    // Fetch blog data
    if (context.store.state.blogs.loaded !== "1") {
      let blogsRefRes = await context.app.$storyapi.get("cdn/stories/", {
        starts_with: "blogs/",
        version: "draft",
        sort_by: "id:desc"
      });
      context.store.commit("blogs/setBlogs", blogsRefRes.data.stories);
      context.store.commit("blogs/setLoaded", "1");
    }
  }
};
</script>
