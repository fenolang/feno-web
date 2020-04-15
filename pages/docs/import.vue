<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.import.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.import.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>{{ $t('docs.import.how.title') }}</Title>
                    <CodeBox>
                        <Key>import</Key> * <El>as</El> {{ $t('docs.import.file') }} <Key>from</Key> <String>"./script.feno"</String> <br> <br>
                        {{ $t('docs.import.file') }}.<Func name="run"></Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.import.how.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle>{{ $t('docs.import.func.title') }}</Subtitle>
                    <CodeBox>
                        <Key>import</Key> { <El>run</El> } <Key>from</Key> <String>"./script.feno"</String> <br> <br>
                        <Func name="run"></Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.import.func.subtitle') }}
                    </p>
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