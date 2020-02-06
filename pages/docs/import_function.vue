<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.import_scripts.title') }}</p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.import_scripts.subtitle') }}
                    </p>
                </div>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex md6>
                            <CodeBox>
                                <Head>
                                    <Tab/> <Func name="import"><String>"index"</String></Func>
                                </Head>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Tag>head</Tag> <br>
                                    <Tab/> <Tag>script <Attr>src</Attr>=<String>"/scripts/index.js"</String></Tag><Tag>/script</Tag><br>
                                <Tag>/head</Tag>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Head>
                                    <Tab/> <Func name="import"><String>"/folder/index"</String></Func>
                                </Head>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Tag>head</Tag> <br>
                                    <Tab/> <Tag>script <Attr>src</Attr>=<String>"/scripts/folder/index.js"</String></Tag><Tag>/script</Tag><br>
                                <Tag>/head</Tag>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Head>
                                    <Tab/> <Func name="import"><String>"./folder/index"</String></Func>
                                </Head>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Tag>head</Tag> <br>
                                    <Tab/> <Tag>script <Attr>src</Attr>=<String>"/folder/index.js"</String></Tag><Tag>/script</Tag><br>
                                <Tag>/head</Tag>
                            </CodeBox>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs12>
                <div :class="smAndDown ? 'spacing' : ''">
                    <Subtitle>{{ $t('docs.import_scripts.config.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.import_scripts.config.subtitle') }}
                    </p>
                    <v-container grid-list-xs>
                        <v-layout row wrap>
                            <v-flex md6>
                                <CodeBox>
                                    { <br>
                                        <Tab/> <El>scriptsDir</El>: <String>"/myfolder"</String> <br>
                                    }
                                </CodeBox>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.import_scripts.result') }}
                    </p>
                    <v-container grid-list-lg>
                        <v-layout row wrap>
                            <v-flex md6>
                                <CodeBox>
                                    <Head>
                                        <Tab/> <Func name="styles"><String>"index"</String></Func>
                                    </Head>
                                </CodeBox>
                            </v-flex>
                            <v-flex md6>
                                <CodeBox>
                                    <Tag>head</Tag> <br>
                                        <Tab/> <Tag>script <Attr>src</Attr>=<String>"/myfolder/index.js"</String></Tag><Tag>/script</Tag><br>
                                    <Tag>/head</Tag>
                                </CodeBox>
                            </v-flex>
                        </v-layout>
                    </v-container>
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
        CodeBox, Tag, Tab, El, String, Mark, Func,
        Doc, Head, Dmeta,
    }
})

export default class Base extends Vue {
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