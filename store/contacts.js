// Store Contact method
export const state = () => ({
  contacts: [],
  loaded: "0"
});

export const mutations = {
  setContacts(state, entries) {
    state.contacts = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
};