import { createRouter, createWebHistory } from "vue-router";

import { routeHomepages } from "./routesHome";

import Landing from "@/views/Landing.vue";

const routes = [
  ...routeHomepages,
  {
    path: "/",
    name: "Landing",
    meta: { name: "Landing Page" },
    component: Landing,
  },
  {
    path: "/shop",
    name: "Shop",
    meta: { name: "Shop" },
    component: () => import(/* webpackChunkName: "Shop" */ "@/views/Shop.vue"),
  },
  {
    path: "/shop-details",
    name: "ShopDetails",
    meta: { name: "Details Product" },
    component: () => import(/* webpackChunkName: "Shop" */ "@/views/ShopDetails.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { name: "Contact" },
    component: () => import(/* webpackChunkName: "Contact" */ "@/views/Contact.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    meta: { name: "About" },
    component: () => import(/* webpackChunkName: "About" */ "@/views/AboutUs.vue"),
  },
  {
    path: "/team",
    name: "Team",
    meta: { name: "Team" },
    component: () => import(/* webpackChunkName: "team" */ "@/views/Team.vue"),
  },
  {
    path: "/team-details",
    name: "TeamDetails",
    meta: { name: "Team Details" },
    component: () => import(/* webpackChunkName: "team" */ "@/views/TeamDetails.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    meta: { name: "Recent Blog" },
    component: () => import(/* webpackChunkName: "blog" */ "@/views/Blog.vue"),
  },
  {
    path: "/blog-details",
    name: "BlogDetails",
    meta: { name: "Recent Blog" },
    component: () => import(/* webpackChunkName: "blog" */ "@/views/BlogDetails.vue"),
  },
  {
    path: "/services",
    name: "Services",
    meta: { name: "Services" },
    component: () => import(/* webpackChunkName: "services" */ "@/views/Services.vue"),
  },
  {
    path: "/prices",
    name: "Prices",
    meta: { name: "Pricing" },
    component: () => import(/* webpackChunkName: "prices" */ "@/views/Prices.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    meta: { name: "Portfolio" },
    component: () => import(/* webpackChunkName: "portfolio" */ "@/views/Portfolio.vue"),
  },
  {
    path: "/portfolio-details",
    name: "PortfolioDetails",
    meta: { name: "Portfolio Details" },
    component: () => import(/* webpackChunkName: "portfolio" */ "@/views/PortfolioDetails.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { name: "Trang này không tồn tại", NotFound: true },
    component: () => import(/* webpackChunkName: "notfound" */ "@/views/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "router-exact-active",
  linkActiveClass: "router-active",
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, left: 0 };
  },
});

router.beforeEach((to, _, next) => {
  if (to.meta.name) document.title = to.meta.name;
  next();
});

export default router;
