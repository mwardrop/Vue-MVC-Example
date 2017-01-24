<template>
    <div>
        <div v-for="group in groups">
            <h3 class="shift-right"><span v-bind:class="[group.icon, 'glyphicon']" aria-hidden="true">&nbsp;</span>{{group.header}}</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <ul class="nav nav-pills nav-stacked">
                        <li v-for="link in group.links" v-bind:class="[{active: link.pagekey == pagekey}, 'presentation']">
                            <a :href="link.url">{{link.text}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import SiteMenuJson from '../../App_Data/sitemenu.json'

    export default {
        name: 'sitemenu',
            props: ['pagekey'],
            data () {
                return {
                    groups: SiteMenuJson
                }
            }
        }

</script>

<style>

    .shift-right{
        margin-left: 20px;
    }

</style>
