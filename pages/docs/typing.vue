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
                                <p class="ft35 bold">Tipado</p>
                                <p class="ft13 lTXTgrey">
                                    Daft es un lenguaje fuertemente tipado, lo que significa que cada variable cuenta con un tipo fijo y éste debe de respetarse. No es necesario colocar el tipo cuando se declara una variable ya que Daft lo hace automáticamente pero sí que puedes hacerlo si quieres
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>String</Title>
                                <p class="ft13 lTXTgrey">
                                    String es el tipo que Daft proporciona para las variables de tipo texto y así es como lo utilizamos:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>String</Attr> hola = <String>"Hola Mundo!"</String>; <br>
                                        <Tab/> <El>def</El> hola2 = <String>"Hola Mundo!"</String>; <br>
                                    }
                                </CodeBox>
                                <p class="ft13 lTXTgrey mt20">
                                    Las dos variables van a producir el mismo resultado tan sólo que arriba decidimos colocar el tipo manualmente mientras abajo internamente Daft ya le ha colocado el tipo String por nosotros :)
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Number</Title>
                                <p class="ft13 lTXTgrey">
                                    Number es el tipo indicado para nuestras variables de tipo númerico
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Number</Attr> edad = <Attr>17</Attr>; <br>
                                        <Tab/> <El>def</El> edad2 = <Attr>17</Attr>; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12> 
                            <div class="spacing">
                                <Title>Boolean</Title>
                                <p class="ft13 lTXTgrey">
                                    Boolean es el tipo indicado para nuestras variables de tipo booleano o decisión
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Boolean</Attr> resultado = <Attr>true</Attr>; <br>
                                        <Tab/> <El>def</El> resultado2 = <Attr>false</Attr>; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div class="spacing">
                                <Title>Array</Title>
                                <p class="ft13 lTXTgrey">
                                    Array es el tipo indicado para nuestras variables que serán grupos de datos
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Array</Attr> vector = [<String>""</String>]; <br>
                                        <Tab/> <El>def</El> [] vector2 = [<String>""</String>]; <br>
                                        <Tab/> <El>def</El> vector3 = [<String>""</String>]; <br> <br>
                                        <Tab/> <El>def</El> <Attr>Array</Attr>[] multi_vector = [<String>""</String>,<String>""</String>]; <br>
                                        <Tab/> <El>def</El> [][] multi_vector2 = [<String>""</String>,<String>""</String>]; <br>
                                        <Tab/> <El>def</El> multi_vector3 = [<String>""</String>,<String>""</String>]; <br>
                                    }
                                </CodeBox>
                                <v-alert class="mt20" type="warning" border="left" outlined>
                                    ¡Aún no existen las interfaces en Daft por lo tanto aún no podemos especificar los tipos permitidos en un Array!
                                </v-alert>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Object</Title>
                                <p class="ft13 lTXTgrey">
                                    Object es el tipo indicado para nuestros objetos simples
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Object</Attr> persona = {}; <br>
                                        <Tab/> <El>def</El> {} persona3 = {}; <br>
                                        <Tab/> <El>def</El> persona2 = {}; <br>
                                    }
                                </CodeBox>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <Title>Any</Title>
                                <p class="ft13 lTXTgrey">
                                    Any es el tipo indicado a usar cuando no sabemos qué dato estamos recibiendo y manejando (Muy útil en el uso de librerías de terceros)
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>def</El> <Attr>Any</Attr> ejemplo = <Attr>true</Attr>; <br>
                                        <Tab/> ejemplo = <String>"Mejor soy string"</String>; <Comment>// Ningún error</Comment> <br>
                                        <Tab/> ejemplo = <Attr>5</Attr>; <Comment>// Ningún error</Comment> <br>
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
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func, Comment,
        Doc, Head, Dmeta,
    }
})

export default class Typing extends Vue {
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