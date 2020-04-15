<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.types.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.types.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="string">String</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.types.string.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <El>def</El> <Attr>String</Attr> {{ $t('docs.types.string.var') }} = <String>"{{ $t('docs.types.hw') }}"</String>; <br>
                        }</Func>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="number">Number</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.types.number.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <El>def</El> <Attr>Number</Attr> {{ $t('docs.types.number.var') }} = <Attr>17</Attr>; <br>
                        }</Func>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12> 
                <div class="spacing">
                    <Title id="bool">Boolean</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.types.bool.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <El>def</El> <Attr>Boolean</Attr> {{ $t('docs.types.bool.var') }} = <Attr>true</Attr>; <br>
                        }</Func>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex>
                <div class="spacing">
                    <Title id="array">Array</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.types.array.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <El>def</El> <Attr>Array</Attr> {{ $t('docs.types.array.var') }} = [<String>""</String>]; <br>
                        }</Func>
                    </CodeBox>
                    <v-alert class="mt20" type="warning" border="left" outlined>
                        {{ $t('docs.types.array.alert') }}
                    </v-alert>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="obj">Object</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.types.object.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <El>def</El> <Attr>Object</Attr> {{ $t('docs.types.object.var') }} = {}; <br>
                        }</Func>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Title id="any">Any</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.types.any.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno">{ <br>
                            <Tab/> <El>def</El> <Attr>Any</Attr> {{ $t('docs.types.any.var') }} = <Attr>true</Attr>; <br>
                            <Tab/> {{ $t('docs.types.any.var') }} = <String>"{{ $t('docs.types.any.string') }}"</String>; <Comment>// {{ $t('docs.types.any.comment') }}</Comment> <br>
                            <Tab/> {{ $t('docs.types.any.var') }} = <Attr>5</Attr>; <Comment>// {{ $t('docs.types.any.comment') }}</Comment> <br>
                        }</Func>
                    </CodeBox>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');

export default {
    layout: 'doc',
    components: {
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func, Comment,
        Doc, Head, Dmeta,
    },

    mounted() {
        const anchors = new anchorJS();
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
        anchors.add('#string');
        anchors.add('#number');
        anchors.add('#bool');
        anchors.add('#array');
        anchors.add('#obj');
        anchors.add('#any');
    }
}

</script>