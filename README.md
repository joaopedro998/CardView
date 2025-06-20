# CardView

## Descrição

Este projeto é responsável por exibir as cartas de cada jogador em um jogo de cartas de Pokémon. A aplicação consulta serviços de distribuição de cartas e de jogadores para recuperar as informações necessárias sobre os jogadores e suas cartas. Além disso, a aplicação consulta a PokéAPI para recuperar as informações necessárias sobre os Pokémon.

## Funcionalidades

- **Consulta de Jogadores:** Recupera informações sobre os jogadores.
- **Consulta de Cartas:** Consulta o serviço de distribuição de cartas para obter as cartas de cada jogador.
- **Consulta de Pokémons:** Utiliza a PokéAPI para obter informações detalhadas sobre os Pokémon nas cartas.
- **Exibição de Cartas:** Exibe as cartas de cada jogador com as informações obtidas.

## Tecnologias Utilizadas
- **Front-end:** React
- **APIs:** PokéAPI

## Estrutura de Pastas

Abaixo está a organização das pastas e arquivos do projeto **CardView**:

```bash
CARDVIEW/
├── node_modules/                # Dependências do projeto
├── public/                      # Arquivos públicos (favicon, index.html, etc.)
├── src/                         # Código-fonte da aplicação
│   ├── api/                     # Funções para comunicação com a API
│   ├── assets/                  # Imagens e recursos estáticos
│   ├── auth/                    # Lógica de autenticação
│   ├── components/              # Componentes reutilizáveis da interface
│   │   ├── Details/             # Detalhes dos pokémon
│   │   ├── NotificationBell/    # Componente de notificações
│   │   ├── PokemonCard/         # Componente de exibição de cartas Pokémon
│   │   └── TradeModal/          # Componente modal para trocas
│   ├── pages/                   # Páginas principais da aplicação
│   │   ├── Collection/          # Página da coleção de cartas do jogador
│   │   ├── Login/               # Página de login
│   │   └── Register/            # Página de cadastro
│   ├── App.css                  # Estilos globais do App
│   ├── App.js                   # Componente principal da aplicação
│   ├── index.css                # Estilos globais do index
│   ├── index.js                 # Ponto de entrada da aplicação React
│   └── reportWebVitals.js       # Métricas de performance
├── .gitignore                   # Arquivos e pastas ignorados pelo Git
├── package-lock.json            # Lockfile do npm
├── package.json                 # Informações e dependências do projeto
└── README.md                    # Documentação do projeto
```

## UML
### Fluxograma
<img src="https://github.com/user-attachments/assets/d3666ccb-460c-46e1-a619-71e2740a1b9a" width="600">

#### Descrição  
O fluxograma descreve o funcionamento da tela do jogo, desde o início até a interação do usuário e a atualização da interface.


#### Explicação do Fluxograma  

- **Inicialização**: O jogo começa com o **carregamento de recursos** e a **configuração das interfaces**.  
- **Carregamento dos Dados**: O sistema verifica se os dados foram carregados corretamente.  
  - Se **SIM**, o processo segue para a renderização.  
  - Se **NÃO**, o sistema tenta **obter os dados das cartas**. Caso falhe, uma **mensagem de erro** é exibida.  
- **Renderização e Interação**: Se os dados foram carregados corretamente, a **tela é renderizada** e a **interatividade é ativada**.  
- **Loop de Interação**: O sistema monitora a interação do usuário:  
  - Se houver interação, a **tela é atualizada**.  
  - Caso contrário, o sistema **aguarda uma ação**.  
  - O sistema verifica se o usuário deseja sair: 
    - Se **SIM**, o jogo termina.  
    - Se **NÃO**, o loop continua.  

#### Conclusão  
O fluxograma garante uma **interação contínua** e uma **experiência de jogo fluida**, assegurando o carregamento correto dos recursos e o tratamento adequado de erros. Dessa forma, o sistema mantém uma interface responsiva e funcional.

#### Representação visual do fluxograma
https://www.figma.com/proto/KBulNzYqjDY3G5JKUM9EzH/Untitled?node-id=0-1&t=GX8Ta6zdOw1MqnI2-1

### Diagrama de Caso de Uso  
<img src="https://github.com/user-attachments/assets/04231607-c884-4a2a-8eb4-fbf6ba2090f7" width="600">

### Diagrama de Classe  
<img src="https://github.com/user-attachments/assets/66564170-d0c6-4f28-8e62-2482826075da" width="600"> 
