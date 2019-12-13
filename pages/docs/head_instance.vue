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
                                <p class="ft35 bold" v-html="$t('docs.head.title')"></p>
                                <p class="ft15 lTXTgrey" v-html="$t('docs.head.subtitle')"></p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>{{ $t('docs.head.define.title') }}</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.head.define.subtitle') }}
                                </p>
                                <code-box class="line">
                                    <El>head:</El> { <br>
                                    &nbsp;&nbsp;<Comment>#- {{ $t('docs.head.define.content') }} -#</Comment> <br>
                                    } <br>
                                    <El>doc:</El> { <br>
                                    &nbsp;&nbsp;<Comment>#- {{ $t('docs.head.define.structure') }} -#</Comment> <br>
                                    }
                                </code-box>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <v-alert outlined type="warning">
                                    {{ $t('docs.head.define.alert') }}
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.head.under.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.head.under.subtitle') }}
                                </p>
                                <code-box>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    &nbsp;&nbsp;<Tag>head</Tag> <br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>&lt;!-- {{ $t('docs.head.define.content') }} --&gt;</Comment> <br>
                                    &nbsp;&nbsp;<Tag>/head</Tag> <br>
                                    &nbsp;&nbsp;<Tag>body</Tag> <br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>&lt;!-- {{ $t('docs.head.define.structure') }} --&gt;</Comment> <br>
                                    &nbsp;&nbsp;<Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </code-box>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>{{ $t('docs.head.elements.title') }}</Title>
                                <Subtitle>Title</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.head.elements.title_el.subtitle')"></p>
                                <code-box class="line">
                                    <El>head:</El> { <br>
                                    &nbsp;&nbsp;<El>title:</El> <String>"{{ $t('docs.head.elements.title_el.string') }}"</String> <br>
                                    }
                                </code-box>
                            </div>
                        </v-flex> 
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.head.elements.styles.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.head.elements.styles.subtitle')"></p>
                                <v-btn outlined block class="border-btn mb-4"
                                v-for="(item, index) in $t('docs.head.elements.styles.btns')" :key="index"
                                v-html="item.text" :to="localePath(item.route)+item.id"></v-btn>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Scripts</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.head.elements.scripts.subtitle')"></p>
                                <v-btn outlined block class="border-btn mb-4"
                                v-for="(item, index) in $t('docs.head.elements.scripts.btns')" :key="index"
                                v-html="item.text" :to="localePath(item.route)+item.id"></v-btn>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Meta</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.head.elements.meta.subtitle') }}</p>
                                <code-box>
                                    <El>head:</El> { <br>
                                    &nbsp;&nbsp;<El>title:</El> <String>"{{ $t('docs.head.elements.meta.title') }}"</String> <br>
                                    &nbsp;&nbsp;<El>meta:</El> [ <br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<String>"description, {{ $t('docs.head.elements.meta.description') }}"</String> <br>
                                    &nbsp;&nbsp;] <br>
                                    }
                                </code-box>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div class="spacing mt20 mb40">
                                <p class="ft25 ft-dk bold">{{ $t('docs.head.continue.title') }} <span class="ft-green">#meta</span>!</p>
                                <p class="ft13 lTXTgrey mb-0">{{ $t('docs.head.continue.subtitle') }}</p> <br>
                                <v-btn outlined class="border-btn bold" :to="localePath('docs-meta_elements')">{{ $t('docs.head.continue.btn') }}</v-btn>
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
import { Title, Subtitle } from '@/components/Tools/index';
import { CodeBox, Tag, El, Comment, String } from '@/components/Code/index';

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        'code-box': CodeBox,
        Tag, El, Comment, String
    }
})

export default class HeadInstance extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
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
        border-color: #99CA3E !important;
    }
    .subtitle {
        background: #99CA3E !important;
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