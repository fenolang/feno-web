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
                                <p class="ft35 bold" v-html="$t('docs.styles.title')"></p>
                                <p class="ft15 lTXTgrey">
                                    {{ $t('docs.styles.subtitle') }}
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>{{ $t('docs.styles.defining.title') }}</Title>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.styles.defining.subtitle') }}
                                </p>
                                <CodeBox>
                                    <El>head:</El> { <br>
                                    <Tab/><El>styles:</El> { <br>
                                    <Tab/><Tab/><Attr>.{{ $t('docs.styles.defining.class') }}</Attr> { <br>
                                    <Tab/><Tab/><Tab/>color: <Attr>#0a8cbd</Attr>; <br>
                                    <Tab/><Tab/>} <br>
                                    <Tab/>} <br>
                                    } <br>
                                    <El>doc:</El> { <br>
                                    &nbsp;&nbsp;<Comment>#- {{ $t('docs.styles.defining.here_mark') }} -#</Comment> <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <v-alert outlined type="warning" border="left" class="ft13">
                                    {{ $t('docs.styles.defining.alert') }}
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.styles.under.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.styles.under.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab /> <Tag>head</Tag><br>
                                    <Tab/><Tab/> <Tag>style</Tag> <br>
                                    <Tab/><Tab/><Tab/> <Attr>.{{ $t('docs.styles.defining.class') }}</Attr> { <br>
                                    <Tab/><Tab/><Tab/><Tab/> color: <Attr>#0a8cbd</Attr>; <br>
                                    <Tab/><Tab/><Tab/> } <br>
                                    <Tab/><Tab/> <Tag>/style</Tag> <br>
                                    <Tab/> <Tag>/head</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Comment>&lt;!-- {{ $t('docs.styles.defining.here_mark') }} --&gt;</Comment> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mt20 mb50">
                            <div class="spacing">
                                <Subtitle>{{ $t('docs.styles.clean_title') }}</Subtitle>
                                <p class="ft13 lTXTgrey" v-html="$t('docs.styles.clean_subtitle')">
                                </p>
                                <br>
                                <v-btn depressed class="bg3 dk bold"
                                :to="localePath('docs-meta_elements')">{{ $t('docs.styles.continue') }}</v-btn>
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
import { Tag, Tab, El, String, Attr, Comment, CodeBox } from '@/components/Code/index';
import { Title, Subtitle } from '@/components/Tools/index';

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Tag, El, String, CodeBox, Attr, Comment, Tab,
        Title, Subtitle
    }
})

export default class MetaElements extends Vue {
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