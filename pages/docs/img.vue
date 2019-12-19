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
                                <p class="ft35 bold">Función Img()</p>
                                <p class="ft13 lTXTgrey">
                                    La función img nos sirve para importar imágenes que se encuentran en el directorio "/images" 
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Uso</Subtitle>
                                <CodeBox>
                                    <Func name="img"><String>"mi_imagen.png"</String></Func>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle>Parámetros</Subtitle>
                                <CodeBox>
                                    <Func name="img"><String>"mi_imagen.png"</String></Func>.<Func><Attr>id</Attr>=<String>"imagen"</String> <Attr>class</Attr>=<String>"miclase"</String></Func>
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <p class="ft15 lTXTgrey">
                                    Ahora conoces una mejor y más limpia forma de llamar a tus imágenes con Daft ;)
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr,
        Doc, Head, Dmeta,
    }
})

export default class Img extends Vue {
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