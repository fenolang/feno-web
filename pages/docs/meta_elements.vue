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
                                <p class="ft35 bold">{{ $t('docs.meta.title') }}</p>
                                <p class="ft15 lTXTgrey">
                                    {{ $t('docs.meta.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title><span v-html="$t('docs.meta.ele.title')"></span></Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.meta.ele.subtitle') }}
                                </p>
                                <CodeBox>
                                    <El>head:</El> { <br>
                                    <Tab/><El>title:</El> <String>{{ $t('docs.meta.mtitle') }}</String> <br>
                                    <Tab/><El>meta:</El> [ <br>
                                    <Tab/><Tab/><Comment>#- {{ $t('docs.meta.ele.mcomment') }} -#</Comment> <br>
                                    <Tab/>] <br>
                                    } <br>
                                    <El>doc:</El> { <br>
                                    <Tab/> <br>
                                    } <br>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="structure">{{ $t('docs.meta.structure.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.meta.structure.subtitle')"></p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <v-img :src="getSubelementImg"></v-img>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing" id="description">
                                <Subtitle>{{ $t('docs.meta.desc.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.meta.desc.subtitle')"></p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <String>"description, {{ $t('docs.meta.desc.val') }}"</String>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- {{ $t('docs.meta.comment') }} -#</Comment>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="author">{{ $t('docs.meta.author.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.meta.author.subtitle')"></p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <String>"author, {{ $t('docs.meta.author.val') }}"</String>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- {{ $t('docs.meta.comment') }} -#</Comment>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.meta.under.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.meta.under.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>head</Tag> <br>
                                    <Tab/><Tab/> <Tag>meta <Attr>name</Attr>=<String>"description"</String> <Attr>content</Attr>=<String>"{{ $t('docs.meta.desc.val') }}"</String></Tag> <br>
                                    <Tab/><Tab/> <Tag>meta <Attr>name</Attr>=<String>"author"</String> <Attr>content</Attr>=<String>"{{ $t('docs.meta.author.val') }}"</String></Tag> <br>
                                    <Tab/> <Tag>/head</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Comment>&lt;!-- {{ $t('docs.meta.comment') }} --&gt;</Comment> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="functions">{{ $t('docs.meta.func.title') }}</Title>
                                <p class="ft13 lTXTgrey">{{ $t('docs.meta.func.subtitle') }}</p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="style"><span v-html="$t('docs.meta.style.title')"></span></Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.meta.style.subtitle')"></p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><El>title:</El> <String>"{{ $t('docs.meta.mtitle') }}"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Func name="style"><String>"{{ $t('docs.meta.style.file') }}"</String></Func>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- {{ $t('docs.meta.comment') }} -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20" v-html="$t('docs.meta.style.benefits')">
                                </p>
                                <v-alert type="error" border="left" outlined v-html="$t('docs.meta.style.alert')"></v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.meta.call_file.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.meta.call_file.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Func name="style"><String>"{{ $t('docs.meta.call_file.route1') }}"</String></Func>
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20" v-html="$t('docs.meta.call_file.outside')"></p>
                                <CodeBox>
                                    <Func name="style"><String>"{{ $t('docs.meta.call_file.route2') }}"</String></Func>
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20">
                                    {{ $t('docs.meta.call_file.rules') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.meta.configure.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.meta.configure.subtitle') }}
                                </p>
                                <v-btn outlined class="border-btn">{{ $t('docs.meta.go') }}</v-btn>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="import"><span v-html="$t('docs.meta.import.title')"></span></Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.meta.import.subtitle')"></p>
                                <CodeBox>
                                    <Head>
                                        <Tab/><El>title:</El> <String>"{{ $t('docs.meta.mtitle') }}"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Func name="import"><String>"{{ $t('docs.meta.import.file') }}"</String></Func>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- {{ $t('docs.meta.comment') }} -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <v-alert class="mt20" type="warning" border="left" outlined v-html="$t('docs.meta.import.alert')"></v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Title>{{ $t('docs.meta.props.title') }}</Title>
                                <Subtitle id="charset">{{ $t('docs.meta.props.charset.name') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.meta.props.charset.sub') }}
                                </p>
                                <CodeBox :mark="true">
                                    <Head>
                                        <Tab/><El>title:</El> <String>"{{ $t('docs.meta.mtitle') }}"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Mark><String>"charset, utf-8"</String></Mark>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- {{ $t('docs.meta.comment') }} -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <Subtitle id="viewport">{{ $t('docs.meta.props.view.name') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.meta.props.view.sub') }}
                                </p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>head</Tag> <br>
                                    <Tab/><Tab/> <Mark><Tag>meta <Attr>name</Attr>=<String>"viewport"</String> <Attr>content</Attr>=<String>"width=device-width, initial-scale=1"</String></Tag></Mark> <br>
                                    <Tab/> <Tag>/head</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Comment>&lt;!-- {{ $t('docs.meta.comment') }} --&gt;</Comment> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                                <p class="ft15 lTXTgrey mt30">
                                    {{ $t('docs.meta.props.view.sub2') }}
                                </p>
                                <CodeBox :mark="true" class="mt30">
                                    <Head>
                                        <Tab/><El>title:</El> <String>"{{ $t('docs.meta.mtitle') }}"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Tab/><Tab/> <Mark><String>"viewport"</String></Mark>
                                        </Dmeta>
                                    </Head>
                                    <Doc>
                                        <Comment>#- {{ $t('docs.meta.comment') }} -#</Comment>
                                    </Doc>
                                </CodeBox>
                                <Subtitle id="base">{{ $t('docs.meta.props.base.name') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.meta.props.base.sub')">
                                </p>
                                <Subtitle id="noscript">{{ $t('docs.meta.props.noscript.name') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.meta.props.noscript.sub') }}
                                </p>
                                <CodeBox :mark="true" class="mt30">
                                    <Head>
                                        <Tab/><El>title:</El> <String>"{{ $t('docs.meta.mtitle') }}"</String>, <br>
                                        <Tab/><Dmeta>
                                        <Mark>
                                            <Tab/><Tab/> <El>noscript:</El> { <br>
                                            <Tab/><Tab/><Tab/> <Tag>p</Tag>{{ $t('docs.meta.props.noscript.dont_js') }}<Tag>/p</Tag> <br>
                                            <Tab/><Tab/> } <br>
                                        </Mark>
                                        </Dmeta>
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
                                <v-btn depressed class="bg3 dk">{{ $t('docs.meta.go') }}</v-btn>
                                <Subtitle id="more">{{ $t('docs.meta.props.more.name') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.meta.props.more.sub')"></p>
                                <CodeBox>
                                    <Tag>meta <Attr>name</Attr>=<String>"theme-color"</String> <Attr>content</Attr>=<String>"#0a8cbd"</String></Tag>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    {{ $t('docs.meta.props.in_daft') }}
                                </p>
                                <CodeBox>
                                    <String>"theme-color, #0a8cbd"</String>
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
import { Tag, El, String, CodeBox, Tab, Comment, Attr, Func, Mark } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';
import { Title, Subtitle, Alert } from '@/components/Tools/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Doc, Head, Dmeta,
        Tag, El, String, CodeBox, Tab, Comment, Attr, Func, Mark,
        Title, Subtitle, Alert
    }
})

export default class MetaElements extends Vue {
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
        anchors.add('#structure');
        anchors.add('#structure');
        anchors.add('#description');
        anchors.add('#author');
        anchors.add('#functions');
        anchors.add('#style');
        anchors.add('#import');
    }

    get getSubelementImg() {
        if (this.$i18n.locale == 'es') {
            return '/meta_subelement_es.png';
        } else if (this.$i18n.locale == 'en') {
            return '/meta_subelement_en.png';
        } else {
            return '/meta_subelement_en.png'
        }
    }
}
</script>

<style>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>