describe('Página principal do site', () => {
    it('Deve carregar a página e exibir o título correto', () => {
        // Visita a página principal (substitua pela URL que deseja testar)
        cy.visit('https://www.pe.senac.br/');
        cy.pause();

        // Verifica se o título contém o texto esperado
        cy.title().should('include', 'Texto do Título Esperado');

        // Verifica se um botão com o texto "Entrar" está visível
        cy.contains('button', 'Entrar').should('be.visible');

        // Opcional: Verifica se um campo de busca está presente
        cy.get('input[name="search"]').should('be.visible');
    });
});
