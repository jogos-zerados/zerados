import json

# Função para criar um novo jogo
def create_game(jogo):
    with open('jogos.json', 'r+') as file:
        data = json.load(file)
        jogos = data['jogos']
        jogos.append(jogo)
        file.seek(0)
        json.dump(data, file, indent=4)
        file.truncate()

# Função para ler todos os jogos
def read_games():
    with open('jogos.json', 'r') as file:
        data = json.load(file)
        jogos = data['jogos']
        for jogo in jogos:
            print(jogo)
        if not jogos:
            print("Nenhum jogo encontrado.")

# Função para atualizar um jogo existente
def update_game(indice, novo_jogo):
    with open('jogos.json', 'r+') as file:
        data = json.load(file)
        jogos = data['jogos']
        for jogo in jogos:
            if jogo['indice'] == indice:
                jogo.update(novo_jogo)
                file.seek(0)
                json.dump(data, file, indent=4)
                file.truncate()
                break

# Função para excluir um jogo existente
def delete_game(indice):
    with open('jogos.json', 'r+') as file:
        data = json.load(file)
        jogos = data['jogos']
        for i, jogo in enumerate(jogos):
            if jogo['indice'] == indice:
                del jogos[i]
                file.seek(0)
                json.dump(data, file, indent=4)
                file.truncate()
                break

# Função para exibir o menu principal
def main_menu():
    while True:
        print("==== Menu Principal ====")
        print("1. Criar um novo jogo")
        print("2. Ler todos os jogos")
        print("3. Atualizar um jogo existente")
        print("4. Excluir um jogo existente")
        print("0. Sair do programa")

        choice = input("Escolha uma opção: ")

        if choice == '1':
            novo_jogo = {
                "indice": int(input("Índice: ")),
                "nome": input("Nome: "),
                "console": input("Console: "),
                "genero": input("Gênero: "),
                "subgenero": input("Subgênero: "),
                "data": input("Data: "),
                "tempo": input("Tempo: "),
                "nota": float(input("Nota: ")),
                "dificuldade": input("Dificuldade: "),
                "condicao_vitoria": input("Condição de Vitória: ")
            }
            create_game(novo_jogo)
            print("Jogo criado com sucesso!")

        elif choice == '2':
            print("Lista de jogos:")
            read_games()

        elif choice == '3':
            indice = int(input("Digite o índice do jogo que deseja atualizar: "))
            novo_jogo_atualizado = {
                "console": input("Console: "),
                "nota": float(input("Nota: ")),
                "dificuldade": input("Dificuldade: ")
            }
            update_game(indice, novo_jogo_atualizado)
            print("Jogo atualizado com sucesso!")

        elif choice == '4':
            indice = int(input("Digite o índice do jogo que deseja excluir: "))
            delete_game(indice)
            print("Jogo excluído com sucesso!")

        elif choice == '0':
            print("Encerrando o programa...")
            break

        else:
            print("Opção inválida. Por favor, escolha uma opção válida.")

        print()  # Espaço vazio para melhorar a legibilidade

# Função principal para iniciar o programa
def main():
    print("Bem-vindo(a) ao CRUD de Jogos!")
    main_menu()

# Executa o programa
if __name__ == "__main__":
    main()
