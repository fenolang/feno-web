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
                                <p class="ft35 bold">{{ $t('docs.menu.directory_structure') }}</p>
                                <p class="ft15 lTXTgrey">
                                    {{ $t('docs.structure.sub') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 id="directories">
                            <div class="spacing">
                                <p class="ft25 bold mb-2">{{ $t('docs.menu.directories') }}</p>
                                <hr class="subtitle">
                                <div v-for="(item, index) in $t('docs.structure.folders')" :key="index">
                                    <p class="ft20 mb-2" v-html="item.title"></p>
                                    <hr class="mark-this">
                                    <p class="ft13 lTXTgrey" v-html="item.desc"></p>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mt-3" id="files">
                            <div class="spacing">
                                <p class="ft25 bold mb-2">{{ $t('docs.menu.files') }}</p>
                                <hr class="subtitle">
                                <div v-for="(item, index) in $t('docs.structure.files')" :key="index">
                                    <p class="ft20 mb-2" v-html="item.title"></p>
                                    <hr class="mark-this">
                                    <p class="ft13 lTXTgrey" v-html="item.desc"></p>
                                </div>
                            </div>
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

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu
    }
})

export default class DirectoryStructure extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        anchors.options = {
            placement: 'left',
            icon: '#',
        };
        anchors.add('#directories');
        anchors.add('#files');
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }
}

</script>

<style>
    .spacing {
        padding-right: 30%;
    }
    .subtitle {
        background: #47B984 !important;
        /*border-bottom: 3px solid #2c2e41 !important;*/
        width: 100px;
        height: 4px;
        border: none;
        margin-bottom: 30px;
    }
    .mark-this {
        background: #2c2e41 !important;
        /*border-bottom: 3px solid #2c2e41 !important;*/
        width: 60px;
        height: 3px;
        border: none;
        margin-bottom: 30px;
    }
</style>