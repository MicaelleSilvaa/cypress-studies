import '../../cypress.json';

describe('Site Senac', () => {
  it.skip('The user must be able to see items and click on them', () => {
    const urlEspacoAluno = 'https://faculdadesenacpe.edu.br/espaco-do-aluno';
    const expectedTitle = 'Senac Pernambuco';
    const espacoDoAlunoText = 'Espaço do Aluno';
    const portalAcademicoText = 'Portal Acadêmico';

    cy.visit(urlEspacoAluno);
    cy.title().should('include', expectedTitle);
    cy.contains('a', espacoDoAlunoText).should('be.visible');
    cy.contains('a', portalAcademicoText).should('be.visible').then(($link) => {
      if ($link.is(':visible')) {
        cy.wrap($link).click();
      }
    });
  });

  it('The user can log in', () => {
    const urlAcessoAluno = 'https://portal.faculdadesenacpe.edu.br/senac/';
    const textUsuario = 'input[type=text]';
    const textSenha = 'input[type=password]';
    const botaoEntrar = '.btn.btn-flat';

    cy.visit(urlAcessoAluno);
    cy.get(textUsuario).click();
    cy.get(textUsuario).type(Cypress.env('USUARIO'));
    cy.get(textSenha).click();
    cy.get(textSenha).type(Cypress.env('SENHA'));
    cy.get(botaoEntrar).click();
    cy.get('.navbar-nav > li > a').contains('Micaelle').should('be.visible');
  })
});
