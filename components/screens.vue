<script>
const anchorJS = require('anchor-js');
export default {
    computed: {
        mdAndDown() {
            return this.$vuetify.breakpoint.mdAndDown;
        },

        mdAndUp() {
            return this.$vuetify.breakpoint.mdAndUp;
        },

        smAndDown() {
            return this.$vuetify.breakpoint.smAndDown;
        },

        pcAndUp() {
            return this.$vuetify.breakpoint.lgAndUp;
        }
    }
}
</script>