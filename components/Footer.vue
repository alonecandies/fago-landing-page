<template>
  <div data-aos="fade-up" class="footer container-fluid">
    <div class="contact row">
      <div data-aos="fade-right" class="contact-method col-4">
        <div>
          <i class="fa fa-tty" style="color:#FF0000"></i>
          <div>
            <span>MON TO FRI: 8:00 TO 17:30</span>
            <span>(+84)973.631.823</span>
          </div>
        </div>
        <div>
          <i class="fa fa-envelope-o" style="color:#34CE67"></i>
          <div>
            <span>DO YOU HAVE A QUESTION?</span>
            <span>fago.labs.work@gmail.com</span>
          </div>
        </div>
        <div>
          <i
            class="fa fa-share-alt"
            style="color: #3D87DB; font-size:52px;"
          ></i>
          <div>
            <span>SOCIAL NETWORKS</span>
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
      <div data-aos="zoom-in" class="contact-link col-4">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/blog">Our blog</nuxt-link>
        <nuxt-link to="/aboutus">About us</nuxt-link>
        <nuxt-link to="/contactus">Contact us</nuxt-link>
      </div>
      <div data-aos="fade-left" class="contact-more col-4">
        <a href="" target="_blank">News</a>
        <a href="" target="_blank">Recruitment</a>
      </div>
    </div>
    <div class="copyright row">
      <div class="col-6">
        <span>Copyright ©2021 fagolabs.com | All rights reserved</span>
      </div>
      <div class="col-6">
        <a href="" target="_blank">Terms of use</a>
        <span>|</span>
        <a href="" target="_blank">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: #1f242a;
}

.contact {
  padding: 50px 0px;
  border-bottom: 1px solid white;
}

.contact .contact-method {
  display: flex;
  flex-direction: column;
}

.contact .contact-method div {
  display: flex;
  margin: 10px 0px;
  align-items: center;
}

.contact .contact-method div i {
  font-size: 45px;
  margin-right: 15px;
}

.contact .contact-method div div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 13px;
}

.contact .contact-method div div span:nth-child(1) {
  font-size: 16px;
  color: #636363;
}

.contact .contact-method div div span:nth-child(2) {
  font-size: 20px;
  color: white;
}

.contact .contact-method div div ul {
  display: flex;
  margin-top: 5px;
}

.contact .contact-method div div ul li a i:hover {
  color: gray;
  transition: all 0.4s ease 0s;
}

.contact .contact-method div div ul li a i {
  font-size: 30px;
  color: white;
}

.contact .contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact .contact-link a {
  text-decoration: none;
  color: white;
  font-size: 25px;
  margin: 19px 0px;
}

.contact .contact-link a:hover {
  color: gray;
  transition: all 0.4s ease 0s;
}

.contact .contact-more {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.contact .contact-more a {
  text-decoration: none;
  color: gray;
  font-size: 20px;
  margin: 20px 0px;
}

.contact .contact-more a:hover {
  color: white;
  transition: all 0.4s ease 0s;
}

.copyright {
  padding: 20px 0px;
}

.copyright span,
.copyright a {
  color: white;
  text-decoration: none;
}

.copyright div:nth-child(1) {
  display: flex;
  justify-content: flex-start;
}

.copyright div:nth-child(2) {
  display: flex;
  justify-content: flex-end;
}

.copyright div:nth-child(2) span {
  margin: 0px 5px;
}
</style>
