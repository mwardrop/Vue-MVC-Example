import Vue from 'vue'
import SiteMenu from "../../../Components/SiteMenu/SiteMenu.vue"

new Vue({
    el: '#app',
    data: {
        hello: "Hello from Vue.js"
    },
    components: {"sitemenu": SiteMenu}
});
