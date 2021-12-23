// Store Major
export const state = () => ({
  majors: [],
  loaded: "0"
});

export const mutations = {
  setMajors(state, entries) {
    state.majors = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
};
