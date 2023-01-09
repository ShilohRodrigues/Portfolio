import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

// To hide the header on scroll
const navBar = document.getElementById('navBar');
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    navBar.classList.add("nav-top");
    navBar.classList.remove("nav-hidden");
  }
  else if (lastScrollY < window.scrollY) {
    navBar.classList.remove("nav-top");
    navBar.classList.add("nav-hidden");
  } else {
    navBar.classList.remove("nav-top");
    navBar.classList.remove("nav-hidden");
  }
  lastScrollY = window.scrollY;
});
