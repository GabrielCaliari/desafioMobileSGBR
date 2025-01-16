1. Funcionalidades Implementadas:

Tela de Login (SignIn):
Autenticação com API externa utilizando React Hook Form (extra solicitado).
Personalização completa com ícones para login social (Google, Apple e Facebook).
Tratamento de erros para exibir mensagens como "Usuário ou senha incorreta".

Tela de Home:
Exibição personalizada do nome do usuário via Context API.
Pesquisa dinâmica de marcas para facilitar a navegação do usuário.
Funcionalidade de Persistência de Sessão: Implementei uma funcionalidade que mantém o usuário logado no aplicativo mesmo após o encerramento ou atualização do app. Utilize AsyncStorage em conjunto com Context API para armazenar os dados de autenticação do usuário e verificá-los no carregamento do aplicativo. Isso melhora a usabilidade, evitando que o usuário precise realizar o login repetidamente.


Tela de Model:
Integração com API externa para listar os modelos de carros.
Adição de uma seta para navegar de volta à lista de marcas.

Splash Screen (Logo da empresa):
Tela de carregamento personalizada ao abrir o app, exibindo a logo da empresa para melhorar a experiência do usuário.

2. Melhorias Extras (Upgrades)

Design profissional:
Personalização das telas com Styled Components para uma interface moderna e amigável.
Adição de ícones para interação mais intuitiva.

Busca dinâmica: Implementação de uma barra de pesquisa para marcas de carros na Home.

Segurança na senha: Proteção na exibição de senha com funcionalidade "mostrar/ocultar senha".

Feedback ao usuário:
Mensagens de erro em tempo real na validação de login.
Navegação fluida e clara com setas para voltar nas telas.
