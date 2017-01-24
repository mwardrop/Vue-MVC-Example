import Vue from 'vue'
import SiteMenu from "../../../Components/SiteMenu/SiteMenu.vue"
/* import $ from "jquery" - Because we are using an MVC project jQuery is referenced on page as a dependancy of Bootstrap already 
                            and there is no need to import jQuery. However if those referenced bundles are removed importing jQuery 
                            where used is necessary. */
                            
                         
new Vue({
    el: '#app',
    data: {
        hello: "Hello from Vue.js"
    },
    components: {"sitemenu": SiteMenu}
});


$(function() {

    $(function () {

        $("#jQueryTest").html("Hello from transpiled jQuery.");

        $("#jQueryClick").click(function () { alert("This page uses both Vue and jQuery."); })

    });

});