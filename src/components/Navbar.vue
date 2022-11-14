<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <router-link to="/" class="logo navbar-brand">
        <img src="@/assets/img/light-logo.png" alt="our logo" />
        &nbsp;&nbsp;
        <h3 class="white-head moon">MOON INNOVATIONS</h3>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" style="color: white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav navbar-space">
          <li class="nav-item">
            <router-link class="router-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="router-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="router-link" to="/blog">Our Team</router-link>
          </li>
          <li class="nav-item">
            <router-link class="router-link" to="#">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="router-link" to="#">Our Partrners</router-link>
          </li>
          <li class="nav-item">
            <router-link class="router-link" to="#">About Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/home.css" scoped></style>
