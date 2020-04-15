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