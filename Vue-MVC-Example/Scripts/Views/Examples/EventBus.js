import Vue from 'vue'
import SiteMenu from "../../../Components/SiteMenu/SiteMenu.vue"
import EventBusFire from "../../../Components/EventBusFire/EventBusFire.vue"
import EventBusCaptureRed from "../../../Components/EventBusCaptureRed/EventBusCaptureRed.vue"
import EventBusCaptureBlue from "../../../Components/EventBusCaptureBlue/EventBusCaptureBlue.vue"

var bus = new Vue({});

Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus;
    }
});

new Vue({
    el: '#app',
    data: {
        bus: bus
    },
    components: {
        "sitemenu": SiteMenu, 
        "eventbusfire": EventBusFire, 
        "eventbuscapturered": EventBusCaptureRed, 
        "eventbuscaptureblue": EventBusCaptureBlue
    }
});
