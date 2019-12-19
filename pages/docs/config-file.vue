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
                            <div class="spacing pt20">
                                <p class="ft35 bold">{{ $t('docs.config.title') }}</p>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.config.subtitle')">
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.config.layout') }}</Subtitle>
                                <CodeBox>
                                    <Key>module.exports</Key> { <br>
                                        <Tab/> <Comment>// {{ $t('docs.config.type') }} ["app","web"]</Comment> <br>
                                        <Tab/> <El>mode</El>: <String>"web"</String>, <br> <br>
                                        <Tab/> <Comment>// {{ $t('docs.config.dist') }}</Comment> <br>
                                        <Tab/> <El>outDir</El>: <String>"/dist"</String>, <br> <br>
                                        <Tab/> <Comment>// {{ $t('docs.config.styles') }}</Comment> <br>
                                        <Tab/> <El>stylesDir</El>: <String>"/styles"</String>, <br> <br>
                                        <Tab/> <Comment>// {{ $t('docs.config.scripts') }}</Comment> <br>
                                        <Tab/> <El>scriptsDir:</El> <String>"/scripts"</String>, <br> <br>
                                        <Tab/> <Comment>// {{ $t('docs.config.nojs') }}</Comment> <br>
                                        <Tab/> <El>Noscript</El>: { <br>
                                            <Tab/><Tab/> <Comment>// {{ $t('docs.config.content') }}</Comment> <br>
                                        <Tab/>} <br>
                                    }
                                </CodeBox>
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
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Key, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr, Key, Comment,
        Doc, Head, Dmeta,
    }
})

export default class ConfigFile extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
        ]);
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }
}

</script>