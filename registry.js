export default class  {
    constructor(){
        this._registry = new Array();
        this._table = document.querySelector("#product")
        
    }
    add(product) {
        
        let pos = this._findProduct(product);

        if(pos >= 0){
            return false;
        }
        this._registry.push(product);
 
        return true;
    }
    _findProduct(product) {
        let pos = this._registry.findIndex((p) => {
            if(p.getId() === product.getId() ){
            return true;
            }
            return false;

        });

        return pos;
    }
}