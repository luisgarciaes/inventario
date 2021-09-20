export default class Product {
    constructor(id, name, units, cost){
        this._id = id;
        this._name = name;
        this._units = units;
        this._cost = cost;
        this._totalCost = this._units * this._cost;
    }
    getId(){
        return this._id;
    }
    getName(){
        return this._name;
    }
    getUnits(){
        return this._units;
    }
    getCost(){
        return this._cost;
    }
    setName(name){
        this._name = name;
    }
    setUnits(units){
        this._units = units;
    }
    setCost(cost){
        this._cost = cost;
    }
    readForm(){

        let inpId = document.querySelector('#id');
        let inpName = document.querySelector('#name');
        let inpUnits = document.querySelector('#units');
        let inpCost = document.querySelector('#cost');

        let id =  inpId.value;
        let name = inpName.value;
        let units = Number(inpUnits.value);
        let cost = Number(inpCost.value);

        if(id && name && units && cost){
            inpId.value = '';
            inpName.value = '';
            inpUnits.value = '';
            inpCost.value = '';

            return new Product(id, name, units, cost)
        }
        return false;
    }

}
