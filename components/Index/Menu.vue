<template>
    <div>
        <v-app-bar flat app dense color="#000">
            <nuxt-link :to="localePath('index')" style="line-height:0;">
                <img height="30" src="/logo.png" v-if="!isSiamese">
                <img height="30" src="/slogo.png" v-else>
            </nuxt-link>
            <v-spacer></v-spacer>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text :to="localePath('about')"
            class="bold dk" :class="isSiamese ? 'slink' : 'menu-link'">{{ $t('btns.about') }}</v-btn>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text :to="localePath('docs')"
            class="bold dk" :class="isSiamese ? 'slink' : 'menu-link'">{{ $t('btns.docs') }}</v-btn>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text :to="localePath('roadmap')"
            class="bold dk" :class="isSiamese ? 'slink' : 'menu-link'">{{ $t('btns.roadmap') }}</v-btn>
            <v-btn v-if="$vuetify.breakpoint.mdAndUp" text :to="localePath('faq')"
            class="bold dk" :class="isSiamese ? 'slink' : 'menu-link'">FAQ</v-btn>
            <v-btn v-if="$vuetify.breakpoint.smAndDown" icon class="menu-link" @click="mobileMenu = true">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer app temporary v-model="mobileMenu">
            <v-layout row wrap>
                <v-flex xs12>
                    <div class="pt20 pl30">
                        <p class="ft0 bold ft18">Inicio</p>
                        <router-link :to="localePath('about')"><p class="menu-link">{{ $t('btns.about') }}</p></router-link>
                        <router-link :to="localePath('docs')"><p class="menu-link">{{ $t('btns.docs') }}</p></router-link>
                        <router-link :to="localePath('roadmap')"><p class="menu-link">{{ $t('btns.roadmap') }}</p></router-link>
                        <router-link :to="localePath('faq')"><p class="menu-link">FAQ</p></router-link>
                    </div>
                </v-flex>
                <v-flex xs12 v-if="isOnDocs">
                    <v-divider></v-divider>
                </v-flex>
                <v-flex xs12 v-if="isOnDocs">
                    <div class="pt20 pl10 pb20">
                        <p class="ft0 pl20 bold ft18">{{ $t('btns.docs') }}</p>
                        <DocsMenu/>
                    </div>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>
    </div>
</template>

<script>
const anchorJS = require('anchor-js');
import DocsMenu from '@/components/Docs/Menu.vue';

export default {
    components: {
        DocsMenu
    },
    data: () => ({
        mobileMenu: false
    }),
    computed: {
        isOnDocs() {
            let route = this.$route.path;
            if (route.indexOf('docs') != -1)
                return true
            else
                return false
        },

        isSiamese() {
            let route = this.$route.path;
            if (route.indexOf('siamese') != -1)
                return true
            else
                return false
        }
    }
}
</script>