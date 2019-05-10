<template>
  <v-app>
    <v-card v-if="addCategory" class="mx-auto" min-width="850">
      <v-container  grid-list-md>
        <v-layout row wrap>
          <v-toolbar color="blue darken-2" dark>
            <v-toolbar-title>Cadastro de Categorias</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-icon v-on="on" @click="close()" large dark right>cancel</v-icon>
            </template>
              <span>Fechar</span>
            </v-tooltip>
          </v-toolbar>
          <v-flex ma-4 xs12 sm12>
            <v-text-field v-model="category.name" label="Nome"></v-text-field>
          </v-flex>
          <v-btn v-if="mode !== false " @click="editCategory(category)" color="info">Alterar</v-btn>
          <v-btn v-else @click="saveCategory(category)" color="info">Salvar</v-btn>
        </v-layout>
      </v-container>
    </v-card>
    <v-card v-else class="mx-auto" min-width="850">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-toolbar color="blue darken-2" dark>
            <v-toolbar-title>Listagem de Categorias</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
            <template v-slot:activator="{ on }">
            <v-icon v-on="on" @click="newCategory()" fab large dark right>add_circle</v-icon>
            </template>
              <span>Criar nova categoria</span>
            </v-tooltip>
          </v-toolbar>
          <v-flex ma-12 xs12 sm12>
            <v-data-table 
              hide-actions 
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
               
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">
                <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon
                    v-on="on"
                    small
                    class="ma-3"
                    @click="editMode(props.item)"
                  >
                  edit
                  </v-icon>
                  </template>
                  <span>Editar categoria</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                  <v-icon
                    v-on="on"
                    class="ma-3"
                    small
                    @click="deleteCategory(props.item._id)"
                  >
                    delete
                  </v-icon>
                  </template>
                  <span>Deletar categoria</span>
                  </v-tooltip>
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
        addCategory: false,
        idCategoryEdit: "",
        mode: false,
        category: {},
        categories: [],
        headers: [
          {
            text: '',
            sortable: false
          },
          {
            text: 'Name',
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
        this.$data.mode = true;
        this.$data.category = category;
        this.$data.addCategory = true;
        window.scrollTo(0, 0);
        this.$data.idCategoryEdit = category._id;
      },
      editCategory(category){
        console.log("Edit category::", category);
        controller.update(category._id,{name: category.name})
        .then((response) => {
          console.log("Response save category:: ", response);
          this.$data.category = {};
        }).catch(err => {
          console.log("Error save category:: ", err);
        })
      },
      deleteCategory(idCategory){
        console.log("Delete category::", idCategory);
        controller.delete(idCategory)
        .then((response) => {
          console.log("Response save category:: ", response);
        }).catch(err => {
          console.log("Error save category:: ", err);
        })
      },
      newCategory(){
        console.log("Function new Category");
        this.$data.addCategory = true;
      },
      close(){
        console.log("close:::");
        this.$data.addCategory = false;
      }
    }
  }
</script>
