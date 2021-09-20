export default class  {
    constructor(){
        this._registry = ["A"];
    }
    add(product) {
        
        let pos = this._findProduct(product);

        if(pos >= 0){
            return false;
        }
        this._registry.push(product);
 
        return true;
    }
    replace(product){
                
        let pos = this._findProduct(product);

        if(pos >= 0){
            return false;
        }
        this._registry.push(product);
 
        return true;

    }
    _findIndex(){
        if(p.getId() === product.getId() ){
            return true;
            }
            return false;

    }
    _findProduct(product) {
        let pos = this._registry.findIndex(this._findIndex());

        return pos;
    }
}