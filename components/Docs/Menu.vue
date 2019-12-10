<template>
  <div>
    <div class="pl20">
      <p class="ft16 bold ft-green mb-1">{{ $t('docs.menu.intro') }}</p>
      <router-link :to="localePath('docs')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.what') }}</p>
      </router-link>
      <router-link :to="localePath('docs-ecosystem')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.ecosystem') }}</p>
      </router-link>
      <router-link :to="localePath('docs-lifecycle')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.lifecycle') }}</p>
      </router-link>
      <router-link :to="localePath('docs-installation')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.installation') }}</p>
      </router-link>
      <router-link :to="localePath('docs-installation')+'#cli'" v-if="onInstallation">
        <p class="ft13 link mb-1"><Tab/>Cactus CLI</p>
      </router-link>
      <router-link :to="localePath('docs-installation')+'#scratch'" v-if="onInstallation">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.install_scratch') }}</p>
      </router-link>
      <router-link :to="localePath('docs-directory_structure')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.directory_structure') }}</p>
      </router-link>
      <router-link :to="localePath('docs-directory_structure')+'#directories'" v-if="onDirectoryStructure">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.directories') }}</p>
      </router-link>
      <router-link :to="localePath('docs-directory_structure')+'#files'" v-if="onDirectoryStructure">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.files') }}</p>
      </router-link>
      <p class="ft16 bold ft-green mt-2 mb-1">Getting Started</p>
      <router-link :to="localePath('docs-doc_instance')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.doc') }}</p>
      </router-link>
      <router-link :to="localePath('docs-head_instance')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.head') }}</p>
      </router-link>
      <router-link :to="localePath('docs-styles_instance')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.styles') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.meta.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')+'#structure'" v-if="onMeta">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.meta.structure') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')+'#description'" v-if="onMeta">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.meta.desc') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')+'#author'" v-if="onMeta">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.meta.author') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')+'#functions'" v-if="onMeta">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.meta.functions') }}</p>
      </router-link>
      <router-link :to="localePath('docs-daft_class')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.daft_class.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-daft_class')+'#starting'" v-if="onDaftClass">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.daft_class.start') }}</p>
      </router-link>
      <router-link :to="localePath('docs-daft_class')+'#hello-world'" v-if="onDaftClass">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.daft_class.hw') }}</p>
      </router-link>
      <router-link :to="localePath('docs-daft_class')+'#better-hw'" v-if="onDaftClass">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.daft_class.better_hw') }}</p>
      </router-link>
      <router-link :to="localePath('docs-daft_class')+'#print-and-msg'" v-if="onDaftClass">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.daft_class.functions') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.msf.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#meaning'" v-if="onMsf">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.msf.what') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#why'" v-if="onMsf">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.msf.why') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#how'" v-if="onMsf">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.msf.how') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#starting'" v-if="onMsf">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.msf.starting') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#default'" v-if="onMsf">
        <p class="ft13 link mb-1"><Tab/>{{ $t('docs.menu.msf.default') }}</p>
      </router-link>
      <router-link :to="localePath('docs-components')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.comps.name') }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { Tab } from '@/components/Code/index';

  @Component({
    components: {
      Tab
    }
  })

  export default class Menu extends Vue {
    onInstallation:boolean = false;
    onDirectoryStructure:boolean = false;
    onMeta:boolean = false;
    onDaftClass:boolean = false;
    onMsf:boolean = false;

    created() {
      let path:string = this.$route.path;
      if (path == "/docs/installation" || path == "/es/docs/installation") {
        this.onInstallation = true;
      } else if (path == "/docs/directory_structure" || path == "/es/docs/directory_structure") {
        this.onDirectoryStructure = true;
      } else if (path.indexOf('meta_elements') != -1) {
        this.onMeta = true;
      } else if (path.indexOf('daft_class') != -1) {
        this.onDaftClass = true;
      } else if (path.indexOf('meta_single_files') != -1) {
        this.onMsf = true;
      }
    }
  }
</script>

<style>
  .link {
    color: #000 !important;
  }
  .link:hover {
    color: #2c6d57 !important;
  }
</style>