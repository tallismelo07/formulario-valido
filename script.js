const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const sobrenome = document.getElementById('sobrenome').value.trim();
        const email = document.getElementById('email').value.trim();
        const idade = document.getElementById('idade').value.trim();

        if (!validarCampos(nome, sobrenome, email, idade)) {
            alert("Por favor, preencha os dados corretamente.");
            return;
        }

        const dadosFormulario = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            idade: parseInt(idade)
        };
        sessionStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));
        window.location.href = "confirmation.html";
    });
}
function validarCampos(nome, sobrenome, email, idade) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (nome.length < 3 || nome.length > 50) {
        return false;
    }

    if (sobrenome.length < 3 || sobrenome.length > 50) {
        return false;
    }

    if (!emailRegex.test(email)) {
        return false;
    }

    const idadeNumero = parseInt(idade);
    if (isNaN(idadeNumero) || idadeNumero <= 0 || idadeNumero > 120) {
        return false;
    }

    return true;
}
