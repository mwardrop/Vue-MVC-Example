import Vue from 'vue'
import SiteMenu from "../../../Components/SiteMenu/SiteMenu.vue"
import Modal from "../../../Components/Modal/Modal.vue"

new Vue({

    el: '#app',

    data: {

        showModal: true,

        criteria: '',

        post: 'true',

        results: window.serverdata

    },

    components: {"sitemenu": SiteMenu, "Modal": Modal},

    mounted () { 

        if(this.results.length > 0){

            this.showModal = false;

        } 

    },

    methods: {

        search () {

            if(this.post == 'true') {

                document.getElementById("originalForm").submit();

            } else {

                var self = this;

                fetch(window.location, {
                    method: "POST", 
                    headers: new Headers({"Content-Type": "application/json; charset=utf-8"}), 
                    body: JSON.stringify({criteria: this.$data.criteria})
                }).then(function(response) { 
                    
                    return response.json(); 
                
                }).then(function(response){
  
                    self.results = response;
                
                });

            }

            this.showModal = false;   

        }

    }
});
