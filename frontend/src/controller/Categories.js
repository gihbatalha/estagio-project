import axios from 'axios'

export class Categories{
    constructor(){

    }
    getAll(){
        return new Promise((resolve, reject) => {
            console.log("chamando get All Api");
            axios.get("http://localhost:3000/category")
            .then((response) => {
                console.log("getAll categories", response);
                resolve(response);
            }).catch(err => {
                console.log("Error getAll categories", err);
                reject(err);
            })
        })
    }
    save(category){
        return new Promise((resolve, reject) => {
            console.log("chamando save Api");
            axios.post("http://localhost:3000/category",category)
            .then((response) => {
                console.log("controller save category::", response);
                resolve(response);
            }).catch(err => {
                console.log("Error save category controller:: ", err);
                reject(err);
            })
        })
    }
    delete(idCategory){
        return new Promise((resolve, reject) => {
            console.log("chamando delete Api");
            axios.delete("http://localhost:3000/category/" + idCategory)
            .then((response) => {
                console.log("controller delete category::", response);
                resolve(response);
            }).catch(err => {
                console.log("Error delete category controller:: ", err);
                reject(err);
            })
        })
    }
    update(id,category){
        return new Promise((resolve, reject) => {
            console.log("chamando update Api");
            axios.put("http://localhost:3000/category/"+ id, category)
            .then((response) => {
                console.log("controller update category::", response);
                resolve(response);
            }).catch(err => {
                console.log("Error update category controller:: ", err);
                reject(err);
            })
        })
    }
}