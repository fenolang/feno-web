<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.config.title') }}</p>
                    <p class="ft13 lTXTgrey" v-html="$t('docs.config.subtitle')">
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle>{{ $t('docs.config.layout') }}</Subtitle>
                    <CodeBox>
                        <Key>module.exports</Key> { <br>
                            <Tab/> <Comment>// {{ $t('docs.config.type') }} ["app","web"]</Comment> <br>
                            <Tab/> <El>mode</El>: <String>"web"</String>, <br> <br>
                            <Tab/> <Comment>// {{ $t('docs.config.dist') }}</Comment> <br>
                            <Tab/> <El>outDir</El>: <String>"/dist"</String>, <br> <br>
                            <Tab/> <Comment>// {{ $t('docs.config.styles') }}</Comment> <br>
                            <Tab/> <El>stylesDir</El>: <String>"/styles"</String>, <br> <br>
                            <Tab/> <Comment>// {{ $t('docs.config.scripts') }}</Comment> <br>
                            <Tab/> <El>scriptsDir:</El> <String>"/scripts"</String>, <br> <br>
                            <Tab/> <Comment>// {{ $t('docs.config.nojs') }}</Comment> <br>
                            <Tab/> <El>Noscript</El>: { <br>
                                <Tab/><Tab/> <Comment>// {{ $t('docs.config.content') }}</Comment> <br>
                            <Tab/>} <br>
                        }
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
    }
}
</script>