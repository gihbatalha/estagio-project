<template>
    <v-card>
        <v-list>
            <v-list-tile
            v-for="recurso in recursos"
            :key="recurso.name"
            avatar
            router-link 
            :to="recurso.routeTo"
            >
                <v-list-tile-content>
                    <v-list-tile-title v-text="recurso.name"></v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-avatar>
                    <v-icon v-if="recurso.icon" color="pink"> {{recurso.icon}} </v-icon>
                </v-list-tile-avatar>
            </v-list-tile>
        </v-list>
    </v-card>
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
                }
            ]
        }
    }
  }
</script>