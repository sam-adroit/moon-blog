<template>
  <nav>
    <div class="nav-flex">
      <span @click="toggleSidebar(true)" class="icon-toggle" v-if="!toggle"
        ><i class="fa fa-bars" aria-hidden="true"></i
      ></span>
      <span @click="toggleSidebar(false)" class="icon-toggle" v-else
        ><i class="fa fa-times" aria-hidden="true"></i>
      </span>
      <a href="#">
        <img src="@/assets/img/darklogo.png" alt="Moon Innovations Logo" />
      </a>
      <a href="#">
        <h2 class="nav-text">MOON INNOVATIONS</h2>
      </a>
    </div>
    <div>
      <input type="search" class="search" id="search" placeholder="search" />
    </div>
    <div class="nav-flex">
      <div>
        <img src="@/assets/img/notification.png" alt="notification" />
        &nbsp; &nbsp;
      </div>
      <img src="@/assets/img/markAvatar.png" alt="user's Avatar" />
      <h2 class="nav-text">MARK JOHNSON</h2>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    const store = useStore();
    const toggle = ref(false);
    const toggleSidebar = (val) => {
      store.commit("setSidebar", val);
      toggle.value = store.state.sidebar;
    };

    return { toggleSidebar, toggle };
  },
};
</script>

<style src="@/assets/css/addblog.css" scoped></style>
