///<reference path="pessoa.ts"/>
namespace empresa{
    //criando classe cliente
    export class Cliente extends Pessoa{
         //encapsulamento
        private _codCliente :number;
        private _credito :number;
        //getters
        public getCodCliente():number{return this._codCliente;}
        public getCredito():number{return this._credito;}
        //setters
        public setCodCliente(codCliente:number):void{
            //verificando se existe
            if(codCliente){
                this._codCliente= codCliente;
            }
        }
        public setCredito(credito:number):void{
            //verificando se existe
            if(credito){
                this._credito = credito;
            }
        }
    }
}