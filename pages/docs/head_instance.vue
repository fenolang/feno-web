<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold" v-html="$t('docs.head.title')"></p>
                    <p class="ft15 lTXTgrey" v-html="$t('docs.head.subtitle')"></p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>{{ $t('docs.head.define.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.head.define.subtitle') }}
                    </p>
                    <CodeBox class="line">
                        <El>head:</El> { <br>
                        &nbsp;&nbsp;<Comment>#- {{ $t('docs.head.define.content') }} -#</Comment> <br>
                        } <br>
                        <El>doc:</El> { <br>
                        &nbsp;&nbsp;<Comment>#- {{ $t('docs.head.define.structure') }} -#</Comment> <br>
                        }
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <v-alert outlined type="warning">
                        {{ $t('docs.head.define.alert') }}
                    </v-alert>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle>{{ $t('docs.head.under.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.head.under.subtitle') }}
                    </p>
                    <CodeBox>
                        <Tag>!doctype html</Tag> <br>
                        <Tag>html</Tag> <br>
                        &nbsp;&nbsp;<Tag>head</Tag> <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>&lt;!-- {{ $t('docs.head.define.content') }} --&gt;</Comment> <br>
                        &nbsp;&nbsp;<Tag>/head</Tag> <br>
                        &nbsp;&nbsp;<Tag>body</Tag> <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>&lt;!-- {{ $t('docs.head.define.structure') }} --&gt;</Comment> <br>
                        &nbsp;&nbsp;<Tag>/body</Tag> <br>
                        <Tag>/html</Tag>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>{{ $t('docs.head.elements.title') }}</Title>
                    <Subtitle>Title</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.head.elements.title_el.subtitle')"></p>
                    <CodeBox class="line">
                        <El>head:</El> { <br>
                        &nbsp;&nbsp;<El>title:</El> <String>"{{ $t('docs.head.elements.title_el.string') }}"</String> <br>
                        }
                    </CodeBox>
                </div>
            </v-flex> 
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle>{{ $t('docs.head.elements.styles.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.head.elements.styles.subtitle')"></p>
                    <v-btn outlined block class="border mb-4"
                    v-for="(item, index) in $t('docs.head.elements.styles.btns')" :key="index"
                    v-html="item.text" :to="localePath(item.route)+item.id"></v-btn>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle>Scripts</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.head.elements.scripts.subtitle')"></p>
                    <v-btn outlined block class="border mb-4"
                    v-for="(item, index) in $t('docs.head.elements.scripts.btns')" :key="index"
                    v-html="item.text" :to="localePath(item.route)+item.id"></v-btn>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="noscript">{{ $t('docs.meta.props.noscript.name') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.meta.props.noscript.sub') }}
                    </p>
                    <CodeBox :mark="true" class="mt30">
                        <Head>
                            <Tab/><El>title:</El> <String>"{{ $t('docs.meta.mtitle') }}"</String>, <br>
                            <Tab/>
                            <Mark>
                                <El>noscript:</El> { <br>
                                <Tab/> <Tag>p</Tag>{{ $t('docs.meta.props.noscript.dont_js') }}<Tag>/p</Tag> <br>
                                } <br>
                            </Mark>
                        </Head>
                        <Doc>
                            <Comment>#- {{ $t('docs.meta.comment') }} -#</Comment>
                        </Doc>
                    </CodeBox>
                    <v-alert outlined type="warning" border="left" class="mt-4" v-html="$t('docs.meta.props.noscript.alert')">
                    </v-alert>
                    <Subtitle id="noscript-default">{{ $t('docs.meta.props.nojs_default.name') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.meta.props.nojs_default.sub') }}
                    </p>
                    <Subtitle>{{ $t('docs.meta.props.configure_nojs.name') }}</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.meta.props.configure_nojs.sub')">
                    </p>
                    <br>
                    <v-btn depressed class="bg3 dk" :to="localePath('docs-config-file')">{{ $t('docs.meta.go') }}</v-btn>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle>Meta</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.head.elements.meta.subtitle') }}</p>
                    <CodeBox>
                        <El>head:</El> { <br>
                        &nbsp;&nbsp;<El>title:</El> <String>"{{ $t('docs.head.elements.meta.title') }}"</String> <br>
                        &nbsp;&nbsp;<El>meta:</El> [ <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<String>"description, {{ $t('docs.head.elements.meta.desc') }}"</String> <br>
                        &nbsp;&nbsp;] <br>
                        }
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex>
                <div class="spacing mt20 mb40">
                    <p class="ft25 ft-dk bold">{{ $t('docs.head.continue.title') }} <span class="txt-dk">#meta</span>!</p>
                    <p class="ft13 lTXTgrey mb-0">{{ $t('docs.head.continue.subtitle') }}</p> <br>
                    <v-btn outlined class="border bold" :to="localePath('docs-meta_elements')">{{ $t('docs.head.continue.btn') }}</v-btn>
                </div>
            </v-flex>
        </v-layout>     
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';
import { CodeBox, Tag, El, Comment, String, Mark, Tab } from '@/components/Code/index';
import { Head, Doc } from '@/components/Code/Instances/index';

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox,
        Tag, El, Comment, String, Mark, Tab,
        Head, Doc
    }
})

export default class HeadInstance extends Vue {
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

<style>
    .spacing {
        padding-right: 30%;
    }
    @media (max-width: 1000px) {
        .spacing {
            padding-left: 10%;
            padding-right: 10%;
        }
    }
    .txt-line:hover {
        border-bottom: 2px solid !important;
        border-color: #000 !important;
    }
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
</style>