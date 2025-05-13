const form = document.getElementById('form-contatos');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault()


    const inputNomedoContato = document.getElementById('nome-contato');
    const inputTelefonedoContato = document.getElementById('telefone-contato');

    const telefone = inputTelefonedoContato.value;
    if (!/^\d{10,11}$/.test(telefone)) {
        alert('O telefone deve conter 10 ou 11 números.');
        return;
    }

    let linha = '<tr>';
    linha += `<th>${inputNomedoContato.value}</th>`;
    linha += `<th>${inputTelefonedoContato.value}</th>`;
    linha += '</tr>'

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomedoContato.value = '';
    inputTelefonedoContato.value = '';
});