<template>
    <div>

        <div class="panel panel-default" style="width:360px; height: 180px;">

            <div class="panel-heading"><h4>Fire Events</h4></div>

            <div class="panel-body">

                <div class="form-group">

                    <input type="text" id="criteria" class="form-control" placeholder="Card Name" v-model="text" style="width:340px;" required />

                </div>

                <div class="form-group">
                    <button class="btn-primary btn-sm" v-on:click="TextEvent">Fire Text Event</button>
                    <button class="btn-primary btn-sm" v-on:click="BlueEvent">Fire Blue Event</button>
                    <button class="btn-primary btn-sm" v-on:click="RedEvent">Fire Red Event</button>
                </div>

            </div>

        </div>

</template>

<script>


export default {
    name: 'eventbusfire',
    data () {
        return {
            text: 'Change Me'
        }},
    methods: {
        TextEvent: function() {

            if(this.$bus) {

                this.$bus.$emit('TextEvent', this.text);

            } else { throw "No Event Bus Found"; }

        },
        BlueEvent: function() {

            if(this.$bus) {

                this.$bus.$emit('BlueEvent');

            } else { throw "No Event Bus Found"; }

        },
        RedEvent: function() {

            if(this.$bus) {

                this.$bus.$emit('RedEvent');

            } else { throw "No Event Bus Found"; }
          
        }
    }
}
</script>

