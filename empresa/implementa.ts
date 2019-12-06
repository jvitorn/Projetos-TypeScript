///<reference path="cliente.ts"/>

namespace empresa {

    let p = new Cliente();

    p.setNome("jdc");
    p.setDtNascimento('14/02/1993');
    p.setCpf('440.695.258-66');

    document.getElementById('nome').textContent = p.getNome();
    document.getElementById('idade').textContent = p.getIdade().toString();
}