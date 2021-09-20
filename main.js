import Product from "./product.js";
import Registry from "./registry.js";

class App {
    constructor(){
    this._registry = new Registry()
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", this._addProduct);
    let btnShow = document.querySelector("#btnRemove");
    btnShow.addEventListener("click", this._showArr);
    }
    _showArr = () =>{
        console.log(this._registry)
        return this._registry
    }
    _addProduct = () => {
        let product = Product.readForm()
        if(product === false){
            Swal.fire("Error", "Todos los campos son requeridos", "error");
            return;
        }
        let added = this._registry.add(product);
        if(added === false){
            Swal.fire("Error", "Producto ya registrado", "error");
            return;
        }
        Swal.fire("Correcto", "Se agregó un nuevo producto", "success");
    };
}
new App;