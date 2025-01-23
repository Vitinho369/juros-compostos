const calcular = (capitalInicial, taxaJuros, periodos) => {
    const montante = capitalInicial * Math.pow((1 + taxaJuros), periodos);
    return parseFloat(montante.toFixed(2));
}
