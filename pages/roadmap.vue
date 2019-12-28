<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="spacing pt20">
                    <Title>Ruta del proyecto</Title>
                    <p class="ft13 lTXTgrey">Éstamos siempre trabajando en mejorar Feno, mejorando cada funcionalidad y agregando muchas nuevas para ofrecerte un lenguaje mucho más capaz para tus proyectos. Aquí te mostramos la ruta de nuestro proyecto, desde las actualizaciones que ya lanzamos hasta las próximas versiones que tenemos planeadas: (Ésta lista puede cambiar en cualquier momento)</p>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-layout row wrap justify-center>
                    <v-flex xs10 md8>
                        <v-timeline :dense="true" >
                            <v-timeline-item :small="true" :color="item.color" :icon="item.icon" v-for="(item, index) in versions" :key="index" :fill-dot="true">
                                <v-card outlined>
                                    <v-card-title>
                                        <span class="ft15" v-html="item.name"></span>
                                    </v-card-title>
                                    <v-card-text>
                                        <p v-html="item.text"></p>
                                        <p v-if="item.news" class="bold TXTblack">Destacado:</p>
                                        <ul v-if="item.news">
                                            <li v-for="(news, index) in item.news" :key="index">
                                                {{ news }}
                                            </li>
                                        </ul>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { Title, Subtitle } from '@/components/Tools/index';

const MenuModule = namespace('menu');

@Component({
    layout: 'doc',
    components: {
        Title, Subtitle
    }
})

export default class Base extends Vue {
    @MenuModule.Action setButtons: any

    versions: {}[] = [
        {
            color: 'deep-orange',
            icon: 'mdi-cat',
            name: 'v1.0 Release <span class="bold">(Felino)</span>',
            text: `La actualización 1.0 oficial de Feno: "Felino" da origen a el mismo nombre del lenguaje, esta versión será 100% estable, sin errores y ya con todas las funciones necesarias para brindarle fuerza y poder a tu proyecto. Aún no sabemos cuándo será la fecha de salida pero lo anunciaremos en todos lados ;)`
        },
        {
            color: "grey",
            icon: 'mdi-rocket',
            name: 'v0.7s.0 Beta Release <span class="bold">(Hungry)</span>',
            text: `La actualización que lleva por nombre "Hungry" incluirá las funciones y elementos suficientes para terminar con la fase beta.`,
            news: [
                "Introducción completa de los Cristales",
                "Introducción de los Layouts",
                "Y mucho más..."
            ]
        },
        {
            color: "indigo",
            icon: 'mdi-rocket',
            name: "v0.6.5 Beta Release",
            text: `La versión 0.6.5 es una versión planeada para mejorar la estabilidad y funcionamiento de el lenguaje.`,
            news: [
                "Mejora en la rápidez al 200%",
                "Declaración de componentes más fácil",
                "Props re-escritas desde cero",
                "Tipado más completo",
                "Condicionales"
            ]
        },
        {
            color: "green",
            icon: "mdi-check-bold",
            name: "v0.6.0 Beta Release",
            text: `La primera versión oficial de Feno disponible para todos. Sólo incluye las funciones básicas como: Componentes, Meta archivos, Instancias, Variables y poco más.`
        }
    ]

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.roadmap'), route: "roadmap" },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ]);
    }
}

</script>