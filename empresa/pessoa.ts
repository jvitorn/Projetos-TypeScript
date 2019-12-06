namespace empresa {

    export abstract class Pessoa {
        
        private nome : string;
        private dtNascimento : string;
        private cpf : string;

        public getNome() : string{ return this.nome; }
        public setNome(nome:  string) : void {
            if(nome != "") this.nome = nome;
        }

        public getDtNascimento(): string{ return this.dtNascimento; }
        public setDtNascimento(dt: string){ this.dtNascimento = dt; }

        public getIdade() : number {
            
            let now = new Date;
            let anoAtual = now.getFullYear();
            let anoNasc = this.dtNascimento.split('/')[2];
            return Number(anoAtual) - Number(anoNasc);
        }

        public getCpf() : string { return this.cpf; }
        public setCpf(cpf : string) : void {
            if(cpf != "") this.cpf = cpf;
        }
    }
}