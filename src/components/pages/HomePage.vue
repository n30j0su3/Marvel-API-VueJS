<template>
    <div>
    <v-container id="content" class="lighten-5 background-app">
        <v-row no-gutters>
            <v-col cols="12" sm="6" offset="3" class="pa-2">
                <h2>{{ getPersonajes.attributionText }}</h2>
                <!-- No lo alcancé a implementar por tiempo =( -->
                <!--<search></search>-->
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col
                v-for="character in getPersonajes.data.results"
                :key="character.id"
                cols="12"
                sm="4"
                class="pa-2"
            >
            <v-card
            class="mx-auto"
            max-width="400"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="character.thumbnail.path + '.' + character.thumbnail.extension"
                >
                </v-img>
                <v-card-title>{{ character.name }}</v-card-title>
                <v-card-subtitle class="pb-0">
                    ID: {{ character.id }}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>Last Modified: {{ format_date(character.modified) }}</div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    color="red"
                    text
                    dark
                    @click.stop="$set(dialog, character.id, true)"
                >
                    More info
                </v-btn>
                <v-dialog
                v-model="dialog[character.id]"
                max-width="490"
                >
                    <v-card>
                        <v-card-title class="text-h5">
                            {{ character.name }}
                        </v-card-title>

                        <v-img
                        class="align-end"
                        height="300px"
                        :src="character.thumbnail.path + '.' + character.thumbnail.extension"
                        >
                        </v-img>

                        <v-card-text
                        v-if="character.description != ''">
                            {{ character.description }}
                        </v-card-text>
                        <v-card-text v-else>
                            Sorry this character doesnt description =(
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-list>
                            <v-list-group
                            v-if="character.events.items !=''">
                                <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title >Events </v-list-item-title>
                                </v-list-item-content>
                                </template>

                                <v-list-item
                                v-for="event in character.events.items"
                                :key="event['key']"
                                >
                                <v-list-item-content>
                                    <v-list-item-title>{{ event.name }}</v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list-group>
                            <v-list-group
                            v-if="character.series.items !=''">
                                <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title >Series </v-list-item-title>
                                </v-list-item-content>
                                </template>

                                <v-list-item
                                v-for="serie in character.series.items"
                                :key="serie['key']"
                                >
                                <v-list-item-content>
                                    <v-list-item-title>{{ serie.name }}</v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list-group>
                            <v-list-group
                            v-if="character.stories.items !=''">
                                <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title >Stories </v-list-item-title>
                                </v-list-item-content>
                                </template>

                                <v-list-item
                                v-for="storie in character.stories.items"
                                :key="storie['key']"
                                >
                                <v-list-item-content>
                                    <v-list-item-title>{{ storie.name }} - {{ storie.type }}</v-list-item-title>
                                </v-list-item-content>
                                </v-list-item>
                            </v-list-group>
                        </v-list>

                        <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="red darken-1"
                            text
                            @click="$set(dialog, character.id, false)"
                        >
                            Close
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import lodash from 'lodash';
//import search from './search.vue'
export default {
    name: 'home',
    //components: { search },
    data: () => ({
      dialog: {},
      personajes: [],
    }),
    methods:{
        ...mapActions(['getMarvelAPIContent','getMarvelAPIContentScroll']),
        format_date(value){
            if (value) {
            return moment(String(value)).format('DD/MM/YYYY')
            }
        },
        nextPage(){
            let currentCount = this.getPersonajes.data.results.length
            let nextCount = currentCount + 20
            this.getMarvelAPIContentScroll('v1/public/characters?limit=20&offset=' + nextCount);
        },
    },
    computed:{
        ...mapGetters(['getPersonajes']),
    },
    async mounted(){
        await this.getMarvelAPIContent('v1/public/characters');
        const vm = this;
        window.onscroll = lodash.debounce(function () {
            let distanceFromBottom =
            document.body.scrollHeight - window.innerHeight - window.scrollY;
            if (distanceFromBottom < 400){
                vm.nextPage()
            }
        }, 300, {leading: true})
    }
}
</script>
<style scoped>
    .background-app{ color:black}
    #content h2{color:white;}
    .theme--dark.v-card {background-color: #1e1e1e00;}
</style>
