const readline = require("readline");

class JurosCompostos {
    constructor(capitalInicial, taxaJuros, periodos) {
        this.capitalInicial = capitalInicial;
        this.taxaJuros = taxaJuros / 100;
        this.periodos = periodos;
    }

    calcular() {
        const montante = this.capitalInicial * Math.pow((1 + this.taxaJuros), this.periodos);
        return parseFloat(montante.toFixed(2));
    }

    gerarRelatorio() {
        const montante = this.calcular();
        return (
            `Capital Inicial: R$ ${this.capitalInicial}\n` +
            `Taxa de Juros: ${(this.taxaJuros * 100).toFixed(2)}%\n` +
            `Períodos: ${this.periodos}\n` +
            `Montante Acumulado: R$ ${montante}`
        );
    }
}

const main = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Bem-vindo ao sistema de cálculo de Juros Compostos!\n");

    rl.question("Digite o capital inicial (R$): ", (capitalInicial) => {
        rl.question("Digite a taxa de juros (%): ", (taxaJuros) => {
            rl.question("Digite o número de períodos: ", (periodos) => {
                try {
                    const calculo = new JurosCompostos(
                        parseFloat(capitalInicial),
                        parseFloat(taxaJuros),
                        parseInt(periodos)
                    );

                    console.log("\nRelatório de Cálculo:");
                    console.log(calculo.gerarRelatorio());

                    rl.question("\nDeseja salvar o relatório em um arquivo? (s/n): ", (salvar) => {
                        if (salvar.toLowerCase() === "s") {
                            const fs = require("fs");
                            const nomeArquivo = "relatorio_juros_compostos.txt";
                            fs.writeFileSync(nomeArquivo, calculo.gerarRelatorio());
                            console.log(`Relatório salvo com sucesso em: ${nomeArquivo}`);
                        }
                        rl.close();
                    });
                } catch (error) {
                    console.error("Erro: Certifique-se de inserir valores válidos.");
                    rl.close();
                }
            });
        });
    });
}

main();
