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
                                <v-img src="/node_banner.png" contain class="center-this"></v-img>
                                <p class="ft35 bold">Gentpy + NodeJS</p>
                                <p class="ft15 lTXTgrey center-txt mb-1">
                                    Actualmente estamos trabajando en lograr una comunicación cómoda y fascinante entre estas dos tecnologías.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing center-txt">
                                <p class="ft15 lTXTgrey">
                                    Actualmente Gentpy es un lenguaje puramente para el frontend pero si logramos una comunicación estable con NodeJS podríamos llegar a ver un Gentpy que sea capaz de trabajar en el servidor y realizar aplicaciones completas
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing center-txt">
                                <p class="ft15 lTXTgrey">
                                    Puedes apoyar el proyecto en Patreon y ser un contribuidor activo del proyecto o también puedes realizar donaciones a mi paypal. Toda ayuda se agradece para continuar con el proyecto, ¡Gracias! :')
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <v-btn depressed class="dk bold" color="blue" target="_blank" href="https://www.paypal.me/yahirgnz">
                                    <v-icon>mdi-paypal</v-icon>
                                    &nbsp;&nbsp;Donar en Paypal
                                </v-btn>
                                <v-btn depressed class="dk bold" color="orange darken-4" target="_blank" href="https://www.patreon.com/yahirgnz">
                                    <v-icon>mdi-patreon</v-icon>
                                    &nbsp;&nbsp;Ser patreon
                                </v-btn>
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
        CodeBox, Tag, Tab, El, String, Mark,
        Doc, Head, Dmeta,
    }
})

export default class Node extends Vue {
    @MenuModule.Action setButtons: any

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