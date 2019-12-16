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
                                <p class="ft35 bold">Scripts Individuales</p>
                                <p class="ft13 lTXTgrey">
                                    A lo largo de esta documentación hemos puesto ejemplos de Daft como el siguiente:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <Func name="print"><String>"Hola Mundo!"</String></Func>; <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    ¿Normal no? iniciamos una clase de Daft y colocamos una función print(). Ahora la pregunta es: ¿Siempre que queremos empezar a escribir código Daft necesitamos iniciar una instancia?... ¡NO!
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Archivos Daft</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Sabemos que para codificar en Daft necesitamos crear un archivo <span class="bold">.daft</span> y aparte necesitamos crear una instancia pero esto SÓLO lo debemos de realizar si vamos a colocar HTML en el mismo archivo. Si NO vamos a colocar HTML en el mismo archivo entonces no hay necesidad de colocar ninguna instancia, por ejemplo:
                                </p>
                                <CodeBox>
                                    <El>def</El> texto = <String>"Hola!"</String>; <br>
                                    <Func name="print">texto.<El>length</El></Func>; <Comment>// Resultado: 5</Comment>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    ¿Observaste que no colocamos la clase Daft? El código anterior funcionará perfectamente y será transpilado a un archivo de javascript, PERO, ¿Qué pasa si hacemos lo siguiente?
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p</Tag>Hola Mundo!<Tag>/p</Tag>
                                    </Doc>
                                    <br>
                                    <El>def</El> texto = <String>"Hola!"</String>; <br>
                                    <Func name="print">texto.<El>length</El></Func>;
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Al compilar el código anterior Daft notará que colocaste la instancia #DOC por lo que automáticamente este archivo ya NO se transpilará a un archivo .js sino a uno .html, después buscará si declaraste la clase de Daft y si no lo hiciste terminará de transpilar y lanzará tu código al navegador como total y puro marcado de HTML.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Ejemplos de transpilación</Title>
                                <Subtitle>Daft puro</Subtitle>
                                <p class="ft13 lTXTgrey">script.daft:</p>
                                <CodeBox>
                                    <El>def</El> <Attr>String</Attr> texto = <String>"Hola!"</String>; <br>
                                    <Func name="print">texto.<El>length</El></Func>; <Comment>// Resultado: 5</Comment>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">script.js:</p>
                                <CodeBox>
                                    <El>let</El> texto = <String>"Hola!"</String>; <br>
                                    <Attr>console</Attr>.<Func name="log">texto.<El>length</El></Func>; <Comment>// Resultado: 5</Comment>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Clase Daft</Subtitle>
                                <p class="ft13 lTXTgrey">script.daft:</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p</Tag>Hola Mundo!<Tag>/p</Tag>
                                    </Doc>
                                    <br>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/><El>def</El> <Attr>String</Attr> texto = <String>"Hola!"</String>; <br>
                                        <Tab/><Func name="print">texto.<El>length</El></Func>; <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">script.html:</p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Tag>p</Tag>Hola Mundo!<Tag>/p</Tag> <br> <br>
                                    <Tab/><Tab/> <Tag>script <Attr>type</Attr>=<String>"text/javascript"</String></Tag> <br>
                                    <Tab/><Tab/><Tab/> <El>let</El> texto = <String>"Hola!"</String>; <br>
                                    <Tab/><Tab/><Tab/> <Attr>console</Attr>.<Func name="log">texto.<El>length</El></Func> <br>
                                    <Tab/><Tab/> <Tag>/script</Tag> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle>Sin Clase Daft</Subtitle>
                                <p class="ft13 lTXTgrey">script.daft:</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p</Tag>Hola Mundo!<Tag>/p</Tag>
                                    </Doc>
                                    <br>
                                    <El>def</El> <Attr>String</Attr> texto = <String>"Hola!"</String>; <br>
                                    <Func name="print">texto.<El>length</El></Func>; <br>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">script.html:</p>
                                <CodeBox>
                                    <Tag>!doctype html</Tag> <br>
                                    <Tag>html</Tag> <br>
                                    <Tab/> <Tag>body</Tag> <br>
                                    <Tab/><Tab/> <Tag>p</Tag>Hola Mundo!<Tag>/p</Tag> <br>
                                    <Tab/> <Tag>/body</Tag> <br>
                                    <Tag>/html</Tag>
                                </CodeBox>
                                <v-alert type="warning" border="left" outlined class="mt20">
                                    En este último caso Daft eliminará todo el contenido que no sea marcado y que no esté dentro de la clase indicada PERO no sin avisarnos mediante una advertencia que tenemos código mal declarado.
                                </v-alert>
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func, Comment,
        Doc, Head, Dmeta,
    }
})

export default class Scripts extends Vue {
    @MenuModule.Action setButtons: any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
        ]);
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }
}

</script>