<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.variables.title') }}</p>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.variables.subtitle')">
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="def">{{ $t('docs.variables.def.title') }}</Title>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.variables.def.subtitle')"></p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                        <Tab/> <El>def</El> x = <Attr>10</Attr>; <br>
                        <Tab/> <Func name="print">x</Func> <Comment>// {{ $t('docs.variables.result') }} 10</Comment> <br>
                        <Tab/> <Func name="print">x * <Attr>2</Attr></Func> <Comment>// {{ $t('docs.variables.result') }} 20</Comment> <br>
                        <Tab/> <Func name="print">x + <String>"{{ $t('docs.variables.hello') }}"</String></Func> <Comment>// Error: {{ $t('docs.variables.error') }}</Comment> <br>
                        <Tab/> <Func name="print">x.<Func name="toString"></Func> + <String>"{{ $t('docs.variables.and') }}"</String></Func> <Comment>// {{ $t('docs.variables.result') }} "10 {{ $t('docs.variables.and') }}"</Comment> <br>
                        }
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.variables.def.subtitle2')"></p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="const">{{ $t('docs.variables.const.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.variables.const.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                        <Tab/> <El>const</El> {{ $t('docs.variables.human') }} = { <br>
                        <Tab/><Tab/> {{ $t('docs.variables.name') }}: <String>"Darlene"</String> <br>
                        <Tab/><Tab/> {{ $t('docs.variables.age') }}: <Attr>22</Attr> <br>
                        <Tab/>} <br>
                        <br>
                        <Tab/> <Comment>// {{ $t('docs.variables.result') }} ERROR!</Comment> <br>
                        <Tab/> {{ $t('docs.variables.human') }} = { <br>
                        <Tab/><Tab/> {{ $t('docs.variables.name') }}: <String>"Elliot"</String> <br>
                        <Tab/><Tab/> {{ $t('docs.variables.age') }}: <Attr>24</Attr> <br>
                        <Tab/>} <br>
                        <br>
                        <Tab/> <Comment>// {{ $t('docs.variables.result') }} "Darlene"</Comment> <br>
                        <Tab/> <Func name="print"><El>{{ $t('docs.variables.human') }}</El>.{{ $t('docs.variables.name') }}</Func> <br>
                        }
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey mb30">
                        {{ $t('docs.variables.const.subtitle2') }}
                    </p>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func, Comment,
        Doc, Head, Dmeta,
    }
})

export default class Variables extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
        anchors.add('#def');
        anchors.add('#const');
    }
}

</script>

<style scoped>
    .txt {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
</style>