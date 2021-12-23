// Store Blog
export const state = () => ({
  blogs: [],
  loaded: "0"
});

export const mutations = {
  setBlogs(state, entries) {
    state.blogs = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
};
