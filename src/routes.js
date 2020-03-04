import Aboutme from "./components/Aboutme.vue";
import Schools from "./components/Schools.vue";
import Resume from "./components/Resume.vue";
import Skills from "./components/Skills.vue";

export const routes = [
  { path: "/", component: Aboutme },
  { path: "/schools", component: Schools },
  { path: "/resume", component: Resume },
  { path: "/skills", component: Skills }
];
