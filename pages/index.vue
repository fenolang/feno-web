<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12>
      <Banner />
    </v-flex>
    <v-flex xs12 class="mt30">
      <div class="pt30 center-txt">
        <p class="ft30 bold">
          {{ $t('index.what') }} Feno?
        </p>
      </div>
    </v-flex>
    <v-flex xs12 class="mb-4">
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md6>
            <v-img width="250" src="/laptop.png" class="center-this"></v-img>
          </v-flex>
          <v-flex xs10 md6>
            <div class="pt30 spacing">
              <p class="lTXTgrey" v-html="$t('index.what_content')"></p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 class="mt50 mb50">
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="center-txt">
              <p class="ft30 bold">Feno</p>
              <p class="ft15 lTXTgrey">{{ $t('index.cards.intro.text') }}</p>
            </div>
          </v-flex>
          <!-- PRIMER BLOQUE -->
          <v-flex md6 class="mb10">
            <div class="spacing-1">
              <v-img width="80" contain src="/scalability.png"></v-img>
              <p class="ft20 bold">{{ $t('index.cards.easy.title') }}</p>
              <p class="ft15 lTXTgrey">
                {{ $t('index.cards.easy.text') }}
              </p>
            </div>
          </v-flex>
          <v-flex md6 class="mb50">
            <div class="spacing-1 pt10">
              <CodeBox h="h200">
                <Key>fun</Key> <Fun>hello</Fun>: <br>
                  <Tab/> <Func name="print"><String>"Hello, World!"</String></Func> <br>
                } <br> <br>
                <Func name="hello"></Func> <br> <br>
                <Comment># Result:</Comment> <br>
                <Comment># > Hello, World!</Comment> <br>
              </CodeBox>
            </div>
          </v-flex>
          <!-- SEGUNDO BLOQUE -->

          <!-- MOVILES -->
          <v-flex md6 v-if="smAndDown">
            <div class="spacing-1">
              <v-img width="80" contain src="/power.png"></v-img>
              <p class="ft20 bold">{{ $t('index.cards.strong.title') }}</p>
              <p class="ft15 lTXTgrey">
                {{ $t('index.cards.strong.text') }}
              </p>
            </div>
          </v-flex>
          <!-- ****** -->

          <v-flex md6 class="mb50">
            <div class="spacing-1 pt10">
              <CodeBox>
                <Comment># MyComponent.feno</Comment> <br> <br>
                <El>declare</El> <Func name="Component"><String>"my-component"</String>, { <br>
                  <Tab/> <Tag>h1</Tag>Welcome to my website!<Tag>/h1</Tag> <br>
                  <Tab/> <Tag>p</Tag>Hello, World!<Tag>/p</Tag> <br>
                }</Func> <br> <br>
                <Comment># MyPage.feno</Comment> <br> <br>
                <Func name="@my-component"></Func>
              </CodeBox>
            </div>
          </v-flex>
          <v-flex md6 v-if="mdAndUp">
            <div class="spacing-1">
              <v-img width="80" contain src="/power.png"></v-img>
              <p class="ft20 bold">{{ $t('index.cards.strong.title') }}</p>
              <p class="ft15 lTXTgrey">
                {{ $t('index.cards.strong.text') }}
              </p>
            </div>
          </v-flex>
          <!-- TERCER BLOQUE -->
          <v-flex md6>
            <div class="spacing-1">
              <v-img width="80" contain src="/error-vigilance.png"></v-img>
              <p class="ft20 bold">{{ $t('index.cards.errors.title') }}</p>
              <p class="ft15 lTXTgrey">
                {{ $t('index.cards.errors.text') }}
              </p>
            </div>
          </v-flex>
          <v-flex md6>
            <div class="spacing-1 pt10">
              <CodeBox>
                <Key>fun</Key> <Fun>process</Fun>: <br>
                  <Tab/> <El>def</El> <Attr>String</Attr> variable = <String>"Hello, World!"</String> <br>
                  <Tab/> variable = <Attr>25</Attr> <br>
                  <Tab/> <Func name="print">variable</Func> <br>
                } <br> <br>
                <Func name="process"></Func> <br>
                <Comment># Result:</Comment> <br>
                <Comment># > ERROR!</Comment>
              </CodeBox>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <!-- SUPPORT -->
    <v-flex xs12 class="mt-4 mb80">
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="$vuetify.breakpoint.xsOnly">
          <v-flex xs10 md6>
            <div>
              <p class="ft40 bold ft-dk">{{ $t('index.support.title') }}</p>
              <p>{{ $t('index.support.sub') }}</p>
              <v-btn class="shadows bg dk" :to="localePath('donate')">{{ $t('btns.support') }}</v-btn>
            </div>
          </v-flex>
          <v-flex xs10 md6>
            <v-img class="center-this" width="300" src="/money.png"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <!-- SUSCRIBE -->
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
import Screens from '@/components/screens.vue';
import Banner from "@/components/Index/Banner.vue";
// Editor components ->
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Fun, Key, Func } from '@/components/Code/index';
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index';
// <- ---- ->

const MenuModule = namespace("menu");

@Component({
  components: {
    Banner,
    CodeBox, Tag, Tab, El, String, Mark, Attr, Fun, Key, Func, Comment,
    Doc, Head, Dmeta,
  },
  mixins: [Screens]
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
