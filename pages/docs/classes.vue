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
                                <p class="ft35 bold">Classes</p>
                                <p class="ft13 lTXTgrey">
                                    Daft ofrece una experiencia especial al momento de trabajar con programación orientada a objetos
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Creando una clase</Title>
                                <p class="ft13 lTXTgrey">
                                    Vamos a definir una simple clase:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>class</El> <Attr>Usuario</Attr> { <br>
                                            <Tab/><Tab/> <El>def</El> <Attr>String</Attr> saludo; <br> <br>
                                            <Tab/><Tab/> <Func name="constructor"><Attr>String</Attr> msj</Func> { <br>
                                                <Tab/><Tab/><Tab/> <El>this</El>.saludo = msj; <br>
                                            <Tab/><Tab/>} <br>
                                            <Tab/><Tab/> <Func name="saludar"></Func> { <br>
                                                <Tab/><Tab/><Tab/> <Attr>console</Attr>.<Func name="log"><El>this</El>.saludo</Func>; <br>
                                            <Tab/><Tab/>} <br>
                                        <Tab/>} <br> <br>
                                        <Tab/> <El>def</El> ejemplo = <El>new</El> <Attr>Usuario</Attr>(<String>"Hola Amigo!"</String>); <br>
                                        <Tab/> ejemplo.<Func name="saludar"></Func>; <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    La sintaxis es muy sencilla. Creamos una clase llamada Usuario con 3 elementos iniciales: Una propiedad llamada saludo, un método constructor y un método llamado saludar. Te podrás dar cuenta que podemos acceder a las propiedades de la instancia mediante <span class="bold">this</span>. <br><br>
                                    Finalmente creamos un objeto con la palabra <span class="bold">new</span> y el nombre de la clase, le mandamos un parámetro tipo texto y finalmente ejecutamos la función saludar() propia de la instancia.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="spacing">
                                <Title>Heredación</Title>
                                <p class="ft13 lTXTgrey">
                                    La heredación es clave en la programación orientada a objetos y es muy fácil de implementar en Daft:
                                </p>
                                <CodeBox>
                                    <Attr>new</Attr> <Func name="Daft"></Func> { <br>
                                        <Tab/> <El>class</El> <Attr>Persona</Attr> { <br>
                                            <Tab/><Tab/> <El>def</El> <Attr>String</Attr> nombre; <br> <br>
                                            <Tab/><Tab/> <Func name="constructor"><Attr>String</Attr> param</Func> { <br>
                                                <Tab/><Tab/><Tab/> <El>this</El>.nombre = param; <br>
                                            <Tab/><Tab/> } <br>
                                        <Tab/> } <br> <br>
                                        <Tab/> <El>class</El> <Attr>Programador</Attr> <El>extends</El> <Attr>Persona</Attr> { <br>
                                            <Tab/><Tab/> <Func name="tomarCafe"></Func> { <br>
                                                <Tab/><Tab/><Tab/> <Attr>console</Attr>.<Func name="log"><El>this</El>.nombre, <String>"está tomando café!"</String></Func> <br>
                                            <Tab/><Tab/>} <br>
                                        <Tab/>} <br> <br>
                                        <Tab/> <El>def</El> yo = <El>new</El> <Attr>Programador</Attr>(<String>"YahirGNz"</String>); <br>
                                        <Tab/> yo.<Func name="tomarCafe"></Func>; <Comment>// Resultado: "YahirGNz está tomando café!"</Comment> <br>
                                    }
                                </CodeBox>
                                <p class="mt20 ft13 lTXTgrey">
                                    Declaramos una primera clase llamada "Persona" con un método constructor que asigna valor a la propiedad "nombre". Después declaramos otra clase llamada "Programador" que hereda la clase Persona con la palabra reservada <span class="bold">extends</span> aquí sólo creamos un método llamado "tomarCafe" que muestra un mensaje en pantalla. <br> <br>
                                    Finalmente creamos un objeto de la clase Programador y asignamos un valor a la propiedad que está declarada en la clase Persona y es heredada, ejecutamos el método tomarCafe() y obtenemos el resultado en la consola.
                                </p>
                            </div>
                        </v-flex>
                        <v-flex xs12 class="mb30">
                            <div class="spacing">
                                <p class="mt20 ft15 lTXTgrey">
                                    Ésto es todo por el momento, todo lo demás es actualmente IGUAL a JavaScript así que no nos queda más que contarte, actualmente éstamos trabajando por ofrecer una experiencia mucho mejor y sobre todo completa con la programación orientada a objetos pero por ahora fuera de ésto todo es igual a como lo hacemos en JS :).
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
        CodeBox, Tag, Tab, El, String, Mark, Attr, Func, Comment,
        Doc, Head, Dmeta,
    }
})

export default class Classes extends Vue {
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