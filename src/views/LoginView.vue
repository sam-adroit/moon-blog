<template>
  <nav>
    <a href="/">
      <img src="@/assets/img//darklogo.png" alt="our logo" />
      <p class="dark-text">MOON INNOVATIONS</p>
    </a>
  </nav>

  <main class="main-body">
    <div>
      <img src="@/assets/img/unlock.png" alt="cartoon showing unlock" />
    </div>

    <div class="login">
      <h2 class="dark-text">Log in to blog dashboard</h2>

      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email/ID</label>
          <input type="text" class="email" id="email" v-model="email" />
        </div>

        <div>
          <label for="password">Password</label>
          <input
            type="password"
            class="email"
            id="password"
            v-model="password"
          />
        </div>

        <button type="submit" class="log-in-btn">Log in</button>

        <h2 class="forgot-password"><a href="#">Forgot password?</a></h2>
        <div v-if="store.state.loading">
          <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      store.state.user && router.push("/dashboard");
    });

    const handleLogin = async () => {
      store.commit("setLoading");
      await store.dispatch("signIn", {
        email: email.value,
        password: password.value,
      });
      store.commit("setLoading");
      store.state.user && router.push("/dashboard");
    };

    return { email, password, handleLogin, store };
  },
};
</script>

<style src="@/assets/css/login.css" scoped></style>
