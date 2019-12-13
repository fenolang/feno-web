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
                                <p class="ft35 bold">Layouts</p>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.layouts.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="appview">{{ $t('docs.layouts.create.title') }}</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.layouts.create.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>h1</Tag>{{ $t('docs.layouts.start') }} <Tag>/h1</Tag> <br>
                                        <Tab/><Func name="appView"></Func> <br>
                                        <Tab/><Tag>h3</Tag>{{ $t('docs.layouts.end') }} <Tag>/h3</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.layouts.app.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.layouts.app.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="layout">{{ $t('docs.layouts.apply.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.layouts.apply.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p</Tag>{{ $t('docs.layouts.page') }}<Tag>/p</Tag>
                                    </Doc>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                    <Tab/> <Attr>this</Attr>.<El>layout</El> = <String>"design"</String>; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.layouts.property.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.layouts.property.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.layouts.result.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.layouts.result.subtitle') }}
                                </p>
                                <Viewer>
                                    <h1>{{ $t('docs.layouts.start') }}</h1>
                                    <p>{{ $t('docs.layouts.page') }}</p>
                                    <h3>{{ $t('docs.layouts.end') }}</h3>
                                </Viewer>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <p class="ft15 lTXTgrey mt20">
                                    {{ $t('docs.layouts.result.subtitle2') }}
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func, Viewer } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr, Viewer,
        Doc, Head, Dmeta,
    }
})

export default class Layouts extends Vue {
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
        anchors.add('#appview');
        anchors.add('#layout');
    }
}

</script>