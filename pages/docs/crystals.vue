<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="spacing pt20">
          <p class="ft35 bold">Crystals</p>
          <p class="ft13 lTXTgrey">{{ $t('docs.crystals.subtitle') }}</p>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="spacing">
          <Title>{{ $t('docs.crystals.code_change') }}</Title>
          <Subtitle>{{ $t('docs.crystals.normal.title') }}</Subtitle>
          <p
            class="ft13 lTXTgrey"
          >{{ $t('docs.crystals.normal.subtitle') }}</p>
          <CodeBox>
            <El>func</El> <Func :name="$t('docs.crystals.func1')"></Func> { <br />
            <Tab /> <Func :name="$t('docs.crystals.res')"><Attr>1</Attr></Func>; <br />
            } <br /> <br />
            <El>func</El> <Func :name="$t('docs.crystals.func2')"></Func> { <br>
              <Tab/> <Func :name="$t('docs.crystals.res')"><Attr>2</Attr></Func>; <br>
            } <br> <br>
              <El>func</El> <Func :name="$t('docs.crystals.res')">res</Func> { <br>
                  <Tab/> <El>if</El> (res == 1) { <br>
                      <Tab/><Tab/> <Func :name="$t('docs.crystals.hello')"></Func>; <br>
                  <Tab/>} <El>elif</El> (res == 2) { <br>
                      <Tab/><Tab/> <Func :name="$t('docs.crystals.bye')"></Func>; <br>
                  <Tab/>} <br>
              }
          </CodeBox>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="spacing">
          <Subtitle>{{ $t('docs.crystals.with.title') }}</Subtitle>
          <CodeBox>
              <Key>import</Key> { <El>Crystals</El> } <Key>from</Key> <String>"feno"</String>; <br> <br>
              <El>func</El> <Func :name="$t('docs.crystals.func1')"></Func> { <br />
              <Tab /> <Attr>Crystals</Attr>.<Func name="send"><String>"res"</String>, <String>"{{ $t('docs.crystals.hello') }}()"</String></Func><br />
              } <br /> <br />
              <El>func</El> <Func :name="$t('docs.crystals.func2')"></Func> { <br>
                  <Tab/> <Attr>Crystals</Attr>.<Func name="send"><String>"res"</String>, <String>"{{ $t('docs.crystals.bye') }}()"</String></Func> <br>
              } <br> <br>
              <El>func</El> <Func :name="$t('docs.crystals.res')"></Func> { <br>
                  <Tab/> <Attr>Crystals</Attr>.<Func name="exec"><String>"res"</String></Func> <br>
              }
          </CodeBox>
          <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.crystals.with.subtitle')"></p>
        </div>
      </v-flex>
      <v-flex xs12>
          <div class="spacing">
              <Title>{{ $t('docs.crystals.need.title') }}</Title>
              <p class="ft15 lTXTgrey">
                  {{ $t('docs.crystals.need.subtitle') }}
              </p>
          </div>
      </v-flex>
      <v-flex xs12 class="mb30">
          <div class="spacing">
              <v-alert type="warning" border="left" outlined>
                  {{ $t('docs.crystals.need.alert') }}
              </v-alert>
          </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";
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
  layout: 'doc',
  components: {
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