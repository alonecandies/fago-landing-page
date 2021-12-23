// Store Members
export const state = () => ({
    members: [],
    loaded: "0"
  });
  
  export const mutations = {
    setMembers(state, entries) {
      state.members = entries;
    },
    setLoaded(state, loaded) {
      state.loaded = loaded;
    }
  };
  