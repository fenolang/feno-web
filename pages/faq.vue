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
                                <p class="ft35 bold">FAQ</p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <p class="ft20 txt-dk">¿Cuándo saldrá la versión 1.0?</p>
                                <p class="ft13 lTXTgrey">
                                    Aún no lo sabemos, quedan muchas cosas por hacer pero lo anunciaremos en nuestro <router-link :to="localePath('roadmap')" class="txt-dk">Roadmap</router-link> y en nuestras redes sociales :)
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 v-for="(item, index) in ask_group" :key="index">
                            <v-layout row wrap>
                                <!-- TÍTULO -->
                                <v-flex xs12>
                                    <div class="spacing">
                                        <Subtitle>{{ item.name }}</Subtitle>
                                    </div>
                                </v-flex>
                                <!-- PREGUNTAS -->
                                <v-flex xs12 v-for="(ask, index) in item.asks" :key="index">
                                    <div class="spacing">
                                        <p class="ft15 txt-dk">{{ ask.name }}</p>
                                        <p class="ft13 lTXTgrey" v-html="ask.answer"></p>
                                    </div>
                                </v-flex>
                            </v-layout>
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
        CodeBox, Tag, Tab, El, String, Mark,
        Doc, Head, Dmeta,
    }
})

export default class Base extends Vue {
    @MenuModule.Action setButtons: any

    ask_group: {}[] = [
        {
            name: "JAVASCRIPT",
            asks: [
                {
                    name: "¿Porqué debería dejar JS y usar Feno?",
                    answer: 'Feno está hecho para las personas a las que les gusta o les atrae JavaScript PERO no les encanta, por lo que Feno es una extensión de JS que soluciona todos sus errores, ofrece mejores funciones y mejora la capacidad de este mismo ;)'
                },
                {
                    name: "¿Puedo utilizar librerías de JS con Feno?",
                    answer: '¡Sí! Feno mantiene una compatibilidad perfecta con las librerías desarrolladas para JavaScript'
                },
                {
                    name: "¿Feno puede trabajar en conjunto a JS?",
                    answer: '¡Claro! Pero no es algo necesario y ya no deberías hacerlo'
                },
                {
                    name: "Tengo un proyecto gigante en JS, ¿Puedo migrar fácilmente a Feno?",
                    answer: '¡Absolutamente! Puedes migrar increíblemente fácil ya que Feno admite código JS, tan sólo corre tu proyecto tal como está con Feno y correrá sin ningún problema. Después poco a poco a tu tiempo puedes ir cambiando el código hasta lograr un proyecto 100% construído con Feno ;).'
                },
                {
                    name: "¿Qué piensan de TypeScript?",
                    answer: '¡Nos encanta TypeScript! De hecho, el core de Feno está construído con TypeScript. Ahora, Feno y TS comparten ciertas características y ciertos objetivos PERO cada una tiene un objetivo central algo distinto, Feno tiene como objetivo ofrecer las nuevas características de el desarrollo web (componentes, layouts, etc), tipado fuerte y una sintaxis mucho más fácil de aprender y recordar además de introducir nuevas funciones nunca antes vistas. Feno tiene muchisimas funciones que TypeScript no ¿Por qué? porque ambos apuntan a algo distinto PERO ambos tienen el objetivo de mejorar la web'
                }
            ]
        },
        {
            name: "USO",
            asks: [
                {
                    name: "¿Feno funciona en el servidor?",
                    answer: 'El objetivo de Feno no es trabajar en el servidor pero posiblemente a futuro pensemos expandir el lenguaje y llegar a más campos.'
                },
                {
                    name: "¿Necesito un editor o IDE especial para usar Feno?",
                    answer: 'No. Puedes utilizar cualquier editor o entorno para programar en Feno PERO sí que necesitas por ahora una estructura de carpetas especial para que Feno pueda trabajar perfectamente, aunque a futuro ésto podría desaparecer.'
                },
                {
                    name: "¿Feno funciona en todos los navegadores?",
                    answer: 'Ningún navegador puede entender la sintaxis de Feno PERO recuerda que tu código se lanza como JavaScript para el navegador así que podríamos decir que sí.'
                },
                {
                    name: "¿Puedo desarrollar contenido para Feno?",
                    answer: '¡Claro! Puedes contactarnos e inmediatamente anunciaremos tu librería o framework en este sitio, actualmente estamos pensando en desarrollar una herramienta que ayude a la comunidad a subir e instalar paquetes relacionados con el mundo de Feno :)'
                }
            ]
        },
        {
            name: "SINTAXIS",
            asks: [
                {
                    name: "¿Porqué Feno funciona a través de instancias?",
                    answer: 'Estuvimos un LARGO tiempo pensando en la manera en la que queríamos que se organizara el código en Feno y la manera más cómoda fue la utilización de instancias (doc, head, etc). De tal manera que el código quedara dividido en varias partes y mantener un código limpio y legible.'
                },
                {
                    name: "Los Cristales son algo nuevo, ¿A qué se transpilan?",
                    answer: 'Los Cristales se transpilan a código con parámetros, el objetivo de Los Cristales es que ya no tengas que mandar y recibir parámetros para cambiar la manera en la que actúan tus aplicaciones pero como los navegadores no entienden código Feno los cristales se transpilan a código con parámetros (como actualmente se realiza).'
                },
                {
                    name: "¿Habrá cambios de sintaxis en futuras versiones?",
                    answer: 'Siempre tratamos de mejorar Feno por lo tanto si encontramos una mejor y más cómoda manera de escribir alguna función lo haremos posible PERO ningún cambio rompera la estabilidad de tu proyecto, no nos gusta romper la compatibilidad de forma tan brusca (Angular cof cof..)'
                }
            ]
        },
        {
            name: "OTROS",
            asks: [
                {
                    name: "¿Porqué \"Feno\"?",
                    answer: 'Este proyecto ha pasado por una lista increíblemente GRANDE de nombres. Mientras pensaba en cuál sería el nombre definitivo me dí cuenta que en el barrio en el que resido es casi imposible salir y no ver un gato. "Feno" es una abreviación de "Felino" y el logo es una gato estilo origami, ¡Vivan los gatos!'
                }
            ]
        }
    ];

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }


}

</script>