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
                                <p class="ft35 bold">{{ $t('docs.class.title') }}</p>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.class.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="create">{{ $t('docs.class.create.title') }}</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.class.create.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Gentpy"></Func> { <br>
                                        <Tab/> <El>class</El> <Attr>{{ $t('docs.class.user') }}</Attr> { <br>
                                            <Tab/><Tab/> <El>def</El> <Attr>String</Attr> {{ $t('docs.class.greeting') }}; <br> <br>
                                            <Tab/><Tab/> <Func name="constructor"><Attr>String</Attr> {{ $t('docs.class.msg') }}</Func> { <br>
                                                <Tab/><Tab/><Tab/> <El>this</El>.{{ $t('docs.class.greeting') }} = {{ $t('docs.class.msg') }}; <br>
                                            <Tab/><Tab/>} <br>
                                            <Tab/><Tab/> <Func :name="$t('docs.class.greet')"></Func> { <br>
                                                <Tab/><Tab/><Tab/> <Func name="print">{{ $t('docs.class.greeting') }}</Func> <br>
                                            <Tab/><Tab/>} <br>
                                        <Tab/>} <br> <br>
                                        <Tab/> <El>def</El> {{ $t('docs.class.example') }} = <El>new</El> <Attr>{{ $t('docs.class.user') }}</Attr>(<String>"{{ $t('docs.class.hello') }}"</String>); <br>
                                        <Tab/> {{ $t('docs.class.example') }}.<Func :name="$t('docs.class.greet')"></Func>; <Comment>// {{ $t('docs.class.result') }} "{{ $t('docs.class.hw') }}"</Comment> <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.class.create.subtitle2')">
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="super">{{ $t('docs.class.super.title') }}</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.class.super.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Gentpy"></Func> { <br>
                                        <Tab/> <El>class</El> <Attr>{{ $t('docs.class.person') }}</Attr> { <br>
                                            <Tab/><Tab/> <El>def</El> <Attr>String</Attr> {{ $t('docs.class.name') }}; <br> <br>
                                            <Tab/><Tab/> <Func name="constructor"><Attr>String</Attr> param</Func> { <br>
                                                <Tab/><Tab/><Tab/> <El>this</El>.{{ $t('docs.class.name') }} = param; <br>
                                            <Tab/><Tab/> } <br>
                                        <Tab/> } <br> <br>
                                        <Tab/> <El>class</El> <Attr>{{ $t('docs.class.programmer') }}</Attr> <El>extends</El> <Attr>{{ $t('docs.class.person') }}</Attr> { <br>
                                            <Tab/><Tab/> <Func :name="$t('docs.class.coffee_func')"></Func> { <br>
                                                <Tab/><Tab/><Tab/> <Func name="print"><El>this</El>.{{ $t('docs.class.name') }}, <String>"{{ $t('docs.class.coffee') }}"</String></Func> <br>
                                            <Tab/><Tab/>} <br>
                                        <Tab/>} <br> <br>
                                        <Tab/> <El>def</El> {{ $t('docs.class.me') }} = <El>new</El> <Attr>{{ $t('docs.class.programmer') }}</Attr>(<String>"YahirGNz"</String>); <br>
                                        <Tab/> {{ $t('docs.class.me') }}.<Func :name="$t('docs.class.coffee_func')"></Func>; <Comment>// {{ $t('docs.class.result') }} "YahirGNz {{ $t('docs.class.coffee') }}"</Comment> <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.class.super.subtitle2')">
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <p class="mt20 ft15 lTXTgrey">
                                    {{ $t('docs.class.super.result') }}
                                </p>
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

export default class Classes extends Vue {
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
        anchors.add('#super');
    }
}

</script>