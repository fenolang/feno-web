<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold" v-html="$t('docs.feno_class.title')"></p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.feno_class.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="starting">{{ $t('docs.feno_class.start.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.feno_class.start.subtitle') }}
                    </p>
                    <CodeBox>
                        <Doc>
                            <Comment>#- {{ $t('docs.feno_class.comment') }} -#</Comment>
                        </Doc> <br>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <br>
                        }</Func>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="hello-world">{{ $t('docs.feno_class.hw.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.feno_class.hw.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/><El>print</El>(<String>"{{ $t('docs.feno_class.hw.val') }}"</String>) <br>
                        }</Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.feno_class.hw.result')"></p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="better-hw">{{ $t('docs.feno_class.better_hw.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.feno_class.better_hw.subtitle')">
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/><El>msg</El>(<String>"{{ $t('docs.feno_class.better_hw.val') }}"</String>) <br>
                        }</Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.feno_class.better_hw.result')"></p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle id="print-and-msg">{{ $t('docs.feno_class.funcs.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.feno_class.funcs.subtitle')"></p>
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
        anchors.add('#starting');
        anchors.add('#hello-world');
        anchors.add('#better-hw');
        anchors.add('#print-and-msg');
    }
}
</script>