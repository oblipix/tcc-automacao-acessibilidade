
import React from 'react';
import { render, screen } from '@testing-library/react';
import Cabecalho from './index'; 
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Cabecalho', () => {
  it('deve renderizar o Cabecalho sem violações de acessibilidade, incluindo a hierarquia de cabeçalhos e alt text', async () => {
    const { container } = render(<Cabecalho />);

    // Verificações de acessibilidade com axe-core
    // O axe-core irá verificar a regra 'heading-order' automaticamente.
    // Também verificará 'image-alt'. Se o banner for puramente decorativo, alt="" passará.
    const results = await axe(container);
    expect(results).toHaveNoViolations();

    // Verificações adicionais usando React Testing Library para garantir a presença e semântica
    // Verifica o h1
    expect(screen.getByRole('heading', { level: 1, name: /Um banquete de ideias para despertar o chef que há em você!/i })).toBeInTheDocument();
    
    // Verifica o h2
    expect(screen.getByRole('heading', { level: 2, name: /Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!/i })).toBeInTheDocument();

    // Verifica a imagem (seja decorativa ou informativa)
    // Se for decorativa, alt="" está ok. Se for informativa, axe pode alertar.
   
    expect(screen.getByAltText('')).toBeInTheDocument(); // Busca por uma imagem com alt text vazio
   
    
  });
});