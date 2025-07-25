const { switchLetters } = require('../script.js');

describe('switchLetters', () => {
  test('switches single lowercase followed by uppercase', () => {
    expect(switchLetters('aA!')).toBe('Aa!');
  });

  test('switches mixed string', () => {
    expect(switchLetters('Hello WORLD')).toBe('hELLO world');
  });
});
