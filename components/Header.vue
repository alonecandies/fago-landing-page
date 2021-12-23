<template>
  <header class="container-fluid">
    <div class="row">
      <div class="col-3">
        <nuxt-link to="/" class="logo" :class="{ logo__black: changeLogoColor }"
          >FAGO.LABS</nuxt-link
        >
      </div>
      <div class="navigation col-9">
        <button @click="toogleResponsiveMenu">
          <i class="fa" :class="{ 'fa-bars': !isDrop, 'fa-times': isDrop }"></i>
        </button>
        <ul data-aos="fade-down" :class="{ navigation__black: changeNavColor }">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li class="navigation-dropmenu">
            <a href="#">Our Work <i class="fa fa-caret-down"></i></a>
            <ul class="dropmenu-item">
              <li><nuxt-link to="/product">Product</nuxt-link></li>
              <li><nuxt-link to="/research">Research</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/aboutus">About Us</nuxt-link></li>
          <li><nuxt-link to="/contactus">Contact Us</nuxt-link></li>
        </ul>
      </div>
    </div>
    <ul class="responsive-menu" :class="{ drop: isDrop }">
      <li>
        <nuxt-link @click.native="toogleResponsiveMenu" to="/">Home</nuxt-link>
      </li>
      <li class="responsive-dropmenu">
        <a href="#">Our Work <i class="fa fa-caret-down"></i></a>
        <ul class="dropmenu-item">
          <li>
            <nuxt-link @click.native="toogleResponsiveMenu" to="/product"
              >Product</nuxt-link
            >
          </li>
          <li>
            <nuxt-link @click.native="toogleResponsiveMenu" to="/research"
              >Research</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link @click.native="toogleResponsiveMenu" to="/blog"
          >Blog</nuxt-link
        >
      </li>
      <li>
        <nuxt-link @click.native="toogleResponsiveMenu" to="/aboutus"
          >About Us</nuxt-link
        >
      </li>
      <li>
        <nuxt-link @click.native="toogleResponsiveMenu" to="/contactus"
          >Contact Us</nuxt-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDrop: false
    };
  },
  methods: {
    toogleResponsiveMenu: function() {
      this.isDrop = !this.isDrop;
    }
  },
  computed: {
    changeLogoColor: function() {
      if (
        this.$nuxt.$route.path.indexOf("/blogs") >= 0 ||
        this.$nuxt.$route.path.indexOf("/product") >= 0 ||
        this.$nuxt.$route.path.indexOf("/research") >= 0 ||
        this.$nuxt.$route.path.indexOf("/aboutus") >= 0 ||
        this.$nuxt.$route.path.indexOf("/contactus") >= 0
      ) {
        return true;
      } else return false;
    },
    changeNavColor: function() {
      if (
        this.$nuxt.$route.path.indexOf("/blogs") >= 0 ||
        this.$nuxt.$route.path.indexOf("/aboutus") >= 0 ||
        this.$nuxt.$route.path.indexOf("/contactus") >= 0
      ) {
        return true;
      } else return false;
    }
  }
};
</script>

<style scoped>
header {
  background-color: transparent;
  position: absolute;
  z-index: 1;
}

a {
  text-decoration: none;
}

.logo__black {
  color: black !important;
}

.navigation__black li a {
  color: black !important;
}

.navigation__black li a:hover {
  background-color: black !important;
  color: white !important;
}

.container-fluid {
  padding-top: 20px;
  padding-bottom: 20px;
}

.container-fluid .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #fff;
  font-family: Eduardo Tunni;
  font-weight: 700;
  font-size: 40px;
}

.navigation {
  display: flex;
  margin: 0;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
}

.navigation button {
  background-color: var(--primary-color);
  color: white;
  display: none;
  outline: none;
}

.navigation button i {
  font-size: 20px;
}

.navigation ul {
  display: flex;
  margin: 0;
  justify-content: flex-end;
  align-items: center;
}

.navigation ul li a {
  display: block;
  padding: 20px 35px;
  color: #fff;
  font-size: 19px;
}

.navigation ul li a.nuxt-link-exact-active,
.responsive-menu li a.nuxt-link-exact-active {
  font-weight: 700;
}

.navigation ul li a:hover {
  background-color: white;
  transition: all 0.3s ease 0s;
  color: black;
}

.navigation .navigation-dropmenu .dropmenu-item {
  height: 0px;
  overflow: hidden;
  position: absolute;
  padding: 0px;
  background-color: white;
  width: 174px;
  text-align: center;
}

.navigation .navigation-dropmenu .dropmenu-item li {
  padding: 0px;
  cursor: pointer;
}

.navigation .navigation-dropmenu .dropmenu-item li:hover {
  background-color: white;
  transition: all 0.3s ease 0s;
}

.navigation .navigation-dropmenu .dropmenu-item li a {
  width: 100%;
  padding: 10px 0px;
  font-weight: 400;
  color: #212529;
}

.navigation .navigation-dropmenu .dropmenu-item li:hover > a {
  background-color: #f4f4f4;
}

.navigation .navigation-dropmenu:hover > a {
  background-color: white;
  color: black;
}

.navigation .navigation-dropmenu:hover > .dropmenu-item {
  height: 110px;
  padding: 7px 0px;
  display: block;
  transition: height 0.4s;
}

.responsive-menu {
  display: flex;
  flex-direction: column;
  height: 0px;
  overflow: hidden;
  transition: height 0.4s;
}

.drop {
  height: 330px;
}

.responsive-menu li {
  text-align: center;
  padding: 10px 0px;
  cursor: pointer;
  width: 100%;
}

.responsive-menu li a {
  color: white;
  font-size: 17px;
  display: block;
  width: 100%;
}

.responsive-menu li:hover {
  background-color: white;
}

.responsive-menu li:hover > a {
  color: black;
}

.responsive-menu .responsive-dropmenu .dropmenu-item {
  height: 0px;
  overflow: hidden;
  padding: 0px;
  background-color: white;
  width: 100%;
  text-align: center;
}

.responsive-menu .responsive-dropmenu .dropmenu-item li {
  padding: 0px;
  cursor: pointer;
}

.responsive-menu .responsive-dropmenu .dropmenu-item li:hover {
  background-color: white;
  transition: all 0.3s ease 0s;
}

.responsive-menu .responsive-dropmenu .dropmenu-item li a {
  width: 100%;
  padding: 10px 0px;
  font-weight: 400;
  color: #212529;
}

.responsive-menu .responsive-dropmenu .dropmenu-item li:hover > a {
  background-color: #f4f4f4;
}

.responsive-menu .responsive-dropmenu:hover > a {
  background-color: white;
  color: black;
}

.responsive-menu .responsive-dropmenu:hover > .dropmenu-item {
  height: 100px;
  padding: 7px 0px;
  display: block;
  transition: height 0.4s;
}

@media screen and (max-width: 768px) {
  header {
    position: relative;
    background-color: var(--primary-color);
  }

  .container-fluid {
    padding: 25px 60px;
  }

  .logo {
    font-size: 33px;
  }

  .navigation button {
    display: block;
  }

  .navigation ul {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .container-fluid {
    padding: 25px 50px;
  }

  .logo {
    font-size: 30px;
  }

  .navigation ul li a {
    padding: 15px;
    font-size: 14px;
  }
}

@media screen and (max-width: 1200px) {
  .container-fluid {
    padding: 25px 60px;
  }

  .logo {
    font-size: 33px;
  }

  .navigation ul li a {
    padding: 15px;
    font-size: 17px;
  }
}

@media screen and (min-width: 1200px) {
  .responsive-menu {
    display: none;
  }
}
</style>
