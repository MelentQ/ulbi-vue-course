import { createApp } from 'vue'

import App from './App'
import router from "@/router/router";
import store from "@/store";
import VIntersection from "@/directives/VIntersection";
import VFocus from "@/directives/VFocus";

const app = createApp(App)

app.directive('intersection', VIntersection)
app.directive('focus', VFocus)

app
    .use(router)
    .use(store)
    .mount('#app')
