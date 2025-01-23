
## Exemplo de Cálculo de Juros Compostos

### Entrada
- **Capital Inicial:** 1500
- **Taxa de Juros:** 3% ao mês
- **Número de Períodos:** 12 meses

### Saída
- **Montante Final:** 2138.64

### Fórmula Utilizada
O cálculo dos juros compostos segue a fórmula:

\[
M = P * (1 + i)^n
\]

Onde:
- \( M \): Montante final.
- \( P \): Capital inicial.
- \( i \): Taxa de juros (em decimal).
- \( n \): Número de períodos.

---

## Como Executar o Projeto

### Pré-requisitos
1. **Node.js instalado**:  
   O projeto utiliza Node.js como ambiente de execução. Faça o download e instale-o [aqui](https://nodejs.org/pt/download) caso ainda não tenha.
   
2. **Git instalado**:  
   Certifique-se de ter o Git configurado na sua máquina. Caso não tenha, instale-o [aqui](https://git-scm.com/).

---

### Passo a Passo para Execução

1. **Clone o repositório**:
   No terminal, execute o seguinte comando para clonar o repositório do GitHub:
   ```bash
   git clone https://github.com/Vitinho369/juros-compostos.git
   ```

2. **Acesse o diretório do projeto**:
   No terminal, execute o seguinte comando para mudar para o diretório do repositório:
   ```bash
   cd juros-compostos
   ```

3. **Instale o Jest**:
   No terminal, execute o seguinte comando para baixar as dependências do jest:
   ```bash
   npm install jest
   ```

4. **Configure o arquivo package.json**:
   Modifique o arquivo package.json para possibilitar a execução do Jest:
   ```bash
    "scripts": {
    "test": "jest"
   }
   ```

5. **Execute o projeto**:
  No terminal, execute o seguinte comando para executar o sistema:
   ```bash
   node src/calculo.js
   ```
5. **Execute os testes do projeto**:
  No terminal, execute o seguinte comando para executar os testes unitários do sistema:
   ```bash
    npm test
   ```
