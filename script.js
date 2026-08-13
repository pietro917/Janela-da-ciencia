// Sistema Avançado de Navegação por Abas (SPA)
function navegar(opcao) {
    const paginas = ['inicio', 'profissao', 'mercado', 'tecnologias', 'biblioteca'];
    
    paginas.forEach(p => {
        const elementoPagina = document.getElementById('page-' + p);
        const elementoBotao = document.getElementById('nav-' + p);
        
        if (elementoPagina) elementoPagina.classList.remove('active');
        if (elementoBotao) elementoBotao.classList.remove('active');
    });

    document.getElementById('page-' + opcao).classList.add('active');
    document.getElementById('nav-' + opcao).classList.add('active');
    
    window.scrollTo(0, 0);
}

// Alternar Tema Claro / Escuro
function alternarTema() {
    const body = document.body;
    const btnTheme = document.getElementById('btn-theme');
    
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        btnTheme.textContent = '☀️ Claro';
    } else {
        btnTheme.textContent = '🌙 Escuro';
    }
}

// Controladores do Modal Pop-up
function abrirModal() {
    document.getElementById('modalInscricao').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modalInscricao').style.display = 'none';
}

function confirmarInscricao(event) {
    event.preventDefault();
    alert('Inscrição efetuada com sucesso! Você passará a receber nosso boletim informativo.');
    fecharModal();
}

// LÓGICA DE CURTIDAS (Variável 'curtiu' true/false por botão)
function alternarCurtida(botao) {
    const contadorSpan = botao.querySelector('.contador');
    let numeroDeCurtidas = parseInt(contadorSpan.textContent);

    if (botao.curtiu === undefined) {
        botao.curtiu = false;
    }

    if (botao.curtiu === false) {
        numeroDeCurtidas = numeroDeCurtidas + 1;
        botao.curtiu = true;
        botao.classList.add('curtido');
    } else {
        numeroDeCurtidas = numeroDeCurtidas - 1;
        botao.curtiu = false;
        botao.classList.remove('curtido');
    }

    contadorSpan.textContent = numeroDeCurtidas;
}

// Alternar Salvar Post
function alternarSalvar(botao) {
    if (botao.salvo === true) {
        botao.salvo = false;
        botao.innerHTML = '🔖 Salvar';
        botao.classList.remove('salvo');
    } else {
        botao.salvo = true;
        botao.innerHTML = '✅ Salvo';
        botao.classList.add('salvo');
    }
}

// Marcar Artigo como Lido
function alternarLido(botao) {
    const postCard = botao.closest('article.post-card');
    const tagLido = postCard.querySelector('.tag-lido');

    if (botao.lido === true) {
        botao.lido = false;
        botao.innerHTML = '👁️ Marcar Lido';
        botao.classList.remove('lido');
        tagLido.style.display = 'none';
    } else {
        botao.lido = true;
        botao.innerHTML = '✔ Lido';
        botao.classList.add('lido');
        tagLido.style.display = 'inline-block';
    }
}

// Sistema de Avaliação por Estrelas
function avaliarPost(estrelaClicada, nota) {
    const ratingBox = estrelaClicada.parentElement;
    const estrelas = ratingBox.querySelectorAll('.estrela');

    estrelas.forEach((estrela, index) => {
        if (index < nota) {
            estrela.classList.add('ativa');
        } else {
            estrela.classList.remove('ativa');
        }
    });
}

// Barra de Busca do Blog em Tempo Real
function buscarArtigo() {
    const termo = document.getElementById('campoBusca').value.toLowerCase();
    const posts = document.querySelectorAll('article.post-card');

    posts.forEach(post => {
        const texto = post.textContent.toLowerCase();
        if (texto.includes(termo)) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

// Simulador de Salário na Página Mercado
function calcularSalario(nivel, botaoClicado) {
    const botoes = document.querySelectorAll('.btn-calc');
    botoes.forEach(b => b.classList.remove('active'));
    botaoClicado.classList.add('active');

    const resultado = document.getElementById('resultado-salario');

    if (nivel === 'Junior') {
        resultado.textContent = 'Estimativa Júnior: R$ 4.000 - R$ 6.500 /mês';
    } else if (nivel === 'Pleno') {
        resultado.textContent = 'Estimativa Pleno: R$ 7.000 - R$ 11.500 /mês';
    } else if (nivel === 'Senior') {
        resultado.textContent = 'Estimativa Sênior: R$ 12.000 - R$ 22.000+ /mês';
    }
}

// Copiar Compartilhamento
function compartilharPost(titulo) {
    navigator.clipboard.writeText(window.location.href);
    alert(`Link do post "${titulo}" copiado para a área de transferência!`);
}

// Filtros de Categoria
function filtrarPosts(categoria, botaoClicado) {
    const todosBotoes = document.querySelectorAll('.btn-filtro');
    todosBotoes.forEach(b => b.classList.remove('active'));
    botaoClicado.classList.add('active');

    const posts = document.querySelectorAll('article.post-card');
    posts.forEach(post => {
        if (categoria === 'todos' || post.dataset.categoria === categoria) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

// Ocultar/Expandir detalhes
function mostrarDetalhes(idElemento) {
    const el = document.getElementById(idElemento);
    if (el.style.display === 'block') {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }
}

// Copiar comando
function copiarComando(texto) {
    navigator.clipboard.writeText(texto);
    alert(`Comando "${texto}" copiado com sucesso!`);
}
