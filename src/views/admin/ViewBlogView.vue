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
            <div v-for="(blog, i) in manipulatedBlogs" :key="blog._id">
              <div class="rows">
                <div class="table-column1">
                  <i class="number no1">#{{ i + 1 }}</i>
                  <div>
                    <p class="row-head">{{ blog.title }}</p>
                    <p class="row-p bottom-row-p">
                      750 views | 100 shares | 550 comments
                    </p>
                  </div>
                  <p class="row-p">{{ blog.updatedAt.slice(0, 10) }}</p>
                </div>

                <div class="table-column2">
                  <span @click="getBlog(blog._id)" class="edit btn">Edit</span>
                  <router-link to="#" class="unpublish btn"
                    >Unpublish</router-link
                  >
                  <router-link to="#" class="archive btn">Archive</router-link>
                  <span @click="deleteBlog(blog._id)" class="delete btn"
                    >Delete</span
                  >
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div class="column2">
          <h2 class="dark-head no-margin">Quick Draft</h2>

          <form @submit.prevent="updateBlog">
            <div>
              <label for="input" class="dark-p">Title</label>
              <input type="text" id="input" v-model="title" />
            </div>

            <div class="header">
              <span class="dark-p">Content</span>
              <div>
                <router-link to="#" class="add-file">Add File</router-link>
              </div>
            </div>
            <CkEditor @sendContent="ReadVal" :content="contents"></CkEditor>
            <!-- <textarea cols="30" rows="10" v-model="content"></textarea> -->

            <button class="save-draft">SAVE DRAFT</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
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
    const blogs = ref(null);
    const title = ref(null);
    const contents = ref(null);
    const check = ref("Initial value");
    const store = useStore();
    const router = useRouter();

    const getBlog = async (id) => {
      await store.dispatch("getBlog", id);
      title.value = store.state.blog.title;
      contents.value = store.state.blog.content;
      console.log("blog", store.state.blog);
    };

    const updateBlog = async () => {
      console.log(store.state.blog._id);
      await store.dispatch("updateBlog", {
        id: store.state.blog._id,
        title: title.value,
        content: contents.value,
      });
      blogs.value = store.state.blogs;
    };

    const deleteBlog = async (id) => {
      await store.dispatch("deleteBlog", id);
      blogs.value = store.state.blogs;
    };

    const manipulatedBlogs = computed(() => {
      return blogs.value;
    });

    onMounted(async () => {
      !store.state.user && router.push("/login");
      await store.dispatch("getBlogs");
      blogs.value = store.state.blogs;

      // console.log(blogs.value);
    });
    const ReadVal = (val) => (contents.value = val);

    return {
      manipulatedBlogs,
      title,
      contents,
      getBlog,
      updateBlog,
      deleteBlog,
      ReadVal,
      check,
    };
  },
};
</script>
=
<style src="@/assets/css/viewblog.css" scoped></style>
