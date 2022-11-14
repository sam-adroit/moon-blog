<template>
  <Header></Header>

  <main>
    <side-bar />
    <div class="main-content">
      <div class="card-flex">
        <div class="card">
          <img src="@/assets/img/post-icon.png" alt="post icon" />
          <div>
            <h2 class="card-head">
              <span class="card-head-bold">31</span> Blog Posts
            </h2>
            <p class="card-p"><span class="card-p-bold">+20</span> this week</p>
          </div>
        </div>

        <div class="card">
          <img src="@/assets/img/pages-icon.png" alt="post icon" />
          <div>
            <h2 class="card-head">
              <span class="card-head-bold">56</span> pages
            </h2>
            <p class="card-p"><span class="card-p-bold">+20</span> this week</p>
          </div>
        </div>

        <div class="card">
          <img src="@/assets/img/subscribers-icon.png" alt="post icon" />
          <div>
            <h2 class="card-head">
              <span class="card-head-bold">312</span> subscribers
            </h2>
            <p class="card-p"><span class="card-p-bold">+20</span> this week</p>
          </div>
        </div>

        <div class="card">
          <img src="@/assets/img/comments-icon.png" alt="post icon" />
          <div>
            <h2 class="card-head">
              <span class="card-head-bold">312</span> comments
            </h2>
            <p class="card-p"><span class="card-p-bold">+20</span> this week</p>
          </div>
        </div>

        <div class="card">
          <img src="@/assets/img/views-icon.png" alt="post icon" />
          <div>
            <h2 class="card-head">
              <span class="card-head-bold">12.2k</span> views
            </h2>
            <p class="card-p"><span class="card-p-bold">+20</span> this week</p>
          </div>
        </div>
      </div>

      <div class="main-content-grid">
        <div class="admin-background">
          <div class="header">
            <div>
              <h2 class="dark-head">Post Views</h2>
            </div>

            <div>
              <a href="#" class="transparent-btn">Last 7 days</a>
            </div>
          </div>
          <hr class="horizontal-line" />
          <div class="rows">
            <div class="bar-parent">
              <div class="bars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div class="row">
              <h2 class="graph-text">500</h2>
              <div></div>
            </div>

            <div class="row">
              <h2 class="graph-text">400</h2>
              <div></div>
            </div>

            <div class="row">
              <h2 class="graph-text">300</h2>
              <div></div>
            </div>

            <div class="row">
              <h2 class="graph-text">200</h2>
              <div></div>
            </div>

            <div class="row">
              <h2 class="graph-text">100</h2>
              <div></div>
            </div>
          </div>
        </div>

        <div class="admin-background">
          <h2 class="ref-head">Top Referrals</h2>

          <div class="ref-flex">
            <div class="site">
              <img src="@/assets/img/google.png" alt="google icon" />

              <p>google.com</p>
            </div>

            <div class="ref-number">
              <p>+432</p>
            </div>
          </div>

          <div class="ref-flex">
            <div class="site">
              <img src="@/assets/img/facebook-icon.png" alt="facebook icon" />

              <p>facebook.com</p>
            </div>

            <div class="ref-number">
              <p>+334</p>
            </div>
          </div>

          <div class="ref-flex">
            <div class="site">
              <img src="@/assets/img/twitter-icon.png" alt="twitter icon" />

              <p>twitter.com</p>
            </div>

            <div class="ref-number">
              <p>+292</p>
            </div>
          </div>

          <div class="ref-flex">
            <div class="site">
              <img src="@/assets/img/pinterest-icon.png" alt="pinterest icon" />

              <p>pinterest.com</p>
            </div>

            <div class="ref-number">
              <p>+75</p>
            </div>
          </div>

          <div class="ref-flex">
            <div class="site">
              <img src="@/assets/img/reddit.png" alt="reddit icon" />

              <p>reddit.com</p>
            </div>

            <div class="ref-number">
              <p>+42</p>
            </div>
          </div>

          <div class="ref-flex">
            <div class="site">
              <img src="@/assets/img/blogger.png" alt="blogger icon" />

              <p>blogger.com</p>
            </div>

            <div class="ref-number">
              <p>+32</p>
            </div>
          </div>
        </div>

        <div class="longest-span admin-background">
          <h2 class="dark-head no-margin">Quick Draft</h2>
          <hr class="horizontal-line admin-line" />

          <form action="#" class="draft">
            <div>
              <label for="title" class="dark-p">Title</label>

              <input type="text" id="title" class="title-input" />
            </div>

            <div class="header">
              <h2 class="dark-p no-margin">Content</h2>

              <a href="#" class="blue-p add-file">Add File</a>
            </div>

            <textarea
              name="message-box"
              id="draft-text-area"
              cols="30"
              rows="10"
              class="message-box"
            ></textarea>
            <a href="#" class="save-draft">SAVE DRAFT</a>
          </form>
        </div>

        <div class="admin-background">
          <div class="header">
            <h2 class="dark-head">Blog Posts</h2>
            <a href="#" class="view-all">View All</a>
          </div>
          <hr class="horizontal-line" />

          <div class="table">
            <div class="col-flex">
              <p class="table-number">#1</p>
              <div>
                <h2 class="table-head">Smart Inverters Are Getting Smarter</h2>

                <p class="table-p">750 views | 100 shares | 550 comments</p>
              </div>
            </div>
            <div class="col-flex">
              <img src="@/assets/img/zainab.png" alt="Zainab's Avatar" />

              <div>
                <h2 class="table-head">Zainab Alli</h2>

                <p class="table-p">24.10.2022</p>
              </div>
            </div>
          </div>
          <hr class="horizontal-line" />

          <div class="table">
            <div class="col-flex">
              <p class="table-number">#2</p>
              <div>
                <h2 class="table-head">Security Cams and Humans</h2>

                <p class="table-p">750 views | 100 shares | 550 comments</p>
              </div>
            </div>
            <div class="col-flex">
              <img src="@/assets/img/osas.png" alt="Osas' Avatar" />

              <div>
                <h2 class="table-head">Osas Jugs</h2>

                <p class="table-p">24.10.2022</p>
              </div>
            </div>
          </div>
          <hr class="horizontal-line" />

          <div class="table">
            <div class="col-flex">
              <p class="table-number">#3</p>
              <div>
                <h2 class="table-head">Security Cams and Humans</h2>

                <p class="table-p">750 views | 100 shares | 550 comments</p>
              </div>
            </div>
            <div class="col-flex">
              <img src="@/assets/img/mabel.png" alt="Mabel's Avatar" />

              <div>
                <h2 class="table-head">Mabel AG</h2>

                <p class="table-p">24.10.2022</p>
              </div>
            </div>
          </div>
          <hr class="horizontal-line" />
        </div>

        <div class="pie-chart-card admin-background">
          <div class="header">
            <h2 class="dark-head">Demographics</h2>

            <a href="#" class="transparent-btn">Select by age</a>
          </div>

          <div class="pie-chart-background">
            <!-- <div class="pie-chart-parent">               -->
            <div class="pie-chart">
              <div class="pie-chart2"></div>
            </div>
            <!-- </div> -->

            <div class="colors">
              <div class="pie-key">
                <div></div>
                <span class="dark-text"
                  >15-25 <span class="dim-text">years</span> (6%)</span
                >
              </div>
              <div class="pie-key">
                <div></div>
                <span class="dark-text"
                  >26 - 35 <span class="dim-text">years</span> (45%)</span
                >
              </div>
              <div class="pie-key">
                <div></div>
                <span class="dark-text"
                  >36 -45 <span class="dim-text">years</span> (34%)</span
                >
              </div>
              <div class="pie-key">
                <div></div>
                <span class="dark-text"
                  >46 - 60 <span class="dim-text">years</span> (10%)</span
                >
              </div>
              <div class="pie-key">
                <div></div>
                <span class="dark-text"
                  >>61 <span class="dim-text">years</span> (5%)</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
import Header from "../../components/Header.vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "ViewBlog",
  components: {
    "side-bar": Sidebar,
    Header: Header,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      !store.state.user && router.push("/login");
    });
  },
};
</script>

<style src="@/assets/css/dashboard.css" scoped></style>
