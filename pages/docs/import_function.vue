<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <p class="ft35 bold">{{ $t('docs.import_scripts.title') }}</p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.import_scripts.subtitle') }}
                    </p>
                </div>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex md6>
                            <CodeBox>
                                <Head>
                                    <Tab/> <Func name="import"><String>"index"</String></Func>
                                </Head>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Tag>head</Tag> <br>
                                    <Tab/> <Tag>script <Attr>src</Attr>=<String>"/scripts/index.js"</String></Tag><Tag>/script</Tag><br>
                                <Tag>/head</Tag>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Head>
                                    <Tab/> <Func name="import"><String>"/folder/index"</String></Func>
                                </Head>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Tag>head</Tag> <br>
                                    <Tab/> <Tag>script <Attr>src</Attr>=<String>"/scripts/folder/index.js"</String></Tag><Tag>/script</Tag><br>
                                <Tag>/head</Tag>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Head>
                                    <Tab/> <Func name="import"><String>"./folder/index"</String></Func>
                                </Head>
                            </CodeBox>
                        </v-flex>
                        <v-flex md6>
                            <CodeBox>
                                <Tag>head</Tag> <br>
                                    <Tab/> <Tag>script <Attr>src</Attr>=<String>"/folder/index.js"</String></Tag><Tag>/script</Tag><br>
                                <Tag>/head</Tag>
                            </CodeBox>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs12>
                <div :class="smAndDown ? 'spacing' : ''">
                    <Subtitle>{{ $t('docs.import_scripts.config.title') }}</Subtitle>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.import_scripts.config.subtitle') }}
                    </p>
                    <v-container grid-list-xs>
                        <v-layout row wrap>
                            <v-flex md6>
                                <CodeBox>
                                    { <br>
                                        <Tab/> <El>scriptsDir</El>: <String>"/myfolder"</String> <br>
                                    }
                                </CodeBox>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.import_scripts.result') }}
                    </p>
                    <v-container grid-list-lg>
                        <v-layout row wrap>
                            <v-flex md6>
                                <CodeBox>
                                    <Head>
                                        <Tab/> <Func name="styles"><String>"index"</String></Func>
                                    </Head>
                                </CodeBox>
                            </v-flex>
                            <v-flex md6>
                                <CodeBox>
                                    <Tag>head</Tag> <br>
                                        <Tab/> <Tag>script <Attr>src</Attr>=<String>"/myfolder/index.js"</String></Tag><Tag>/script</Tag><br>
                                    <Tag>/head</Tag>
                                </CodeBox>
                            </v-flex>
                        </v-layout>
                    </v-container>
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
    }
}
</script>