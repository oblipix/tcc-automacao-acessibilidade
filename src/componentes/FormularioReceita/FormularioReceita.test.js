// src/componentes/FormularioReceita/FormularioReceita.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Importe userEvent
import FormularioReceita from './FormularioReceita.jsx';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('FormularioReceita', () => {
  it('deve renderizar o formulário sem violações de acessibilidade (com rótulos)', async () => {
    const { container } = render(<FormularioReceita />);

    // Primeiro, verifique as violações de acessibilidade como antes
    const results = await axe(container);
    expect(results).toHaveNoViolations();

    // Verifica se os rótulos estão presentes e visíveis
    expect(screen.getByLabelText('Nome da sua Receita:')).toBeInTheDocument();
    expect(screen.getByLabelText('Ingredientes e Modo de Preparo:')).toBeInTheDocument();
    expect(screen.getByLabelText('Seu e-mail para contato:')).toBeInTheDocument();

    const enviarReceitaButton = screen.getByRole('button', { name: /enviar receita/i });
    expect(enviarReceitaButton).toBeInTheDocument();

    // ----- ADIÇÃO/MODIFICAÇÃO PARA TESTAR O FOCO DE FORMA MAIS ROBUSTA -----
    // Cria uma instância do user-event
    const user = userEvent.setup();

    // Simula o foco em um elemento clicável (ou navegável por tab)
    // No JSDOM, para garantir que um elemento recebe foco corretamente,
    // é comum focar um elemento que possa ser "focado".
    // Podemos focar o primeiro input e depois simular a tecla Tab
    // ou focar diretamente o botão.
    // Vamos focar diretamente o botão para este teste específico.

    await user.tab(); // Simula uma tecla TAB para mover o foco para o primeiro elemento focável
    // Ou, para focar diretamente o botão:
    // await user.click(enviarReceitaButton); // Clicar também coloca o foco

    // Para focar um elemento específico e ter certeza, use o focus() diretamente no elemento DOM
    enviarReceitaButton.focus();

    // Verifica se o botão tem foco
    expect(enviarReceitaButton).toHaveFocus();
    // --------------------------------------------------------------------
  });
});