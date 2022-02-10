<template>
    <div>
        <v-app-bar
        dense color="#202020"
        dark>
        <h1><span>Marvel API</span> - Test by N30j0su3</h1>
        <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>-->
        <v-spacer></v-spacer>
        <!--<v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>-->
         <template v-slot:extension>
             <v-tabs class="v-tabs-bar">
                 <v-tab><router-link :to="{ name: `Home` }">Inicio</router-link></v-tab>
                 <v-tab><router-link :to="{ name: `numerosPrimos` }">Ejercicio 1</router-link></v-tab>
                 <v-tab><router-link :to="{ name: `jsonConvert` }">Ejercicio 2</router-link></v-tab>
                 
             </v-tabs>
         </template>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>

<style lang="scss" scoped>
a{text-decoration: none;}
.v-application a {
    color: #ffffff99;
}
.v-toolbar__content h1 span{
    color:red;
    font-weight: bold;
}
v-app-bar{
    display: flex;
}
/*.v-tabs-bar{ float: right !important;}
.v-tab{text-transform: none !important;}*/
</style>