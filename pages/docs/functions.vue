<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.func.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.func.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="create">{{ $t('docs.func.create.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.func.create.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                            <Tab/> <El>func</El> <Func :name="$t('docs.func.show')"></Func> { <br>
                                <Tab/><Tab/> <Func name="msg"><String>"{{ $t('docs.func.hw') }}"</String></Func> <br>
                            <Tab/>} <br> <br>
                            <Tab/> <Func :name="$t('docs.func.show')"></Func>; <br>
                        }
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.func.create.subtitle2')">
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle id="params">{{ $t('docs.func.params.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.func.params.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                            <Tab/> <El>func</El> <Func :name="$t('docs.func.show')"><Attr>String</Attr> {{ $t('docs.func.msg2') }}</Func> { <br>
                                <Tab/><Tab/> <Func name="msg">{{ $t('docs.func.msg2') }}</Func> <br>
                            <Tab/>} <br> <br>
                            <Tab/> <Func :name="$t('docs.func.show')"><String>"{{ $t('docs.func.hw') }}"</String></Func>; <br>
                        }
                    </CodeBox>
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
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func,
        Doc, Head, Dmeta,
    }
})

export default class Functions extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
        anchors.add('#create');
        anchors.add('#params');
    }
}

</script>