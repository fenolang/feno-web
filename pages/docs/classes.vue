<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.class.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.class.subtitle') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="create">{{ $t('docs.class.create.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.class.create.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                            <Tab/> <El>class</El> <Attr>{{ $t('docs.class.user') }}</Attr> { <br>
                                <Tab/><Tab/> <El>def</El> <Attr>String</Attr> {{ $t('docs.class.greeting') }}; <br> <br>
                                <Tab/><Tab/> <Func name="constructor"><Attr>String</Attr> {{ $t('docs.class.msg') }}</Func> { <br>
                                    <Tab/><Tab/><Tab/> <El>this</El>.{{ $t('docs.class.greeting') }} = {{ $t('docs.class.msg') }}; <br>
                                <Tab/><Tab/>} <br>
                                <Tab/><Tab/> <Func :name="$t('docs.class.greet')"></Func> { <br>
                                    <Tab/><Tab/><Tab/> <Func name="print">{{ $t('docs.class.greeting') }}</Func> <br>
                                <Tab/><Tab/>} <br>
                            <Tab/>} <br> <br>
                            <Tab/> <El>def</El> {{ $t('docs.class.example') }} = <El>new</El> <Attr>{{ $t('docs.class.user') }}</Attr>(<String>"{{ $t('docs.class.hello') }}"</String>); <br>
                            <Tab/> {{ $t('docs.class.example') }}.<Func :name="$t('docs.class.greet')"></Func>; <Comment>// {{ $t('docs.class.result') }} "{{ $t('docs.class.hw') }}"</Comment> <br>
                        }
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.class.create.subtitle2')">
                    </p>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title id="super">{{ $t('docs.class.super.title') }}</Title>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.class.super.subtitle') }}
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Feno"></Func> { <br>
                            <Tab/> <El>class</El> <Attr>{{ $t('docs.class.person') }}</Attr> { <br>
                                <Tab/><Tab/> <El>def</El> <Attr>String</Attr> {{ $t('docs.class.name') }}; <br> <br>
                                <Tab/><Tab/> <Func name="constructor"><Attr>String</Attr> param</Func> { <br>
                                    <Tab/><Tab/><Tab/> <El>this</El>.{{ $t('docs.class.name') }} = param; <br>
                                <Tab/><Tab/> } <br>
                            <Tab/> } <br> <br>
                            <Tab/> <El>class</El> <Attr>{{ $t('docs.class.programmer') }}</Attr> <El>extends</El> <Attr>{{ $t('docs.class.person') }}</Attr> { <br>
                                <Tab/><Tab/> <Func :name="$t('docs.class.coffee_func')"></Func> { <br>
                                    <Tab/><Tab/><Tab/> <Func name="print"><El>this</El>.{{ $t('docs.class.name') }}, <String>"{{ $t('docs.class.coffee') }}"</String></Func> <br>
                                <Tab/><Tab/>} <br>
                            <Tab/>} <br> <br>
                            <Tab/> <El>def</El> {{ $t('docs.class.me') }} = <El>new</El> <Attr>{{ $t('docs.class.programmer') }}</Attr>(<String>"YahirGNz"</String>); <br>
                            <Tab/> {{ $t('docs.class.me') }}.<Func :name="$t('docs.class.coffee_func')"></Func>; <Comment>// {{ $t('docs.class.result') }} "YahirGNz {{ $t('docs.class.coffee') }}"</Comment> <br>
                        }
                    </CodeBox>
                    <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.class.super.subtitle2')">
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <p class="mt20 ft15 lTXTgrey">
                        {{ $t('docs.class.super.result') }}
                    </p>
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
        anchors.add('#create');
        anchors.add('#super');
    }
}
</script>