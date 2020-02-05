<template>
    <div>
        <v-app-bar fixed flat app class="not STblack">
            <nuxt-link :to="localePath('index')" style="line-height:0;">
                <img height="30" src="/cream-logo.png">
            </nuxt-link>
            <v-spacer></v-spacer>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text color="white" :to="localePath('about')" class="bold menu-link">{{ $t('btns.about') }}</v-btn>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text color="white" :to="localePath('docs')" class="bold menu-link">{{ $t('btns.docs') }}</v-btn>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text color="white" :to="localePath('roadmap')" class="bold menu-link">{{ $t('btns.roadmap') }}</v-btn>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text color="white" :to="localePath('faq')" class="bold menu-link">FAQ</v-btn>
            <v-btn v-if="$vuetify.breakpoint.smAndDown" icon color="white" class="menu-link" @click="mobileMenu = true">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app temporary v-model="mobileMenu">
            <v-layout row wrap>
                <v-flex xs12>
                    <div class="pt20 pl30">
                        <p class="ft bold ft18">Inicio</p>
                        <router-link :to="localePath('about')"><p class="link">{{ $t('btns.about') }}</p></router-link>
                        <router-link :to="localePath('docs')"><p class="link">{{ $t('btns.docs') }}</p></router-link>
                        <router-link :to="localePath('roadmap')"><p class="link">{{ $t('btns.roadmap') }}</p></router-link>
                        <router-link :to="localePath('faq')"><p class="link">FAQ</p></router-link>
                    </div>
                </v-flex>
                <v-flex xs12 v-if="isOnDocs">
                    <v-divider></v-divider>
                </v-flex>
                <v-flex xs12 v-if="isOnDocs">
                    <div class="pt20 pl10 pb20">
                        <p class="ft pl20 bold ft18">{{ $t('btns.docs') }}</p>
                        <DocsMenu/>            
                    </div>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>
    </div>
</template>

<style scoped>
.menu-link:hover {
    color: #F6AF91 !important;
}
</style>

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