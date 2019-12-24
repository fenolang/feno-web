<template>
    <div>
        <v-layout row wrap>
            <v-flex xs3>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12>
                           <Menu /> 
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs9>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <div class="spacing pt20">
                                <p class="ft35 bold" v-html="$t('docs.doc.title')"></p>
                                <p class="ft15 lTXTgrey" v-html="$t('docs.doc.subtitle')"></p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <p class="ft25 mb-2">{{ $t('docs.doc.define.title') }}</p>
                                <hr class="subtitle">
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
                                <p class="ft20 mb-2">{{ $t('docs.doc.why.title') }}</p>
                                <hr class="mark-this">
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
                                <p class="ft20 mb-2">{{ $t('docs.doc.where_head.title') }}</p>
                                <hr class="mark-this">
                                <p class="ft15 lTXTgrey">
                                    <span v-html="$t('docs.doc.where_head.subtitle')"></span>
                                    <router-link class="ft-green bold txt-line" to="/" v-html="$t('docs.head.title')"></router-link>
                                </p>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import Menu from '@/components/Docs/Menu.vue';
import codebox from '@/components/code-box.vue';
import Tag from '@/components/Code/Tag.vue';
import El from '@/components/Code/El.vue';
import Comment from '@/components/Code/Comment.vue';

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        'code-box': codebox,
        Tag, El, Comment
    }
})

export default class DocInstance extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }
}

</script>

<style>
    .spacing {
        padding-right: 30%;
    }
    .mark-this {
        background: #2c2e41 !important;
        width: 60px;
        height: 3px;
        border: none;
        margin-bottom: 30px;
    }
    .txt-line:hover {
        border-bottom: 2px solid !important;
        border-color: #47B984 !important;
    }
    .subtitle {
        background: #47B984 !important;
        width: 100px;
        height: 4px;
        border: none;
        margin-bottom: 30px;
    }
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
</style>