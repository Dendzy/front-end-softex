<h1>Resolva o Seguinte Problema de Lógica:</h1>
Na tabela abaixo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.<br>
Baseado nos dados desses jogadores, foram construídas algumas expressões.<br>
Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com <strong>V(Verdadeiro)</strong> ou <strong>F(Falso)</strong> o resultado de cada expressão.<br><br>

<strong>Dica:</strong> Lembre-se de substituir as variáveis <strong>"pontos", "moedas"</strong> e <strong>"enfrentou_chefe"</strong> pelos valores correspondentes para cada jogador.

<strong>Expressões:</strong><br>
(  ) <strong>*Jogador 1:*</strong> (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)<br>
(  ) <strong>*Jogador 2:*</strong> (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)<br>
(  ) <strong>*Jogador 3:*</strong> (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)<br>
(  ) <strong>*Jogador 4:*</strong> (pontos != 100) or (moedas != 5) or <strong>not</strong>(enfrentou_chefe == Não) <br>

<div>
<img src="https://github.com/Dendzy/front-end-softex/assets/112651184/635aaa4f-3169-473a-a686-fd9f26a3f0c7" width="400px"/>
</div>
<br>
<h2>Resolução:</h2>

**Aplicada as expressões ficam :**

**( V ) Jogador 1: (120 >= 100) and (15 >= 5) and (Sim == Sim).** <br>
A expressão é verdadeira porque compre todos os requisitos e obedece a tabela verdade.<br> 
**Tabela Verdade -> (V && V && V = true).**

**( F ) Jogador 2: (99 >= 100) and (200 >= 5) and (Não == Não).** <br>
Apesar de cumprir 2 dos requisitos, na condição "and" a expressão só pode ser verdadeira quando todas da expressão são true.<br> 
**Tabela Verdade -> (F && V && V = false).**

**( V ) Jogador 3: (100 < 100) or (5 < 5) or (Sim == Sim).** <br>
Apesar de não obedecer os dois primeiros operadores relacionais a ultima sentença é verdadeira e por isso está correto, porque
diferente das questões acima, quando se em o "or" a tabela verdade só pode ser falsa enquanto todos os outros elementos o forem também.<br> 
**Tabela Verdade -> (F || F || V = true).**

**( V ) Jogador 4: (101 != 100) or (4 != 5) or not(Sim == Não).**<br>
A última sentença é falsa, porém com o not, ela é convertida de false pra true, o que a torna verdadeira.<br>
**Tabela Verdade -> (V || V || V = true).**



