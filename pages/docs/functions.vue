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
                                <p class="ft35 bold">Funciones</p>
                                <p class="ft13 lTXTgrey">
                                    Las funciones son probablemente una de las cosas más importantes en un lenguaje y en Daft no es la excepción.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="create">Escribiendo una función</Title>
                                <p class="ft13 lTXTgrey">
                                    Vamos a crear una simple función para mostrar una alerta en pantalla:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>func</El> <Func name="mostrar"></Func> { <br>
                                            <Tab/><Tab/> <Func name="msg"><String>"Hola Mundo!"</String></Func> <br>
                                        <Tab/>} <br> <br>
                                        <Tab/> <Func name="mostrar"></Func>; <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Declaramos una nueva función con la palabra <span class="bold">func</span> y llamamos por su nombre "mostrar()" para ejecutarla
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle id="params">Parámetros</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Los parámetros son datos que podemos enviar a nuestra función para utilizarlos. Y también podemos aplicarles un tipo para mejorar la lectura de nuestro código, Ahora vamos a crear una función que haga uso de un parámetro llamado "mensaje", checa el siguiente código:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>func</El> <Func name="mostrar"><Attr>String</Attr> mensaje</Func> { <br>
                                            <Tab/><Tab/> <Func name="msg">mensaje</Func> <br>
                                        <Tab/>} <br> <br>
                                        <Tab/> <Func name="mostrar"><String>"Hola Mundo!"</String></Func>; <br>
                                    }
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func,
        Doc, Head, Dmeta,
    }
})

export default class Functions extends Vue {
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