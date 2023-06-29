/**
 * Reads a JSON file from a given URL.
 *
 * @param {string} nomeArquivo - The name or URL of the JSON file.
 * @returns {object} - The JSON object obtained from the file.
 */
function lerJson(nomeArquivo) {
    var request = new XMLHttpRequest();
    request.open("GET", nomeArquivo, false);
    request.send(null)
    var json = JSON.parse(request.responseText);
    return json;
}

/**
 * Creates an HTML table to display a list of games.
 *
 * @param {object} data - The data object containing platform and difficulty information.
 * @param {Array} jogos - An array of game objects to be displayed in the table.
 * @returns {string} - The generated HTML table as a string.
 */
function criarTabelaJogos(data, jogos) {
    var tabelaHTML = `<table>
    <caption>Jogos Zerados</caption>
    <thead>
        <tr>
            <th>Índice</th>
            <th>Nome</th>
            <th>Console</th>
            <th>Gênero</th>
            <th>Subgênero</th>
            <th>Data</th>
            <th>Tempo</th>
            <th>Nota</th>
            <th>Dificuldade</th>
            <th>Condição de Vitória</th>
        </tr>
    </thead>
    <tbody>`;

    for (var i = 0; i < jogos.length; i++) {
        tabelaHTML += `<tr>
    <td> ${jogos[i].indice} </td>
    <td> ${jogos[i].nome} </td>
    <td> ${data.plataformas[jogos[i].console]} </td>
    <td> ${data.genero[jogos[i].genero].nome} </td>
    <td> ${data.genero[jogos[i].genero].subgeneros[jogos[i].subgenero]} </td>
    <td> ${jogos[i].data} </td>
    <td> ${jogos[i].tempo} </td>
    <td> ${jogos[i].nota}: ${data.notas[jogos[i].nota]} </td>
    <td> ${jogos[i].dificuldade}: ${data.dificuldades[jogos[i].dificuldade]} </td>
    <td> ${jogos[i].condicao_vitoria} </td>
</tr>`;
    }
    tabelaHTML += `</tbody>
</table>`;

    return tabelaHTML;
}

const divTabela = document.getElementById("tabelaJogos");
const jogosJson = lerJson("data/games.json");
const dataJson = lerJson("data/data.json");
const tabelaJogosHTML = criarTabelaJogos(dataJson, jogosJson.jogos);
divTabela.innerHTML = tabelaJogosHTML;