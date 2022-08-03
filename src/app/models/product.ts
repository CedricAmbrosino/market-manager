export class Product{

    private _id:number
    private _name: string
    private _state: string

    static nextId = 1

    constructor(name:string, state:string){
        this._id = Product.nextId
        this._name = name
        this._state = state   

        Product.nextId++;
    }

    get id():number{
        return this._id
    }

    get name():string{
        return this._name
    }

    set name(value:string){
        this._name = value
    }

    get state():string{
        return this._state
    }

    set state(value:string){
        this._state = value
    }
}