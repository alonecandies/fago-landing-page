<template>
  <div v-editable="blok" class="container-fluid contact-content">
    <div class="row">
      <div class="col-6">
        <contact-method
          v-for="contact in contacts"
          :key="contact._uid"
          :blok="contact.content"
        ></contact-method>
        <h4 data-aos="fade-right">Find us on these social networks</h4>
        <p data-aos="fade-right">We are always willing to hearing from you</p>
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
      </div>
      <div class="col-6 right-col" data-aos="fade-left">
        <contact-form class="form" data-aos="fade-left"></contact-form>
        <div class="image" data-aos="fade-left">
          <img :src="blok.image.filename" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactContent",
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts.contacts;
    }
  }
};
</script>

<style scoped>
.contact-content {
  margin-top: 70px;
}

.contact-content h4 {
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
}

.contact-content p {
  font-size: 18px;
}

.contact-content ul {
  display: flex;
}

.contact-content ul li a {
  color: #bacbed;
  text-decoration: none;
  font-size: 40px;
  padding: 0px 20px;
}

.contact-content ul li a:hover {
  color: var(--primary-color);
  transition: all 0.3s ease 0s;
}

.right-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 70%;
  box-shadow: 3px 4px 16px 3px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
}

.image,
.image img {
  width: 100%;
}
</style>
