<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.scripts.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.scripts.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <Func name="print"><String>"{{ $t('docs.scripts.hw') }}"</String></Func>; <br>
                        }</Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.scripts.subtitle2') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle>{{ $t('docs.scripts.files.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.scripts.files.subtitle')">
                    </p>
                    <CodeBox>
                        <El>def</El> <Attr>String</Attr> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                        <Func name="print">{{ $t('docs.scripts.text') }}.<El>length</El></Func>; <Comment>// {{ $t('docs.scripts.result') }} 5</Comment>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.scripts.files.subtitle2') }}
                    </p>
                    <CodeBox>
                        <Doc>
                            <Tag>p</Tag>{{ $t('docs.scripts.hw') }}<Tag>/p</Tag>
                        </Doc>
                        <br>
                        <El>def</El> <Attr>String</Attr> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                        <Func name="print">{{ $t('docs.scripts.text') }}.<El>length</El></Func>;
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.scripts.files.subtitle3') }}
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

export default class Scripts extends Vue {
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
    }
}

</script>