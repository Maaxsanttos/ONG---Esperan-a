const formulario = document.querySelector("#formCadastro");
const telefone = document.querySelector("#telefone");

if (telefone) {

    telefone.addEventListener("input", function () {

        let valor = telefone.value.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        if (valor.length > 6) {

            telefone.value =
                "(" + valor.slice(0, 2) + ") " +
                valor.slice(2, 7) + "-" +
                valor.slice(7);

        } else if (valor.length > 2) {

            telefone.value =
                "(" + valor.slice(0, 2) + ") " +
                valor.slice(2);

        } else if (valor.length > 0) {

            telefone.value = "(" + valor;
        }

    });

}

if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const dados = {
            nome: document.querySelector("#nome").value,
            email: document.querySelector("#email").value,
            nascimento: document.querySelector("#nascimento").value,
            telefone: document.querySelector("#telefone").value,
            cpf: document.querySelector("#cpf").value,
            cep: document.querySelector("#cep").value,
            rua: document.querySelector("#rua").value,
            numero: document.querySelector("#numero").value,
            cidade: document.querySelector("#cidade").value,
            estado: document.querySelector("#estado").value
        };

        localStorage.setItem("cadastroONG", JSON.stringify(dados));

        alert("Cadastro salvo com sucesso!");
    });

    const dadosSalvos = localStorage.getItem("cadastroONG");

    if (dadosSalvos) {

        const dados = JSON.parse(dadosSalvos);

        document.querySelector("#nome").value = dados.nome;
        document.querySelector("#email").value = dados.email;
        document.querySelector("#nascimento").value = dados.nascimento;
        document.querySelector("#telefone").value = dados.telefone;
        document.querySelector("#cpf").value = dados.cpf;
        document.querySelector("#cep").value = dados.cep;
        document.querySelector("#rua").value = dados.rua;
        document.querySelector("#numero").value = dados.numero;
        document.querySelector("#cidade").value = dados.cidade;
        document.querySelector("#estado").value = dados.estado;
    }
}