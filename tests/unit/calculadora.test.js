const calculadora = require("../../models/calculadora");

test("calculadora somar should return 2 + 5 = 7", () => {
  const resultado = calculadora.somar(2, 5);
  expect(resultado).toBe(7);
});

test("calculadora somar should return 100 + 5 = 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("calculadora somar 'banana' to 100 should return 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
