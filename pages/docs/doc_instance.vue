<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold" v-html="$t('docs.doc.title')"></p>
                    <p class="ft15 lTXTgrey" v-html="$t('docs.doc.subtitle')"></p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>{{ $t('docs.doc.define.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.doc.define.subtitle') }}
                    </p>
                    <code-box class="line">
                        <El>doc:</El> {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<Comment>#- {{ $t('docs.doc.define.our_content') }} -#</Comment><br>
                        }
                    </code-box>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <v-alert outlined type="warning" border="left" class="ft13">
                        {{ $t('docs.doc.define.alert') }}
                    </v-alert>
                </div>
            </v-flex>
            <v-flex xs12 class="mb-2">
                <div class="spacing">
                    <Subtitle>{{ $t('docs.doc.why.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.doc.why.subtitle') }}
                    </p>
                    <code-box>
                        <Tag>!doctype html</Tag> <br>
                        <Tag>html</Tag> <br>
                        &nbsp;&nbsp;<Tag>body</Tag> <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>&lt;!-- {{ $t('docs.doc.define.our_content') }} --&gt;</Comment> <br>
                        &nbsp;&nbsp;<Tag>/body</Tag> <br>
                        <Tag>/html</Tag>
                    </code-box>
                </div>
            </v-flex>
            <v-flex xs12 class="mb-4">
                <div class="spacing">
                    <Subtitle>{{ $t('docs.doc.where_head.title') }}</Subtitle>
                    <p class="ft15 lTXTgrey">
                        <span v-html="$t('docs.doc.where_head.subtitle')"></span>
                        <router-link class="txt-dk bold txt-line" to="/" v-html="$t('docs.head.title')"></router-link>
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
import codebox from '@/components/code-box.vue';
import Tag from '@/components/Code/Tag.vue';
import El from '@/components/Code/El.vue';
import Comment from '@/components/Code/Comment.vue';

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        'code-box': codebox,
        Tag, El, Comment,
        Title, Subtitle
    }
})

export default class DocInstance extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }
}

</script>

<style>
    .spacing {
        padding-right: 30%;
    }
    .txt-line:hover {
        border-bottom: 2px solid !important;
        border-color: #000 !important;
    }
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
    @media (max-width: 1000px) {
        .spacing {
            padding-left: 10%;
            padding-right: 10%;
        }
    }
</style>