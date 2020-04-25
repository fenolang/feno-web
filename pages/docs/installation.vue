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
            <!-- CLI INSTALLATION -->
            <v-flex xs12 id="cli">
                <div class="spacing">
                    <p class="ft25 ft0">{{ $t('docs.install.cli.title') }}</p>
                    <p class="ft13 lTXTgrey">{{ $t('docs.install.cli.sub') }} <span class="ft-red">NPM</span>
                        ({{ $t('docs.install.cli.sub_2') }} <a href="https://nodejs.org/en/download/" target="_blank">NodeJS</a>)
                    </p>
                    <CodeBox>
                        $ npm i -g <span class="ft0">feno-cli</span>
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <p class="ft13 lTXTgrey">
                    {{ $t('docs.install.cli.create_project') }}
                    </p>
                    <CodeBox>
                        $ fe <span class="ft">create-new</span>
                        <Attr>{{ $t('docs.install.cli.project_name') }}</Attr>
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.cli.starts_cli') }}
                    </p>
                    <p class="ft13 lTXTgrey">
                       {{ $t('docs.install.cli.question_process') }}
                    </p>
                    <ul class="ft14">
                        <li class="lTXTgrey bold" v-for="(item, index) in $t('docs.install.cli.questions')" :key="index">
                            {{ item }}
                        </li>
                        <!--<ul>
                            <li v-for="(item, index) in $t('docs.install.cli.app_type')" :key="index">
                                {{ item }}
                            </li>
                        </ul>-->
                        <!--<li class="bold">{{ $t('docs.install.cli.design_framework') }}</li>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                            <li>Bulma</li>
                            <li>Tailwind</li>
                        </ul>-->
                    </ul>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.cli.after_questions') }}
                    </p>
                    <CodeBox>
                        $ <El>cd</El> {{ $t('docs.install.cli.project_name') }} <br>
                        $ npm run dev
                    </CodeBox>
                    <p class="pt15 ft15 lTXTgrey">
                        {{ $t('docs.install.cli.final') }}
                        <a href="http://localhost:8080" class="ft0" target="_blank">http://localhost:8080</a>!
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 id="scratch">
                <div class="spacing">
                    <p class="ft25 ft0">{{ $t('docs.install.scratch.title') }}</p>
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
                                <Tab/><Tab/> <El>"dev"</El>: <String>"cross-env FENO_ENV=dev nodemon --watch src"</String>, <br>
                                <Tab/><Tab/> <El>"init"</El>: <String>"npm explore feno -- npm run init"</String> <br>
                            <Tab/>} <br>
                        }
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.scratch.execute_init') }}
                    </p>
                    <CodeBox>
                        $ npm i feno nodemon cross-env <br>
                        $ npm run init
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey" v-html="$t('docs.install.scratch.create_index_feno')"></p>
                    <CodeBox>
                        <Doc>
                            <Tag>h1</Tag>{{ $t('docs.install.scratch.hello_world') }}<Tag>/h1</Tag>
                        </Doc>
                    </CodeBox>
                    <p class="pt15 ft13 lTXTgrey">
                        {{ $t('docs.install.scratch.execute_feno') }}
                    </p>
                    <CodeBox>
                        $ npm run dev
                    </CodeBox>
                    <p class="pt15 ft15 lTXTgrey">
                        {{ $t('docs.install.scratch.running_project') }}
                        <a href="http://localhost:8080" class="ft0" target="_blank">http://localhost:8080</a>
                    </p>
                    <p class="ft15 lTXTgrey">
                        {{ $t('docs.install.scratch.continue_docs') }}
                        <router-link to="/docs/directory-structure" class="ft0">
                            {{ $t('docs.menu.directory_structure') }}
                        </router-link>
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
        anchors.add('#cli');
        anchors.add('#scratch');
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
    @media (max-width: 1000px) {
        .spacing {
            padding-left: 10%;
            padding-right: 10%;
        }
    }
</style>