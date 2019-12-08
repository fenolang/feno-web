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
        <p class="ft13 link mb-1">&nbsp;&nbsp;&nbsp;&nbsp;Cactus CLI</p>
      </router-link>
      <router-link :to="localePath('docs-installation')+'#scratch'" v-if="onInstallation">
        <p class="ft13 link mb-1">&nbsp;&nbsp;&nbsp;&nbsp;{{ $t('docs.menu.install_scratch') }}</p>
      </router-link>
      <router-link :to="localePath('docs-directory_structure')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.directory_structure') }}</p>
      </router-link>
      <router-link :to="localePath('docs-directory_structure')+'#directories'" v-if="onDirectoryStructure">
        <p class="ft13 link mb-1">&nbsp;&nbsp;&nbsp;&nbsp;{{ $t('docs.menu.directories') }}</p>
      </router-link>
      <router-link :to="localePath('docs-directory_structure')+'#files'" v-if="onDirectoryStructure">
        <p class="ft13 link mb-1">&nbsp;&nbsp;&nbsp;&nbsp;{{ $t('docs.menu.files') }}</p>
      </router-link>
      <p class="ft16 bold ft-green mt-2 mb-1">Getting Started</p>
      <router-link :to="localePath('docs-doc_instance')">
        <p class="ft13 link mb-1">Document Instance</p>
      </router-link>
      <router-link :to="localePath('docs-head_instance')">
        <p class="ft13 link mb-1">Head Instance</p>
      </router-link>
      <router-link :to="localePath('docs-styles_instance')">
        <p class="ft13 link mb-1">Styles Instance</p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')">
        <p class="ft13 link mb-1">Meta Elements</p>
      </router-link>
      <router-link :to="localePath('docs-attributes')">
        <p class="ft13 link mb-1">The Daft Class</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component

  export default class Menu extends Vue {
    onInstallation:boolean = false;
    onDirectoryStructure:boolean = false;

    created() {
      let path:string = this.$route.path;
      if (path == "/docs/installation" || path == "/es/docs/installation") {
        this.onInstallation = true;
      } else if (path == "/docs/directory_structure" || path == "/es/docs/directory_structure") {
        this.onDirectoryStructure = true;
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