<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="spacing pt20">
          <p class="ft35 bold">{{ $t('docs.cond.title') }}</p>
          <p
            class="ft13 lTXTgrey"
          >{{ $t('docs.cond.subtitle') }}</p>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="spacing">
          <Title id="if">{{ $t('docs.cond.if.title') }}</Title>
          <p
            class="ft13 lTXTgrey"
          >{{ $t('docs.cond.if.subtitle') }}</p>
          <CodeBox>
            <Attr>new</Attr> <Func name="Feno"></Func>{ <br />
              <Tab /> <El>def</El> {{ $t('docs.cond.age') }} = <Attr>17</Attr>; <br />
              <Tab /> <El>if</El> ({{ $t('docs.cond.age') }} &lt;= <Attr>17</Attr>) { <br />
                  <Tab /><Tab /> <Func name="print"><String>"{{ $t('docs.cond.menor') }}"</String></Func> <br>
              <Tab/>}
            <br />}
          </CodeBox>
          <p class="ft13 lTXTgrey mt20">
              {{ $t('docs.cond.if.result') }}
          </p>
        </div>
      </v-flex>
      <v-flex xs12>
          <div class="spacing">
              <Title id="else">{{ $t('docs.cond.else.title') }}</Title>
              <p class="ft13 lTXTgrey">
                  {{ $t('docs.cond.else.subtitle') }}
              </p>
              <CodeBox>
                  <Attr>new</Attr> <Func name="Feno"></Func>{ <br />
                      <Tab /> <El>def</El> {{ $t('docs.cond.age') }} = <Attr>17</Attr>; <br />
                      <Tab /> <El>if</El> ({{ $t('docs.cond.age') }} &lt;= <Attr>17</Attr>) { <br />
                          <Tab /><Tab /> <Func name="print"><String>"{{ $t('docs.cond.menor') }}"</String></Func> <br>
                      <Tab/>} <El>else</El> { <br>
                          <Tab/><Tab/> <Func name="print"><String>"{{ $t('docs.cond.mayor') }}"</String></Func> <br>
                      <Tab/>} <br>
                  }
              </CodeBox>
          </div>
      </v-flex>
      <v-flex xs12 class="mb30">
          <div class="spacing">
              <Title id="elif">{{ $t('docs.cond.elif.title') }}</Title>
              <p class="ft13 lTXTgrey">
                  {{ $t('docs.cond.elif.subtitle') }}
              </p>
              <CodeBox>
                  <El>if</El> (x > y) { <br />
                      <Tab /> <Func name="print"><String>"{{ $t('docs.cond.xmayory') }}"</String></Func>; <br>
                  } <El>elif</El> (x == y) { <br>
                      <Tab/> <Func name="print"><String>"{{ $t('docs.cond.xigualy') }}</String></Func>; <br>
                  } <El>else</El> { <br>
                      <Tab/> <Func name="print"><String>"{{ $t('docs.cond.xmenory') }}"</String></Func>; <br>
                  } <br>
              </CodeBox>
              <p class="mt20 lTXTgrey">
                  {{ $t('docs.cond.elif.result') }}
              </p>
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
  Func
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
      { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
    ]);
    anchors.options = {
      placement: "left",
      icon: "#",
      truncate: 100
    };
    anchors.add('#if');
    anchors.add('#else');
    anchors.add('#elif');
  }
}
</script>