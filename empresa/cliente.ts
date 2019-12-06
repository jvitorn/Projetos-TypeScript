namespace empresa{
    export class Cliente{
        private _codCliente :number;
        private _credito :number;

        public getCodCliente():number{return this._codCliente;}
        public getCredito():number{return this._credito;}

        public setCodCliente(codCliente:number){
            if(codCliente){
                this._codCliente= codCliente;
            }
        }
        public setCredito(credito:number){
            if(credito){
                this._credito = credito;
            }
        }
    }
}