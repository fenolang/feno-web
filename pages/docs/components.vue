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
                        <Doc>
                            <Tag>button</Tag>{{ $t('docs.compos.btn') }}<Tag>/button</Tag>
                        </Doc>
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey">
                        {{ $t('docs.compos.create.go_to') }} <span class="bold">call()</span>
                    </p>
                    <CodeBox>
                        <Head>
                            <Tab/><El>title:</El> <String>"{{ $t('docs.compos.my_page') }}"</String>
                        </Head>
                        <Doc>
                            <Tag>h1</Tag>{{ $t('docs.compos.welcome') }}<Tag>/h1</Tag> <br>
                            <Tab/> <Func name="call"><String>"{{ $t('docs.compos.btn_name') }}"</String></Func>
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, Func, CodeBox } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func,
        Doc, Head, Dmeta,
    }
})

export default class Components extends Vue {
    @MenuModule.Action setButtons: any

    created() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }

    mounted() {
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }
}

</script>