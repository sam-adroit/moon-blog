import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import BlogDetailsView from "../views/BlogDetailsView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/admin/DashboardView";
import ViewBlogView from "../views/admin/ViewBlogView";
import BlogDraft from "../views/admin/DraftView";
import AddBlogView from "../views/admin/AddBlogView";
import EditBlogView from "../views/admin/EditBlogView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/blog/:id",
    name: "blogDetails",
    component: BlogDetailsView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/view-blog",
    name: "view-blog",
    component: ViewBlogView,
  },
  {
    path: "/edit-blog/:id",
    name: "edit-blog",
    component: EditBlogView,
  },
  {
    path: "/blog-draft",
    name: "blog-draft",
    component: BlogDraft,
  },
  {
    path: "/add-blog",
    name: "add-blog",
    component: AddBlogView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
