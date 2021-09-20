export default class Product {
    constructor(id, name, units, cost){
        this._id = id;
        this._name = name.toUpperCase();
        this._units = units;
        this._cost = cost;
        this._totalCost = this._units * this._cost;
    }

}