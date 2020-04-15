<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.compos.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.compos.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>{{ $t('docs.compos.create.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.compos.create.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>declare</Attr> <Func name="Component"><String>"{{ $t('docs.compos.btn_name') }}"</String>, { <br>
                            <Tab/> <Tag>button</Tag>{{ $t('docs.compos.btn') }}<Tag>/button</Tag> <br>
                        }</Func>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.compos.create.go_to') }}
                    </p>
                    <CodeBox>
                        <Head>
                            <Tab/><El>title:</El> <String>"{{ $t('docs.compos.my_page') }}"</String>
                        </Head>
                        <Doc>
                            <Tag>h1</Tag>{{ $t('docs.compos.welcome') }}<Tag>/h1</Tag> <br>
                            <Tab/> <Func :name="'@'+$t('docs.compos.btn_name')"></Func>
                        </Doc>
                    </CodeBox>
                    <v-alert class="mt20" type="warning" border="left" outlined>
                        {{ $t('docs.compos.create.alert') }}
                    </v-alert>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.compos.create.res') }}
                    </p>
                    <CodeBox>
                        <Head>
                            <Tab/><El>title:</El> <String>"{{ $t('docs.compos.my_page') }}"</String>
                        </Head>
                        <Doc>
                            <Tag>h1</Tag>{{ $t('docs.compos.welcome') }}<Tag>/h1</Tag> <br>
                            <Tab/> <Tag>button</Tag>{{ $t('docs.compos.btn') }}<Tag>/button</Tag>
                        </Doc>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12 class="mb40">
                <div class="spacing">
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.compos.create.continue') }}
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