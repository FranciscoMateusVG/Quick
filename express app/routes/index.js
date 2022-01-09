const express = require("express");
const router = express.Router();
const path = require("path");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});

// Coloque suas rotas aqui
router.get("/content/contents-school-subject/list", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					id_contents_school_subject: 3,
					id_school_subject: 1,
					title: "Matemática",
					conceptual_foundation:
						"A descrição das aprendizagens descritas neste documento levaram em consideração o desenvolvimento de habilidades focais de cada ano escolar no componente curricular de Matemática, relativos a diversos domínios que se revelam essenciais como ferramentas para uma educação integral, garantindo que os estudantes possam iniciar, ampliar e consolidar aprendizagens ao longo da sua jornada nos anos iniciais do ensino fundamental.  Além disso a organização foi  pautada nas unidades temáticas presentes nos currículos de Matemática: Números, Álgebra, Geometría, Grandezas e Medidas e Probabilidade e Estatística. Relacionamos os objetos de aprendizagem às habilidades focais dos Mapas de Foco, evidenciando a relação deste documento com  a Base Nacional Comum Curricular (BNCC).  Com a finalidade de tornar mais visível as aprendizagens esperadas em cada ano escolar,  foram apresentadas junto às descrições alguns exemplos de análise das aprendizagens em ação.",
					path_pdf:
						"uploads/files/Matematica_Descricao_de_Aprendizagem.pdf",
				},
				{
					id_contents_school_subject: 4,
					id_school_subject: 2,
					title: "Lingua Portuguesa",
					conceptual_foundation:
						"As aprendizagens descritas neste documento levaram em consideração o desenvolvimento das habilidades focais de cada ano escolar no componente curricular Língua Portuguesa, relativos a diversos domínios que se revelam essenciais para esse competente da linguagem e para a educação integral, garantindo que os estudantes possam iniciar, ampliar e consolidar aprendizagens ao longo da sua jornada nos anos iniciais do ensino fundamental.  Além disso, a organização foi pautada nas práticas de linguagem em torno dos eixos presentes na BNCC e nos currículos de Língua Portuguesa: Leitura/Escuta, Oralidade, Produção de textos e Análise linguística e semiótica. Com a finalidade de tornar mais visíveis tais aprendizagens, foram apresentados exemplos das aprendizagens em ação. Para cada ano, foram indicadas as habilidades da BNCC relativas aos eixos - Leitura/Escuta, Oralidade, Produção de textos e Análise linguística e semiótica; o objeto da aprendizagem relativo a essas habilidades, que indicam o que, de fato, precisa ser aprendido pelos estudantes; a descrição dessas aprendizagens, cujo objetivo é auxiliar o professor a compreender as evidências das aprendizagens dos estudantes de acordo com os focos apresentados e as habilidades indicadas. Em outras palavras, há uma relação entre as habilidades, o objeto e as descrições das aprendizagens em um movimento de recorte e ampliação em relação ao que se espera que os estudantes saibam ao final de cada ano.",
					path_pdf:
						"uploads/files/LinguaPortuguesa_Descricao_de_Aprendizagem.pdf",
				},
			],
		},
	};

	res.send(objeto);
});

router.get("/content/school-year/list", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					id_school_year: 1,
					title: "1º Ano",
					level: "Fundamental",
				},
				{
					id_school_year: 2,
					title: "2º Ano",
					level: "Fundamental",
				},
				{
					id_school_year: 3,
					title: "3º Ano",
					level: "Fundamental",
				},
				{
					id_school_year: 4,
					title: "4º Ano",
					level: "Fundamental",
				},
				{
					id_school_year: 5,
					title: "5º Ano",
					level: "Fundamental",
				},
			],
		},
	};

	res.send(objeto);
});

router.get("/content/school-theme-type/list", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					title: "Eixos de Linguagem",
					school_theme_type_count: "4",
				},
				{
					title: "Unidades Temáticas",
					school_theme_type_count: "5",
				},
			],
		},
	};

	res.send(objeto);
});

// /:id_contents_school_subject
router.get("/content/school-theme/3", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					id_school_theme: 1,
					title: "Números",
				},
				{
					id_school_theme: 2,
					title: "Álgebra",
				},
				{
					id_school_theme: 3,
					title: "Geometria",
				},
				{
					id_school_theme: 4,
					title: "Grandeza e Medidas",
				},
				{
					id_school_theme: 5,
					title: "Probabilidade e Estatística",
				},
			],
		},
	};

	res.send(objeto);
});

// /:id_contents_school_subject/:id_school_year
router.get("/content/contents-school-theme-by-year/3/1", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					id_contents_school_theme: 1,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Números",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF01MA04,EF01MA05,EF01MA07,EF01MA08</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Compreensão de números: diferentes contextos, contagem, representação escrita, comparação de quantidades usando diferentes estratégias.<br><br>(2) Compreensão do sistema de numeração decimal: composição e decomposição de números.<br><br>(3) Adição e subtração, envolvendo estratégias pessoais de resolução de problemas com diferentes ideias e formas de solução relacionadas a essas operações.\t",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"1. Identificam números em contextos diversos: como quantidade (por exemplo, no total de pontos de um jogo, na quantidade de lápis disponíveis na mesa), medida (no calendário), ordenação (número de ordem em uma corrida, em uma fila) ou identificação (número da casa, do código de barras).<br><br>2. Quantificam de forma eficiente até 100 objetos, utilizando ou não materiais manipuláveis.<br><br>3. Leem e representam números naturais até 100, em registros numéricos e em língua materna ou em outras representações. <example> Materiais manipulativos, desenho, traços, algarismos ou mesmo no posicionamento em retas numeradas de 1 em 1, de 5 em 5, de 10 em 10. </example><br><br>4. Comparam quantidades utilizando diferentes estratégias. Por exemplo, comparam visualmente, pelo pareamento de elementos ou pela contagem realizada.<br><br>5. Utilizam diferentes formas para compor e decompor os números, apropriando-se das características do sistema de numeração decimal. Por exemplo, usando a ideia de partes iguais (12 = 6 + 6); partes diferentes (13 = 6 + 7); mais de duas parcelas (13 = 6 + 6 + 1); decomposição decimal (18 = 10 + 8) ou usando o sistema monetário brasileiro (18 = 10 + 5 + 2 +1).<br><br>6. Realizam adições e subtrações simples por meio de estratégias pessoais de cálculo (por exemplo, apoiando-se na composição e decomposição de números: 12 + 13 = 10 + 2 + 10 + 3 = 20 + 5 = 25 ou ainda 12 + 13 = 12 + 10 + 3 = 22 + 3 = 25, entre outros). <br><br>7. Mobilizam conhecimentos para resolver problemas de adição e subtração envolvendo diferentes ideias relacionadas a essas operações (juntar, acrescentar, retirar). <example> “Eu ganhei 25 pontos em um jogo e Joana possui 12. Quantos pontos fizemos juntas?” (ideia de juntar); “Eu tenho 32 figurinhas e ganhei 12 do meu avô. Com quantas figurinhas fiquei?” (ideia de acrescentar); “No ônibus, havia 15 pessoas. Na estação, desceram 3 pessoas e não subiu ninguém. Quantas pessoas ficaram no ônibus?” (ideia de retirar).</example>",
				},
				{
					id_contents_school_theme: 2,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Álgebra",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "<Tasks>EF01MA10</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Reconhecimento de padrões em sequências figurais e numéricas.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"8. Identificam o padrão de uma sequência numérica ou figural e completam com termos ausentes. <example>Em uma sequência figural, continuar o padrão e verbalizá-lo: *o*o*o... ou <Imagem>Imagem,mat_algebra_01.png,100,10</Imagem>  ou uma sequência numérica: 5 – 6 – 7 – 8 – __ – __ – 10 – 11</example>",
				},
				{
					id_contents_school_theme: 5,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Geometria",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "EF01MA12,EF01MA14",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Localização espacial.<br><br>(2) Figuras planas e identificação em sólidos geométricos.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"9. Descrevem a localização de pessoas e de objetos no espaço, utilizando termos que identificam sua posição em relação a um ponto de referência. <example>Em jogos ou na localização de pessoas e carteiras em uma sala de aula em que tenham de descrever a posição uns dos outros: “ele está à direita de”, “ele está à esquerda de”, “está em cima”, “está embaixo” etc.</example><br><br>10. Reconhecem, desenham e nomeiam figuras geométricas planas (quadrados, retângulos, triângulos e círculos) e identificam essas figuras em diferentes posições, em objetos do cotidiano ou em faces de sólidos geométricos. <example>No contorno de faces de uma pirâmide de base quadrada desenhados em um papel identificam triângulos e quadrado, na manipulação de blocos, quebra-cabeças e dobraduras.</example>",
				},
				{
					id_contents_school_theme: 7,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Grandeza e Medidas",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "<Tasks>EF01MA17,EF01MA15</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Medida de tempo e uso do calendário.<br><br>(2) Compreensão de medição; medição direta e vocabulário adequado para comparar comprimentos, massas e capacidades.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"11. Utilizam o calendário para localizar e relacionar dias da semana e meses do ano. <br><br>12. Compreendem que medir é comparar duas grandezas de mesmo tipo, realizando estimativas e comparações diretas, utilizando vocabulário adequado para comparar comprimentos (mais baixo ou mais alto, mais comprido ou mais curto), massas (mais leve ou mais pesado) e capacidades (cabe mais ou cabe menos), entre outros sem a necessidade de uma unidade de medida padronizada ou não.",
				},
				{
					id_contents_school_theme: 8,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Probabilidade e Estatística",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "<Tasks>EF01MA21</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Leitura e interpretação de dados em tabelas e gráficos de colunas simples",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"13. Leem e interpretam dados organizados em tabelas ou em gráficos de colunas simples, identificando, por exemplo, o(s) dado(s) que mais ou menos vezes se repete(m), os dados que apareceram o mesmo número de vezes, dado em igual número, retirando possíveis conclusões.",
				},
			],
		},
	};

	res.send(objeto);
});

router.get("/content/contents-school-theme-by-year/3/2", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					id_contents_school_theme: 1,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Planos",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF01MA04,EF01MA05,EF01MA07,EF01MA08</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Compreensão de números: diferentes contextos, contagem, representação escrita, comparação de quantidades usando diferentes estratégias.<br><br>(2) Compreensão do sistema de numeração decimal: composição e decomposição de números.<br><br>(3) Adição e subtração, envolvendo estratégias pessoais de resolução de problemas com diferentes ideias e formas de solução relacionadas a essas operações.\t",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"1. Identificam números em contextos diversos: como quantidade (por exemplo, no total de pontos de um jogo, na quantidade de lápis disponíveis na mesa), medida (no calendário), ordenação (número de ordem em uma corrida, em uma fila) ou identificação (número da casa, do código de barras).<br><br>2. Quantificam de forma eficiente até 100 objetos, utilizando ou não materiais manipuláveis.<br><br>3. Leem e representam números naturais até 100, em registros numéricos e em língua materna ou em outras representações. <example> Materiais manipulativos, desenho, traços, algarismos ou mesmo no posicionamento em retas numeradas de 1 em 1, de 5 em 5, de 10 em 10. </example><br><br>4. Comparam quantidades utilizando diferentes estratégias. Por exemplo, comparam visualmente, pelo pareamento de elementos ou pela contagem realizada.<br><br>5. Utilizam diferentes formas para compor e decompor os números, apropriando-se das características do sistema de numeração decimal. Por exemplo, usando a ideia de partes iguais (12 = 6 + 6); partes diferentes (13 = 6 + 7); mais de duas parcelas (13 = 6 + 6 + 1); decomposição decimal (18 = 10 + 8) ou usando o sistema monetário brasileiro (18 = 10 + 5 + 2 +1).<br><br>6. Realizam adições e subtrações simples por meio de estratégias pessoais de cálculo (por exemplo, apoiando-se na composição e decomposição de números: 12 + 13 = 10 + 2 + 10 + 3 = 20 + 5 = 25 ou ainda 12 + 13 = 12 + 10 + 3 = 22 + 3 = 25, entre outros). <br><br>7. Mobilizam conhecimentos para resolver problemas de adição e subtração envolvendo diferentes ideias relacionadas a essas operações (juntar, acrescentar, retirar). <example> “Eu ganhei 25 pontos em um jogo e Joana possui 12. Quantos pontos fizemos juntas?” (ideia de juntar); “Eu tenho 32 figurinhas e ganhei 12 do meu avô. Com quantas figurinhas fiquei?” (ideia de acrescentar); “No ônibus, havia 15 pessoas. Na estação, desceram 3 pessoas e não subiu ninguém. Quantas pessoas ficaram no ônibus?” (ideia de retirar).</example>",
				},
				{
					id_contents_school_theme: 2,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Cartesianos",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "<Tasks>EF01MA10</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Reconhecimento de padrões em sequências figurais e numéricas.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"8. Identificam o padrão de uma sequência numérica ou figural e completam com termos ausentes. <example>Em uma sequência figural, continuar o padrão e verbalizá-lo: *o*o*o... ou <Imagem>Imagem3,mat_algebra_01.png,100,10</Imagem> ou uma sequência numérica: 5 – 6 – 7 – 8 – __ – __ – 10 – 11</example>",
				},
				{
					id_contents_school_theme: 5,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Legais",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "<Tasks>EF01MA12,EF01MA14</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Localização espacial.<br><br>(2) Figuras planas e identificação em sólidos geométricos.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"9. Descrevem a localização de pessoas e de objetos no espaço, utilizando termos que identificam sua posição em relação a um ponto de referência. <example>Em jogos ou na localização de pessoas e carteiras em uma sala de aula em que tenham de descrever a posição uns dos outros: “ele está à direita de”, “ele está à esquerda de”, “está em cima”, “está embaixo” etc.</example><br><br>10. Reconhecem, desenham e nomeiam figuras geométricas planas (quadrados, retângulos, triângulos e círculos) e identificam essas figuras em diferentes posições, em objetos do cotidiano ou em faces de sólidos geométricos. <example>No contorno de faces de uma pirâmide de base quadrada desenhados em um papel identificam triângulos e quadrado, na manipulação de blocos, quebra-cabeças e dobraduras.</example>",
				},
				{
					id_contents_school_theme: 7,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Pra Dedeu",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "<Tasks>EF01MA17,EF01MA15</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Medida de tempo e uso do calendário.<br><br>(2) Compreensão de medição; medição direta e vocabulário adequado para comparar comprimentos, massas e capacidades.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"11. Utilizam o calendário para localizar e relacionar dias da semana e meses do ano. <br><br>12. Compreendem que medir é comparar duas grandezas de mesmo tipo, realizando estimativas e comparações diretas, utilizando vocabulário adequado para comparar comprimentos (mais baixo ou mais alto, mais comprido ou mais curto), massas (mais leve ou mais pesado) e capacidades (cabe mais ou cabe menos), entre outros sem a necessidade de uma unidade de medida padronizada ou não.",
				},
				{
					id_contents_school_theme: 8,
					school_theme_type_title: "Unidades Temáticas",
					school_theme_title: "Multi Fatorial Newtoniana",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills: "<Tasks>EF01MA21</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Leitura e interpretação de dados em tabelas e gráficos de colunas simples",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"13. Leem e interpretam dados organizados em tabelas ou em gráficos de colunas simples, identificando, por exemplo, o(s) dado(s) que mais ou menos vezes se repete(m), os dados que apareceram o mesmo número de vezes, dado em igual número, retirando possíveis conclusões.",
				},
			],
		},
	};

	res.send(objeto);
});

//:id_contents_school_subject/:id_school_theme
router.get("/content/contents-school-theme-by-theme/3/1", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					id_contents_school_theme: 1,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "1º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF01MA04,EF01MA05,EF01MA07,EF01MA08</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Compreensão de números: diferentes contextos, contagem, representação escrita, comparação de quantidades usando diferentes estratégias.<br><br>(2) Compreensão do sistema de numeração decimal: composição e decomposição de números.<br><br>(3) Adição e subtração, envolvendo estratégias pessoais de resolução de problemas com diferentes ideias e formas de solução relacionadas a essas operações.\t,",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"1. Identificam números em contextos diversos: como quantidade (por exemplo, no total de pontos de um jogo, na quantidade de lápis disponíveis na mesa), medida (no calendário), ordenação (número de ordem em uma corrida, em uma fila) ou identificação (número da casa, do código de barras).<br><br>2. Quantificam de forma eficiente até 100 objetos, utilizando ou não materiais manipuláveis.<br><br>3. Leem e representam números naturais até 100, em registros numéricos e em língua materna ou em outras representações. <example> Materiais manipulativos, desenho, traços, algarismos ou mesmo no posicionamento em retas numeradas de 1 em 1, de 5 em 5, de 10 em 10. </example><br><br>4. Comparam quantidades utilizando diferentes estratégias. Por exemplo, comparam visualmente, pelo pareamento de elementos ou pela contagem realizada.<br><br>5. Utilizam diferentes formas para compor e decompor os números, apropriando-se das características do sistema de numeração decimal. Por exemplo, usando a ideia de partes iguais (12 = 6 + 6); partes diferentes (13 = 6 + 7); mais de duas parcelas (13 = 6 + 6 + 1); decomposição decimal (18 = 10 + 8) ou usando o sistema monetário brasileiro (18 = 10 + 5 + 2 +1).<br><br>6. Realizam adições e subtrações simples por meio de estratégias pessoais de cálculo (por exemplo, apoiando-se na composição e decomposição de números: 12 + 13 = 10 + 2 + 10 + 3 = 20 + 5 = 25 ou ainda 12 + 13 = 12 + 10 + 3 = 22 + 3 = 25, entre outros). <br><br>7. Mobilizam conhecimentos para resolver problemas de adição e subtração envolvendo diferentes ideias relacionadas a essas operações (juntar, acrescentar, retirar). <example> “Eu ganhei 25 pontos em um jogo e Joana possui 12. Quantos pontos fizemos juntas?” (ideia de juntar); “Eu tenho 32 figurinhas e ganhei 12 do meu avô. Com quantas figurinhas fiquei?” (ideia de acrescentar); “No ônibus, havia 15 pessoas. Na estação, desceram 3 pessoas e não subiu ninguém. Quantas pessoas ficaram no ônibus?” (ideia de retirar).</example>",
				},
				{
					id_contents_school_theme: 9,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "2º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF02MA01,EF02MA04,EF02MA05,EF02MA06</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Compreensão de números com até 3 ordens: representação escrita, comparação de quantidades usando diferentes estratégias.<br><br>(2) Compreensão do sistema de numeração decimal: composição e decomposição de números. <br><br>(3) Construção de fatos básicos da adição e subtração: utilização de estratégias pessoais de cálculo (cálculo mental e estimativas) e resolução de problemas com diferentes formas de resolução.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: `1. Leem e representam números naturais de até 3 ordens com registros numéricos e em língua materna. Comparam e ordenam essas quantidades utilizando diferentes estratégias.
		 Por exemplo, eles podem comparar números utilizando a contagem de elementos dos conjuntos dados analisando a posição do número na sequência numérica:
		  “esse vem depois, por isso é maior”, “esse tem mais uns”, “esses são trinta e esses, quarenta”; podem também consultar portadores numéricos, como o quadro 
		  de números ou as páginas de um livro ou, ainda, analisar os números posicionados em uma reta numerada. <br><br>2. Utilizam diferentes formas para compor e decompor 
		  os números de 3 ordens, apropriando-se das características do sistema de numeração decimal. Por exemplo, usando a ideia de parte iguais (120 = 60 + 60); partes diferentes
		   (130 = 60 + 70); ou a ideia de quase o dobro (130 = 60 + 60 + 10); ou a decomposição decimal (180 = 100 + 80); ou o sistema monetário brasileiro (180 = 100 + 50 + 20 +10 ou, 
			ainda, 180 = 50 +50 +50 +10 +10 + 5 + 5).<br><br>3. Dominam os fatos básicos da adição e da subtração. Por exemplo, os alunos têm de memória adições com somas até 10 (9 + 1, 8 + 2, 7 + 3 etc.) 
			e subtrações com diferença até 10 (10 - 1, 10 - 2, 10 - 3 etc.). Esses fatos apoiam cálculos maiores, como 30 - 4 = 26 ou 28 + 2 = 30 ou, ainda, 28 + 12 = 20 + 8 + 10 + 2 = 30 + 10 = 40.<br><br>4. Realizam adições e subtrações simples com número de até 3 ordens por meio de diferentes estratégias de cálculo (estimativa, cálculo mental, algoritmo convencional). Por exemplo, estimam a ordem de grandeza do resultado da operação de adição, sabendo que em 231 + 342, o resultado será mais do que 500, porque 200 + 300 dá 500. Na subtração 545 - 122, estimam que o resultado será próximo de 400, pois 500 - 100 = 400. Apoiam-se na composição e decomposição de números para realizar a operação de adição: 120 + 132 = 100 + 20 + 100 + 30 +2 = 200 + 50 + 2 = 252 ou ainda 120 + 132= 120 + 100 + 30 + 2 = 220 + 30 +2 = 250 +2 = 252. Na subtração, para realizar 348 - 122, fazem: 300 - 100 = 200; 40 - 20 = 20 e 8 - 2 = 6, logo temos 200 + 20 + 6 = 226. Efetuam as operações de adição juntando unidades, dezenas e centenas. Na subtração, subtraem as unidades, as dezenas e as centenas.<br><br>5. Resolvem situações-problema de adição e subtração, envolvendo as ideias de juntar, acrescentar, comparar e retirar, comparando diferentes estratégias de solução e descrevendo a sua forma de pensar. Na adição, temos, por exemplo, a ideia de juntar: “Mariana fez 210 pontos em um jogo e Juliana fez 321. Quantos pontos elas fizeram juntas?” e a ideia de acrescentar: “Fernando tinha 12 reais guardados. Em seu aniversário, ganhou 20 reais do seu tio. Com quantos reais Fernando ficou?”. Na subtração, temos, por exemplo, a ideia de retirar: “Na geladeira de um supermercado, havia 148 garrafas de refrigerante. Foram vendidas 12 garrafas em um dia. Quantas garrafas ficaram na geladeira ao final do dia?” e a ideia de comparar: “João tem 128 centímetros de altura. Seu amigo Pedro tem 116 centímetros de altura. Quantos centímetros João é mais alto que Pedro? ”"`,
				},
				{
					id_contents_school_theme: 14,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "3º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF03MA01,EF03MA02,EF03MA05,EF03MA06,EF03MA07</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Números naturais: leitura, representação escrita e na reta numérica, comparação e ordenação. <br><br>(2) Composição e decomposição de números até a ordem da unidade de milhar.<br><br>(3) Resolução de adição com reserva e subtração com recurso, resolução de problemas envolvendo adição e subtração com diferentes estratégias ou escrita matemática.<br><br>(4) Construção do conceito de multiplicação: identificação de regularidades e fatos fundamentais, utilização de diferentes estratégias para multiplicar e resolução de problemas envolvendo multiplicação e suas ideias (soma de parcelas iguais e organização retangular).",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: `1. Leem, representam, comparam e ordenam números naturais de até 4 ordens, em registros numéricos, 
		em língua materna e na reta numérica, pela compreensão de características do sistema de numeração decimal. Por exemplo, conseguem comparar números com base no conhecimento de valor posicional:
		 “3 mil é maior que 2 mil” ou “2 mil tem 2 unidades de milhar e 3 mil tem 3 unidades de milhar”. Recorrem à utilização de retas numéricas para analisar a posição de um número em relação a outros números
		  ou o uso de quadros numéricos com números organizados de 10 em 10, 100 em 100 e 1 000 em 1 000.<br><br>2. Utilizam diferentes formas para compor e decompor os números naturais de 4 ordens, apropriando-se
		   das características do sistema de numeração decimal. Por exemplo, usando a ideia de partes iguais (1 200 = 600 + 600); partes diferentes (1 300 = 600 + 700) ou a ideia de quase o dobro (1 300 = 600 + 600 + 100) 
		   ou a decomposição decimal (1 800 = 1 000 + 800) ou outra 1 350 = 1 x 1 000 + 3 x 100 + 5 x 10.<br><br>3. Realizam adição com reserva e subtração com recurso com números de até 4 ordens por meio de diferentes estratégias 
		   de cálculo (estimativa, cálculo mental, algoritmo convencional). Por exemplo, estimam a ordem de grandeza do resultado da operação, sabendo que, em 2 315 + 3 425,
		    o resultado será mais do que 5 000, porque 2 000 + 3 000 dá 5 000 e mais perto de 6 000 porque 300 + 400 dá 700, ou seja, será próximo de 5 700. Ou se apoiam na composição e decomposição de números para
			 realizar uma operação 1 250 + 1 670 = 1 000 + 200 + 50 + 1 000 + 600 + 70 = 2 000 + 800 + 120 = 2 920 ou ainda 1 250 + 1 670 = 1 250 + 1 000 + 600 + 50 +20= 2 250 + 600 + 50 + 20 = 2 850 + 50 + 20 = 2 900 + 20 = 2 920.
			  Efetuam operações, juntando unidades, dezenas e centenas e realizando os agrupamentos e as trocas necessárias.<br><br>4. Resolvem situações-problema de adição (envolvendo as ideias de juntar e acrescentar) e subtração
			   (envolvendo as ideias de comparar, completar e retirar) com números de até 4 ordens, utilizando diferentes estratégias de solução e descrevendo sua forma de pensar. Na adição, temos, por exemplo, a ideia de juntar:
			    “Beatriz e Filomena colecionam pedras. Beatriz já tem 1 234 pedras e Filomena 2 567 pedras. Se juntarmos a coleção das duas amigas, quantas pedras teremos?” e a ideia de acrescentar: “Dona Joana é doceira. Ela tem 
				347 forminhas de doces, comprou mais 173 em uma promoção. Com quantas forminhas ela ficou?”. Na subtração, temos, por exemplo, a ideia de retirar: “Em um jogo de videogame, Felipe fez 1 250 pontos. Na rodada seguinte,
				 perdeu 142 pontos. Com quantos pontos ele ficou?”, a ideia de comparar: “João tem 145 centímetros de altura. Seu amigo Pedro tem 136 centímetros de altura. Quantos centímetros João é mais alto que Pedro?” e a ideia de
				  completar: “Gustavo ganhou um livro de histórias no aniversário com 540 páginas. Já leu 232 páginas. Quantas páginas ainda faltam para ele ler?”.<br><br>5. Compreendem o conceito de multiplicar e a organização dos
				   fatos fundamentais da multiplicação (tabuadas do 2, 3, 4, 5, e 10). Por exemplo, relacionam as escritas 5 x 4 como a soma sucessiva de parcelas iguais, assim 4 + 4 + 4 + 4 + 4 = 20; em 6 x 4, acrescenta-se uma parcela
				    4, então 6 x 4 = 4 + 4 + 4 + 4 + 4 + 4 = 24.<br><br>6. Resolvem situações-problemas de multiplicação (soma de parcelas iguais e organização retangular), utilizando estratégias diversas. Por exemplo, soma de parcelas
					 iguais: “Mariana participou de um jogo de boliche em que cada pino derrubado correspondia a 5 pontos. Ela derrubou 6 pinos. Quantos pontos ela fez?”; organização retangular: “Numa sala de aula, há 10 fileiras com 6
					  cadeiras em cada. Quantas cadeiras tem essa sala?”`,
				},
				{
					id_contents_school_theme: 20,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "4º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF04MA01,EF04MA02,EF04MA03,EF04MA06,EF04MA07,EF04MA09</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Números naturais: leitura, representação escrita e na reta numérica, comparação e ordenação.<br><br>(2) Composição e decomposição de números de até 5 ordens.<br><br>(3) Resolução de problemas envolvendo adição e subtração e estimativas da ordem de grandeza de resultados.<br><br>(4) Fatos fundamentais da multiplicação e resolução de problemas envolvendo diferentes significados da multiplicação por meio de estratégias diversas.<br><br>(5) Resolução de problemas envolvendo diferentes ideias da divisão por meio de estratégias diversas.<br><br>(6) Frações unitárias: leitura, escrita e representação na reta numérica.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: `"1.\tLeem, representam, comparam e ordenam números naturais de até 5 ordens, em registros numéricos, em língua materna e na reta numérica, 
		pela compreensão de características do sistema de numeração decimal. Por exemplo, representam ou localizam números dessa magnitude na reta numérica disposta com 
		intervalos de 5 em 5, 10 em 10, 100 em 100, 1 000 em 1 000, entre outras.<br><Imagem>Imagem2,mat_numeros_01.png,100,10</Imagem><br><br>2.\tCompõem e decompõem números 
		naturais de até 5 ordens utilizando escritas aditivas e multiplicativas e apropriando-se das características do sistema de numeração decimal. Por exemplo, ao escrever o número 5 153 como 
		sendo 5 000 + 100 + 50 + 3, que, por sua vez, pode ser entendido como 5 x 1 000 + 1 x 100 +5 x 10 + 3 x 1, fica evidente que o estudante compreendeu que, na ordem da unidade do milhar, o 
		valor do algarismo 5 é 5 000 (5 x 1 000), enquanto na ordem das dezenas seu valor é 50 (5 x 10).<br><br>3.\tUtilizam as operações de adição e subtração, na resolução de problemas, por meio 
		de diferentes estratégias (estimativa, cálculo mental, algoritmos convencionais, relação existente entre essas operações e suas propriedades). Os problemas que envolvem adição podem estar
		 associados às ideias de juntar e de acrescentar. Aqueles que envolvem a subtração podem contemplar as ideias: tirar, comparar e completar. Em uma operação do tipo 5 375 + 2 224, eles estimam 
		 que o resultado é maior do que 7 000, pois 5 000 + 2 000 = 7 000.<br><br>4.\tUtilizam a operação de multiplicação entre números naturais na resolução de problemas envolvendo o significado
		  de “adição de parcelas iguais”, de “configuração retangular” e de “proporcionalidade” por meio de diferentes estratégias (estimativa, cálculo mental, algoritmos convencionais, 
			relação existente entre as operações de multiplicação e divisão e suas propriedades). Por exemplo, adição de parcelas iguais: “Luiza comprou um pacote com 26 balas. 
			Se ela comprasse 5 desses pacotes, quantas balas teria comprado?”; organização retangular: “Um teatro possui 15 fileiras com 8 cadeiras cada. Quantas cadeiras há nesse teatro?”; 
			proporcionalidade: “Mariana pagou 30 reais por 4 cadernos. Quanto ela pagaria se comprasse 8 desses cadernos?”. Resolvem problemas envolvendo contextos de dobro, triplo, quádruplo.
			 Ao realizar 122 x 4, podem fazer 100 x 4 + 20 x 4 + 2 x 4 = 400 + 80 + 8 = 488 ou, ainda, efetuar a operação de modo convencional: 4 x 2 unidades igual a 8 unidades mais 4 x 2 dezenas igual
			  a 8 dezenas e 4 x 1 centena é igual a 4 centenas, totalizando 488.<br><br>5.\tCompreendem o conceito de multiplicar e a organização dos fatos fundamentais da multiplicação (tabuadas do 2 ao 10)
			   iniciando o processo de memorização.<br><br>6.\tUtilizam a operação de divisão de um número natural por um divisor natural formado por até duas ordens, na resolução de problemas com o significado
			    de “repartição equitativa” e de “medida”, por meio de diferentes estratégias (estimativa, cálculo mental, algoritmos convencionais, relação existente entre as operações de multiplicação e divisão
					 e suas propriedades). <example>A ideia de repartir em partes iguais está presente na situação: “João tem 300 figurinhas e quer dividir igualmente com os 6 amigos. Quantas figurinhas cada um dos
					  amigos vai receber?”. A ideia de medida está presente em: “120 lápis precisam ser organizados em caixas contendo 4 lápis cada uma. Quantas caixas serão utilizadas para armazenar esses 120 lápis?”.
					   Estimam que 428 : 4 resulta em um número maior do que 100, pois 400 : 4 = 100 ou 4 x 100 = 400.</example><br><br>7.\tLeem e representam as frações unitárias (1/2, 1/3, 1/4, 1/5, 1/10 e 1/100), em registros
					    numéricos e em língua materna, reconhecendo-as como medidas menores que a unidade e usando a reta numérica como apoio. Por exemplo, realizam a representação de frações por meio de desenhos, esquemas,
						 reta numérica, palavras ou símbolos, interpretando e relacionando o sentido das diferentes representações, tanto em situações envolvendo parte-todo: “Mariana resolveu pintar a parede de seu quarto com 
						 cores diferentes: metade de azul, um quarto de branco e um quarto de cinza. Como a parede pode ter ficado depois de pintada?” ou como quociente: “Pedro quer dividir igualmente 2 folhas de papel entre 6
						  amigos. Quanto recebeu cada um?”.`,
				},
				{
					id_contents_school_theme: 25,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "5º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF05MA01,EF05MA08,EF05MA03EF05MA05,EF05MA04,EF05MA02,EF05MA07,EF05MA05</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"(1) Números naturais: leitura, representação escrita e na reta numérica, comparação e ordenação.<br><br>(2) Composição e decomposição de números naturais de até 6 ordens.<br><br>(3) Multiplicação e divisão de números naturais: resolução de problemas e diferentes estratégias de cálculos.<br><br>(4) Frações menores e maiores que um inteiro: representação na reta e resolução de problemas.<br><br>(5) Equivalência de frações: conceito.<br><br>(6) Número decimal: conceito, leitura, escrita, comparação e ordenação com apoio da reta numérica; operação de adição e subtração.",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: `1. Leem, representam, comparam e ordenam números naturais de até 6 ordens, em registros numéricos, 
		em língua materna e na reta numérica (diferentes escalas) com compreensão de características do sistema de numeração decimal. 
		Por exemplo, em situações envolvendo números grandes em contextos variados, relacionados a dados (número de habitantes em um estado, em um país,
		em uma extensão territorial) ou explorando a calculadora como recurso, reconhecem, leem e comparam números usando o valor posicional de um algarismo no 
		sistema de numeração decimal.<br><br>2. Compõem e decompõem números naturais de até 6 ordens utilizando relações aditivas e multiplicativas e apropriando-se das 
		características do sistema de numeração decimal. Por exemplo, ao escrever o número 25 153 como sendo 20 000 + 5 000 + 100 + 50 + 3, que, por sua vez, pode ser entendido como 
		2 x 10 000 + 5 x 1 000 + 1 x 100 +5 x 10 + 3 x 1, fica evidente que o estudante compreendeu que, na ordem da unidade do milhar, o valor do algarismo 5 é 5 000 (5 x 1 000), enquanto na ordem das 
		dezenas seu valor é 50 (5 x 10). <br><br>3. Utilizam a operação de multiplicação de números naturais de um número de até 6 ordens por um número de até 2 algarismos, na resolução de problemas, 
			 por meio de diferentes estratégias (estimativa, cálculo mental, algoritmos convencionais, relação existente entre essas operações e suas propriedades). Utilizam, por exemplo, a propriedade distributiva 
			 da multiplicação em relação à adição para realizar cálculos como 4 321 x 32 = (4 000 + 300 + 20 + 1) x 30 + (4 000 + 300 + 20 + 1) x 2 = 120 000 + 9 000 + 600 + 30 + 8 000 + 600 + 40 + 2 = 138 272.<br><br>4. 
			 Utilizam a operação de divisão de um número natural de até cinco algarismos por outro número natural de até dois algarismos, com ou sem quociente decimal, na resolução de problemas, utilizando diferentes estratégias 
			 de cálculos (estimativa, cálculo mental, algoritmos convencionais, relação existente entre essas operações e suas propriedades). No caso de quociente decimal, compreendem, por exemplo, que, durante uma divisão, 
			 se sobrarem 2 inteiros, estes podem ser representados por 20 décimos, sendo necessário, portanto, indicar que o quociente apresentará parte decimal pela escrita da vírgula. Restando novamente 1 décimo, é possível
			  representá-lo como 10 centésimos e continuar a divisão sem necessidade de explicitar que o quociente apresenta parte decimal.<br><br>5. Representam, comparam e ordenam números racionais, em representação fracionária, 
			  menores ou maiores que um inteiro utilizando a reta numérica como apoio. Por exemplo, comparam as frações ⅓; 3/3 e 4/3 em uma reta numérica, observam que ⅓ é menor do que um inteiro, 3/3 é igual a um inteiro e 4/3 é maior do que um inteiro. Identificam que a fração 5/3, por exemplo, corresponde a 5 partes de 1/3 e que, portanto, é maior do que um inteiro e menor do que 2 inteiros. Em uma reta dada, conseguem indicar o ponto que representa o número 7/4. <example><Imagem>Imagem2,mat_numeros_02.png,100,10</Imagem> </example><br><br>6. Identificam frações equivalentes. Reconhecem, por exemplo, a equivalência entre frações que representam a metade: ½ e 2/4 cujos numeradores e denominadores têm uma relação de metade ou dobro, ou ainda 1/3 e 3/9 cujos numeradores e denominadores têm uma relação de triplo ou terça parte, com ou sem o uso de materiais manipulativos ou visuais como apoio.<br><br>7. Leem, escrevem, representam, comparam e ordenam números racionais expressos na forma decimal, associando-os a pontos da reta numérica. Por exemplo, ao comparar 3,45 e 3,63 em uma reta numerada, compreendem que 3,45 < 3,63, pois está mais próximo do 3.<br><br>8. Utilizam as operações de adição e subtração de números decimais, cuja escrita tenha um número finito de algarismos após a vírgula, na resolução de problemas, utilizando diferentes estratégias de cálculo. Em situações contextualizadas (valores monetários, medidas, cálculo de perímetros) que envolvam adição e subtração de números racionais, representam suas soluções de modo variado, por exemplo, decompondo a parcela menor para obter números inteiros: 12,8 + 0,5 = 12, 8 + 0,2 + 0,3 = 13 + 03, = 13,3 ou decompondo as duas parcelas em partes inteiras e decimais: 12,4 + 1,5 = 12 + 1 + 0,4 + 0,5 = 13 + 0,9 = 13,9 ou realizando o cálculo convencional efetuando as operações de acordo com suas ordens.`,
				},
			],
		},
	};

	res.send(objeto);
});

router.get("/content/contents-school-theme-by-theme/3/2", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			data: [
				{
					id_contents_school_theme: 1,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "1º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF01MA04,EF01MA05,EF01MA07,EF01MA08</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"Quero um amor Maior!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!resentação escrita, comparação de quantidades usando diferentes estratégias.<br><br>(2) Compreensão do sistema de numeração decimal: composição e decomposição de números.<br><br>(3) Adição e subtração, envolvendo estratégias pessoais de resolução de problemas com diferentes ideias e formas de solução relacionadas a essas operações.\t,",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description:
						"UM AMORRRRRRRRRRR MAIOR Q EU         YAYYYYYYYYYYYYYY YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAayyyyyyyyyyyyy1. Identificam números em contextos diversos: como quantidade (por exemplo, no total de pontos de um jogo, na quantidade de lápis disponíveis na mesa), medida (no calendário), ordenação (número de ordem em uma corrida, em uma fila) ou identificação (número da casa, do código de barras).<br><br>2. Quantificam de forma eficiente até 100 objetos, utilizando ou não materiais manipuláveis.<br><br>3. Leem e representam números naturais até 100, em registros numéricos e em língua materna ou em outras representações. <example> Materiais manipulativos, desenho, traços, algarismos ou mesmo no posicionamento em retas numeradas de 1 em 1, de 5 em 5, de 10 em 10. </example><br><br>4. Comparam quantidades utilizando diferentes estratégias. Por exemplo, comparam visualmente, pelo pareamento de elementos ou pela contagem realizada.<br><br>5. Utilizam diferentes formas para compor e decompor os números, apropriando-se das características do sistema de numeração decimal. Por exemplo, usando a ideia de partes iguais (12 = 6 + 6); partes diferentes (13 = 6 + 7); mais de duas parcelas (13 = 6 + 6 + 1); decomposição decimal (18 = 10 + 8) ou usando o sistema monetário brasileiro (18 = 10 + 5 + 2 +1).<br><br>6. Realizam adições e subtrações simples por meio de estratégias pessoais de cálculo (por exemplo, apoiando-se na composição e decomposição de números: 12 + 13 = 10 + 2 + 10 + 3 = 20 + 5 = 25 ou ainda 12 + 13 = 12 + 10 + 3 = 22 + 3 = 25, entre outros). <br><br>7. Mobilizam conhecimentos para resolver problemas de adição e subtração envolvendo diferentes ideias relacionadas a essas operações (juntar, acrescentar, retirar). <example> “Eu ganhei 25 pontos em um jogo e Joana possui 12. Quantos pontos fizemos juntas?” (ideia de juntar); “Eu tenho 32 figurinhas e ganhei 12 do meu avô. Com quantas figurinhas fiquei?” (ideia de acrescentar); “No ônibus, havia 15 pessoas. Na estação, desceram 3 pessoas e não subiu ninguém. Quantas pessoas ficaram no ônibus?” (ideia de retirar).</example>",
				},
				{
					id_contents_school_theme: 9,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "2º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF02MA01,EF02MA04,EF02MA05,EF02MA06</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object: "Aqui eh o famoso CALHAMBEQUE BIBI",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: `QUERO BUNZINAR MEU CALHAMBEQUE TUBIRUBIRU
			e subtrações com diferença até 10 (10 - 1, 10 - 2, 10 - 3 etc.). Esses fatos apoiam cálculos maiores, como 30 - 4 = 26 ou 28 + 2 = 30 ou, ainda, 28 + 12 = 20 + 8 + 10 + 2 = 30 + 10 = 40.<br><br>4. Realizam adições e subtrações simples com número de até 3 ordens por meio de diferentes estratégias de cálculo (estimativa, cálculo mental, algoritmo convencional). Por exemplo, estimam a ordem de grandeza do resultado da operação de adição, sabendo que em 231 + 342, o resultado será mais do que 500, porque 200 + 300 dá 500. Na subtração 545 - 122, estimam que o resultado será próximo de 400, pois 500 - 100 = 400. Apoiam-se na composição e decomposição de números para realizar a operação de adição: 120 + 132 = 100 + 20 + 100 + 30 +2 = 200 + 50 + 2 = 252 ou ainda 120 + 132= 120 + 100 + 30 + 2 = 220 + 30 +2 = 250 +2 = 252. Na subtração, para realizar 348 - 122, fazem: 300 - 100 = 200; 40 - 20 = 20 e 8 - 2 = 6, logo temos 200 + 20 + 6 = 226. Efetuam as operações de adição juntando unidades, dezenas e centenas. Na subtração, subtraem as unidades, as dezenas e as centenas.<br><br>5. Resolvem situações-problema de adição e subtração, envolvendo as ideias de juntar, acrescentar, comparar e retirar, comparando diferentes estratégias de solução e descrevendo a sua forma de pensar. Na adição, temos, por exemplo, a ideia de juntar: “Mariana fez 210 pontos em um jogo e Juliana fez 321. Quantos pontos elas fizeram juntas?” e a ideia de acrescentar: “Fernando tinha 12 reais guardados. Em seu aniversário, ganhou 20 reais do seu tio. Com quantos reais Fernando ficou?”. Na subtração, temos, por exemplo, a ideia de retirar: “Na geladeira de um supermercado, havia 148 garrafas de refrigerante. Foram vendidas 12 garrafas em um dia. Quantas garrafas ficaram na geladeira ao final do dia?” e a ideia de comparar: “João tem 128 centímetros de altura. Seu amigo Pedro tem 116 centímetros de altura. Quantos centímetros João é mais alto que Pedro? ”"`,
				},
				{
					id_contents_school_theme: 14,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "3º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF03MA01,EF03MA02,EF03MA05,EF03MA06,EF03MA07</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object: "Ameno DORIMENTO",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: `LATIRENO DORIMENOS`,
				},
				{
					id_contents_school_theme: 20,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "4º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF04MA01,EF04MA02,EF04MA03,EF04MA06,EF04MA07,EF04MA09</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object: "Quero ser o mairo de todos ",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: `O lendario sonhador no passdo no presente seja onde for`,
				},
				{
					id_contents_school_theme: 25,
					school_theme_type_title: "Unidades Temáticas",
					school_year_title: "5º Ano",
					title_focus_map_skills: "Habilidade do Mapa de Focos",
					focus_map_skills:
						"<Tasks>EF05MA01,EF05MA08,EF05MA03EF05MA05,EF05MA04,EF05MA02,EF05MA07,EF05MA05</Tasks>",
					title_learning_object:
						"Objeto da Aprendizagem por Unidade Temática",
					learning_object:
						"VOCE ME VIRAA A CABECAAAAAAAAAAAAAAAAAAAAAAAAAAA",
					title_learning_description:
						"Descrição da Aprendizagem: o que é esperado que os estudantes aprendam?",
					learning_description: "ME TIRA DO SERIOOOOOOOOOOOOOoo",
				},
			],
		},
	};

	res.send(objeto);
});

router.get("/user-api/verify-guided-tour-viewed", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			guidedTourViewed: false,
		},
	};
	res.send(objeto);
});

router.put("/user-api/set-guided-tour-viewed", function (req, res) {
	const objeto = {
		statusCode: 200,
		body: {
			guidedTourViewed: true,
		},
	};

	res.send(objeto);
});

router.get("/uploads/files/*", function (req, res) {
	//const path = `~/Projetos/quick/express/upload/${req.params[0]}`;
	const p = path.resolve("upload", req.params[0]);

	res.sendFile(p);
	//res.send("ok");
});

module.exports = router;
