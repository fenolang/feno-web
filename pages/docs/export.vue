<template>
  <div>
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
            <El>fun</El>
            {{$t('docs.export.hello')}}:
            <br />
            <br />}
          </CodeBox>
          <CodeBox class="mt20">
            <El>fun</El>
            {{$t('docs.export.hello')}}:
            <br />
            <br />}
            <br />
            <El>fun</El>
            {{$t('docs.export.hello2')}}:
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
            <El>fun</El>
            {{$t('docs.export.hello')}}:
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
  </div>
</template>

<script>
const anchorJS = require('anchor-js');
import { page } from '@/mixins/index'

export default {
    layout: 'doc',
    mixins: [page],

    mounted() {
        const anchors = new anchorJS();
        anchors.options = {
            placement: 'left',
            icon: "#",
            truncate: 100
        };
    }
}
</script>