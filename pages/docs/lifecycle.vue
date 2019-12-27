<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <div class="pt20 spacing">
                    <p class="ft35 bold">{{ $t('docs.menu.lifecycle') }}</p>
                    <p class="ft15 lTXTgrey">
                    {{ $t('docs.lifecycle.sub') }}
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb40">
                <v-layout row wrap justify-center>
                    <v-flex xs10 md10>
                        <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
                            <v-timeline-item :color="item.color" :small="true" v-for="(item, index) in times" :key="index">
                                <span slot="opposite" v-html="item.name"></span>
                                <v-card outlined>
                                    <v-card-text v-html="item.text"></v-card-text>
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

const MenuModule = namespace('menu');

@Component({
    layout: 'doc'
})

export default class Lifecycle extends Vue {
    @MenuModule.Action setButtons: any

    times: {}[] = [
        {
            color: "black",
            name: "Inicio &#x1F4AA;&#x1F43E;",
            text: `Mediante la función <span class="ft">run()</span> Feno comienza su proceso.`
        },
        {
            color: "black",
            name: "El vigilante comienza &#x1F440",
            text: `El "watcher" o vigilante es lo primero que comienza su proceso, este se encarga de vigilar todo tipo de cambios que tú hayas realizado.`
        },
        {
            color: "black",
            name: "Observación de archivos &#x1F4C1;",
            text: `Lo primero que realiza el vigilante es observar qué archivos creaste y qué archivos eliminaste, después observa si tienes cambios en algún archivo y si los hay los almacena para transpilación.`
        },
        {
            color: "black",
            name: "Componentes &#x1F517;",
            text: `Después el vigilante realiza el mismo proceso pero ahora sólo para los componentes.`
        },
        {
            color: "black",
            name: "Chequeo de instancias &#x1F511;",
            text: `Feno trabaja con multiples instancias (lo sabrás a fondo más tarde en esta documentación) entonces el vigilante comienza a observar qué instancias has creado y eliminado.`
        },
        {
            color: "black",
            name: "Vigilancia de errores &#x274C;",
            text: `Tras saber qué instancias tienes, el vigilante comienza la observación de errores y posibles errores futuros, si el vigilante encuentra un error para todo el proceso y si no es así continúa.`
        },
        {
            color: "black",
            name: "Transpilación &#x1F596;&#x1F525;&#x1F9EA;",
            text: `Ahora que el vigilante no ha encontrado errores manda todos los cambios que se necesitan transpilar al Core de Feno. Éste comienza a transpilar todo tu código Feno a JavaScript y las instancias a HTML y CSS, y cuando finaliza manda una confirmación al vigilante para que continúe su proceso.`
        },
        {
            color: "black",
            name: "Vigilancia de Meta &#x2693;",
            text: `El vigilante ahora observa si tienes archivos de meta individuales, si tienes archivos meta entonces los manda a transpilación y observa dónde los tiene que colocar. Cuando los coloca lanza un mensaje de "Compilación exitosa!"`
        },
        {
            color: "black",
            name: "Renderización &#x1F389;&#x1F37B;&#x1F680;",
            text: `Cuando el mensaje se muestra en consola el servidor toma el código transpilado, lo renderiza y tu proyecto comienza a vivir ;)`
        }
    ]

    mounted()
    {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
        ])
    }
}

</script>

<style>
    .spacing {
        padding-right: 30%;
    }
</style>