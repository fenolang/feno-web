<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold" v-html="$t('docs.msf.title')"></p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.msf.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="meaning">{{ $t('docs.msf.what.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.msf.what.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="why">{{ $t('docs.msf.why.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.msf.why.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="how">{{ $t('docs.msf.how.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.msf.how.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <v-img :src="getSubelementImg"></v-img>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="starting">{{ $t('docs.msf.create.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.msf.create.subtitle') }}
                    </p>
                    <CodeBox>
                        <Head>
                        <Tab/><Attr>title:</Attr> <String>"{{ $t('docs.msf.my_web') }}"</String>
                        </Head>
                        <Doc>
                            <Tag>p</Tag>{{ $t('docs.msf.welcome') }}<Tag>/p</Tag>
                        </Doc>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.msf.create.creating_one') }}
                    </p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.msf.create.with_content') }}
                    </p>
                    <CodeBox>
                        [ <br>
                            <Tab/><String>"description, {{ $t('docs.msf.desc') }}"</String> <br>
                        ]
                    </CodeBox>
                    <p class="mt20 ft15 lTXTgrey">
                        {{ $t('docs.msf.create.result') }}
                    </p>
                    <CodeBox>
                        <Head>
                        <Tab/><Attr>title:</Attr> <String>"{{ $t('docs.msf.my_web') }}"</String>, <br>
                        <Tab/><Dmeta>
                            <Tab/><Tab/><String>"description, {{ $t('docs.msf.desc') }}"</String>
                        </Dmeta>
                        </Head>
                        <Doc>
                            <Tag>p</Tag>{{ $t('docs.msf.welcome') }}<Tag>/p</Tag>
                        </Doc>
                    </CodeBox>
                    <v-alert class="mt20" outlined type="warning" border="left">
                         {{ $t('docs.msf.create.alert') }}
                    </v-alert>
                </div>
            </v-flex>
            <v-flex xs12 class="mb40">
                <div class="spacing">
                    <Subtitle id="default">{{ $t('docs.msf.default.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.msf.default.subtitle') }}
                    </p>
                    <v-alert class="mt20" outlined type="warning" border="left">
                        {{ $t('docs.msf.default.alert') }}
                    </v-alert>
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
        anchors.add('#meaning');
        anchors.add('#why');
        anchors.add('#how');
        anchors.add('#starting');
        anchors.add('#default');
    },

    computed: {
        getSubelementImg() {
            if (this.$i18n.locale == 'es') {
                return '/msf_structure_es.png';
            } else if (this.$i18n.locale == 'en') {
                return '/msf_structure_en.png';
            } else {
                return '/msf_structure_en.png'
            }
        }
    }
}
</script>