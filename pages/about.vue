<template>
    <div>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <p class="ft50 bold">{{ $t('about.title') }}</p>
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

<style scoped>
    .profile {
        border: 3px solid #FE612C !important;
        border-radius: 4px;
    }
</style>