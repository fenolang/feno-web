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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr,
        Doc, Head, Dmeta,
    }
})

export default class Img extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }
}

</script>