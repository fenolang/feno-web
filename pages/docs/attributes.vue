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
                                <p class="ft35 bold">Atributos</p>
                                <p class="ft13 lTXTgrey">
                                    Los atributos son propiedades de elementos HTML que podemos asignar para editar la forma y comportamiento de nuestros elementos que conforman la estructura de nuestro siito web
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Atributos en Daft:</Title>
                                <Subtitle id="click">Click</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo Click nos sirve para asignar un evento a un elemento cuando esté sea presionado</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>button <Mark><Attr>Click</Attr>=<String>"saludar()"</String></Mark></Tag>Mi increíble botón<Tag>/button</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="keyup">keyUp</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo keyUp es un evento que se ejecuta cuando el usuario suelta una tecla </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"text"</String> <Mark><Attr>keyUp</Attr>=<String>"miFuncion()"</String></Mark></Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div class="spacing">
                                <Subtitle id="keydown">keyDown</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo keyDown almacena un evento que se ejecuta cuando el usuario presiona una tecla</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"text"</String> <Mark><Attr>keyDown</Attr>=<String>"miFuncion()"</String></Mark></Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="name">Name</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo Name sirve para asignar un nombre único a un elemento</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p <Mark><Attr>Name</Attr>=<String>"mitexto"</String></Mark></Tag>Hola!<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="id">Id</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo Id sirve para asignar una id única a un elemento</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p <Mark><Attr>Id</Attr>=<String>"mitexto"</String></Mark></Tag>Hola!<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="class">Class</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo Class sirve para asignar el grupo de clases css que se quieren aplicar al elemento</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>p <Mark><Attr>Class</Attr>=<String>"clase1 clase2"</String></Mark></Tag>Hola!<Tag>/p</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="type">Type</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo Type tiene distintos usos: para los botones específica el tipo de botón, para elementos #input sirve para especificar el tipo de campo de texto, y para elementos como: #embed, #link, #object, #script, #source y #style sirve para colocar el conocido MIME type</p>
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
                                <p class="ft13 lTXTgrey">En HTML puede que lo hayas conocido como href, en Daft tan sólo es un simple "To" y sirve para especificar la url de un enlace</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>a <Mark><Attr>To</Attr>=<String>"https://www.w3schools.com"</String></Mark></Tag>Hola!<Tag>/a</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="src">Src</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo src muy conocido en HTML sirve para llamar a una imagen mediante su ruta local o enlace</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"image"</String> <Mark><Attr>Src</Attr>=<String>"/images/imagen.png"</String></Mark></Tag>
                                    </Doc>
                                </CodeBox>
                                <v-alert class="mt20" type="warning" border="left" outlined>
                                    Este atributo YA NO ES NECESARIO para colocar imágenes desde que Daft tiene una función especializada para eso: img()
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="size">Size</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo Size nos sirve para modificar el ancho inicial de nuestro elemento, funciona en: #input, #select y #hr</p>
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
                                <p class="ft13 lTXTgrey">El atributo Width nos sirve para modificar el ancho de nuestros elementos</p>
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
                                <p class="ft13 lTXTgrey">El atributo Height nos sirve para modificar el alto de nuestros elementos</p>
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
                                <p class="ft13 lTXTgrey">El atributo newTab es una alternativa a colocar target="_blank" como en HTML y sirve para que un enlace sea abierto en una nueva pestaña</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>a <Attr>To</Attr>=<String>"https://www.w3schools.com"</String><Mark><Attr>newTab</Attr></Mark></Tag>Hola!<Tag>/a</Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="val">Val</Subtitle>
                                <p class="ft13 lTXTgrey">El atributo Val realiza la misma acción que value en HTML</p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>input <Attr>Type</Attr>=<String>"text"</String> <Attr>Name</Attr>=<String>"nombre"</String> <Attr>Val</Attr>=<String>"Giorgio Moroder"</String></Tag>
                                    </Doc>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle id="more">Más atributos</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Evidentemente existen más atributos pero eso ya es cosa de HTML, tan sólo recuerda que los atributos en Daft comienzan con mayúsculas si el nombre del atributo es una sola palabra como el atributo "rows" en Daft es:
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>textarea <Attr>Cols</Attr>=<String>"50"</String></Tag><Tag>/textarea</Tag>
                                    </Doc>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    PERO si el nombre del atributo ES UNA COMPOSICIÓN DE 2 PALABRAS entonces hacemos uso de las reglas de CamelCase: <a href="https://wikipedia.org/wiki/Camel_case" target="_blank" class="ft-green bold">wikipedia.org</a>, por ejemplo el atributo "cellpadding" en Daft es así:
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
    }
}

</script>