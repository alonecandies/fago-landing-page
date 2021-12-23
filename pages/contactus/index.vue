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
      title: "Fagolabs | Contact Us"
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
      .get("cdn/stories/contactus", {
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
  //---------------------
  async fetch(context) {
    // Fetch contact data
    if (context.store.state.contacts.loaded !== "1") {
      let contactsRefRes = await context.app.$storyapi.get("cdn/stories/", {
        starts_with: "contact/",
        version: "draft",
        sort_by: "id:asc"
      });
      context.store.commit("contacts/setContacts", contactsRefRes.data.stories);
      context.store.commit("contacts/setLoaded", "1");
    }
  }
}
</script>
