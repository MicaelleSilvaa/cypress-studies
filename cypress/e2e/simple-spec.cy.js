import '../support/index';

describe('Site Senac', () => {
  it('The user must be able to see items and click on them', () => {
    const expectedTitle = 'Senac Pernambuco';
    const espacoDoAlunoText = 'Espaço do Aluno';
    const portalAcademicoText = 'Portal Acadêmico';

    const textUsuario = 'input[type=text]';
    const textSenha = 'input[type=password]';
    const botaoEntrar = '.btn.btn-flat';

    cy.visit(Cypress.env('URLBASE'));
    cy.title().should('include', expectedTitle);
    cy.contains('a', espacoDoAlunoText).should('be.visible');
    cy.contains('a', portalAcademicoText).should('be.visible').then(($link) => {
      if ($link.is(':visible')) {
          // Remove o atributo target para abrir na mesma aba
        cy.wrap($link).invoke('removeAttr', 'target').click();
      }
    });

    cy.get(textUsuario).click();
    cy.get(textUsuario).type(Cypress.env('USUARIO'));
    cy.get(textSenha).click();
    cy.get(textSenha).type(Cypress.env('SENHA'));
    cy.get(botaoEntrar).click();

    cy.get('.navbar-nav > li > a').contains('Micaelle').should('be.visible');
  })
});
