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
                                <p class="ft35 bold">Layouts</p>
                                <p class="ft13 lTXTgrey">
                                    Los layouts son ideales cuando queremos cambiar cómo se ve el entorno de nuestro sitio web, en ellos podemos definir una interfaz que podremos reutilizar en nuestras páginas
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="appview">Creemos un layout</Title>
                                <p class="ft13 lTXTgrey">
                                    Para crear un layout debemos ir obviamente a la carpeta "layouts" y dentro crear un archivo con extensión .daft, por ejemplo crearemos uno llamado: "design.daft" y colocaremos el siguiente contenido
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>h1</Tag>Este es el inicio de mi layout <Tag>/h1</Tag> <br>
                                        <Tab/><Func name="appView"></Func> <br>
                                        <Tab/><Tag>h3</Tag>Este es el fin de mi layout <Tag>/h3</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>La función appView()</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    La función appView() sólo funciona para los layouts y sirve para renderizar el contenido de tus páginas de tal manera que Daft buscará dónde colocaste ésta función y ahí colocará el contenido de tus páginas que tengan aplicado ese layout
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="layout">Apliquemos el layout</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Ya hemos creado nuestro layout "design" así que ahora debemos aplicarlo a el documento que queramos, por ejemplo el index.daft:
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p</Tag>Esta es mi página<Tag>/p</Tag>
                                    </Doc>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                    <Tab/> <Attr>this</Attr>.<El>layout</El> = <String>"design"</String>; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>La propiedad Layout</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    La propiedad this.layout funciona sólo para las páginas y no para los componentes, y sirve para asignarle un layout a nuestra página por eso su valor debe ser el nombre del layout que queramos aplicar
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>El resultado</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Ya hemos creado un layout llamado: "design.daft" y ya se lo hemos asignado a nuestra página "index.daft" con la propiedad this.layout, Ahora podemos compilar e ir a nuestro navegador, notarás que obtendrás un resultado como el siguiente:
                                </p>
                                <Viewer>
                                    <h1>Este es el inicio de mi layout</h1>
                                    <p>Esta es mi página</p>
                                    <h3>Este es el fin de mi layout</h3>
                                </Viewer>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <p class="ft15 lTXTgrey mt20">
                                    ¡Funcionó! Fuimos a nuestra página "index" y observamos que nuestro layout se aplicó perfectamente a nuestro contenido, ésto es sólo una parte de todo lo que puedes hacer con Daft ;)
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
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import Menu from '@/components/Docs/Menu.vue';
import { Title, Subtitle } from '@/components/Tools/index';
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func, Viewer } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr, Viewer,
        Doc, Head, Dmeta,
    }
})

export default class Layouts extends Vue {
    @MenuModule.Action setButtons: any

    created() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
        ]);
    }

    mounted() {
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
        anchors.add('#appview');
        anchors.add('#layout');
    }
}

</script>