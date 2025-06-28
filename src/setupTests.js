
import '@testing-library/jest-dom';
import { configureAxe, toHaveNoViolations } from 'jest-axe';

// Estende o Jest com matchers de acessibilidade do jest-axe
expect.extend(toHaveNoViolations);

// Configurações básicas do axe-core para os testes

const axe = configureAxe({
  rules: {

  },
});

global.axe = axe;

