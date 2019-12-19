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
                <p class="ft35 bold">Crystals</p>
                <p
                  class="ft13 lTXTgrey"
                >Los Cristales son una funcionalidad exclusiva que ofrece Daft para mejorar la interactividad de nuestro código y abandonar el uso de los parámetros para cambiar la forma en la que nuestro código funciona.</p>
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="spacing">
                <Title>Código que cambia</Title>
                <Subtitle>Como normalmente lo hacemos</Subtitle>
                <p
                  class="ft13 lTXTgrey"
                >Imaginemos que queremos que el mismo código funcione de distinta manera depende la situación, por ejemplo: Tenemos dos funciones y las dos llaman a una tercera función, el objetivo es que la tercera función haga distintas cosas depende de dónde sea llamada, así lo hacemos con parámetros:</p>
                <CodeBox>
                  <El>func</El> <Func name="funcion1"></Func> { <br />
                  <Tab /> <Func name="respuesta"><Attr>1</Attr></Func>; <br />
                  } <br /> <br />
                  <El>func</El> <Func name="funcion2"></Func> { <br>
                    <Tab/> <Func name="respuesta"><Attr>2</Attr></Func>; <br>
                  } <br> <br>
                    <El>func</El> <Func name="respuesta">res</Func> { <br>
                        <Tab/> <El>if</El> (res == 1) { <br>
                            <Tab/><Tab/> <Func name="saludar"></Func>; <br>
                        <Tab/>} <El>elif</El> (res == 2) { <br>
                            <Tab/><Tab/> <Func name="despedirse"></Func>; <br>
                        <Tab/>} <br>
                    }
                </CodeBox>
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="spacing">
                <Subtitle>Con Cristales</Subtitle>
                <CodeBox>
                    <Key>import</Key> { <El>Crystals</El> } <Key>from</Key> <String>"daft"</String>; <br> <br>
                    <El>func</El> <Func name="funcion1"></Func> { <br />
                    <Tab /> <Attr>Crystals</Attr>.<Func name="send"><String>"res"</String>, <String>"saludar()"</String></Func><br />
                    } <br /> <br />
                    <El>func</El> <Func name="funcion2"></Func> { <br>
                        <Tab/> <Attr>Crystals</Attr>.<Func name="send"><String>"res"</String>, <String>"despedirse()"</String></Func> <br>
                    } <br> <br>
                    <El>func</El> <Func name="respuesta"></Func> { <br>
                        <Tab/> <Attr>Crystals</Attr>.<Func name="exec"><String>"res"</String></Func> <br>
                    }
                </CodeBox>
                <p class="mt20 ft13 lTXTgrey">
                    Acaso no es... ¡¿Increíble?! Importamos los cristales en la primera línea, en la función 1 mandamos un cristal a través de la función <span class="bold">Crystals.send(<span class="italic">nombre del cristal que se va a mandar</span>)</span> que como primer parámetro le mandamos el nombre de nuestro cristal y como segundo el valor que tendrá. <br> <br>
                    En la segunda función también mandamos un cristal llamado "res" y como valor le mandamos la función despedirse(). Y en la tercera función ahora sólo ejecutamos el cristal llamado "res" con la función <span class="bold">Crystals.exec("<span class="italic">nombre del cristal a ejecutar</span>")</span> y ¡LISTO!
                </p>
              </div>
            </v-flex>
            <v-flex xs12>
                <div class="spacing">
                    <Title>¿Realmente necesito los cristales?</Title>
                    <p class="ft15 lTXTgrey">
                        Personalmente como programador muchas veces necesito que mi código funcione de distintas maneras de acuerdo a la situación que se presente y así reutilizar mis scripts además de que cuando queremos reaccionar ante diversas situaciones tendríamos que mandar más tipos de parametros y por lo tanto más uso innecesario del elif en nuestras condicionales. Ese fue el motivo para crear "Crystals": Una manera de decirle a nuestro código cómo actuar SIN usar parámetros :))
                    </p>
                </div>
            </v-flex>
            <v-flex xs12 class="mb30">
                <div class="spacing">
                    <v-alert type="warning" border="left" outlined>
                        ¡Alerta! Los Cristales actualmente sólo funcionan dentro de un mismo archivo, aún no funcionan con funciones externas que importas PERO éstamos trabajando en eso ;)
                    </v-alert>
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
  Func,
  Key
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
    Doc,
    Head,
    Dmeta,
    Attr,
    Func,
    Key
  }
})
export default class Crystals extends Vue {
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