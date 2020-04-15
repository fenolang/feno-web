<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.func.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.func.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="create">{{ $t('docs.func.create.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.func.create.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/><El>fun</El> {{ $t('docs.func.show') }}: <br>
                                <Tab/> <Tab/> <Func name="msg"><String>"{{ $t('docs.func.hw') }}"</String></Func> <br>
                            <Tab/> } <br> <br>
                            <Tab/> <Func :name="$t('docs.func.show')"></Func>; <br>
                        }</Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.func.create.subtitle2')">
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle id="params">{{ $t('docs.func.params.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.func.params.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <El>fun</El> {{$t('docs.func.show')}}(<El>{{ $t('docs.func.msg2') }}</El>): <br>
                                <Tab/><Tab/> <Func name="msg">{{ $t('docs.func.msg2') }}</Func> <br>
                            <Tab/> } <br> <br>
                            <Tab/> <Func :name="$t('docs.func.show')"><String>"{{ $t('docs.func.hw') }}"</String></Func>; <br>
                        }</Func>
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
        anchors.add('#create');
        anchors.add('#params');
    }
}
</script>