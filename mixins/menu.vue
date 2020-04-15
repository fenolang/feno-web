<script>
const anchorJS = require('anchor-js');
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('menu', ['vtitle', 'vback', 'vcolor', 'vbuttons'])
    },
    methods: {
        ...mapActions('menu', ['setConfig', 'setButtons'])
    }
}

</script>