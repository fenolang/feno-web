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
                                <p class="ft35 bold">{{ $t('docs.scripts.title') }}</p>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.scripts.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Gentpy"></Func> { <br>
                                        <Tab/> <Func name="print"><String>"{{ $t('docs.scripts.hw') }}"</String></Func>; <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    {{ $t('docs.scripts.subtitle2') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.scripts.files.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.scripts.files.subtitle')">
                                </p>
                                <CodeBox>
                                    <El>def</El> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
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
                                    <El>def</El> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                                    <Func name="print">{{ $t('docs.scripts.text') }}.<El>length</El></Func>;
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    {{ $t('docs.scripts.files.subtitle3') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>{{ $t('docs.scripts.examples') }}</Title>
                                <Subtitle>{{ $t('docs.scripts.pure') }}</Subtitle>
                                <p class="ft13 lTXTgrey">script.gentpy:</p>
                                <CodeBox>
                                    <El>def</El> <Attr>String</Attr> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                                    <Func name="print">{{ $t('docs.scripts.text') }}.<El>length</El></Func>; <Comment>// {{ $t('docs.scripts.result') }} 5</Comment>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">script.js:</p>
                                <CodeBox>
                                    <El>let</El> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                                    <Attr>console</Attr>.<Func name="log">{{ $t('docs.scripts.text') }}.<El>length</El></Func>; <Comment>// {{ $t('docs.scripts.result') }} 5</Comment>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.scripts.class') }}</Subtitle>
                                <p class="ft13 lTXTgrey">script.gentpy:</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p</Tag>{{ $t('docs.scripts.hw') }}<Tag>/p</Tag>
                                    </Doc>
                                    <br>
                                    <Attr>new</Attr> <Func name="Gentpy"></Func> { <br>
                                        <Tab/><El>def</El> <Attr>String</Attr> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                                        <Tab/><Func name="print">{{ $t('docs.scripts.text') }}.<El>length</El></Func>; <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">script.html:</p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Tag>p</Tag>{{ $t('docs.scripts.hw') }}<Tag>/p</Tag> <br> <br>
                                    <Tab/><Tab/> <Tag>script <Attr>type</Attr>=<String>"text/javascript"</String></Tag> <br>
                                    <Tab/><Tab/><Tab/> <El>let</El> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                                    <Tab/><Tab/><Tab/> <Attr>console</Attr>.<Func name="log">{{ $t('docs.scripts.text') }}.<El>length</El></Func> <br>
                                    <Tab/><Tab/> <Tag>/script</Tag> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.scripts.without') }}</Subtitle>
                                <p class="ft13 lTXTgrey">script.gentpy:</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p</Tag>{{ $t('docs.scripts.hw') }}<Tag>/p</Tag>
                                    </Doc>
                                    <br>
                                    <El>def</El> <Attr>String</Attr> {{ $t('docs.scripts.text') }} = <String>"{{ $t('docs.scripts.hello') }}"</String>; <br>
                                    <Func name="print">{{ $t('docs.scripts.text') }}.<El>length</El></Func>; <br>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">script.html:</p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Tag>p</Tag>{{ $t('docs.scripts.hw') }}<Tag>/p</Tag> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                                <v-alert type="warning" border="left" outlined class="mt20">
                                    {{ $t('docs.scripts.alert') }}
                                </v-alert>
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
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
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
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