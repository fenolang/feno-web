<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">Props</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.props.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>{{ $t('docs.props.newone.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.props.newone.subtitle') }}
                    </p>
                    <CodeBox>
                        <Func name="call"><String>"{{ $t('docs.props.compo') }}"</String>, { <El>prop</El>:<String>"{{ $t('docs.props.hw') }}"</String> }</Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.props.newone.subtitle2') }}
                    </p>
                    <CodeBox>
                        <Doc>
                            <Tag>h1</Tag><Attr>$</Attr>{ <Attr>prop</Attr> }<Tag>/h1</Tag> <br>
                            <Tab/><Tag>p</Tag>{{ $t('docs.props.welcome') }}<Tag>p</Tag>
                        </Doc>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.props.newone.result')">
                    </p>
                    <Viewer>
                        <h1>{{ $t('docs.props.hw') }}</h1>
                        <p>{{ $t('docs.props.welcome') }}</p>
                    </Viewer>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle>{{ $t('docs.props.two.title') }}</Subtitle>
                    <p class="lTXTgrey">{{ $t('docs.props.two.subtitle') }}</p>
                    <p class="ft13 lTXTgrey">{{ $t('docs.props.two.doc') }}</p>
                    <CodeBox class="line">
                        <Doc>
                            <Func name="call"><String>"{{ $t('docs.props.compo') }}"</String>, { <El>prop1</El>:<String>"{{ $t('docs.props.hello') }}"</String>, <El>prop2</El>:<String>"{{ $t('docs.props.bye') }}"</String> }</Func>
                        </Doc>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.props.two.com') }}
                    </p>
                    <CodeBox class="line">
                        <Doc>
                            <Tag>h1</Tag><Attr>$</Attr>{ <Attr>prop1</Attr> }<Tag>/h1</Tag> <br>
                            <Tab/> <Tag>h3</Tag><Attr>$</Attr>{ <Attr>prop2</Attr> }<Tag>/h3</Tag>
                        </Doc>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.props.two.res') }}
                    </p>
                    <Viewer>
                        <h1>{{ $t('docs.props.hello') }}</h1>
                        <h3>{{ $t('docs.props.bye') }}</h3>
                    </Viewer>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func, Viewer } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr, Viewer,
        Doc, Head, Dmeta,
    }
})

export default class Props extends Vue {
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

<style>
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
</style>