<template>
  <Header></Header>

  <main>
    <side-bar />

    <div class="main-content">
      <div class="section">
        <div class="column1">
          <h2 class="dark-head">New Post</h2>
          <hr class="horizontal-line new-post-line" />

          <form
            @submit.prevent="createBlog"
            class="draft"
            enctype="multipart/form-data"
          >
            <div>
              <label for="title" class="dark-p">Title</label>

              <input
                type="text"
                id="title"
                v-model="title"
                class="title-input"
              />
            </div>
            <input
              @change="onFileChange"
              type="file"
              ref="file"
              style="display: none"
            />
            <span
              @click="$refs.file.click()"
              class="link add-file-btn active-menu"
              >ADD FILE</span
            >
            <span v-if="name">Image name: {{ name }}</span>

            <div class="message-content">
              <h2 class="dark-p">Content</h2>
              <CkEditor @sendContent="ReadVal"></CkEditor>

              <!-- <textarea
                name="message-box"
                id="draft-text-area"
                cols="30"
                rows="10"
                class="message-box"
                v-model="content"
              ></textarea> -->
            </div>
            <button to="#" class="link publish-btn add-btn">Add Blog</button>
            <!-- <router-link to="#" class="file-btn blue-btn link">SAVE DRAFT</router-link> -->
          </form>
        </div>

        <div class="column2">
          <h2 class="dark-head">Publish</h2>
          <hr class="horizontal-line new-post-line" />

          <div class="header">
            <div class="left">
              <router-link to="#" class="save-draft link block"
                >SAVE DRAFT</router-link
              >
              <p>
                <span class="black-p">Status: </span>
                <span class="dim-p">Draft</span>
              </p>

              <p>
                <span class="black-p">Visibility: </span>
                <span class="dim-p">Public</span>
              </p>

              <p>
                <span class="black-p">Publish: </span>
                <span class="dim-p">Today 05:30 am</span>
              </p>
            </div>

            <div class="right">
              <router-link to="#" class="transparent-blue-btn block link">
                PREVIEW
              </router-link>

              <router-link to="#" class="edit-text"
                >Edit &nbsp; &nbsp;</router-link
              >
              <router-link to="#" class="edit-text"
                >Edit &nbsp; &nbsp;</router-link
              >
              <router-link to="#" class="edit-text"
                >Edit &nbsp; &nbsp;</router-link
              >
            </div>
          </div>
          <hr class="horizontal-line new-post-line" />

          <div class="header header-publish">
            <span to="#" class="link publish-btn">PUBLISH</span>
            <h2 class="dark-head">Move to Trash</h2>
          </div>

          <div class="recent-posts">
            <div class="header">
              <h2 class="dark-head no-margin">Recent posts</h2>

              <p class="no-margin">
                <router-link to="#" class="view-all">View All</router-link>
              </p>
            </div>
            <hr />

            <div class="header post-rows">
              <div>
                <h2 class="post-dark-p no-margin">
                  Smart Inverters Are Getting Smarter
                </h2>
                <p class="no-margin post-dim-p">10.12.2022</p>
              </div>

              <router-link to="#" class="upload"
                ><img src="@/assets/img/upload.png" alt="upload"
              /></router-link>
            </div>
            <hr />

            <div class="header post-rows">
              <div>
                <h2 class="post-dark-p no-margin">
                  Why You Need a Secuirity Camera
                </h2>
                <p class="no-margin post-dim-p">15.11.2022</p>
              </div>

              <router-link to="#" class="upload"
                ><img src="@/assets/img/upload.png" alt="upload"
              /></router-link>
            </div>
            <hr />

            <div class="header post-rows">
              <div>
                <h2 class="post-dark-p no-margin">
                  How To Connect Your Inverter To The Internet
                </h2>
                <p class="no-margin post-dim-p">10.10.2022</p>
              </div>

              <router-link to="#" class="upload"
                ><img src="@/assets/img/upload.png" alt="upload"
              /></router-link>
            </div>
            <hr />

            <div class="header post-rows">
              <div>
                <h2 class="post-dark-p no-margin">
                  Power Inverter Vs Generator; What Should I Use?
                </h2>
                <p class="no-margin post-dim-p">14.09.2022</p>
              </div>

              <router-link to="#" class="upload"
                ><img src="@/assets/img/upload.png" alt="upload"
              /></router-link>
            </div>
            <hr />

            <div class="header post-rows">
              <div>
                <h2 class="post-dark-p no-margin">
                  Smart Inverters Are Getting Smarter
                </h2>
                <p class="no-margin post-dim-p">01.08.2022</p>
              </div>

              <router-link to="#" class="upload"
                ><img src="@/assets/img/upload.png" alt="upload"
              /></router-link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import CkEditor from "../../components/CkEditor.vue";

export default {
  name: "ViewBlog",
  components: {
    "side-bar": Sidebar,
    Header,
    CkEditor,
  },
  setup() {
    const title = ref("");
    const content = ref("");
    const name = ref(null);
    const image = ref(null);
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      !store.state.user && router.push("/login");
    });

    const onFileChange = () => {
      const file = event.target.files[0];
      name.value = file.name;
      image.value = file;
      // console.log(file);
    };

    const createBlog = async () => {
      await store.dispatch("createBlog", {
        title: title.value,
        content: content.value,
        image: image.value,
      });
      !store.state.errMsg && router.push("/view-blog");
    };

    const ReadVal = (val) => (content.value = val);

    return { onFileChange, createBlog, title, content, image, name, ReadVal };
  },
};
</script>

<style src="@/assets/css/addblog.css" scoped></style>
