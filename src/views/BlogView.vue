<template>
  <header>
    <div class="header">
      <!-- <nav class="head-nav">
        <router-link to="#" class="logo">
          <img src="@/assets/img/light-logo.png" alt="moon innovation logo" />
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="#">About Us</router-link>
        <router-link to="#">Reviews</router-link>
        <router-link to="/blog" class="active-head-nav">Blog</router-link>
        <router-link to="#">Contact Us </router-link>
        <router-link to="#" class="btn blue-btn">SUBSCRIBE</router-link>
      </nav> -->
      <Navbar />
      <div class="head-grid">
        <div>
          <h1 class="hanuman">Moon Smart Innovation Blog</h1>
          <p class="head-intro">
            Our skilled team and expertise are designed to bring about massive
            growth to your business, as well as make your start-up ideas a
            reality.
          </p>
          <router-link class="btn blue-btn" to="/login"
            >GET STARTED</router-link
          >
        </div>
        <div>
          <input type="search" class="search" placeholder="SEARCH" />
        </div>
      </div>
    </div>
  </header>

  <nav class="body-nav">
    <router-link to="#" class="active-body-nav">All</router-link>
    <router-link to="#">Advisory</router-link>
    <router-link to="inverters.html">Inverters</router-link>
    <router-link to="#">Engineering</router-link>
    <router-link to="#">Security Cams</router-link>
  </nav>

  <main>
    <div class="main-grid">
      <div class="card card1" v-for="(blog, i) in blogs" :key="i">
        <div class="text-card">
          <!-- <h3>INVERTERS</h3> -->
          <h1>{{ blog.title }}</h1>
          <p class="card-p" v-html="blog.content.slice(0, 150) + '...'"></p>

          <router-link :to="'/blog/' + blog._id" class="btn card-btn"
            >read here <span class="unicode">&raquo;</span></router-link
          >
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="floating-card">
      <div>
        <h2 class="floating-card-head">Do you have a next level idea?</h2>
        <p class="card-p floating-card-text">
          Reach out to us and let’s bring your idea to life
        </p>
      </div>
      <div class="link">
        <router-link to="#" class="btn blue-btn">WORK WITH US</router-link>
      </div>
    </div>

    <div class="footer-flex">
      <div class="footer-logo">
        <img src="@/assets/img/light-logo.png" alt="Moon technology logo" />
        <h2>Moon Innovations</h2>
      </div>

      <div>
        <h6 class="footer-head">Company</h6>
        <router-link to="#">About us</router-link>
        <router-link to="#">Showcase</router-link>
        <router-link to="#">Resources</router-link>
        <router-link to="#">Academy</router-link>
      </div>

      <div>
        <h6 class="footer-head">Business</h6>
        <router-link to="#">Projects</router-link>
        <router-link to="#">Our Team</router-link>
        <router-link to="#">Clients</router-link>
      </div>

      <div>
        <h6 class="footer-head">Contact Us</h6>

        <div class="contact-us">
          <p class="contact">Freely get-in-touch with us.</p>
          <p>+234 (813) 765 6465</p>
          <router-link to="#">mooninnovations@gmail.com</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Blog-view",
  components: {
    Navbar,
  },
  setup() {
    const store = useStore();
    const blogs = ref(null);
    onMounted(async () => {
      await store.dispatch("getBlogs");
      blogs.value = await store.state.blogs;
      //console.log("new", blogs.value);
    });

    return { blogs };
  },
};
</script>

<style src="@/assets/css/blogs.css" scoped></style>
