export class Marcas {
    private _id_marca;
    private _nombre;

    constructor(){
        this._id_marca = undefined;
        this._nombre = undefined;
    }

    get Id_Marca():number{return this._id_marca;}    
    get Nombre():string{return this._nombre;}

    set Id_Marca(id_marca:number){this._id_marca = id_marca;}    
    set Nombre(nombre:string){this._nombre = nombre;} 

    get toJson():Object{
        return {
            "id_marca": this._id_marca,
            "nombre" : this._nombre
        }
    }
}