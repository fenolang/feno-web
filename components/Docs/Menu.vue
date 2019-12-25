<template>
  <div>
    <div class="pl20">
      <p class="ft16 bold txt-dk mb-1">{{ $t('docs.menu.intro') }}</p>
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
        <p class="ft13 link mb-1">
          <Tab />Cactus CLI
        </p>
      </router-link>
      <router-link :to="localePath('docs-installation')+'#scratch'" v-if="onInstallation">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.install_scratch') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-directory_structure')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.directory_structure') }}</p>
      </router-link>
      <router-link
        :to="localePath('docs-directory_structure')+'#directories'"
        v-if="onDirectoryStructure"
      >
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.directories') }}
        </p>
      </router-link>
      <router-link
        :to="localePath('docs-directory_structure')+'#files'"
        v-if="onDirectoryStructure"
      >
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.files') }}
        </p>
      </router-link>
      <p class="ft16 bold txt-dk mt-2 mb-1">Getting Started</p>
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
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.meta.structure') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')+'#description'" v-if="onMeta">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.meta.desc') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')+'#author'" v-if="onMeta">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.meta.author') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_elements')+'#functions'" v-if="onMeta">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.meta.functions') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-feno_class')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.feno_class.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-feno_class')+'#starting'" v-if="onFenoClass">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.feno_class.start') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-feno_class')+'#hello-world'" v-if="onFenoClass">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.feno_class.hw') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-feno_class')+'#better-hw'" v-if="onFenoClass">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.feno_class.better_hw') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-feno_class')+'#print-and-msg'" v-if="onFenoClass">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.feno_class.functions') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.msf.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#meaning'" v-if="onMsf">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.msf.what') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#why'" v-if="onMsf">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.msf.why') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#how'" v-if="onMsf">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.msf.how') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#starting'" v-if="onMsf">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.msf.starting') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-meta_single_files')+'#default'" v-if="onMsf">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.msf.default') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-components')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.comps.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-props')">
        <p class="ft13 link mb-1">Props</p>
      </router-link>
      <router-link :to="localePath('docs-layouts')">
        <p class="ft13 link mb-1">Layouts</p>
      </router-link>
      <router-link :to="localePath('docs-layouts')+'#appview'" v-if="onLayouts">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.layouts.app') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-layouts')+'#layout'" v-if="onLayouts">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.layouts.prop') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.attr') }}</p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#click'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Click
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#keyup'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />keyUp
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#keydown'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />keyDown
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#name'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Name
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#id'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Id
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#class'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Class
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#type'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Type
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#to'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />To
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#src'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Src
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#size'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Size
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#width'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Width
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#height'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Height
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#newtab'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />newTab
        </p>
      </router-link>
      <router-link :to="localePath('docs-attributes')+'#val'" v-if="onAttr">
        <p class="ft13 link mb-1">
          <Tab />Val
        </p>
      </router-link>
      <router-link :to="localePath('docs-img')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.img_func') }}</p>
      </router-link>
      <router-link :to="localePath('docs-variables')">
        <p class="ft13 link mb-1">Variables</p>
      </router-link>
      <router-link :to="localePath('docs-variables')+'#def'" v-if="onVariables">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.variables.def') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-variables')+'#const'" v-if="onVariables">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.variables.const') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-typing')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.type') }}</p>
      </router-link>
      <router-link :to="localePath('docs-typing')+'#string'" v-if="onTyping">
        <p class="ft13 link mb-1">
          <Tab />String
        </p>
      </router-link>
      <router-link :to="localePath('docs-typing')+'#number'" v-if="onTyping">
        <p class="ft13 link mb-1">
          <Tab />Number
        </p>
      </router-link>
      <router-link :to="localePath('docs-typing')+'#bool'" v-if="onTyping">
        <p class="ft13 link mb-1">
          <Tab />Boolean
        </p>
      </router-link>
      <router-link :to="localePath('docs-typing')+'#array'" v-if="onTyping">
        <p class="ft13 link mb-1">
          <Tab />Array
        </p>
      </router-link>
      <router-link :to="localePath('docs-typing')+'#obj'" v-if="onTyping">
        <p class="ft13 link mb-1">
          <Tab />Object
        </p>
      </router-link>
      <router-link :to="localePath('docs-typing')+'#any'" v-if="onTyping">
        <p class="ft13 link mb-1">
          <Tab />Any
        </p>
      </router-link>
      <router-link :to="localePath('docs-classes')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.class.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-classes')+'#create'" v-if="onClasses">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.class.create') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-classes')+'#super'" v-if="onClasses">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.class.super') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-functions')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.func.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-functions')+'#create'" v-if="onFunctions">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.func.create') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-functions')+'#params'" v-if="onFunctions">
        <p class="ft13 link mb-1">
          <Tab />
          {{ $t('docs.menu.func.params') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-conditionals')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.condition') }}</p>
      </router-link>
      <router-link :to="localePath('docs-conditionals')+'#if'" v-if="onConditionals">
        <p class="ft13 link mb-1">
          <Tab />If
        </p>
      </router-link>
      <router-link :to="localePath('docs-conditionals')+'#else'" v-if="onConditionals">
        <p class="ft13 link mb-1">
          <Tab />Else
        </p>
      </router-link>
      <router-link :to="localePath('docs-conditionals')+'#elif'" v-if="onConditionals">
        <p class="ft13 link mb-1">
          <Tab />Elif
        </p>
      </router-link>
      <router-link :to="localePath('docs-scripts')">
        <p class="ft13 link mb-1">Scripts</p>
      </router-link>
      <router-link :to="localePath('docs-import')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.import') }}</p>
      </router-link>
      <router-link :to="localePath('docs-export')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.export.name') }}</p>
      </router-link>
      <router-link :to="localePath('docs-export')+'#normal'" v-if="onExport">
        <p class="ft13 link mb-1">
          <Tab />{{ $t('docs.menu.export.normal') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-export')+'#default'" v-if="onExport">
        <p class="ft13 link mb-1">
          <Tab />{{ $t('docs.menu.export.def') }}
        </p>
      </router-link>
      <router-link :to="localePath('docs-crystals')">
        <p class="ft13 link mb-1">Crystals</p>
      </router-link>
      <router-link :to="localePath('docs-config-file')">
        <p class="ft13 link mb-1">{{ $t('docs.menu.config') }}</p>
      </router-link>
      <router-link :to="localePath('docs-node')">
        <p class="ft13 link mb-1">Feno with Node</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Tab } from "@/components/Code/index";

@Component({
  components: {
    Tab
  }
})
export default class Menu extends Vue {
  onInstallation: boolean = false;
  onDirectoryStructure: boolean = false;
  onMeta: boolean = false;
  onFenoClass: boolean = false;
  onMsf: boolean = false;
  onLayouts: boolean = false;
  onAttr: boolean = false;
  onVariables: boolean = false;
  onClasses: boolean = false;
  onFunctions: boolean = false;
  onTyping: boolean = false;
  onConditionals: boolean = false;
  onExport: boolean = false;

  created() {
    let path: string = this.$route.path;
    if (path == "/docs/installation" || path == "/es/docs/installation") {
      this.onInstallation = true;
    } else if (
      path == "/docs/directory_structure" ||
      path == "/es/docs/directory_structure"
    ) {
      this.onDirectoryStructure = true;
    } else if (path.indexOf("meta_elements") != -1) {
      this.onMeta = true;
    } else if (path.indexOf("feno_class") != -1) {
      this.onFenoClass = true;
    } else if (path.indexOf("meta_single_files") != -1) {
      this.onMsf = true;
    } else if (path.indexOf("layouts") != -1) {
      this.onLayouts = true;
    } else if (path.indexOf("attributes") != -1) {
      this.onAttr = true;
    } else if (path.indexOf("variables") != -1) {
      this.onVariables = true;
    } else if (path.indexOf("classes") != -1) {
      this.onClasses = true;
    } else if (path.indexOf("functions") != -1) {
      this.onFunctions = true;
    } else if (path.indexOf("typing") != -1) {
      this.onTyping = true;
    } else if (path.indexOf("conditionals") != -1) {
      this.onConditionals = true;
    } else if (path.indexOf("export") != -1) {
      this.onExport = true;
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