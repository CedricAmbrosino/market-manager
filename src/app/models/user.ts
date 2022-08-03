export class User{
    private _id:number;
    private _email:string;
    private _password:string;

    static nextId=1

    constructor(email:string, password:string) {
        this._id = User.nextId;
        this._email = email
        this._password = password

        User.nextId++;
    }

    get id():number{
        return this._id
    }

    get email():string{
        return this._email
    }

    set email(value:string){
        this._email = value
    }

    get password():string{
        return this._password
    }

    set password(value:string){
        this._password = value
    }
}