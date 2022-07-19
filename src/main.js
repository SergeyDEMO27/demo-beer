import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directives from "@/directives/index";

const app = createApp(App);

directives.map((directive) => app.directive(directive.name, directive));

app.use(store).use(router).mount("#app");
