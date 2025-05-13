function adicionarItem() {
    // Pega o valor digitado no input
    const proprietario = document.getElementById('proprietario').value;
    const equipamento = document.getElementById('equipamento').value;
    const dataEntrada = document.getElementById('dataEntrada').value;
    const defeito = document.getElementById('defeito').value;
    const previsaoEntrega = document.getElementById('previsaoEntrega').value;
    const status = document.getElementById('status').value;
    const observacoesProduto = document.getElementById('observacoesProduto').value;

    /*if (proprietario === "" || equipamento === "" || dataEntrada === "" || defeito === "" || previsaoEntrega === "" || status === "" || observacoes === ""){
        alert("Preencha o nome do proprietario")
        return;
    }*/

    // Cria uma nova <li> e coloca o valor dentro dela
    const novaTr = document.createElement('tr');

    novaTr.innerHTML = `
        <td>00</td> <!-- Você pode substituir por um contador real -->
        <td>${proprietario}</td>
        <td>${equipamento}</td>
        <td>${dataEntrada}</td>
        <td>${defeito}</td>
        <td>${previsaoEntrega}</td>
        <td>${status}</td>
        <td>${observacoesProduto}</td>
        <td><a href="#">Alterar dados</a></td>
        `;

    // Adiciona a <li> na <ul>
    const lista = document.getElementById('minhaLista');
    lista.appendChild(novaTr);

    // Limpa o campo de input
  document.getElementById('cadastrarEquipamento').reset();
  }

  