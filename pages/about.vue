<template>
    <div>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <p class="ft50 bold ft-dk">{{ $t('about.title') }}</p>
                </v-flex>
                <v-flex xs12>
                    <v-layout row wrap>
                        <v-flex xs2>
                            <v-img src="/gnz.jpg" class="profile"></v-img>
                        </v-flex>
                        <v-flex xs10>
                            <p v-html="$t('about.content')">
                            </p>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12>
                    <p class="ft20 bold">{{ $t('about.find_me') }}</p>
                    <v-btn class="shadows dk mr-2" color="blue" href="https://twitter.com/YahirGNz" target="_blank">
                        <v-icon class="mr-3">mdi-twitter</v-icon>
                        Twitter
                    </v-btn>
                    <v-btn class="shadows dk bg-dk mr-2" href="https://github.com/YahirGNz" target="_blank">
                        <v-icon class="mr-3">mdi-github-circle</v-icon>
                        Github
                    </v-btn>
                    <v-btn color="green accent-4" class="shadows dk" href="https://medium.com/@yahirgnnz" target="_blank">
                        <v-icon class="mr-3">mdi-medium</v-icon>
                        Medium
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';

const MenuModule = namespace('menu');

@Component

export default class About extends Vue {
    @MenuModule.Action setButtons : any

    mounted() {
        this.setButtons([
            { id: 0, classes: "border-btn", outlined: true, text: this.$t('btns.about'), route: "about" },
            { id: 1, classes: "bg3 shadows dk", text: this.$t('btns.docs'), route: "docs" },
            { id: 2, classes: "border-btn", outlined: true, text: this.$t('btns.examples') },
            { id: 3, classes: "border-btn", outlined: true, text: "FAQ" }
        ])
    }
}

</script>

<style scoped>
    .profile {
        border: 3px solid #0DBC82 !important;
        border-radius: 4px;
    }
</style>