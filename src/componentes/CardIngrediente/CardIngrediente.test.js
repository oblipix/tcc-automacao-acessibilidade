
import React from 'react';
import { render, screen } from '@testing-library/react';
import CardIngrediente from './index';
import { IngredientesContext } from '../IngredientesContext';
import { axe, toHaveNoViolations } from 'jest-axe';


expect.extend(toHaveNoViolations);

describe('CardIngrediente', () => {
  const mockContextValue = {
    alternarIngrediente: jest.fn(),
    ingredienteEstaSelecionado: jest.fn(() => false),
  };

  const mockCategoria = {
    id: 1,
    nome: 'Legumes',
    icone: 'caminho/para/icone-legumes.png',
    ingredientes: [
      { id: 101, nome: 'Cenoura' },
      { id: 102, nome: 'Batata' },
    ],
  };

  it('deve renderizar o CardIngrediente sem violações de acessibilidade (com alt text)', async () => {
    // Renderiza o componente UMA ÚNICA VEZ
    const { container } = render(
      <IngredientesContext.Provider value={mockContextValue}>
        <CardIngrediente categoria={mockCategoria} />
      </IngredientesContext.Provider>
    );

    // Verifica se o HTML renderizado não possui violações de acessibilidade
    const results = await axe(container);
    expect(results).toHaveNoViolations();

    expect(screen.getByText('Legumes')).toBeInTheDocument();
    expect(screen.getByText('Cenoura')).toBeInTheDocument();
    expect(screen.getByText('Batata')).toBeInTheDocument();
  });

 

   it('deve ter contraste de cor adequado para o título do card', async () => {
    const { container } = render(
      <IngredientesContext.Provider value={mockContextValue}>
        <CardIngrediente categoria={mockCategoria} />
      </IngredientesContext.Provider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});