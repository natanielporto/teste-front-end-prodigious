### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Header

[ ] Logo e Menu hambúrguer. Quando clickarmos no menu, uma layer deve ser aberta e o menu exibido exatamente de acordo com o elemento do layout.<br />
[ ] Os links do menu são fictícios, crie somente a navegação e seus elementos de forma semântica e acessível.<br />
[ ] Ao clickar no botão fechar, deve fechar o menu como de praxe.<br />
[X] Extra Responsivo: O menu deve ser hamburguer para mobile, em desktop ele deve ser visível o tempo inteiro, use seus conhecimentos de interface para isso.<br />
[ ] Extra: Quando clickar na layer preta transparente, o menu deve ser fechado.<br />

## Slideshow de vídeos

[X] Um player nativo deve ser executado com o vídeo em anexo. Obs: O vídeo foi retirado do site da Prodigious, para os slides seguintes, insira outros de sua preferência.<br />
[X] Quando trocar de slide, o vídeo anterior deve ser paralizado.
Os controles do player podem ser nativos, não precisa customizar nada.<br />
[ ] Extra: customizar os controles.<br />

## Texto descritivo

[X] Parágrafo símples com alguns trechos em destaque.<br />
[X] Extra Responsivo: A fonte deve se adaptar aos diferentes tamanhos de tela.<br />

## Portfólio

Lista de projetos da Prodigious global.
Mais imagens, descrições etc podem ser adquiridos em: https://portfolio.prodigious.com/<br />
[X] Extra: Colocamos um botão de carregar mais itens de portfolio. Esta ação é possível caso sua lista seja servida com um JSON ou uma request do backend do contrário a dificuldade aumenta. Este item também não é obrigatório.<br />
[X] Extra Responsivo: De acordo com o tamanho da tela, mostrar mais colunas. Ex: Mobile: 1 coluna, tablet duas colunas, desktop 3 colunas.<br />
[X] Filtro: Colocamos um filtro de categorias(campo azul com all escrito), mas é um extra caso você esteja listando os elementos a partir de um JSON. Categorias podem ser vistas em https://portfolio.prodigious.com/ também, use sua criatividade, mas não é uma feature obrigatória.<br />

## Formulário

[X] Deve ser feita a validação dos campos de acordo com seu tipo, deixamos um exemplo de erro no layout.<br />
[X] Deve ser feito um submit em caso de formulário validado.<br />
[X] Mensagem de sucesso deve ser mostrada após o envio.<br />
[ ] Extra: Criar um Mock de um POST é um extra totalmente não obrigatório. Como sugestão para simular o POST indico https://www.mockable.io/<br />

## Cookies

[X] Elemento presente no load da tela, fixo(fixed) na parte de baixo da viewport.<br />
[X] Ao clickar no botão elemento deve ser excluído da tela.<br />
[X] Extra: Ao recarregar a tela, caso o usuário já tenha aceitado o uso de cookies, a layer não deve aparecer mais. Execute essa tarefa como quiser.

## PROBLEMAS

- quando em 1 item, o hover não funciona direito no portfolio display row;
- botões na navbar não abrem as sessões quando clicados;
- cor não fica randomizada quando passada pra o elemento no .map
- arrumar imagens dentro das vivs do portfolio
- alertas de erros do formulário de contato bagunça o layout
- fonte Gotham
- ponta apontando pra baixo
- HEIGHT VERSÃO TABLET TÁ TRANCADO
- BOTÕES NÃO APARECEM NO ABOUT POR ALGUM MOTIVO ESTRANHO

- foi considerado tela:
  grande: 1980px (a minha e a mais comum segundo pesquisa)
  média: 768px (ipad segundo pesquisa)
  pequena: 375px (iPhoneX - não o menor, não o maior)
