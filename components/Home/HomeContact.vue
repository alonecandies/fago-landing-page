<template>
  <div
    v-editable="blok"
    class="contact"
    :style="{
      background: 'url(' + blok.image.filename + ') no-repeat',
      'background-size': 'cover'
    }"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="form col-5">
          <contact-form data-aos="fade-up-right"></contact-form>
        </div>
        <div class="content col-7">
          <h3 data-aos="fade-up-left">{{ blok.headline }}</h3>
          <p data-aos="fade-up-left">{{ blok.slogan }}</p>
          <span data-aos="fade-up-left"
            >Direct us at these below social networks:</span
          >
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
              <a
                href="https://www.facebook.com/laymanbrother.19/"
                target="_blank"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
          </ul>
        </div>
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
.form {
  transform: translateY(-90px);
}

.content {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content h3 {
  font-size: 30px;
  font-weight: 600;
}

.content p {
  font-size: 16px;
  margin: 20px 0px 70px 0px;
}

.content span {
  font-weight: 700;
}

.content ul {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
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
</style>
