<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12>
      <Banner />
    </v-flex>
    <v-flex xs12 class="mt20">
      <v-container grid-list-md>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.smAndDown">
          <v-flex xs10 md4>
            <p class="ft15 bold">
              Define your
              <span class="txt-dk">components</span>
            </p>
            <CodeBox>
              <Doc>
                <Tag>h1</Tag>This is my component<Tag>/h1</Tag> <br>
                <Tab/> <Tag>p <Attr>class</Attr>=<String>"myclass"</String></Tag>Hello Again<Tag>/p</Tag>
              </Doc>
            </CodeBox>
          </v-flex>
          <v-flex xs10 md4>
            <p class="ft15 bold">
              Define
              <span class="txt-dk">docs</span> and call your components
            </p>
            <CodeBox>
              <Doc>
                <Tag>h1</Tag>My Main Page<Tag>/h1</Tag> <br>
                <Tab/> <El>@call(</El>MyComponent<El>)</El>
              </Doc>
            </CodeBox>
          </v-flex>
          <v-flex xs10 md4>
            <p class="ft15 bold">
              Define your
              <span class="txt-dk">meta in single-files</span>
            </p>
            <CodeBox>
              <El>meta:</El> [ <br />
              <Tab/> <String>"author, YahirGNz"</String>, <br />
              <Tab/> <String>"description, This is my description"</String> <br />
              ]
            </CodeBox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 class="mt30">
      <div class="pt30 center-txt">
        <p class="ft30 bold ft-dk">
          {{ $t('index.what') }}
          <span class="txt-dk">Feno</span>?
        </p>
      </div>
    </v-flex>
    <v-flex xs12 class="mb-4">
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md6>
            <v-img width="200" src="/draw/mac.png" class="center-this"></v-img>
          </v-flex>
          <v-flex xs10 md6>
            <div class="pt30">
              <p class="lTXTgrey" v-html="$t('index.what_content')"></p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 class="mt50 mb50">
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md4 v-for="(item, index) in $t('index.cards')" :key="index">
            <v-card outlined>
              <v-img :src="item.image"></v-img>
              <div class="pl20 pr20 pb10">
                <p class="ft20 ft-dk bold mb-1">{{ item.title }}</p>
                <p class="ft12 lTXTgrey">{{ item.content }}</p>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 class="mt-4 mb50">
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md6>
            <div>
              <p class="ft40 bold ft-dk">{{ $t('index.support.title') }}</p>
              <p>{{ $t('index.support.sub') }}</p>
              <v-btn class="shadows bg dk">{{ $t('btns.support') }}</v-btn>
            </div>
          </v-flex>
          <v-flex xs10 md6>
            <v-img class="center-this" width="300" src="/draw/transfer_money.png"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12>
      <div class="h350 black pt40 pb30 center-txt">
        <p class="ft30 bold dk">{{ $t('suscribe.title') }}</p>
        <p class="dk">{{ $t('suscribe.subtitle') }}</p>
        <div class="bform">
          <v-text-field :label="$t('suscribe.email_label')" color="teal accent-4" dark outlined></v-text-field>
        </div>
        <v-btn depressed class="bg dk bold">{{ $t('suscribe.btn') }}</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";
import Banner from "@/components/Index/Banner.vue";
// Editor components ->
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';
// <- ---- ->

const MenuModule = namespace("menu");

@Component({
  components: {
    Banner,
    CodeBox, Tag, Tab, El, String, Mark, Attr,
    Doc, Head, Dmeta,
  }
})
export default class Index extends Vue {
  @MenuModule.Action setConfig: any;
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
        text: this.$t("btns.roadmap"),
        route: "roadmap"
      },
      { id: 3, classes: "border-btn", outlined: true, text: "FAQ", route: "faq" }
    ]);
  }
}
</script>

<style scoped>
.code {
  font-family: "Consolas" !important;
  font-size: 13px;
}
</style>
