const dados = JSON.parse(sessionStorage.getItem('dadosFormulario'));
const dadosDiv = document.getElementById('dados');
if (dados) {
    dadosDiv.innerHTML = `
        <p><strong>Nome:</strong> ${dados.nome}</p>
        <p><strong>Sobrenome:</strong> ${dados.sobrenome}</p>
        <p><strong>Email:</strong> ${dados.email}</p>
        <p><strong>Idade:</strong> ${dados.idade}</p>
    `;
}

function downloadDadosComoJSON(dados) {
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dadosFormulario.json';
    link.click();
    URL.revokeObjectURL(url);
}

const confirmButton = document.getElementById('confirm-btn');
if (confirmButton) {
    confirmButton.addEventListener('click', function() {
        if (dados) {
            downloadDadosComoJSON(dados); 
            alert('Download concluído!');
            window.location.href = "index.html"; 
        } else {
            alert('Erro: Dados não encontrados.');
        }
    });
}
const cancelButton = document.getElementById('cancel-btn');
if (cancelButton) {
    cancelButton.addEventListener('click', function() {
        sessionStorage.removeItem('dadosFormulario');
        window.location.href = "form.html"; 
    });
}
