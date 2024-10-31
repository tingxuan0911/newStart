import { createApp } from "vue";
import App from "./App.vue";
import MyPlugin from "@/plugin";

const app = createApp(App);

createApp(App).use(MyPlugin, []).mount("#app");


