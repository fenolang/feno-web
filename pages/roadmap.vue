<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <Title>{{ $t('roadmap.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('roadmap.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-layout row wrap justify-center>
                    <v-flex xs10 md8>
                        <v-timeline :dense="true" >
                            <v-timeline-item :small="true" :color="item.color" :icon="item.icon" v-for="(item, index) in $t('roadmap.versions')" :key="index" :fill-dot="true">
                                <v-card outlined>
                                    <v-card-title>
                                        <span class="ft16 ft0 ft-medium" v-html="item.name"></span>
                                    </v-card-title>
                                    <v-card-text>
                                        <p v-html="item.text"></p>
                                        <p v-if="item.objectives" class="bold ft0">{{ $t('roadmap.objectives') }}</p>
                                        <ul v-if="item.objectives">
                                            <li v-for="(objective, index) in item.objectives" :key="index">
                                                {{ objective }}
                                            </li>
                                        </ul>
                                        <p v-if="item.news" class="bold ft0">{{ $t('roadmap.high') }}</p>
                                        <ul v-if="item.news">
                                            <li v-for="(news, index) in item.news" :key="index">
                                                {{ news }}
                                            </li>
                                        </ul>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
const anchorJS = require('anchor-js');
import { Title, Subtitle } from '@/components/Tools/index';

export default {
    layout: 'doc',
    components: {
        Title, Subtitle
    }
}
</script>