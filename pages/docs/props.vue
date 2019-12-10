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
                                <p class="ft35 bold">Props</p>
                                <p class="ft13 lTXTgrey">
                                    Las props o propiedades para los componentes son datos que se le pueden enviar a los componentes para aumentar su interactividad
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Mandando y recibiendo datos</Title>
                                <p class="ft13 lTXTgrey">
                                    Para mandar una prop a un componente debemos mandarle un objeto y dentro el nombre de la prop y su valor:
                                </p>
                                <CodeBox>
                                    <Func name="call"><String>"mi_componente"</String>, { <El>prop</El>:<String>"Hola Mundo!"</String> }</Func>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    De esta manera éstamos mandando una propiedad llamada "prop" con un valor de "Hola Mundo!". La mitad del trabajo está hecha ahora sólo falta RECIBIR ese valor que enviamos. Para eso hacemos algo como lo siguiente:
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Tag>h1</Tag><Attr>$</Attr>{ <Attr>prop</Attr> }<Tag>/h1</Tag> <br>
                                        <Tab/><Tag>p</Tag>Bienvenido amigo<Tag>p</Tag>
                                    </Doc>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Y así le decimos a Daft que éstamos esperando una propiedad llamada prop y queremos que la coloque antes de nuestro mensaje que dice "Bienvenido amigo", tan sólo con "${}" y entre corchetes colocar el nombre de la propiedad que quieres colocar. <br> <br> Tomando en cuenta que ya mandamos una propiedad con su valor y ya la recibimos en el componente, lo que veremos en el navegador será lo siguiente:
                                </p>
                                <Viewer>
                                    <h1>Hola Mundo!</h1>
                                    <p>Bienvenido amigo</p>
                                </Viewer>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle>Mandando y recibiendo 2 props</Subtitle>
                                <p class="lTXTgrey">Aquí tienes un ejemplo ahora con 2 propiedades para que no te piedas ;)</p>
                                <p class="ft13 lTXTgrey">Nuestro documento:</p>
                                <CodeBox class="line">
                                    <Doc>
                                        <Func name="call"><String>"mi_componente"</String>, { <El>prop1</El>:<String>"Hola!"</String>, <El>prop2</El>:<String>"Adiós!"</String> }</Func>
                                    </Doc>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Nuestro componente:
                                </p>
                                <CodeBox class="line">
                                    <Doc>
                                        <Tag>h1</Tag><Attr>$</Attr>{ <Attr>prop1</Attr> }<Tag>/h1</Tag> <br>
                                        <Tab/> <Tag>h3</Tag><Attr>$</Attr>{ <Attr>prop2</Attr> }<Tag>/h3</Tag>
                                    </Doc>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    El resultado:
                                </p>
                                <Viewer>
                                    <h1>Hola!</h1>
                                    <h3>Adiós!</h3>
                                </Viewer>
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

export default class Props extends Vue {
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

<style>
    .line {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
</style>