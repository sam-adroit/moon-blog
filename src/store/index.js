import { createStore } from "vuex";

const URL = "https://mexd-backend.herokuapp.com/";

export default createStore({
  state: {
    user: JSON.parse(sessionStorage.getItem("user")),
    errMsg: "",
    blogs: null,
    blog: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setErrMsg(state, payload) {
      state.errMsg = payload;
    },
    setBlogs(state, payload) {
      state.blogs = payload;
    },
    setBlog(state, payload) {
      state.blog = payload;
    },
  },
  actions: {
    async signIn(context, payload) {
      const res = await fetch(URL + "signin-admin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const { data } = await res.json();
        // console.log(data);
        let credentials = {
          name: `${data.firstName} ${data.lastName}`,
          token: data.token,
        };
        sessionStorage.setItem("user", JSON.stringify(credentials));
        context.commit("setUser", credentials);
      } else {
        let msg = "Unable to Login, please try again later!";
        context.commit("setErrMsg", msg);
      }
    },
    async logout(context) {
      context.commit("setUser", null);
      sessionStorage.removeItem("user");
    },
    async createBlog(context, { title, content, image }) {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("content", content);
      fd.append("image", image);
      const res = await fetch(URL + "createBlog", {
        method: "POST",
        headers: {
          Authorization: context.state.user.token,
        },
        body: fd,
      });
      if (!res.ok) {
        let errMsg = "Unable to create Blog, please try again!";
        context.commit("setErrMsg", errMsg);
      }
    },
    async getBlogs(context) {
      const res = await fetch(URL + "getBlogs");
      if (res.ok) {
        const { data } = await res.json();

        context.commit("setBlogs", data);
      }
    },
    async getBlog(context, payload) {
      const res = await fetch(URL + "getBlog/" + payload, {
        method: "GET",
        // headers: {
        //   Authorization: context.state.user.token,
        // },
      });

      if (res.ok) {
        const { data } = await res.json();
        // console.log(data);

        context.commit("setBlog", data);
      }
    },
    async updateBlog(context, { id, title, content }) {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("content", content);
      const res = await fetch(URL + "updateBlog/" + id, {
        method: "PUT",
        headers: {
          Authorization: context.state.user.token,
        },
        body: fd,
      });
      if (res.ok) {
        context.dispatch("getBlogs");
      }
    },
    async deleteBlog(context, payload) {
      const res = await fetch(URL + "deleteBlog/" + payload, {
        method: "DELETE",
        headers: {
          Authorization: context.state.user.token,
        },
      });
      if (res.ok) {
        context.dispatch("getBlogs");
      }
    },
  },
});
