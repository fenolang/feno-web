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
                                <p class="ft35 bold">Importar</p>
                                <p class="ft13 lTXTgrey">
                                    Cuando nuestro proyecto va creciendo necesitamos separar funciones, características y demás en distintos scripts y después reutilizarlos dentro de otros archivos.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Cómo importar en Daft</Title>
                                <CodeBox>
                                    <Key>import</Key> * <El>as</El> Archivo <Key>from</Key> <String>"./script.daft"</String> <br> <br>
                                    Archivo.<Func name="run"></Func>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Así estamos importando un archivo completo dentro de otro archivo y como puedes ver podemos acceder a sus funciones
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle>Importar funciones concretas</Subtitle>
                                <CodeBox>
                                    <Key>import</Key> { <El>run</El> } <Key>from</Key> <String>"./script.daft"</String> <br> <br>
                                    <Func name="run"></Func>
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Como puedes ver estamos importando unicamente la función run() que se encuentra en el archivo "script.daft" y la estamos ejecutando al final
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func, Key } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Key,
        Doc, Head, Dmeta,
    }
})

export default class Import extends Vue {
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