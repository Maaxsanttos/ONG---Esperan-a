const conteudo = document.querySelector("#conteudo");

function navegar() {

    const rota = window.location.hash;

if (rota === "#projetos") {

    conteudo.innerHTML = `
        <h2>Nossos Projetos</h2>
        ${criarProjetos()}
    `;

    return;
}

    conteudo.innerHTML = `
        <section>
            <h2>Sobre nós</h2>
            <p>Bem-vindo ao site da ONG Esperança! Nosso objetivo é ajudar pessoas em situação de vulnerabilidade social, oferecendo apoio e recursos para melhorar suas vidas.</p>

            <img src="/imagens/ong-esperanca.jpg"
                 alt="Voluntários da ONG Esperança durante uma ação solidária">
        </section>

        <section>
            <h2>Nossa Missão</h2>
            <p>Promover ações solidárias que contribuam para uma sociedade mais justa e acolhedora.</p>
        </section>

        <section>
            <h2>Contato</h2>
            <p>Email: <a href="mailto:contato@ongesperança.org">contato@ongesperança.org</a></p>
            <p>Telefone: <a href="tel:+5511920293290">(11) 92029-3290</a></p>
            <p>Localização: Rua lavrinhas do sul, 2839 - São Paulo.</p>
        </section>
    `;
}

navegar();

window.addEventListener("hashchange", navegar);