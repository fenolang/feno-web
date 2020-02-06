<template>
    <div>
        <v-layout row wrap>
            <v-flex xs1 v-if="$vuetify.breakpoint.mdAndUp">
            </v-flex>
            <v-flex xs11>
                <div class="spacing pt20">
                    <Title>{{ $t('support.title') }}</Title>
                    <p class="ft15 lTXTgrey">
                        {{ $t('support.subtitle') }}
                    </p>
                    <v-btn color="blue darken-3" outlined class="mt-3" target="_blank" href="https://www.paypal.me/yahirgnz">{{ $t('docs.node.paypal') }}</v-btn>
                    <v-btn color="amber darken-4" depressed class="mt-3 dk bold" target="_blank" href="https://www.patreon.com/yahirgnz">{{ $t('docs.node.patreon') }}</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';

const MenuModule = namespace('menu');

@Component({
    components: {
        Title, Subtitle
    }
})

export default class Donate extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }
}

</script>