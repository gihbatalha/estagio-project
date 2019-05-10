<template>
  <v-app>
    <v-card class="mx-auto" min-width="850">
      <v-container  grid-list-md>
        <v-layout row wrap>
          <v-toolbar color="blue darken-2" dark>
            <v-toolbar-title>Cadastro de Categorias</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-flex ma-4 xs12 sm12>
            <v-text-field v-model="category.name" label="Nome"></v-text-field>
          </v-flex>
          <v-btn @click="saveCategory(category)" color="info">Save</v-btn>
        </v-layout>
      </v-container>
    </v-card>
    <v-spacer></v-spacer>
    <v-card class="mx-auto" min-width="850">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-toolbar color="blue darken-2" dark>
            <v-toolbar-title>listagem de Categorias</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-flex ma-12 xs12 sm12>
            <v-data-table  
              :headers="headers"
              :items="categories"
              class="elevation-1">
              <template v-slot:items="props">
                <td xs-2> 
                  <v-checkbox
                    @change="checkItem(props.item)"
                    primary
                    hide-details
                  ></v-checkbox>
                </td>
                <td class="text-xs-left">{{ props.item._id }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">
                  <v-icon
                    small
                    class="ma-3"
                    @click="editMode(props.item._id, props.item)"
                  >
                  edit
                  </v-icon>
                  <v-icon
                    class="ma-3"
                    small
                    @click="deleteCategory(props.item._id)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>  
      </v-container>
    </v-card>
  </v-app>
</template>
<script>
  import {Categories} from '../controller/Categories'
  const controller = new Categories();

  export default {
    data () {
      return {
        editMode: false,
        category: {},
        categories: [],
        headers: [
          {
            text: '',
            sortable: false
          },
          {
            text: 'ID',
            sortable: false
          },
          {
            text: 'Category',
            sortable: false
          },
          {
            text: 'Actions',
            sortable: false
          }
        ]
      }
    },
    created() {
      this.getCategories();
      console.log("create list categories", this.$data.categories);
    },
    methods: {
      getCategories(){
        console.log("getCategories");
        let that = this;
        controller.getAll()
          .then((response) => {
            console.log("Response get All", response.data);
            this.$data.categories = response.data;
          }).catch(err => {
              console.log("Error get all:: ", err);
          })
      },
      saveCategory(category){
        console.log("Save category::", category);
        controller.save(category)
        .then((response) => {
          console.log("Response save category:: ", response);
        }).catch(err => {
          console.log("Error save category:: ", err);
        })
      },
      editMode(category){
        console.log("Edit mode");
        this.$data.category = category;
      },
      editCategory(id, category){
        console.log("Save category::", category);
        controller.update(id,category)
        .then((response) => {
          console.log("Response save category:: ", response);
        }).catch(err => {
          console.log("Error save category:: ", err);
        })
      },
      deleteCategory(idCategory){
        console.log("Save category::", idCategory);
        controller.delete(idCategory)
        .then((response) => {
          console.log("Response save category:: ", response);
        }).catch(err => {
          console.log("Error save category:: ", err);
        })
      },

    }
    
  }
</script>
