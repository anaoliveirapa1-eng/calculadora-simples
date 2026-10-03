# Calculadora Web

Este projeto consiste no desenvolvimento de uma calculadora web funcional utilizando HTML, CSS e JavaScript puro. A aplicação permite realizar operações matemáticas básicas através de uma interface gráfica inspirada em calculadoras físicas, com teclado virtual e visor digital utilizando uma fonte segmentada personalizada.

Abaixo seguem os principais recursos utilizados:

---

## HTML (Estrutura e Semântica)

### Estrutura Básica

* Utilização da estrutura padrão de documentos HTML5:
  * `<!DOCTYPE html>`
  * `<html>`
  * `<head>`
  * `<body>`

### Metadados

* Definição da codificação UTF-8.
* Configuração da viewport para adaptação em dispositivos móveis.

### Arquivos Externos

* Inclusão de folha de estilos externa (`style.css`).
* Inclusão de script JavaScript externo (`calc.js`) utilizando o atributo `defer`.
* Inclusão de fonte externa via Adobe Fonts.

### Estrutura da Interface

* Utilização da tag `<main>` para centralizar a aplicação.
* Utilização da tag `<form>` como container principal da calculadora.
* Campo de entrada (`<input>`) funcionando como visor digital.
* Botões para:
  * Números de 0 a 9
  * Operações matemáticas
  * Limpeza total (AC)
  * Remoção do último caractere (CE)
  * Resultado da operação (=)

### Atributos HTML Utilizados

* `autofocus`
* `autocomplete`
* `onclick`
* `type`
* `value`
* `id`
* `name`
* `class`

---

## CSS (Estilização e Layout)

### Reset Global

* Remoção de margens e espaçamentos padrão utilizando:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Fonte Personalizada

* Implementação de fonte digital segmentada utilizando:

```css
@font-face
```

* Carregamento da fonte local:

```text
fonts/
└── sevenseg.woff2
```

### Layout da Aplicação

* Centralização vertical e horizontal utilizando Flexbox.
* Fundo com gradiente linear.
* Estrutura da calculadora estilizada como dispositivo físico.

### CSS Grid Layout

A disposição dos botões foi criada utilizando Grid Layout:

```css
grid-template-columns: repeat(4, 4rem);
grid-template-rows: repeat(6, 4rem);
```

### Botões Personalizados

* Efeito de profundidade utilizando `box-shadow`.
* Feedback visual ao clicar através de:

```css
:active
```

### Classes Especiais

#### Botão AC

```css
.ac
```

* Ocupa duas colunas.
* Destaque visual na cor vermelha.

#### Botão Igual

```css
.equal
```

* Ocupa duas colunas.
* Destaque visual na cor verde.

### Visor da Calculadora

* Fonte segmentada personalizada.
* Alinhamento à direita.
* Aparência semelhante a displays LCD.

### Recursos Modernos Utilizados

* CSS Nesting (aninhamento).
* Flexbox.
* CSS Grid.
* Gradientes.
* Pseudo-classes.
* Customização de fontes.

---

## JavaScript (Lógica e Funcionalidades)

### Manipulação do DOM

Seleção do visor da calculadora utilizando:

```javascript
document.getElementById()
```

### Inserção de Valores

Função responsável por adicionar caracteres ao visor:

```javascript
display()
```

Permite inserir:

* Números
* Operadores matemáticos
* Separador decimal

### Limpeza Parcial

Função:

```javascript
ce()
```

Remove apenas o último caractere digitado.

Exemplo:

```text
123+
↓
123
```

### Limpeza Total

Função:

```javascript
ac()
```

Apaga completamente o conteúdo do visor.

Exemplo:

```text
123+45
↓
(vazio)
```

### Cálculo da Expressão

Função:

```javascript
theResult()
```

Responsável por:

* Capturar a expressão digitada.
* Processar a operação matemática.
* Exibir o resultado no visor.

### Avaliação da Expressão

Utilização da função JavaScript:

```javascript
eval()
```

Exemplo:

```javascript
eval("10+20*3")
```

Resultado:

```text
70
```

### Controle de Foco

Função:

```javascript
focus()
```

Reposiciona automaticamente o cursor no visor após cada ação.

---

## Estrutura do Projeto

```text
/
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── calc.js
│
└── fonts/
    └── sevenseg.woff2
```

---

## Funcionalidades Implementadas

✅ Interface gráfica completa

✅ Teclado virtual

✅ Operações matemáticas básicas

✅ Adição dinâmica de caracteres

✅ Limpeza parcial (CE)

✅ Limpeza total (AC)

✅ Exibição do resultado

✅ Fonte digital personalizada

✅ Layout responsivo

✅ Feedback visual nos botões

✅ Controle automático de foco

---

## Operações Suportadas

### Soma

```text
10 + 20
```

### Subtração

```text
50 - 15
```

### Multiplicação

```text
8 * 7
```

### Divisão

```text
100 / 4
```

### Operações Combinadas

```text
10 + 5 * 2
```

---

## Conceitos Trabalhados

### HTML

* Estrutura semântica
* Formulários
* Inputs
* Botões
* Eventos inline

### CSS

* Reset CSS
* Flexbox
* CSS Grid
* Gradientes
* Pseudo-classes
* Fontes personalizadas
* CSS Nesting
* Responsividade

### JavaScript

* Manipulação do DOM
* Eventos
* Funções
* Strings
* Controle de foco
* Avaliação de expressões
* Operadores matemáticos
* Interação com formulários

---

## Observações

Este projeto possui finalidade educacional e foi desenvolvido para demonstrar conceitos fundamentais de desenvolvimento Front-End utilizando apenas tecnologias nativas do navegador.

A implementação utiliza a função `eval()` para processar expressões matemáticas. Embora seja adequada para fins didáticos, em aplicações profissionais recomenda-se a utilização de interpretadores matemáticos próprios ou bibliotecas especializadas para maior segurança e controle.
