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
        <v-layout row wrap :justify-center="mdAndDown">
          <v-flex xs10 md6>
            <v-img width="430" contain src="/api1-0.png" class="center-this" title="Este es un ejemplo realizado en Feno v2.0.0"></v-img>
          </v-flex>
          <v-flex xs10 md6>
            <div class="pt30 spacing">
              <p class="lTXTgrey" v-html="$t('index.what_content')"></p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex lg6 class="mt50">
      <v-container grid-list-lg>
        <div class="spacing-1 pl50">
          <p class="ft100 ft-medium">Easier</p>
          <p class="ft16">Feno es una extensión de JavaScript, todo se sigue realizando de la misma manera. Feno es un toque fresco, es un paquete de funcionalidades nuevas pero conservando siempre la magia de la facilidad.</p>
        </div>
      </v-container>
    </v-flex>
    <v-flex lg6>
      <img src="/js-and-feno.png" width="200" class="center-this" :class="mdAndDown ? 'w150': ''">
    </v-flex>
    <v-flex lg6 v-if="pcAndUp">
      <img src="/component_declaration.png" class="center-this">
    </v-flex>
    <v-flex lg6 class="mt50">
      <v-container>
        <div class="spacing-1 pl50">
          <p class="ft100 ft-medium">Better</p>
          <p class="ft16">Feno implementa nuevas funcionalidades como el tipado fuerte, ahora cada variable lleva un tipo asignado y esto reduce la presencia de errores a futuro en proyectos escalables. ¿Alguien quiere crear un componente? ¡Hazlo en Feno! Sólo te toma 3 líneas de código mientras que en JavaScript serán +70 líneas.</p>
        </div>
      </v-container>
    </v-flex>
    <v-flex lg6 v-if="mdAndDown">
      <img src="/component_declaration.png" class="center-this" :class="mdAndDown ? 'w400': ''">
    </v-flex>
    <v-flex lg6 class="mt50">
      <v-container>
        <div class="spacing-1 pl50">
          <p class="ft-medium ft100">Faster</p>
          <p class="ft16">El tiempo de compilación promedio de Feno es tan sólo de 3.0 milisegundos, trabajamos muy seriamente en mantener un tiempo de compilación que te permita desarrollar tu proyecto con cómodidad y velocidad.</p>
        </div>
      </v-container>
    </v-flex>
    <v-flex lg6>
      <img src="/compilation-time.png" class="center-this" :class="mdAndDown ? 'w400': ''">
    </v-flex>
    <v-flex lg6 v-if="pcAndUp">
      <img src="/console-error.png" class="center-this">
    </v-flex>
    <v-flex lg6>
      <v-container>
        <div class="spacing-1 pl50">
          <p class="ft-medium ft100">Stronger</p>
          <p class="ft16">Feno cuenta con una detección de errores eficaz, rápida y funcional al máximo. Cada vez que se detecta un error puedes ver qué estás haciendo mal, cómo solucionarlo y saber dónde puedes obtener más información sobre lo que debes hacer.</p>
        </div>
      </v-container>
    </v-flex>
    <v-flex lg6 v-if="mdAndDown">
      <img src="/console-error.png" class="center-this" :class="mdAndDown ? 'w400': ''">
    </v-flex>
    <!-- INSTALL -->
    <v-flex xs12 class="mb50 mt70">
      <v-img height="600" src="/fox3.jpg" gradient="rgb(8, 8, 8, 0.9), rgb(0, 0, 0, 0.9)">
        <div class="pt80 center-txt">
          <p class="bold dk mb-0" :class="smAndDown ? 'ft50' : 'ft100'">Get Feno</p>
          <div class="spacing-movil">
            <p>Instala ahora mismo Feno en tu sistema con NodeJS</p>
            <v-layout row wrap justify-center class="mt50">
              <v-flex xs12 md2>
                <p class="bold">Instalar:</p>
                <v-img contain src="/install-cli.png" width="175" class="center-this"></v-img> <br>
              </v-flex>
              <v-flex xs12 md2>
                <p class="bold">Iniciar un proyecto:</p>
                <v-img contain src="/create-project.png" :width="smAndDown ? '250' : ''" class="center-this"></v-img>
              </v-flex>
            </v-layout>
            <v-btn depressed color="red accent-4" class="bold mt30" target="_blank" href="https://npmjs.com/feno">Visitar paquete en NPM</v-btn>
          </div>
        </div>
      </v-img>
    </v-flex>
    <!-- NEW SUPPORT -->
    <v-flex xs12 class="mb50">
      <v-container grid-list-lg>
        <v-layout row wrap :justify-center="mdAndDown">
          <v-flex xs10 md4>
            <v-card class="pt30 pb30">
              <div class="center-txt mb15">
                <v-avatar color="black" size="64">
                  📗 🦊
                </v-avatar>
              </div>
              <div class="center-txt pl50 pr50">
                <p class="bold ft20">Follow us on Medium</p>
                <p class="ft12">
                  ¡Estamos en Medium! Subimos noticias, novedades, tutoriales, notas, todo lo que necesitas para estar al tanto de lo que sucede en Feno. ¡Síguenos!
                </p>
                <v-btn depressed outlined color="green accent-3" class="mt15" target="_blank" href="https://medium.com/@fenolang">
                  Follow @fenolang
                </v-btn>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs10 md4>
            <v-card class="pt30 pb30">
              <div class="center-txt mb15">
                <v-avatar color="black" size="64">
                  💕 🦊
                </v-avatar>
              </div>
              <div class="center-txt pl50 pr50">
                <p class="bold ft20">{{ $t('index.support.title') }}</p>
                <p class="ft12">{{ $t('index.support.sub') }}</p>
                <v-btn depressed outlined class="border-btn mt15" :to="localePath('donate')">
                  {{ $t('btns.support') }}
                </v-btn>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs10 md4>
            <v-card class="pt30 pb30">
              <div class="center-txt mb15">
                <v-avatar color="black" size="64">
                  🌎 🦊
                </v-avatar>
              </div>
              <div class="center-txt pl50 pr50">
                <p class="bold ft20">Follow us on Twitter</p>
                <p class="ft12">¡Y estamos también en Twitter! Síguenos y disfruta de nuevas noticias antes que nadie. Entra a la conversación ahora mismo siguiendo este hashtag <a class="TXTblue" target="_blank" href="https://twitter.com/search?q=%23fenorules">#FenoRules</a></p>
                <v-btn depressed outlined class="mt15" color="blue" target="_blank" href="https://twitter.com/fenolang">
                  Follow @fenolang
                </v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
const anchorJS = require('anchor-js');
import Screens from '@/components/screens.vue'
import Banner from "@/components/Index/Banner.vue"
import { menu } from '@/mixins/index'

// Editor components ->
import { Tag, Tab, El, String, Attr, Comment, Mark, CodeBox, Fun, Key, Func } from '@/components/Code/index'
import { Doc, Head, Dmeta } from '@/components/Code/Instances/index'
// <- ---- ->

export default {
  components: {
    Banner,
    CodeBox, Tag, Tab, El, String, Mark, Attr, Fun, Key, Func, Comment,
    Doc, Head, Dmeta,
  },

  mixins: [menu, Screens],

  data: () => ({
    cards: [
      {
        title: "Easier", image: "/js-and-feno.png",
        text: `Feno es una extensión de JavaScript, todo se sigue realizando de la misma manera. Feno es un toque fresco, es un paquete de funcionalidades nuevas pero conservando siempre la magia de la facilidad.`
      },
      {
        title: "Better", image: "/component-declaration.png",
        text: `Feno implementa nuevas funcionalidades como el tipado fuerte, ahora cada variable lleva un tipo asignado y esto reduce la presencia de errores a futuro en proyectos escalables. ¿Alguien quiere crear un componente? ¡Hazlo en Feno! Sólo te toma 3 líneas de código mientras que en JavaScript serán +70 líneas.`
      },
      {
        title: "", image: "",
        text: `El tiempo de compilación promedio de Feno es tan sólo de 3.0 milisegundos, trabajamos muy seriamente en mantener un tiempo de compilación que te permita desarrollar tu proyecto con cómodidad y velocidad.`
      }
    ]
  })
}

</script>

<style scoped>
.code {
  font-family: "Consolas" !important;
  font-size: 13px;
}
</style>
