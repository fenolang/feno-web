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
                                <p class="ft35 bold">La clase <span class="ft-green">#Daft</span></p>
                                <p class="ft13 lTXTgrey">
                                    La clase #Daft es el elemento principal de todo Daft y ahí es donde surgirá la magia, en donde utilizaremos nada más y nada menos que sólo sintaxis que Daft entienda
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title id="starting">Iniciando la clase</Title>
                                <p class="ft13 lTXTgrey">
                                    Para comenzar a programar en Daft puro necesitamos crear la clase { Daft } de la siguiente manera al final de nuestros archivos .daft:
                                </p>
                                <CodeBox>
                                    <Doc>
                                        <Comment>#- Nada por aquí.. de nuevo -#</Comment>
                                    </Doc> <br>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                    <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="hello-world">Tu primer Hola Mundo en Daft</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Como primer ejercicio no podía faltar el típico "Hola Mundo", y así es como lo hacemos en Daft:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/><El>print</El>(<String>"Hola Mundo en Daft!"</String>) <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Compila el código y abre tu navegador, dírigete hacia la consola y verás un mensaje diciendo: <span class="bold">Hola Mundo en Daft!</span>
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Subtitle id="better-hw">Un mejor Hola Mundo</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Ahora sabemos que para colocar un mensaje en la consola necesitamos llamar a la función <span class="bold">print()</span> pero ¿y si mejor hacemos que el mensaje nos salga en una pequeña ventana? Te presentamos a la función <span class="bold">msg()</span>:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/><El>msg</El>(<String>"Hola Mundo!"</String>) <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Ahora recarga la página y verás una pequeña ventana salir con el mensaje <span class="bold">Hola Mundo!</span>
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Subtitle id="print-and-msg">print() y msg()</Subtitle>
                                <p class="ft13 lTXTgrey">
                                    Cuando necesitamos saber de algo que está pasando internamente como el resultado de una función de una manera sencilla necesitamos de un mensaje que nos lo muestre, <span class="bold">msg()</span> es una buena opción pero si necesitamos varios mensajes y varias veces nos acabarán cansando tantas ventanas emergentes. <br> <br>
                                    Entonces hacemos uso de <span class="bold">print()</span> que tan sólo es un simple mensaje en la consola, es como un <span class="bold">console.log()</span> en JavaScript :)
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
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Func, Viewer } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';

const anchorJS = require('anchor-js');
const anchors = new anchorJS();

const MenuModule = namespace('menu');

@Component({
    components: {
        Menu,
        Title, Subtitle,
        CodeBox, Tag, Tab, El, String, Mark, Func, Attr, Comment, Viewer,
        Doc, Head, Dmeta,
    }
})

export default class DaftClass extends Vue {
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
        anchors.add('#starting');
        anchors.add('#hello-world');
        anchors.add('#better-hw');
        anchors.add('#print-and-msg');
    }
}

</script>