import Product from "./product.js";
import Registry from "./registry.js";

class App {
    constructor(){
    this._registry = new Registry()
    
    this._consoleText = document.querySelector("#console")

    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", this._addProduct);
    let btnAddPosition = document.querySelector("#btnAddPosition");
    btnAddPosition.addEventListener("click", this._addProductInPosition);
    let btnRemove = document.querySelector("#btnRemove");
    btnRemove.addEventListener("click", this._showArr)
    let btnSearch = document.querySelector("#btnSearch");
    btnSearch.addEventListener("click", this._showArr);
    let btnReturn = document.querySelector("#btnReturn");
    btnReturn.addEventListener("click", this._showArr);
    let btnReturnReverse = document.querySelector("#btnReturnReverse");
    btnReturnReverse.addEventListener("click", this._showArr);
    }

    _updateConsole = (x,y) =>{
        let message = "";
        switch (y) {
            case 1:
                message = "Se agregó el producto " + x + " correctamente.";
                break;
            case 2:
                message = "Se borró el producto " + x + " correctamente.";
                break;
            case 3:
                message = "Se borró el producto " + x + " correctamente.";
                break;
            case 4:
                message = "Se borró el producto " + x + " correctamente.";
                break;
            case 5:
                message = "Se borró el producto " + x + " correctamente.";
                break;
        }
        document.querySelector("#console").innerHTML = message;
    }
    _checkIfFull(){
        let regSize = this._registry.length;
        if(regSize >= 20){
            return true;
        }else{
            return false;
        }
    }
    _addProduct = () => {
        let p = new Product()
        let product = p.readForm()

        if(product === false){
            Swal.fire("Error", "Todos los campos son requeridos", "error");
            return;
        }
        if(this._checkIfFull()){
            Swal.fire("Error", "Inventario lleno", "error");
            return;
        }
        let added = this._registry.add(product);
        if(added === false){
            Swal.fire("Error", "Producto ya registrado", "error");
            return;
        }
        this._updateConsole(product._name,1)
        Swal.fire("Correcto", "Se agregó un nuevo producto", "success");
    };
    _addProductInPosition = () => {
        let product = Product.readForm()

        if(product === false){
            Swal.fire("Error", "Todos los campos son requeridos", "error");
            return;
        }
        if(this._checkIfFull()){
            Swal.fire("Error", "Inventario lleno", "error");
            return;
        }
        let added = this._registry.add(product);
        if(added === false){
            Swal.fire("Error", "Producto ya registrado", "error");
            return;
        }
        this._updateConsole(product._name,2)
        Swal.fire("Correcto", "Se agregó un nuevo producto", "success");
    };

    _removeProduct = () => {
    };
}
new App;