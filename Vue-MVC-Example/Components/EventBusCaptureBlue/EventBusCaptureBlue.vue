<template>

    <div class="panel panel-default" style="width:300px; height: 180px;">

        <div class="panel-heading" v-bind:style="{ 'background-color': color }"><h4>Blue Event Listener</h4></div>

        <div class="panel-body"><h4>{{text}}</h4></div>

    </div>

</template>

<script>

import EventBusCapture from '../EventBusCapture/EventBusCapture.vue'

export default {
    name: 'eventbuscapturered',
    mixins: [EventBusCapture],
    data () {
        return {
            color: ''
    }},
    mounted () {

        this.$bus.$on('BlueEvent', (event) => {

            this.color = 'blue';

            setTimeout(() => {

                this.color = '';

            }, 1500);

        });
    }
}
</script>