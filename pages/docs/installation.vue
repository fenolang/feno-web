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
                                <div class="h50 bg-dk space-code">
                                    <p class="dk line">$ npm i -g <span class="ft line">feno-cli</span></p>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <p class="ft13 lTXTgrey">
                                {{ $t('docs.install.cli.create_project') }}
                                </p>
                                <div class="h50 bg-dk space-code">
                                    <p class="dk line">$ feno <span class="ft line">create-new-project</span>
                                    <span class="ft-yellow line">{{ $t('docs.install.cli.project_name') }}</span></p>
                                </div>
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
                                    <li class="bold">{{ $t('docs.install.cli.feno_plugins') }}</li>
                                    <ul>
                                        <li>GFlow</li>
                                        <li>GStyled</li>
                                    </ul>
                                </ul>
                                <p class="pt15 ft13 lTXTgrey">
                                    {{ $t('docs.install.cli.after_questions') }}
                                </p>
                                <div class="h70 bg-dk space-code">
                                    <p class="dk line mb-0">$ <span class="ft-red line">cd</span> {{ $t('docs.install.cli.project_name') }}</p>
                                    <p class="dk line mb-0">$ npm i</p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey">
                                    {{ $t('docs.install.cli.install_dependencies') }}
                                </p>
                                <div class="h50 bg-dk space-code">
                                    <p class="dk line">$ npm run dev</p>
                                </div>
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
                                <div class="h70 bg-dk space-code">
                                    <p class="dk line mb-0">$ mkdir <span class="ft-yellow line">{{ $t('docs.install.scratch.project_name') }}</span></p>
                                    <p class="dk line mb-0">$ <span class="ft-re">cd</span> {{ $t('docs.install.scratch.project_name') }}</p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_package_json')"></p>
                                <div class="h220 bg-dk space-code">
                                    <p class="dk line mb-0">{</p>
                                        <p class="dk line mb-0">
                                            &nbsp;&nbsp;&nbsp;<span class="ft-red line">"name"</span>: <span class="string line">
                                                "{{ $t('docs.install.scratch.package_json.name') }}"</span>, <br>
                                            &nbsp;&nbsp;&nbsp;<span class="ft-red line">"version"</span>: <span class="string line">"1.0.0"</span>, <br>
                                            &nbsp;&nbsp;&nbsp;<span class="ft-red line">"description"</span>: <span class="string line">
                                                "{{ $t('docs.install.scratch.package_json.description') }}"</span>, <br>
                                            &nbsp;&nbsp;&nbsp;<span class="ft-red line">"author"</span>: <span class="string line">
                                                "{{ $t('docs.install.scratch.package_json.author') }}"</span>, <br>
                                            &nbsp;&nbsp;&nbsp;<span class="ft-red line">"main"</span>: <span class="string line">"index.js"</span>, <br>
                                            &nbsp;&nbsp;&nbsp;<span class="ft-red line">"scripts"</span>: { <br>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ft-red line">"dev"</span>: <span class="string line">"nodemon --watch src"</span> <br>
                                            &nbsp;&nbsp;&nbsp;} <br>
                                        </p>
                                    <p class="dk line mb-0">}</p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey">
                                    {{ $t('docs.install.scratch.install_graph_nodemon') }}
                                </p>
                                <div class="h50 bg-dk space-code mb-3">
                                    <p class="dk line">$ npm i <span class="ft line">feno nodemon</span> -D</p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_nodemon_json')">
                                </p>
                                <div class="h90 bg-dk space-code">
                                    <p class="dk line mb-0">
                                        { <br>
                                        &nbsp;&nbsp;&nbsp;<span class="ft-red line">"ext"</span>: <span class="string line">"cct"</span> <br>
                                        }
                                    </p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey">
                                    {{ $t('docs.install.scratch.create_folders') }}
                                </p>
                                <div class="h90 bg-dk space-code">
                                    <p class="dk line mb-0">
                                        $ mkdir src <br>
                                        $ <span class="ft-red line">cd</span> src <br>
                                        $ mkdir scripts components meta styles images
                                    </p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey">
                                    {{ $t('docs.install.scratch.back_to_main_folder') }}
                                </p>
                                <div class="h50 bg-dk space-code">
                                    <p class="dk line">
                                        $ <span class="ft-red line">cd</span> ..
                                    </p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_index_js')">
                                </p>
                                <div class="h70 bg-dk space-code">
                                    <p class="dk line">
                                        <span class="ft-purple">const</span> Cactus = <span class="ft-red line">require</span>(<span class="string line">"feno"</span>); <br>
                                        Cactus.<span class="ft-blue line">run</span>();
                                    </p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_index_feno')"></p>
                                <div class="h90 bg-dk space-code">
                                    <p class="dk line">
                                        <span class="ft-red line">box:</span> <br>
                                        &nbsp;&nbsp;&nbsp;<span class="ft-red line">h1:</span> {{ $t('docs.install.scratch.hello_world') }} <span class="ft-red line">!h1</span> <br>
                                        <span class="ft-red line">!box</span>
                                    </p>
                                </div>
                                <p class="pt15 ft13 lTXTgrey">
                                    {{ $t('docs.install.scratch.run_project') }}
                                </p>
                                <div class="h50 bg-dk space-code">
                                    <p class="dk line">$ npm run dev</p>
                                </div>
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
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import Menu from '@/components/Docs/Menu.vue';
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu
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
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
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