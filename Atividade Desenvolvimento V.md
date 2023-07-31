Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões:
(   )Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)
(   )Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)
(   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)
(   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não) 

Tabela em Anexo:

Jogador 1:                        Jogador 2:                      Jogador 3:                         Jogador 4: 
Pontos = 120                      Pontos = 99                     Pontos = 100                       Pontos = 101
Moedas = 15                       Moedas = 200                    Moedas = 5                         Moedas = 4
Enfrentou_Chefe = Sim             Enfrentou_Chefe = Não           Enfrentou_Chefe = Sim              Enfrentou_Chefe = Não

Aplicada as expressões ficam :

( V )Jogador 1: (120 >= 100) and (15 >= 5) and (Sim == Sim)
A expressão é verdadeira porque compre todos os requisitos e obedece a tabela verdade de V / V / V

( F )Jogador 2: (99 >= 100) and (200 >= 5) and (Não == Não)
Apesar de cumprir 2 dos requisitos, na condição "and" a expressão só pode ser verdadeira quando todas da expressão são true F / V / V

( V ) Jogador 3: (100 < 100) or (5 < 5) or (Sim == Sim)
Apesar de não obedecer os dois primeiros operadores relacionais a ultima sentença é verdadeira e por isso está correto, porque
diferente das questões acima, quando se em o "or" a tabela verdade só pode ser falsa enquanto todos os outros elementos o forem também F / F / V

( V ) Jogador 4: (101 != 100) or (4 != 5) or not(Não == Não)
V / V / F
Apesar da ultima sentença ser verdadeira, o not reverte o valor que era verdade em falso.


