<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class Screens extends Vue {

    get mdAndDown(): boolean {
        return this.$vuetify.breakpoint.mdAndDown;
    }

    get mdAndUp(): boolean {
        return this.$vuetify.breakpoint.mdAndUp;
    }

    get smAndDown(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }

}
</script>