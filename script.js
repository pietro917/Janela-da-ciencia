// Sistema Avançado de Navegação por Abas (SPA)
function navegar(opcao) {
    // Array com o nome identificador de todas as abas criadas no HTML
    const paginas = ['inicio', 'profissao', 'mercado', 'tecnologias', 'biblioteca'];
    
    // Varre a lista ocultando os blocos e removendo a marcação visual ativa do cabeçalho
    paginas.forEach(p => {
        const elementoPagina = document.getElementById('page-' + p);
        const elementoBotao = document.getElementById('nav-' + p);
        
        if (elementoPagina) elementoPagina.classList.remove('active');
        if (elementoBotao) elementoBotao.classList.remove('active');
    });

    // Torna visível apenas o bloco e o botão selecionado pelo usuário
    document.getElementById('page-' + opcao).classList.add('active');
    document.getElementById('nav-' + opcao).classList.add('active');
    
    // Garante que o foco visual retorne ao início do topo da tela após a transição
    window.scrollTo(0, 0);
}

// Controladores das Ações de Caixa Suspensa (Modal Pop-up)
function abrirModal() {
    document.getElementById('modalInscricao').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modalInscricao').style.display = 'none';
}

function confirmarInscricao(event) {
    event.preventDefault(); // Impede o recarregamento indesejado da página inteira
    alert('Inscrição efetuada com sucesso! Você passará a receber nosso boletim informativo.');
    fecharModal();
}
