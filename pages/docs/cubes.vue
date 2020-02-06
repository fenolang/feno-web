<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="spacing pt20">
          <p class="ft35 bold">Cubes</p>
          <p class="ft13 lTXTgrey">{{ $t('docs.cubes.subtitle') }}</p>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="spacing">
          <Title>{{ $t('docs.cubes.code_change') }}</Title>
          <Subtitle>{{ $t('docs.cubes.normal.title') }}</Subtitle>
          <p
            class="ft13 lTXTgrey"
          >{{ $t('docs.cubes.normal.subtitle') }}</p>
          <CodeBox>
            <El>fun</El> {{$t('docs.cubes.func1')}}: <br />
            <Tab /> <Func :name="$t('docs.cubes.res')"><Attr>1</Attr></Func>; <br />
            } <br /> <br />
            <El>fun</El> {{$t('docs.cubes.func2')}}: <br>
              <Tab/> <Func :name="$t('docs.cubes.res')"><Attr>2</Attr></Func>; <br>
            } <br> <br>
              <El>fun</El> {{$t('docs.cubes.res')}}(res): <br>
                  <Tab/> <El>if</El> res == 1: <br>
                      <Tab/><Tab/> <Func :name="$t('docs.cubes.hello')"></Func>; <br>
                  <Tab/>} <El>elif</El> res == 2: <br>
                      <Tab/><Tab/> <Func :name="$t('docs.cubes.bye')"></Func>; <br>
                  <Tab/>} <br>
              }
          </CodeBox>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="spacing">
          <Subtitle>{{ $t('docs.cubes.with.title') }}</Subtitle>
          <CodeBox>
              <El>fun</El> <Fun>{{$t('docs.cubes.func1')}}</Fun>: <br />
              <Tab /> <Attr>mycube</Attr>.<Func name="send"><String>"res"</String>, <String>"{{ $t('docs.cubes.hello') }}()"</String></Func><br />
              } <br /> <br />
              <El>fun</El> <Fun>{{$t('docs.cubes.func2')}}:</Fun> <br>
                  <Tab/> <Attr>mycube</Attr>.<Func name="send"><String>"res"</String>, <String>"{{ $t('docs.cubes.bye') }}()"</String></Func> <br>
              } <br> <br>
              <El>declare Cube</El> mycube: <br>
                <Tab/> <Func name="wait"><String>res</String></Func> <br>
                <!--<Tab/> <Attr>Cubes</Attr>.<Func name="exec"><String>"res"</String></Func> <br>-->
              }
          </CodeBox>
          <p class="mt20 ft13 lTXTgrey" v-html="$t('docs.cubes.with.subtitle')"></p>
        </div>
      </v-flex>
      <v-flex xs12>
          <div class="spacing">
              <Title>{{ $t('docs.cubes.need.title') }}</Title>
              <p class="ft15 lTXTgrey">
                  {{ $t('docs.cubes.need.subtitle') }}
              </p>
          </div>
      </v-flex>
      <v-flex xs12 class="mb30">
          <div class="spacing">
              <v-alert type="warning" border="left" outlined>
                  {{ $t('docs.cubes.need.alert') }}
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
  Key,
  Fun
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
    Key,
    Fun
  }
})
export default class Cubes extends Vue {
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
        text: this.$t("btns.roadmap")
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