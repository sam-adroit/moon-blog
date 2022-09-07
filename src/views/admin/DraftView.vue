<template>
  <Header></Header>

  <main>
    <side-bar />
    <div class="main-content">
      <div class="main-grid">
        <div class="column1">
          <h2 class="dark-head no-margin">Blog Posts</h2>
          <hr />

          <div class="table">
            <div class="rows">
              <div class="table-column1">
                <i class="number no1">#1</i>
                <div>
                  <p class="row-head">Smart Inverters Are Getting Smarter</p>
                  <p class="row-p bottom-row-p">
                    750 views | 100 shares | 550 comments
                  </p>
                </div>
                <p class="row-p">10.12.2022</p>
              </div>

              <div class="table-column2">
                <a href="#" class="publish btn">publish</a>
                <a href="#" class="edit btn">edit</a>
                <a href="#" class="archive btn">Archive</a>
                <a href="#" class="delete btn">Delete</a>
              </div>
            </div>
            <hr />

            <div class="rows">
              <div class="table-column1">
                <i class="number no2">#2</i>
                <div>
                  <p class="row-head">Why You Need a Security Camera</p>
                  <p class="row-p bottom-row-p">
                    750 views | 100 shares | 550 comments
                  </p>
                </div>
                <p class="row-p">10.12.2022</p>
              </div>

              <div class="table-column2">
                <a href="#" class="publish btn">publish</a>
                <a href="#" class="edit btn">edit</a>
                <a href="#" class="archive btn">Archive</a>
                <a href="#" class="delete btn">Delete</a>
              </div>
            </div>
            <hr />

            <div class="rows">
              <div class="table-column1">
                <i class="number no3">#3</i>
                <div>
                  <p class="row-head">
                    How To Connect Your Inverter To The Internet
                  </p>
                  <p class="row-p bottom-row-p">
                    750 views | 100 shares | 550 comments
                  </p>
                </div>
                <p class="row-p">10.12.2022</p>
              </div>

              <div class="table-column2">
                <a href="#" class="publish btn">publish</a>
                <a href="#" class="edit btn">edit</a>
                <a href="#" class="archive btn">Archive</a>
                <a href="#" class="delete btn">Delete</a>
              </div>
            </div>
            <hr />

            <div class="rows">
              <div class="table-column1">
                <i class="number no4">#4</i>
                <div>
                  <p class="row-head">
                    Power Inverter Vs Geneerator; What Should I Use?
                  </p>
                  <p class="row-p bottom-row-p">
                    750 views | 100 shares | 550 comments
                  </p>
                </div>
                <p class="row-p">10.12.2022</p>
              </div>

              <div class="table-column2">
                <a href="#" class="publish btn">publish</a>
                <a href="#" class="edit btn">edit</a>
                <a href="#" class="archive btn">Archive</a>
                <a href="#" class="delete btn">Delete</a>
              </div>
            </div>
            <hr />

            <div class="rows">
              <div class="table-column1">
                <i class="number no5">#5</i>
                <div>
                  <p class="row-head">
                    The Beautiful Technology of Smart Homes
                  </p>
                  <p class="row-p bottom-row-p">
                    750 views | 100 shares | 550 comments
                  </p>
                </div>
                <p class="row-p">10.12.2022</p>
              </div>

              <div class="table-column2">
                <a href="#" class="publish btn">publish</a>
                <a href="#" class="edit btn">edit</a>
                <a href="#" class="archive btn">Archive</a>
                <a href="#" class="delete btn">Delete</a>
              </div>
            </div>
            <hr />

            <div class="rows">
              <div class="table-column1">
                <i class="number no6">#6</i>
                <div>
                  <p class="row-head">Smart Inverters Are Getting Smarter</p>
                  <p class="row-p bottom-row-p">
                    750 views | 100 shares | 550 comments
                  </p>
                </div>
                <p class="row-p">10.12.2022</p>
              </div>

              <div class="table-column2">
                <a href="#" class="publish btn">publish</a>
                <a href="#" class="edit btn">edit</a>
                <a href="#" class="archive btn">Archive</a>
                <a href="#" class="delete btn">Delete</a>
              </div>
            </div>
            <hr />

            <div class="rows">
              <div class="table-column1">
                <i class="number no7">#7</i>
                <div>
                  <p class="row-head">
                    Why You Should Get Yourself a Smart Home
                  </p>
                  <p class="row-p bottom-row-p">
                    750 views | 100 shares | 550 comments
                  </p>
                </div>
                <p class="row-p">10.12.2022</p>
              </div>

              <div class="table-column2">
                <a href="#" class="publish btn">publish</a>
                <a href="#" class="edit btn">edit</a>
                <a href="#" class="archive btn">Archive</a>
                <a href="#" class="delete btn">Delete</a>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="column2">
          <h2 class="dark-head no-margin">Quick Draft</h2>

          <form action="#">
            <div>
              <label for="input" class="dark-p">Title</label>
              <input type="text" id="input" />
            </div>

            <div class="header">
              <span class="dark-p">Content</span>
              <div>
                <router-link to="#" class="add-file">Add File</router-link>
              </div>
            </div>

            <textarea cols="30" rows="10"></textarea>

            <router-link to="#" class="save-draft">SAVE DRAFT</router-link>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Draft",
  components: {
    "side-bar": Sidebar,
    Header,
  },
};
</script>

<style src="@/assets/css/viewblog.css" scoped></style>
