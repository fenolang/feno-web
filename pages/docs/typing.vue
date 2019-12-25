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
                                <p class="ft35 bold">{{ $t('docs.types.title') }}</p>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.types.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="string">String</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.types.string.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>String</Attr> {{ $t('docs.types.string.var') }} = <String>"{{ $t('docs.types.hw') }}"</String>; <br>
                                        <Tab/> <El>def</El> {{ $t('docs.types.string.var') }}2 = <String>"{{ $t('docs.types.hw') }}"</String>; <br>
                                    }
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20">
                                    {{ $t('docs.types.string.subtitle2') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="number">Number</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.types.number.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Number</Attr> {{ $t('docs.types.number.var') }} = <Attr>17</Attr>; <br>
                                        <Tab/> <El>def</El> {{ $t('docs.types.number.var') }}2 = <Attr>17</Attr>; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12> 
                            <div class="spacing">
                                <Title id="bool">Boolean</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.types.bool.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Boolean</Attr> {{ $t('docs.types.bool.var') }} = <Attr>true</Attr>; <br>
                                        <Tab/> <El>def</El> {{ $t('docs.types.bool.var') }}2 = <Attr>false</Attr>; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div class="spacing">
                                <Title id="array">Array</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.types.array.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Array</Attr> {{ $t('docs.types.array.var') }} = [<String>""</String>]; <br>
                                        <Tab/> <El>def</El> [] {{ $t('docs.types.array.var') }}2 = [<String>""</String>]; <br>
                                        <Tab/> <El>def</El> {{ $t('docs.types.array.var') }}3 = [<String>""</String>]; <br> <br>
                                        <Tab/> <El>def</El> <Attr>Array</Attr>[] {{ $t('docs.types.array.var2') }} = [<String>""</String>,<String>""</String>]; <br>
                                        <Tab/> <El>def</El> [][] {{ $t('docs.types.array.var2') }}2 = [<String>""</String>,<String>""</String>]; <br>
                                        <Tab/> <El>def</El> {{ $t('docs.types.array.var2') }}3 = [<String>""</String>,<String>""</String>]; <br>
                                    }
                                </CodeBox>
                                <v-alert class="mt20" type="warning" border="left" outlined>
                                    {{ $t('docs.types.array.alert') }}
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="obj">Object</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.types.object.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Object</Attr> {{ $t('docs.types.object.var') }} = {}; <br>
                                        <Tab/> <El>def</El> {} {{ $t('docs.types.object.var') }}3 = {}; <br>
                                        <Tab/> <El>def</El> {{ $t('docs.types.object.var') }}2 = {}; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Title id="any">Any</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.types.any.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Any</Attr> {{ $t('docs.types.any.var') }} = <Attr>true</Attr>; <br>
                                        <Tab/> {{ $t('docs.types.any.var') }} = <String>"{{ $t('docs.types.any.string') }}"</String>; <Comment>// {{ $t('docs.types.any.comment') }}</Comment> <br>
                                        <Tab/> {{ $t('docs.types.any.var') }} = <Attr>5</Attr>; <Comment>// {{ $t('docs.types.any.comment') }}</Comment> <br>
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

export default class Typing extends Vue {
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
        anchors.add('#string');
        anchors.add('#number');
        anchors.add('#bool');
        anchors.add('#array');
        anchors.add('#obj');
        anchors.add('#any');
    }
}

</script>