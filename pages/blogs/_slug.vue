<template>
  <section>
    <blog :blok="story.content" :adstop="adstop" :adsright="adsright" />
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.story.content.title
    };
  },
  data() {
    return {
      story: { content: {} },
      adstop: this.$store.state.ads.ads[0].content.url,
      adsright: this.$store.state.ads.ads[1].content.url
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
    // Load the JSON from the API
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    return context.app.$storyapi
      .get(`cdn/stories/blogs/${context.params.slug}`, {
        version: version
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
  }
};
</script>
