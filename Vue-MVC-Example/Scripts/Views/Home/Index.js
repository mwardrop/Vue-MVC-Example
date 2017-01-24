import Vue from 'vue'
import SiteMenu from "../../../Components/SiteMenu/SiteMenu.vue"

new Vue({
    el: '#app',
    data: {
        WelcomeMessage: 'ASP.NET MVC 5 + Vue.js Integration Example'
    },
    components: {"sitemenu": SiteMenu}
});
