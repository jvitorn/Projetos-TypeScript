var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () { return this.nome; };
        Pessoa.prototype.setNome = function (nome) {
            if (nome != "")
                this.nome = nome;
        };
        Pessoa.prototype.getDtNascimento = function () { return this.dtNascimento; };
        Pessoa.prototype.setDtNascimento = function (dt) { this.dtNascimento = dt; };
        Pessoa.prototype.getIdade = function () {
            var now = new Date;
            var anoAtual = now.getFullYear();
            var anoNasc = this.dtNascimento.split('/')[2];
            return Number(anoAtual) - Number(anoNasc);
        };
        Pessoa.prototype.getCpf = function () { return this.cpf; };
        Pessoa.prototype.setCpf = function (cpf) {
            if (cpf != "")
                this.cpf = cpf;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
///<reference path="pessoa.ts"/>
var empresa;
(function (empresa) {
    var p = new empresa.Pessoa();
    p.setNome("jdc");
    p.setDtNascimento('14/02/1993');
    p.setCpf('440.695.258-66');
    document.getElementById('nome').textContent = p.getNome();
    document.getElementById('idade').textContent = p.getIdade().toString();
})(empresa || (empresa = {}));
