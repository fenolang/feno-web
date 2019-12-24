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
                                <Subtitle id="name">Name</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.name.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p <Mark><Attr>Name</Attr>=<String>"{{ $t('docs.attr.mytext') }}"</String></Mark></Tag>{{ $t('docs.attr.hello') }}<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="id">Id</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.id.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p <Mark><Attr>Id</Attr>=<String>"{{ $t('docs.attr.mytext') }}"</String></Mark></Tag>{{ $t('docs.attr.hello') }}<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="class">Class</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.class.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p <Mark><Attr>Class</Attr>=<String>"{{ $t('docs.attr.class.class') }}"</String></Mark></Tag>{{ $t('docs.attr.hello') }}<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="type">Type</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.type.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Mark><Attr>Type</Attr>=<String>"password"</String></Mark></Tag>
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
                                <Subtitle id="src">Src</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.src.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"image"</String> <Mark><Attr>Src</Attr>=<String>"/images/{{ $t('docs.attr.src.img') }}.png"</String></Mark></Tag>
                                    </Doc>
                                </CodeBox>
                                <v-alert class="mt20" type="warning" border="left" outlined>
                                    {{ $t('docs.attr.src.alert') }}
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="size">Size</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.size.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>hr <Mark><Attr>Size</Attr>=<String>"50"</String></Mark></Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="width">Width</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.width.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"image"</String> <Mark><Attr>Width</Attr>=<String>"48"</String></Mark></Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="height">Height</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.height.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"image"</String> <Mark><Attr>Height</Attr>=<String>"48"</String></Mark></Tag>
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
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="val">Val</Subtitle>
                                <p class="ft13 lTXTgrey">{{ $t('docs.attr.val.subtitle') }}</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"text"</String> <Attr>Name</Attr>=<String>"{{ $t('docs.attr.val.name') }}"</String> <Attr>Val</Attr>=<String>"Giorgio Moroder"</String></Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle id="more">{{ $t('docs.attr.more.title') }}</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    {{ $t('docs.attr.more.subtitle') }}
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>textarea <Attr>Cols</Attr>=<String>"50"</String></Tag><Tag>/textarea</Tag>
                                    </Doc>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.attr.more.subtitle2')">
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>table <Attr>cellPadding</Attr>=<String>"10"</String></Tag><Tag>/table</Tag>
                                    </Doc>
                                </CodeBox>
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
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
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
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