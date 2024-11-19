describe('Página principal do site do Senac', () => {
  it('Deve carregar a página e exibir o título correto', () => {
      // Visita a página principal do Senac PE
      cy.visit('https://www.pe.senac.br/');
      
      // Verifica se o título da página contém "Senac Pernambuco" (ou o texto esperado)
      cy.title().should('include', 'Senac Pernambuco');
      
      // Verifica se o botão "Acesso" ou outro botão de login está visível (substitua pelo texto correto)
      cy.contains('a', 'Espaço do aluno').should('be.visible');
      
      // Verifica se o campo de busca está visível
      cy.get('input[type="search"]').should('be.visible');
  });
});
