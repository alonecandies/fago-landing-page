import Vue from "vue";
// Global components
import Page from "~/components/Page.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ContactBar from "~/components/ContactBar.vue";
import ContactForm from "~/components/ContactForm.vue";
// Home components
import Banner from "~/components/Home/Banner.vue";
import Major from "~/components/Home/Major.vue";
import MajorCard from "~/components/Home/MajorCard.vue";
import HomeContact from "~/components/Home/HomeContact";
import News from "~/components/Home/News.vue";
import NewCard from "~/components/Home/NewCard.vue";
// Blog components
import Blog from "~/components/Blog/Blog.vue";
import BlogCard from "~/components/Blog/BlogCard.vue";
import BlogBanner from "~/components/Blog/BlogBanner.vue";
import BlogTop from "~/components/Blog/BlogTop.vue";
import BlogMid from "~/components/Blog/BlogMid.vue";
import BlogBot from "~/components/Blog/BlogBot.vue";
// Product components
import ProductBanner from "~/components/Product/ProductBanner.vue";
// Research components
import Research from "~/components/Research/Research.vue";
import ResearchField from "~/components/Research/ResearchField.vue";
import PaperCard from "~/components/Research/PaperCard.vue";
// Contact components
import ContactBanner from "~/components/Contact/ContactBanner.vue";
import ContactContent from "~/components/Contact/ContactContent.vue";
import ContactMethod from "~/components/Contact/ContactMethod.vue";
//About components
import Approach from "~/components/About/Approach.vue";
import Introduction from "~/components/About/Introduction.vue";
import Mission from "~/components/About/Mission.vue";
import Team from "~/components/About/Team.vue";
import Member from "~/components/About/Member.vue";

Vue.component("Header", Header);
Vue.component("Footer", Footer);
Vue.component("contact-bar", ContactBar);
Vue.component("contact-form", ContactForm);
Vue.component("page", Page);

Vue.component("Banner", Banner);
Vue.component("Major", Major);
Vue.component("MajorCard", MajorCard);
Vue.component("HomeContact", HomeContact);
Vue.component("News", News);
Vue.component("NewCard", NewCard);

Vue.component("Blog", Blog);
Vue.component("BlogCard", BlogCard);
Vue.component("BlogBanner", BlogBanner);
Vue.component("BlogTop", BlogTop);
Vue.component("BlogMid", BlogMid);
Vue.component("BlogBot", BlogBot);

Vue.component("ProductBanner", ProductBanner);

Vue.component("Research", Research);
Vue.component("ResearchField", ResearchField);
Vue.component("PaperCard", PaperCard);

Vue.component("ContactBanner", ContactBanner);
Vue.component("ContactContent", ContactContent);
Vue.component("ContactMethod", ContactMethod);

Vue.component("Approach", Approach);
Vue.component("Introduction", Introduction);
Vue.component("Mission", Mission);
Vue.component("Team", Team);
Vue.component("Member", Member);