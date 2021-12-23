<template>
  <div>
    <div class="member" data-aos="fade-left" v-editable="blok">
      <div class="image">
        <img :src="blok.avatar.filename" :alt="blok.avatar.filename" />
      </div>
      <h4>{{ blok.name }}</h4>
      <h5>{{ blok.position }}</h5>
      <p>{{ blok.quote }}</p>
      <ul>
        <li data-aos="fade-up">
          <a :href="blok.github" target="_blank"
            ><i class="fa fa-github"></i
          ></a>
        </li>
        <li data-aos="fade-down">
          <a :href="blok.linkedin" target="_blank"
            ><i class="fa fa-linkedin"></i
          ></a>
        </li>
        <li data-aos="fade-up">
          <a :href="blok.twitter" target="_blank"
            ><i class="fa fa-twitter"></i
          ></a>
        </li>
        <li data-aos="fade-down">
          <a :href="blok.facebook" target="_blank"
            ><i class="fa fa-facebook"></i
          ></a>
        </li>
      </ul>
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
  }
};
</script>

<style scoped>
.member {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  margin: 10px 20px;
  padding: 20px;
  background-color: #fff;
}
.image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}

.image img {
  width: 100%;
}

.member h4 {
  font-weight: 700;
  font-size: 16px;
  margin: 10px 0px;
}

.member h5 {
  font-size: 15px;
  color: var(--primary-color);
}

.member p {
  text-align: center;
}

.member ul {
  display: flex;
}

.member ul li {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 0px 7px;
  cursor: pointer;
}

.member ul li:hover {
  background-color: #000 !important;
  transition: all 0.4s ease 0s;
}

.member ul li a {
  text-decoration: none;
  color: #fff;
}

.member ul li:nth-child(1) {
  background-color: #000;
}

.member ul li:nth-child(2) {
  background-color: #0e76a8;
}

.member ul li:nth-child(3) {
  background-color: #1da1f2;
}

.member ul li:nth-child(4) {
  background-color: #3b5998;
}
</style>
