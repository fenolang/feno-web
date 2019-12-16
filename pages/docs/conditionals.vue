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
                <p class="ft35 bold">Condicionales</p>
                <p
                  class="ft13 lTXTgrey"
                >Las sentencias condicionales son instrucciones o grupos de instrucciones que se ejecutarán o no de acuerdo a una condición</p>
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="spacing">
                <Title>Sentencia If</Title>
                <p
                  class="ft13 lTXTgrey"
                >La sentencia if es la más concida al ser la básica, escribamos una muy simple en Daft:</p>
                <CodeBox>
                  <Attr>new</Attr> <Func name="Daft"></Func>{ <br />
                    <Tab /> <El>def</El> edad = <Attr>17</Attr>; <br />
                    <Tab /> <El>if</El>(edad &lt;= <Attr>17</Attr>) { <br />
                        <Tab /><Tab /> <Func name="print"><String>"Eres menor de edad!"</String></Func> <br>
                    <Tab/>}
                  <br />}
                </CodeBox>
                <p class="ft13 lTXTgrey mt20">
                    Si corremos el código anterior obtendremos el mensaje "Eres menor de edad!" en la consola, ¿Por qué? Hemos declarado una variable con el valor: 17 y después hemos escrito una sentencia if que contiene la siguiente condición: "Si la variable edad tiene un valor de 17 o menor entonces realiza lo siguiente" y nosotros hemos escrito que despliegue con mensaje en la consola si se cumple la condición
                </p>
              </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>Sentencia Else</Title>
                    <p class="ft13 lTXTgrey">
                        Cuando una condición se cumple entonces se ejecuta el contenido de la sentencia if PERO cuando la condición NO se cumple entonces se ejecuta el contenido de una sentencia llamada else
                    </p>
                    <CodeBox>
                        <Attr>new</Attr> <Func name="Daft"></Func>{ <br />
                            <Tab /> <El>def</El> edad = <Attr>17</Attr>; <br />
                            <Tab /> <El>if</El> (edad &lt;= <Attr>17</Attr>) { <br />
                                <Tab /><Tab /> <Func name="print"><String>"Eres menor de edad!"</String></Func> <br>
                            <Tab/>} <El>else</El> { <br>
                                <Tab/><Tab/> <Func name="print"><String>"Eres mayor de edad!"</String></Func> <br>
                            <Tab/>} <br>
                        }
                    </CodeBox>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <Title>Sentencia Elif</Title>
                    <p class="ft13 lTXTgrey">
                        A veces necesitamos que si una sentencia if no se cumple entonces comprobar si se cumple otra más. Y para eso tenemos la sentencia "elif" que en simples palabras es como un else PERO esta sentencia sólo se ejecutará si la condición que contiene es verdadera:
                    </p>
                    <CodeBox>
                        <El>if</El> (x > y) { <br />
                            <Tab /> <Func name="print"><String>"x es mayor que y!"</String></Func>; <br>
                        } <El>elif</El> (x == y) { <br>
                            <Tab/> <Func name="print"><String>"x es igual que y!"</String></Func>; <br>
                        } <El>else</El> { <br>
                            <Tab/> <Func name="print"><String>"x es menor que y!"</String></Func>; <br>
                        } <br>
                    </CodeBox>
                    <p class="mt20 lTXTgrey">
                        Podemos colocar varios elif dentro de una sentencia if. Podemos ver que tenemos un if que evaluará si x es mayor que y, si es verdad entonces ejecutará su código, si no es verdad entonces pasará a la siguiente condición que hemos puesto, si ninguna de las condiciones es verdad entonces ejecutará el contenido del else
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
import { Vue, Component } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";
import Menu from "@/components/Docs/Menu.vue";
import { Title, Subtitle } from "@/components/Tools/index";
import {
  Tag,
  Tab,
  El,
  String,
  Attr,
  Comment,
  Mark,
  CodeBox,
  Func
} from "@/components/Code/index";
import { Doc, Head, Dmeta } from "@/components/Code/Instances/index";

const anchorJS = require("anchor-js");
const anchors = new anchorJS();

const MenuModule = namespace("menu");

@Component({
  components: {
    Menu,
    Title,
    Subtitle,
    CodeBox,
    Tag,
    Tab,
    El,
    String,
    Mark,
    Attr,
    Func,
    Doc,
    Head,
    Dmeta
  }
})
export default class Base extends Vue {
  @MenuModule.Action setButtons: any;

  mounted() {
    this.setButtons([
      {
        id: 0,
        classes: "border-btn",
        outlined: true,
        text: this.$t("btns.about"),
        route: "about"
      },
      {
        id: 1,
        classes: "bg3 shadows dk",
        text: this.$t("btns.docs"),
        route: "docs"
      },
      {
        id: 2,
        classes: "border-btn",
        outlined: true,
        text: this.$t("btns.examples")
      },
      { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
    ]);
    anchors.options = {
      placement: "left",
      icon: "#",
      truncate: 100
    };
  }
}
</script>