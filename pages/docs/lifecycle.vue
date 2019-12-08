<template>
    <div>
        <v-layout row wrap>
            <v-flex xs3>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <Menu />
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs9>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <div class="pt20 spacing">
                                <p class="ft35 bold">{{ $t('docs.menu.lifecycle') }}</p>
                                <p class="ft15 lTXTgrey">
                                {{ $t('docs.lifecycle.sub') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <v-img src="/lifecycle-graph.png" width="680" height="1159"></v-img>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import Menu from '@/components/Docs/Menu.vue';

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu
    }
})

export default class Lifecycle extends Vue {
    @MenuModule.Action setButtons: any

    mounted()
    {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
        ])
    }
}

</script>

<style>
    .spacing {
        padding-right: 30%;
    }
</style>