<template>
  <div v-editable="blok" class="container-fluid team">
    <div class="row">
      <div class="col-3" data-aos="fade-right">
        <h3>{{ blok.headline }}</h3>
        <p>{{ blok.description }}</p>
        <button data-aos="fade-right">
          <nuxt-link to="/contactus"
            >Contact Us <i class="fa fa-arrow-right"></i
          ></nuxt-link>
        </button>
      </div>
      <VueSlickCarousel
        v-bind="carouselSettings"
        class="col-9 carousel"
        data-aos="fade-left"
      >
        <member
          v-for="member in members"
          :key="member._uid"
          :blok="member.content"
        ></member>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Team",
  components: { VueSlickCarousel },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      carouselSettings: {
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000
      }
    };
  },
  computed: {
    members() {
      return this.$store.state.members.members;
    }
  }
};
</script>

<style scoped>
.team {
  padding: 100px 40px 100px 200px;
}

.team h3 {
  font-size: 40px;
  font-weight: 600;
}

.team p {
  font-size: 20px;
}

.team button {
  background: #fba60b;
  padding: 10px 25px;
  border-radius: 20px;
  margin-top: 20px;
}

.team button:hover {
  background: var(--secondary-color);
  transition: all 0.4s ease 0s;
}

.team button a {
  color: white;
  text-decoration: none;
}

.team button a i {
  font-size: 12px;
  transform: translateY(-2px);
}

.carousel {
  padding: 0px 20px;
}

.carousel::before {
  content: "";
  height: 100px;
  width: 100%;
  background-color: #c4d5f8;
  position: absolute;
  right: 0px;
}
</style>
