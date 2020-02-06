<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold" v-html="$t('docs.styles.title')"></p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.styles.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div :class="smAndDown ? 'spacing' : ''">
                    <Title>{{ $t('docs.styles.use') }}</Title>
                    <Subtitle>{{ $t('docs.styles.ext.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.styles.ext.subtitle') }}
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
                                        <Tab/> <Tag>link <Attr>rel</Attr>=<String>"stylesheet"</String> <Attr>href</Attr>=<String>"/css/index.css"</String></Tag> <br>
                                    <Tag>/head</Tag>
                                </CodeBox>
                            </v-flex>
                            <v-flex md6>
                                <CodeBox>
                                    <Head>
                                        <Tab/> <Func name="styles"><String>"/example/index"</String></Func>
                                    </Head>
                                </CodeBox>
                            </v-flex>
                            <v-flex md6>
                                <CodeBox>
                                    <Tag>head</Tag> <br>
                                        <Tab/> <Tag>link <Attr>rel</Attr>=<String>"stylesheet"</String> <Attr>href</Attr>=<String>"/css/example/index.css"</String></Tag> <br>
                                    <Tag>/head</Tag>
                                </CodeBox>
                            </v-flex>
                            <v-flex md6>
                                <CodeBox>
                                    <Head>
                                        <Tab/> <Func name="styles"><String>"./example/index"</String></Func>
                                    </Head>
                                </CodeBox>
                            </v-flex>
                            <v-flex md6>
                                <CodeBox>
                                    <Tag>head</Tag> <br>
                                        <Tab/> <Tag>link <Attr>rel</Attr>=<String>"stylesheet"</String> <Attr>href</Attr>=<String>"/example/index.css"</String></Tag> <br>
                                    <Tag>/head</Tag>
                                </CodeBox>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </div>
            </v-flex>
            <v-flex xs12>
                <div :class="smAndDown ? 'spacing' : ''">
                    <Subtitle>{{ $t('docs.styles.inside.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.styles.inside.subtitle') }}</p>
                    <v-container grid-list-lg>
                        <v-layout row wrap>
                            <v-flex md6>
                                <CodeBox>
                                    <Head>
                                        <Tab/> <Func name="styles">{<br>
                                            <Tab/><Tab/> <Attr>.example</Attr> { <br>
                                                <Tab/><Tab/><Tab/> color: <Attr>#0a8cbd</Attr>; <br>
                                            <Tab/><Tab/> } <br>
                                        <Tab/>}</Func>
                                    </Head>
                                </CodeBox>
                            </v-flex>
                            <v-flex md6>
                                <CodeBox>
                                    <Tag>head</Tag> <br>
                                        <Tab/> <Tag>style</Tag> <br>
                                            <Tab/><Tab/> <Attr>.example</Attr> { <br>
                                                <Tab/><Tab/><Tab/> color: <Attr>#0a8cbd</Attr>; <br>
                                            <Tab/><Tab/> } <br>
                                        <Tab/> <Tag>/style</Tag> <br>
                                    <Tag>/head</Tag>
                                </CodeBox>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </div>
            </v-flex>
            <v-flex xs12>
                <div :class="smAndDown ? 'spacing' : ''">
                    <Subtitle>{{ $t('docs.styles.config.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.styles.config.subtitle') }}
                    </p>
                    <v-container grid-list-xs>
                        <v-layout row wrap>
                            <v-flex md6>
                                <CodeBox>
                                    { <br>
                                        <Tab/> <El>stylesDir</El>: <String>"/myfolder"</String> <br>
                                    }
                                </CodeBox>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.styles.result') }}
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
                                        <Tab/> <Tag>link <Attr>rel</Attr>=<String>"stylesheet"</String> <Attr>href</Attr>=<String>"/myfolder/index.css"</String></Tag> <br>
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
import { Tag, Tab, El, String, Attr, Comment, CodeBox, Func } from '@/components/Code/index';
import { Head, Doc } from '@/components/Code/Instances/index';
import { Title, Subtitle } from '@/components/Tools/index';
import Screens from '@/components/screens.vue';

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Tag, El, String, CodeBox, Attr, Comment, Tab, Func,
        Doc, Head,
        Title, Subtitle
    },
    mixins: [Screens]
})

export default class MetaElements extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }
}
</script>