<template>
    <div>
        <div class="list-group" v-for="link in links">

                <h4 class="list-group-item"><a v-bind:href="link.url">{{link.label}}</a></h4>

                <p class="list-group-item">{{link.description}}</p>

        </div>
    </div>
</template>
<script>



export default {
    name: 'linklist',
    props: ['links']
}
</script>

<style>

</style>
