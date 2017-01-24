import Vue from 'vue'
import SiteMenu from "../../../Components/SiteMenu/SiteMenu.vue"

new Vue({
    el: '#app',
    data: {
        serverdata: window.serverdata
    },
    components: {"sitemenu": SiteMenu},
    mounted () {
        setTimeout(function() {
            alert(this.serverdata.alert);
        }, 500);
       
    }
});
