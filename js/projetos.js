const projetos = [
    {
        titulo: "Doação de Alimentos",
        descricao: "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade social."
    },
    {
        titulo: "Campanha do Agasalho",
        descricao: "Arrecadação de roupas e agasalhos para pessoas que precisam."
    }
];

function criarProjetos() {

    const cards = projetos.map(function (projeto) {

        return `
            <article class="projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        `;

    });

    return `
        <div class="grid">
            ${cards.join("")}
        </div>
    `;
}