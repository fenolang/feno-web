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
                <p class="ft35 bold">{{ $t('docs.export.title') }}</p>
                <p class="ft13 lTXTgrey">{{ $t('docs.export.subtitle') }}</p>
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="spacing">
                <Subtitle id="normal">{{ $t('docs.export.normal.title') }}</Subtitle>
                <CodeBox>
                  <Key>export</Key>
                  <El>func</El>
                  <Func :name="$t('docs.export.hello')"></Func>{
                  <br />
                  <br />}
                </CodeBox>
                <CodeBox class="mt20">
                  <El>func</El>
                  <Func :name="$t('docs.export.hello')"></Func>{
                  <br />
                  <br />}
                  <br />
                  <El>func</El>
                  <Func :name="$t('docs.export.hello2')"></Func>{
                  <br />
                  <br />}
                  <br />
                  <br />
                  <Key>export</Key>{
                  <El>{{ $t('docs.export.hello') }}</El>,
                  <El>{{ $t('docs.export.hello2') }}</El>}
                </CodeBox>
              </div>
            </v-flex>
            <v-flex xs12 class="mb30">
              <div class="spacing">
                <Subtitle id="default">{{ $t('docs.export.default.title') }}</Subtitle>
                <p class="ft13 lTXTgrey">{{ $t('docs.export.default.subtitle') }}</p>
                <CodeBox>
                  <Key>export</Key>
                  <El>default</El>
                  <El>func</El>
                  <Func :name="$t('docs.export.hello')"></Func>{
                  <br />
                  <br />}
                </CodeBox>
                <p class="mt20 ft13 lTXTgrey">{{ $t('docs.export.default.subtitle2') }}</p>
                <CodeBox>
                  <Key>import</Key>
                  <El>{{ $t('docs.export.hello') }}</El>
                  <Key>from</Key>
                  <String>"./script.feno"</String>;
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
  Key,
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
    Key,
    Func,
    Comment,
    Doc,
    Head,
    Dmeta
  }
})
export default class Export extends Vue {
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
      { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
    ]);
    anchors.options = {
      placement: "left",
      icon: "#",
      truncate: 100
    };
  }
}
</script>