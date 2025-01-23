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

