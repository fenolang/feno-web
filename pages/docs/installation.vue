<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="pt20 spacing">
                    <p class="ft35 bold">{{ $t('docs.menu.installation') }}</p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.install.sub') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 id="cli">
                <div class="spacing">
                    <p class="ft25 ft">{{ $t('docs.install.cli.title') }}</p>
                    <p class="ft13 lTXTgrey">{{ $t('docs.install.cli.sub') }} <span class="ft-red">NPM</span>
                        ({{ $t('docs.install.cli.sub_2') }} <a href="https://nodejs.org/en/download/" target="_blank">NodeJS</a>)
                    </p>
                    <CodeBox>
                        $ npm i -g <span class="ft">feno-cli</span>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <p class="ft13 lTXTgrey">
                    {{ $t('docs.install.cli.create_project') }}
                    </p>
                    <CodeBox>
                        $ feno <span class="ft">create-new</span>
                        <Attr>{{ $t('docs.install.cli.project_name') }}</Attr>
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.cli.starts_cli') }}
                    </p>
                    <p class="ft13 lTXTgrey">
                       {{ $t('docs.install.cli.question_process') }}
                    </p>
                    <ul class="ft14 ft-dk">
                        <li class="bold" v-for="(item, index) in $t('docs.install.cli.questions')" :key="index">
                            {{ item }}
                        </li>
                        <ul>
                            <li v-for="(item, index) in $t('docs.install.cli.app_type')" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                        <li class="bold">{{ $t('docs.install.cli.design_framework') }}</li>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                            <li>Bulma</li>
                            <li>Tailwind</li>
                        </ul>
                    </ul>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.cli.after_questions') }}
                    </p>
                    <CodeBox>
                        $ <El>cd</El> {{ $t('docs.install.cli.project_name') }} <br>
                        $ npm i
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.cli.install_dependencies') }}
                    </p>
                    <CodeBox>
                        $ npm run dev
                    </CodeBox>
                    <p class="pt15 ft15 lTXTgrey">
                        {{ $t('docs.install.cli.final') }}
                        <a href="http://localhost:8080" class="ft" target="_blank">http://localhost:8080</a>!
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 id="scratch">
                <div class="spacing">
                    <p class="ft25 ft">{{ $t('docs.install.scratch.title') }}</p>
                    <p class="ft13 lTXTgrey">
                        {{ $t('docs.install.scratch.sub') }}
                    </p>
                    <CodeBox>
                        $ mkdir <Attr>{{ $t('docs.install.scratch.project_name') }}</Attr> <br>
                        $ <El>cd</El> {{ $t('docs.install.scratch.project_name') }}
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_package_json')"></p>
                    <CodeBox>
                        {<br>
                            <Tab/> <El>"name"</El>:
                            <String>"{{ $t('docs.install.scratch.package_json.name') }}"</String>, <br>
                            <Tab/> <El>"version"</El>: <String>"1.0.0"</String>, <br>
                            <Tab/> <El>"description"</El>:
                            <String>"{{ $t('docs.install.scratch.package_json.description') }}"</String>,<br>
                            <Tab/> <El>"author"</El>:
                            <String>{{ $t('docs.install.scratch.package_json.author') }}</String>, <br>
                            <Tab/> <El>"main"</El>: <String>"index.js"</String>, <br>
                            <Tab/> <El>"scripts"</El>: { <br>
                                <Tab/><Tab/> <El>"dev"</El>: <String>"nodemon --watch src"</String> <br>
                            <Tab/>} <br>
                        }
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.scratch.install_graph_nodemon') }}
                    </p>
                    <CodeBox>
                        $ npm i <span class="ft line">feno nodemon</span> -D
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_nodemon_json')">
                    </p>
                    <CodeBox>
                        { <br>
                            <Tab/> <El>"ext"</El>: <String>"feno"</String> <br>
                        }
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.scratch.create_folders') }}
                    </p>
                    <CodeBox>
                        $ mkdir src <br>
                        $ <El>cd</El> src <br>
                        $ mkdir pages components meta scripts styles images
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.scratch.back_to_main_folder') }}
                    </p>
                    <CodeBox>
                        $ <El>cd</El> ..
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_index_js')">
                    </p>
                    <CodeBox>
                        <Key>import</Key> { <El>run</El> } <Key>from</Key> <String>"feno"</String> <br>
                        <Func name="run"></Func>
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_index_feno')"></p>
                    <CodeBox>
                        <Doc>
                            <Tag>h1</Tag>{{ $t('docs.install.scratch.hello_world') }}<Tag>/h1</Tag>
                        </Doc>
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.scratch.run_project') }}
                    </p>
                    <CodeBox>
                        $ npm run dev
                    </CodeBox>
                    <p class="pt15 ft15 lTXTgrey">
                        {{ $t('docs.install.scratch.running_project') }}
                        <a href="http://localhost:8080" class="ft" target="_blank">http://localhost:8080</a>
                    </p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.install.scratch.continue_docs') }}
                        <router-link to="/docs/directory-structure" class="ft">
                            {{ $t('docs.menu.directory_structure') }}
                        </router-link>
                    </p>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { CodeBox, El, String, Attr, Func, Key, Tab, Tag } from '@/components/Code/index';
import { Doc } from '@/components/Code/Instances/index';
const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        El, String, Attr, Func, Key, CodeBox, Tab, Tag,
        Doc
    }
})

export default class Installation extends Vue {
    @MenuModule.Action setButtons: any

    mounted()
    {
        anchors.options = {
            placement: 'left',
            icon: '#',
            truncate: 100
        };
        anchors.add('#cli');
        anchors.add('#scratch');
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }
}

</script>

<style>
    .space-code {
        border-radius: 5px !important;
        border-left: 6px solid #0DBC82 !important;
        padding-left: 20px !important;
        padding-top: 15px !important;
    }
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px;
    }
    .string {
        color: #6dc253 !important;
    }
    .spacing {
        padding-right: 30%;
    }
</style>