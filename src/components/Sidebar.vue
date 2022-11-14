<template>
  <div :class="store.state.sidebar ? 'show-sidebar' : 'sidebar'">
    <!-- @click="() => store.commit('setSidebar')" -->
    <router-link to="/dashboard" class="menu"
      ><img src="@/assets/img/dashboard-icon.png" alt="" />
      Dashboard</router-link
    >
    <router-link to="/view-blog" class="menu active-menu"
      ><img src="@/assets/img/blog-post-icon.png" alt="" /> Blog
      Posts</router-link
    >

    <router-link to="/blog-draft" class="menu"
      ><img src="@/assets/img/blog-post-icon.png" alt="" /> Drafts</router-link
    >

    <router-link to="#" class="menu"
      ><img src="@/assets/img/blog-post-icon.png" alt="" /> Archive</router-link
    >

    <router-link to="#" class="menu"
      ><img src="@/assets/img/contributors-icon.png" alt="" />
      Contributors</router-link
    >

    <router-link to="/add-blog" class="menu blue-menu"
      ><img src="@/assets/img/blog-post-icon.png" alt="" /> Add new
      post</router-link
    >
    <span @click="handleLogout" class="menu blue-menu"
      ><img src="@/assets/img/blog-post-icon.png" alt="" /> Logout</span
    >
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const show = ref(store.state.sidebar);
    const router = useRouter();
    const handleLogout = () => {
      store.dispatch("logout");
      router.push("/login");
    };

    return { handleLogout, show, store };
  },
};
</script>

<style src="@/assets/css/addblog.css" scoped></style>
