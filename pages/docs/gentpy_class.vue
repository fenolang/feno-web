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
                                <p class="ft35 bold" v-html="$t('docs.gentpy_class.title')"></p>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.gentpy_class.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="starting">{{ $t('docs.gentpy_class.start.title') }}</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.gentpy_class.start.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Comment>#- {{ $t('docs.gentpy_class.comment') }} -#</Comment>
                                    </Doc> <br>
                                    <Attr>new</Attr> <Func name="Gentpy"></Func> { <br>
                                    <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="hello-world">{{ $t('docs.gentpy_class.hw.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.gentpy_class.hw.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Gentpy"></Func> { <br>
                                        <Tab/><El>print</El>(<String>"{{ $t('docs.gentpy_class.hw.val') }}"</String>) <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.gentpy_class.hw.result')"></p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="better-hw">{{ $t('docs.gentpy_class.better_hw.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.gentpy_class.better_hw.subtitle')">
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Gentpy"></Func> { <br>
                                        <Tab/><El>msg</El>(<String>"{{ $t('docs.gentpy_class.better_hw.val') }}"</String>) <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.gentpy_class.better_hw.result')"></p>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle id="print-and-msg">{{ $t('docs.gentpy_class.funcs.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.gentpy_class.funcs.subtitle')"></p>
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func, Viewer } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr, Comment, Viewer,
        Doc, Head, Dmeta,
    }
})

export default class GentpyClass extends Vue {
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
        anchors.add('#starting');
        anchors.add('#hello-world');
        anchors.add('#better-hw');
        anchors.add('#print-and-msg');
    }
}

</script>