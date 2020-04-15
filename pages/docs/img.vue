<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.img.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.img.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle>{{ $t('docs.img.use') }}</Subtitle>
                    <CodeBox>
                        <Func name="img"><String>"{{ $t('docs.img.myimg') }}.png"</String></Func>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle>{{ $t('docs.img.params') }}</Subtitle>
                    <CodeBox>
                        <Func name="img"><String>"{{ $t('docs.img.myimg') }}.png"</String></Func>.<Func><Attr>id</Attr>=<String>"{{ $t('docs.img.img') }}"</String> <Attr>class</Attr>=<String>"{{ $t('docs.img.class') }}"</String></Func>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.img.after') }}
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