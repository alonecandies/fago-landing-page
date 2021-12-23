<template>
  <div v-editable="blok" class="container-fluid major">
    <h1 data-aos="fade-up">{{ blok.headline }}</h1>
    <p data-aos="fade-up">{{ blok.description }}</p>
    <div class="row">
      <major-card
        v-for="major in majors"
        :key="major._uid"
        :blok="major.content"
      />
    </div>
    <div class="row major-btn">
      <div data-aos="fade-right" class="col-6">
        <button>
          <nuxt-link to="/product">View detail <i class="fa fa-arrow-right"></i></nuxt-link>
        </button>
      </div>
      <div data-aos="fade-left" class="col-6">
        <button>
          <nuxt-link to="/contactus">Contact us <i class="fa fa-arrow-right"></i></nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    majors() {
      let majors = this.$store.state.majors.majors;
      if (this.$nuxt.$route.path.indexOf("/product") >= 0) {
        return majors;
      }
      else return majors.slice(majors.length-4,majors.length);
    }
  }
};
</script>

<style scoped>
.row {
  position: relative;
}

.major {
  margin: 50px 0px 200px 0px;
}

.major h1,
.major p {
  text-align: center;
}

.major h1 {
  font-size: 50px;
  position: relative;
}

.major h1::after {
  content: "";
  width: 150px;
  height: 3px;
  background-color: var(--primary-color);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.major p {
  font-size: 20px;
  color: #636363;
  padding: 30px 425px;
}

.major-btn {
  margin-top: 30px;
}

.major-btn div:nth-child(1) {
  display: flex;
  justify-content: flex-end;
}

.major-btn button {
  padding: 8px 50px;
  border-radius: 20px;
  margin-top: 20px;
}

.major-btn div:nth-child(1) button {
  background: #fba60b;
}

.major-btn div:nth-child(2) button {
  background: var(--primary-color);
}

.major-btn button:hover {
  background: var(--secondary-color) !important;
  transition: all 0.4s ease 0s;
}

.major-btn button a {
  color: white;
  text-decoration: none;
}

.major-btn button a i {
  font-size: 12px;
  transform: translateY(-2px);
}
</style>
