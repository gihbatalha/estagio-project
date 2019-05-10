<template>
    <v-container fluid grid-list-sm>
        <v-layout row wrap>
            <v-flex xs12 sm12 md12
                    elevation="1"
                    v-for="recurso in recursos" 
                    :key="recurso.name">
                
                <v-btn large router-link :to="recurso.routeTo">
                    {{recurso.name}}
                    <v-icon right v-if="recurso.icon" color="pink"> {{recurso.icon}} </v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data (){
        return {
            texto:"",
            recursos:[
                {
                    name:"Categorias",
                    routeTo:"/category",
                    icon:"category"
                },

                {
                    name:"Produtos",
                    routeTo:"/",
                    icon:"category"
                },
            ]
        }
    }
  }
</script>