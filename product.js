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

}
