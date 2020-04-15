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
                        <Func :name="'@'+$t('docs.props.compo')"><Attr>my_prop</Attr>=<String>"{{ $t('docs.props.hw') }}"</String></Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.props.newone.subtitle2') }}
                    </p>
                    <CodeBox>
                        <Attr>declare</Attr> <Func name="Component"><String>"{{ $t('docs.props.compo') }}"</String>, { <br>
                            <Tab/> <Tag>h1</Tag>{{ props.<El>my_prop</El> }}<Tag>/h1</Tag> <br>
                            <Tab/><Tag>p</Tag>{{ $t('docs.props.welcome') }}<Tag>p</Tag> <br>
                        }</Func>
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
                            <Func :name="'@'+$t('docs.props.compo')"><Attr>prop1</Attr>=<String>"{{ $t('docs.props.hello') }}"</String> <Attr>prop2</Attr>=<String>"{{ $t('docs.props.bye') }}"</String></Func>
                        </Doc>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.props.two.com') }}
                    </p>
                    <CodeBox class="line">
                        <Attr>declare</Attr> <Func name="Component"><String>"my_component"</String>, { <br>
                            <Tab/> <Tag>h1</Tag>{{ props.<El>prop1</El> }}<Tag>/h1</Tag> <br>
                            <Tab/> <Tag>h3</Tag>{{ props.<El>prop2</El> }}<Tag>/h3</Tag> <br>
                        }</Func>
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
    }
}
</script>

<style>
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
</style>