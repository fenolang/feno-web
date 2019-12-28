<template>
    <div>
        <v-app-bar fixed flat app class="not" :class="vback">
            <img height="24" src="/logo1.png" class="mr-2">
            <v-toolbar-title v-if="vtitle" :class="vcolor">
                <nuxt-link :to="localePath('index')" class="no-decors home-link">Feno</nuxt-link> | {{ vtitle }}
            </v-toolbar-title>
            <v-toolbar-title :class="vcolor" v-else>
                <nuxt-link :to="localePath('index')" class="no-decors home-link">Feno</nuxt-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn v-for="(item, index) in vbuttons" :key="index"
                :color="item.color" :class="item.classes" class="mr-2"
                :depressed="item.flat" :outlined="item.outlined"
                :to="localePath(item.route)">{{ item.text }}</v-btn>
            </span>
            <span v-if="$vuetify.breakpoint.smAndDown">
                <v-btn icon class="TXTblack" @click="mobileMenu = true">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </span>
        </v-app-bar>
        <v-navigation-drawer app temporary v-model="mobileMenu">
            <v-layout row wrap>
                <v-flex xs12>
                    <div class="pt20 pl30">
                        <p class="ft bold ft18">Inicio</p>
                        <router-link :to="localePath('about')"><p class="link">Acerca De</p></router-link>
                        <router-link :to="localePath('docs')"><p class="link">Documentación</p></router-link>
                        <router-link :to="localePath('roadmap')"><p class="link">Ruta del proyecto</p></router-link>
                        <router-link :to="localePath('faq')"><p class="link">FAQ</p></router-link>
                    </div>
                </v-flex>
                <v-flex xs12 v-if="isOnDocs">
                    <v-divider></v-divider>
                </v-flex>
                <v-flex xs12 v-if="isOnDocs">
                    <div class="pt20 pl10 pb20">
                        <p class="ft pl20 bold ft18">Documentación</p>
                        <DocsMenu/>            
                    </div>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import DocsMenu from '@/components/Docs/Menu.vue';

const MenuModule = namespace('menu');

@Component({
    components: {
        DocsMenu
    }
})

export default class Menu extends Vue {
    @MenuModule.State vtitle:any
    @MenuModule.State vback:any
    @MenuModule.State vcolor:any
    @MenuModule.State vbuttons:any

    mobileMenu: boolean = false;

    get isOnDocs(): boolean {
        let route = this.$route.path;
        if (route.indexOf('docs') != -1)
            return true
        else
            return false
    }

}
</script>