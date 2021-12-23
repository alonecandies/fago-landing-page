<template>
  <div v-editable="blok" class="banner">
    <div class="image">
      <img :src="blok.image.filename" alt="" />
      <div class="content">
        <h3 data-aos="fade-down-right">{{ blok.headline }}</h3>
        <p data-aos="fade-down-right">{{ blok.description }}</p>
        <ul>
          <li data-aos="fade-up">
            <a href="https://github.com/fagolabs" target="_blank"
              ><i class="fa fa-github"></i
            ></a>
          </li>
          <li data-aos="fade-down">
            <a
              href="https://www.linkedin.com/in/ashutosh-hathidara-88710b138/"
              target="_blank"
              ><i class="fa fa-linkedin"></i
            ></a>
          </li>
          <li data-aos="fade-up">
            <a href="https://twitter.com/ashutosh_1919" target="_blank"
              ><i class="fa fa-twitter"></i
            ></a>
          </li>
          <li data-aos="fade-down">
            <a href="https://www.facebook.com/laymanbrother.19/" target="_blank"
              ><i class="fa fa-facebook"></i
            ></a>
          </li>
        </ul>
        <button data-aos="fade-right">
          <nuxt-link to="/aboutus"
            >View detail <i class="fa fa-arrow-right"></i
          ></nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.image,
.image img {
  width: 100%;
  position: relative;
}

.content {
  position: absolute;
  top: 300px;
  right: 200px;
  text-align: right;
}

.content h3 {
  font-size: 60px;
  width: 490px;
  color: white;
  font-weight: 600;
}

.content p {
  font-size: 16px;
  width: 490px;
  color: white;
  margin: 20px 0px;
}

.content ul {
  display: flex;
  justify-content: flex-end;
}

.content ul li {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin: 0px 7px;
  cursor: pointer;
}

.content ul li:hover {
  background-color: #000 !important;
  transition: all 0.4s ease 0s;
}

.content ul li a {
  text-decoration: none;
  color: #fff;
}

.content ul li:nth-child(1) {
  background-color: #000;
}

.content ul li:nth-child(2) {
  background-color: #0e76a8;
}

.content ul li:nth-child(3) {
  background-color: #1da1f2;
}

.content ul li:nth-child(4) {
  background-color: #3b5998;
}

.content button {
  background: #fba60b;
  padding: 10px 15px;
  border-radius: 20px;
  margin-top: 20px;
}

.content button:hover {
  background: var(--secondary-color);
  transition: all 0.4s ease 0s;
}

.content button a {
  color: white;
  text-decoration: none;
}

.content button a i {
  font-size: 12px;
  transform: translateY(-2px);
}
</style>
