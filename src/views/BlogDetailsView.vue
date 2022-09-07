<template>
  <header>
    <div class="header">
      <nav class="head-nav">
        <router-link to="#" class="logo">
          <img src="@/assets/img/light-logo.png" alt="moon innovation logo" />
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="#">About Us</router-link>
        <router-link to="#">Reviews</router-link>
        <router-link to="/blog" class="active-head-nav">Blog</router-link>
        <router-link to="#">Contact Us </router-link>
        <router-link to="#" class="btn blue-btn">SUBSCRIBE</router-link>
      </nav>
      <div class="head-grid">
        <h1 class="hanuman blog-head">{{ blog?.title }}</h1>
      </div>
    </div>
  </header>

  <nav class="body-nav">
    <router-link to="#" class="active-body-nav">All</router-link>
    <router-link to="#">Advisory</router-link>
    <router-link to="#">Inverters</router-link>
    <router-link to="#">Engineering</router-link>
    <router-link to="#">Security Cams</router-link>
  </nav>

  <main>
    <div class="">
      <p class="blog-p">
        {{ blog?.content }}
      </p>
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
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "blog-details",
  setup() {
    const route = useRoute();
    const store = useStore();
    const blog = ref(null);
    onMounted(async () => {
      await store.dispatch("getBlog", route.params.id);
      console.log("details", store.state.blog);

      blog.value = store.state.blog;
      console.log("details", blog.value);
    });

    return { blog };
  },
};
</script>

<style src="@/assets/css/blog.css" scoped></style>
