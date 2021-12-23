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
      title: "Fagolabs | Our research"
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
      .get("cdn/stories/research", {
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
  // --------------------------------------
  async fetch(context) {
    // Fetch major data
    if (context.store.state.majors.loaded !== "1") {
      let majorsRefRes = await context.app.$storyapi.get("cdn/stories/", {
        starts_with: "home-content/",
        version: "draft",
        sort_by: "id:asc"
      });
      context.store.commit("majors/setMajors", majorsRefRes.data.stories);
      context.store.commit("majors/setLoaded", "1");
    }
  }
};
</script>
