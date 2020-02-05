<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.attr.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.attr.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>{{ $t('docs.attr.subtitle2') }}</Title>
                    <Subtitle id="click">Click</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.attr.click.subtitle') }}</p>
                    <CodeBox>
                        <Doc>
                            <Tag>button <Mark><Attr>Click</Attr>=<String>"{{ $t('docs.attr.click.func') }}()"</String></Mark></Tag>{{ $t('docs.attr.click.btn') }}<Tag>/button</Tag>
                        </Doc>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="keyup">keyUp</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.attr.keyup.subtitle') }} </p>
                    <CodeBox>
                        <Doc>
                            <Tag>input <Attr>Type</Attr>=<String>"text"</String> <Mark><Attr>keyUp</Attr>=<String>"{{ $t('docs.attr.func') }}()"</String></Mark></Tag>
                        </Doc>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex>
                <div class="spacing">
                    <Subtitle id="keydown">keyDown</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.attr.keydown.subtitle') }}</p>
                    <CodeBox>
                        <Doc>
                            <Tag>input <Attr>Type</Attr>=<String>"text"</String> <Mark><Attr>keyDown</Attr>=<String>"{{ $t('docs.attr.func') }}()"</String></Mark></Tag>
                        </Doc>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="to">To</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.attr.to.subtitle') }}</p>
                    <CodeBox>
                        <Doc>
                            <Tag>a <Mark><Attr>To</Attr>=<String>"https://www.w3schools.com"</String></Mark></Tag>{{ $t('docs.attr.hello') }}<Tag>/a</Tag>
                        </Doc>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Subtitle id="newtab">newTab</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.attr.newtab.subtitle') }}</p>
                    <CodeBox>
                        <Doc>
                            <Tag>a <Attr>To</Attr>=<String>"https://www.w3schools.com"</String><Mark><Attr>newTab</Attr></Mark></Tag>{{ $t('docs.attr.hello') }}<Tag>/a</Tag>
                        </Doc>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Subtitle id="val">Val</Subtitle>
                    <p class="ft13 lTXTgrey">{{ $t('docs.attr.val.subtitle') }}</p>
                    <CodeBox>
                        <Doc>
                            <Tag>input <Attr>Type</Attr>=<String>"text"</String> <Attr>Name</Attr>=<String>"{{ $t('docs.attr.val.name') }}"</String> <Mark><Attr>Val</Attr>=<String>"Giorgio Moroder"</String></Mark></Tag>
                        </Doc>
                    </CodeBox>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Attr,
        Doc, Head, Dmeta,
    }
})

export default class Attributes extends Vue {
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
        anchors.add("#click");
        anchors.add('#keyup');
        anchors.add('#keydown');
        anchors.add('#name');
        anchors.add('#id');
        anchors.add('#class');
        anchors.add('#type');
        anchors.add('#to');
        anchors.add('#src');
        anchors.add('#size');
        anchors.add('#width');
        anchors.add('#height');
        anchors.add('#newtab');
        anchors.add('#val');
    }
}

</script>