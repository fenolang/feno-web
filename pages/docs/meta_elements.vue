<template>
    <div>
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
                            <Tab/><Tab/> <Mark><String>"charset:utf-8"</String></Mark>
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
                    <Subtitle id="more">{{ $t('docs.meta.props.more.name') }}</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.meta.props.more.sub')"></p>
                    <CodeBox>
                        <Tag>meta <Attr>name</Attr>=<String>"theme-color"</String> <Attr>content</Attr>=<String>"#0a8cbd"</String></Tag>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.meta.props.in_feno') }}
                    </p>
                    <CodeBox>
                        <String>"theme-color, #0a8cbd"</String>
                    </CodeBox>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
const anchorJS = require('anchor-js');
import { page } from '@/mixins/index'

export default {
    layout: 'doc',
    mixins: [page],

    mounted() {
        const anchors = new anchorJS();
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
    },

    computed: {
        getSubelementImg() {
            if (this.$i18n.locale == 'es') {
                return '/meta_subelement_es.png';
            } else if (this.$i18n.locale == 'en') {
                return '/meta_subelement_en.png';
            } else {
                return '/meta_subelement_en.png'
            }
        }
    }
}
</script>

<style>
    .ftt {
        font-family: 'Consolas' !important;
    }
</style>