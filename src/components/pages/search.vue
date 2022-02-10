<template>
    <div>
        <v-card
        dark>
            <v-card-text>
            <v-autocomplete
                v-model="name"
                :items="getSearch.data.results"
                :loading="isLoading"
                :search-input.sync="name"
                color="white"
                hide-no-data
                hide-selected
                item-text="Description"
                item-value="API"
                label="Search Character by name"
                placeholder="Start typing to Search"
                prepend-icon="mdi-database-search"
                return-object
            ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
            <v-list
                v-if="name"
                class="red lighten-3"
            >
                <v-list-item
                v-for="character in getSearch.data.results"
                :key="character.id"
                >
                <v-list-item-content>
                    <v-list-item-title v-text="character.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="character.name"></v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-expand-transition>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                :disabled="!name"
                color="grey darken-3"
                @click="name = null"
            >
                Clear
                <v-icon right>
                mdi-close-circle
                </v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        data: () => ({
            name: '',
            isLoading: false,
        }),
        computed:{
            ...mapGetters(['getSearch']),
        },
        methods:{
            ...mapActions(['getMarvelAPIContentSearch']),
            async searchByName(){
                await this.getMarvelAPIContentSearch('v1/public/characters?nameStartsWith='+this.name);
            }
        },
        /*async mounted(){
            await this.getMarvelAPIContentSearch('v1/public/characters?nameStartsWith='+this.name);
        },*/
        watch: {
            searchByName () {
                // Items have already been loaded
                if (this.getSearch != '') return
                // Items have already been requested
                if (this.isLoading) return
                this.isLoading = true
                // Lazily load input items
                this.searchByName()
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>