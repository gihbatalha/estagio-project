<template>
  <v-app id="inspire">
    <v-toolbar
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down"> Estágio BraveInnov </span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-layout justify-center align-center>
            <router-view/>
        </v-layout>
      </v-container>
    </v-content>

    <v-btn fab fixed right bottom color="orange" router-link to="/">
        <v-icon> home </v-icon>
    </v-btn>
    </v-app>
</template>

<script>
  export default {
    data (){
        return {

        }
    }
  }
</script>