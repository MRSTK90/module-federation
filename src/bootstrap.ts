import { createPinia } from "pinia";
import { createApp } from "vue";
import vuetify from './plugins/vuetify'
//import { loadFonts } from './plugins/webfontloader'
import App from "./App.vue";

//loadFonts()

const app = createApp(App);
app.use(createPinia())
  .use(vuetify);
app.mount("#app");
