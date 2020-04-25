<template>
    <div>
        <v-layout row wrap>
            <v-flex xs1 v-if="$vuetify.breakpoint.mdAndUp">
            </v-flex>
            <v-flex xs11>
                <div class="spacing pt60">
                    <p class="ft-medium" :class="mdAndUp ? 'ft70' : 'ft50'">{{ $t('support.title') }}</p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('support.subtitle') }}
                    </p>
                    <v-btn color="blue darken-3" outlined class="mt-3" target="_blank" href="https://www.paypal.me/yahirgnz">{{ $t('docs.node.paypal') }}</v-btn>
                    <v-btn color="amber darken-4" depressed class="mt-3 dk bold" target="_blank" href="https://www.patreon.com/yahirgnz">{{ $t('docs.node.patreon') }}</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
const anchorJS = require('anchor-js');
import { Title, Subtitle } from '@/components/Tools/index';
import screens from '@/components/screens'

export default {
    components: {
        Title, Subtitle
    },
    mixins: [screens]
}

</script>