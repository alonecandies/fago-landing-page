// Store advertise
export const state = () => ({
  ads: [],
  loaded: "0"
});

export const mutations = {
  setAds(state, entries) {
    state.ads = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
};
