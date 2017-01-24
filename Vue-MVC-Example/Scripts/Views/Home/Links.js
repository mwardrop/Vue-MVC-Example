import Vue from 'vue'
import SiteMenu from "../../../Components/SiteMenu/SiteMenu.vue"
import LinkList from "../../../Components/LinkList/LinkList.vue"
import SiteLinks from '../../../App_Data/sitelinks.json'

new Vue({
    el: '#app',
    data: {
        links: SiteLinks
    },
    components: {"sitemenu": SiteMenu, "linklist": LinkList}
});
