<template>
  <form @submit.prevent="handleContact">
    <div>Contact us</div>
    <div>
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Your name"
        required
      />
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Your email"
        required
      />
      <input
        type="text"
        name="company"
        v-model="company"
        placeholder="Your company"
      />
      <textarea rows="3" v-model="need" placeholder="Tell us what you need" />
      <button type="submit" @click="handleContact">
        Receive Email
      </button>
      <span>*We will send you email within 24 hours</span>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      company: "",
      need: ""
    };
  },
  methods: {
    handleContact() {}
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  width: 90%;
}

form div:nth-child(1) {
  background: #fba60b;
  border-radius: 16px 16px 0px 0px;
  color: white;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  padding: 15px 0px;
}

form div {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form div input,
form div textarea {
  margin-bottom: 30px;
  padding: 15px;
  width: 100%;
}

form div button {
  background: #fba60b;
  padding: 10px 25px;
  border-radius: 20px;
  width: fit-content;
  color: white;
}

form div button:hover {
  background: var(--secondary-color);
  transition: all 0.4s ease 0s;
}

form div span {
  font-size: 12px;
  margin-top: 15px;
}
</style>
