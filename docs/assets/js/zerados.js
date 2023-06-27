// Função que le o arquivo json e retorna um objeto
function lerJson(nomeArquivo) {
    var request = new XMLHttpRequest();
    request.open("GET", nomeArquivo, false);
    request.send(null)
    var json = JSON.parse(request.responseText);
    return json;
}

// Função para criar a tabela HTML com os dados dos jogos
function criarTabelaJogos(jogos) {
    var tabelaHTML = "<table>";

    // Cabeçalho da tabela
    tabelaHTML += "<caption>Jogos Zerados</caption>";
    tabelaHTML += "<thead>"
    tabelaHTML += "<tr>";
    tabelaHTML += "<th>Índice</th>";
    tabelaHTML += "<th>Nome</th>";
    tabelaHTML += "<th>Console</th>";
    tabelaHTML += "<th>Gênero</th>";
    tabelaHTML += "<th>Subgênero</th>";
    tabelaHTML += "<th>Data</th>";
    tabelaHTML += "<th>Tempo</th>";
    tabelaHTML += "<th>Nota</th>";
    tabelaHTML += "<th>Dificuldade</th>";
    tabelaHTML += "<th>Condição de Vitória</th>";
    tabelaHTML += "</tr>";
    tabelaHTML += "</thead>"
    tabelaHTML += "<tbody>"
    // Linhas da tabela com os dados dos jogos
    for (var i = 0; i < jogos.length; i++) {
        tabelaHTML += "<tr>";
        tabelaHTML += "<td>" + jogos[i].indice + "</td>";
        tabelaHTML += "<td>" + jogos[i].nome + "</td>";
        tabelaHTML += "<td>" + jogos[i].console + "</td>";
        tabelaHTML += "<td>" + jogos[i].genero + "</td>";
        tabelaHTML += "<td>" + jogos[i].subgenero + "</td>";
        tabelaHTML += "<td>" + jogos[i].data + "</td>";
        tabelaHTML += "<td>" + jogos[i].tempo + "</td>";
        tabelaHTML += "<td>" + jogos[i].nota + "</td>";
        tabelaHTML += "<td>" + jogos[i].dificuldade + "</td>";
        tabelaHTML += "<td>" + jogos[i].condicao_vitoria + "</td>";
        tabelaHTML += "</tr>";
    }
    tabelaHTML += "</tbody>"
    tabelaHTML += "</table>";

    return tabelaHTML;
}

// Obtém a div onde a tabela será exibida
var divTabela = document.getElementById("tabelaJogos");

// Lê o arquivo JSON com os dados dos jogos
var jogosJson = lerJson("data/games.json");
// Cria a tabela HTML com os dados dos jogos
var tabelaJogosHTML = criarTabelaJogos(jogosJson.jogos);

// Insere a tabela dentro da div
divTabela.innerHTML = tabelaJogosHTML;