<script>
export default {
    name: 'eventbuscapture',
    data () {
        return {
            text: ''
    }},
    mounted () {
        this.$bus.$on('TextEvent', (event) => {
            this.text = event;
        });
    }
}
</script>

