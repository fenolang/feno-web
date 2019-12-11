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
                                <p class="ft35 bold">Declaración de variables</p>
                                <p class="ft13 lTXTgrey">
                                    Sabemos que en JavaScript existen 3 tipos de variables: <span class="bold">var</span>, <span class="bold">let</span> y <span class="bold">const</span>, Daft al ser una extensión de JavaScript te permite aún utilizar éstos métodos PERO Daft te presenta una manera mucho mejor de trabajar con variables
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="def">Declaración <span class="ft-green">def</span></Title>
                                <p class="ft13 lTXTgrey">
                                    En Daft utilizamos la palabra reservada <span class="bold">def</span> para definir una nueva variable (Daft automáticamente sabrá en qué momento es mejor transpilar a <span class="bold">var</span> o <span class="bold">let</span>)
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                    <Tab/> <El>def</El> x = <Attr>10</Attr>; <br>
                                    <Tab/> <Func name="print">x</Func> <Comment>// Resultado: 10</Comment> <br>
                                    <Tab/> <Func name="print">x * <Attr>2</Attr></Func> <Comment>// Resultado: 20</Comment> <br>
                                    <Tab/> <Func name="print">x + <String>"Hola!"</String></Func> <Comment>// Error: No se puede convertir el tipo 'int' en 'string'</Comment> <br>
                                    <Tab/> <Func name="print">x.<Func name="toString"></Func> + <String>"y Hola!"</String></Func> <Comment>// Resultado: "10 y Hola!"</Comment> <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Con el código anterior podemos ver la utilización de "def", algunas operaciones matemáticas y también podemos notar que Daft es un lenguaje <span class="ft-green">fuertemente tipado</span> de tal manera que no podemos sumar un número a un texto
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="const">Constantes</Title>
                                <p class="ft13 lTXTgrey">
                                    Las constantes son variables que una vez definido su valor éste ya no puede volver a cambiar, en Daft quisimos preservar la manera en la que se definen en JavaScript: 
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                    <Tab/> <El>const</El> humano = { <br>
                                    <Tab/><Tab/> nombre: <String>"Darlene"</String> <br>
                                    <Tab/><Tab/> edad: <Attr>22</Attr> <br>
                                    <Tab/>} <br>
                                    <br>
                                    <Tab/> <Comment>// ERROR!</Comment> <br>
                                    <Tab/> humano = { <br>
                                    <Tab/><Tab/> nombre: <String>"Elliot"</String> <br>
                                    <Tab/><Tab/> edad: <Attr>24</Attr> <br>
                                    <Tab/>} <br>
                                    <br>
                                    <Tab/> <Comment>// OKAY!</Comment> <br>
                                    <Tab/> <Func name="print"><El>humano</El>.nombre</Func> <br>
                                    }
                                </CodeBox>
                            </div>
                            <p class="mt20 ft13 lTXTgrey">
                                Podemos ver que NO podemos redefinir el valor de una constante y ésto no es lo único que hay que aprender sobre variables en Daft: continúa con la siguiente lección para aprender sobre Tipado
                            </p>
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
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func, Comment,
        Doc, Head, Dmeta,
    }
})

export default class Variables extends Vue {
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
        anchors.add('#def');
        anchors.add('#const');
    }
}

</script>

<style scoped>
    .txt {
        font-family: 'Consolas' !important;
        font-size: 13px !important;
    }
</style>