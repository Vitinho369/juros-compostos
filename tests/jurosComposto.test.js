const JurosCompostos = require('../src/calculo.js'); // Importe a classe do arquivo principal

test('calcula juros compostos com valores positivos', () => {
    const calculo = new JurosCompostos(1000, 5, 12);
    expect(calculo.calcular()).toBe(1795.86);
});