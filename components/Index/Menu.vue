<template>
    <div>
        <v-app-bar fixed flat app class="not" :class="vback">
            <img height="24" src="/logo.png" class="mr-2">
            <v-toolbar-title v-if="vtitle" :class="vcolor">
                <nuxt-link :to="localePath('index')" class="no-decors home-link">Gentpy</nuxt-link> | {{ vtitle }}
            </v-toolbar-title>
            <v-toolbar-title :class="vcolor" v-else>
                <nuxt-link :to="localePath('index')" class="no-decors home-link">Gentpy</nuxt-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-for="(item, index) in vbuttons" :key="index"
            :color="item.color" :class="item.classes" class="mr-2"
            :depressed="item.flat" :outlined="item.outlined"
            :to="localePath(item.route)">{{ item.text }}</v-btn>
        </v-app-bar>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';

const MenuModule = namespace('menu');

@Component

export default class Menu extends Vue {
    @MenuModule.State vtitle:any
    @MenuModule.State vback:any
    @MenuModule.State vcolor:any
    @MenuModule.State vbuttons:any
}
</script>